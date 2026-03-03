<script lang="ts">
  import { AudioLinesIcon, LoaderCircleIcon, MicIcon } from "@lucide/svelte";
  import PopUpBase from "../components/popup/PopUpBase.svelte";
  import { onMount } from "svelte";
  import { sendRecorderData } from "../api/record.api";
  import { push } from 'svelte-spa-router';

  let isRecording: boolean = $state(false);
  let micPermission: PermissionState = $state("granted");
  let canRecording: boolean = $derived(micPermission === "granted");
  let mediaRecorder:MediaRecorder | null = $state(null);
  let audioChunks: BlobPart[] = [];
  let audioBlob: Blob | null = $state(null);
  let recorded: boolean = $state(false);

  const requestMicPermission = async (): Promise<void> => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      stream.getTracks().forEach(track => track.stop());
      micPermission = "granted";
    } catch (error) {
      console.error("Permission ditolak", error);
    }
  };

  const getMicPermission = async (): Promise<PermissionState>=> {
    const result = await navigator.permissions.query({
      name: "microphone" as PermissionName
    });

    return result.state
  };

  const startRecording = async (): Promise<void> => {
    const stream: MediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });

    mediaRecorder = new MediaRecorder(stream);

    mediaRecorder.ondataavailable = (event: BlobEvent) => {
      if (event.data.size > 0) {
        audioChunks.push(event.data);
      }
    };

    mediaRecorder.onstop = () => {
      audioBlob = new Blob(audioChunks, { type: "audio/webm" });
      audioChunks = [];

      stream.getTracks().forEach((track: MediaStreamTrack) => track.stop());
      sendRecorderHandle();
    };

    mediaRecorder.start();
    isRecording = true;
  };

  const stopRecording = () => {
    if (mediaRecorder && isRecording) {
      mediaRecorder.stop();
      isRecording = false;
    }
  };

  const recordingToggle = async () => {
    if (isRecording) {
      recorded = true;
      stopRecording();
    } else {
      await startRecording();
    }
  };

  const sendRecorderHandle = async () => {
    if (!audioBlob) return;

    try {
      const noteId: string = await sendRecorderData(audioBlob);
      push(`/record-check/${noteId}`);
    } catch (err) {
      console.error("Gagal mengirim rekaman", err);
    }
  };
  
  onMount(async () => {
    micPermission = await getMicPermission();
  });
</script>

<div 
  class="relative flex justify-center items-center flex-col max-w-xl 
  bg-three h-screen w-[100%] mx-auto"
>
  {#if !recorded}
  <h4 class="absolute -translate-y-48 text-two text-3xl font-bold text-center">
    {isRecording ? 'Sedang merekam...' : 'Merekam Batuk'}
  </h4>

  <div class="rounded-full p-10 bg-one">
    <button
      class={`rounded-full p-6 
        ${canRecording ? "bg-two" : "bg-four"}`
      }
      disabled={!canRecording || recorded}
      onclick={recordingToggle}
    >
      {#if isRecording}
      <AudioLinesIcon class="text-white w-28 h-28" />
      {:else}
      <MicIcon class="text-white w-28 h-28" />
      {/if}
    </button>
  </div>

  <p class="absolute translate-y-48 text-xl font-bold italic">
    {isRecording ? 
      'Tekan ulang untuk mengakhiri' : 'Tekan tombol untuk merekam'}
  </p>
  {:else}
  <h6 class="absolute -translate-y-32 italic font-bold text-xl">
    Menganalisis Batuk Anda...
  </h6>

  <div>
    <LoaderCircleIcon class="w-42 h-42 animate-spin text-gray-400" />
  </div>

  <p class="text-xs text-center w-xs px-4 absolute translate-y-32">
    Harap tunggu sejenak. Sistem AI kami sedang memproses pola dan 
    frekuensi batuk Anda.
  </p>
  {/if}
  
</div>

<PopUpBase popUp={{
  closable: false,
  size: 'sm',
  visible: !canRecording,
  alignCenter: true,
}}>
  <div class="text-center">
    <h3 class="pb-4 text-2xl">
      Aktifkan microphone
    </h3>

    <button
      class="rounded-lg bg-two py-1 px-2 text-white text-xl"
      onclick={requestMicPermission}
    >
      Aktifkan
    </button>
  </div>
</PopUpBase>