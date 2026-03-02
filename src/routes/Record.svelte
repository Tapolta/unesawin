<script lang="ts">
  import { AudioLines, LoaderCircle, Mic } from "@lucide/svelte";
  import { onMount } from "svelte";
  import { push } from 'svelte-spa-router';

  let isRecord: boolean = $state(false);
  let afterRecord: boolean = $state(false);
  let mediaRecorder:MediaRecorder | null = $state(null);
  let audioChunks: BlobPart[] = [];
  let audioBlob: Blob | null = $state(null);
  let micPermission: PermissionState | null = $state(null);
  let micNotif: string = $state("");

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

      console.log("Rekaman selesai:", audioBlob);
    };

    mediaRecorder.start();
    isRecord = true;
  };

  const stopRecording = () => {
    if (mediaRecorder && isRecord) {
      mediaRecorder.stop();
      isRecord = false;
    }
  };

  const requestMicPermission = async (): Promise<void> => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      stream.getTracks().forEach(track => track.stop());
      console.log("Permission granted");
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

  const getMicStatus = () => {
    switch (micPermission) {
      case "granted":
        return "Tahan untuk merekam";
      case "prompt":
        return "Izinkan untuk menggunakan mic";
      case "denied":
      default:
        return "Mic tidak diizinkan";
    }
  };

  const handlePointerUp = () => {
    if (micPermission === "granted") {
      stopRecording();
      afterRecord = true;

      // setTimeout(() => {
      //   push("/record-check/VN-20251120-002");
      // }, 6000);
    }
  };

  const sendVoiceToModel = async () => {
    
  };

  const handlePointerDown = () => {
    if (micPermission === "granted") {
      startRecording();
    }
  };

  onMount(async () => {
    requestMicPermission();
    micPermission = await getMicPermission();
    micNotif = getMicStatus();
  });
</script>

<div 
  class="relative flex justify-center items-center flex-col max-w-xl 
  bg-three h-screen w-[100%] mx-auto"
>
{#if !afterRecord}
  <h4 class="absolute -translate-y-48 text-two text-3xl font-bold">
    Cobalah Batuk
  </h4>
  
  <div class="rounded-full p-10 bg-one">
    <button
      onpointerdown={handlePointerDown}
      onpointerup={handlePointerUp}
      onpointerleave={handlePointerUp}
      onpointercancel={handlePointerUp}
      class={`rounded-full p-6 
        ${micPermission !== "granted" ? "bg-four" : "bg-two"}`
      }
    >
      {#if isRecord}
      <AudioLines class="text-white w-28 h-28" />
      {:else}
      <Mic class="text-white w-28 h-28" />
      {/if}
    </button>
  </div>

  <p class="absolute translate-y-48 text-xl font-bold italic">
  {#if isRecord} 
    Mendengarkan...
  {:else}
    {micNotif}
  {/if}
  </p>
{:else}
  <h6 class="absolute -translate-y-32 italic font-bold text-xl">
    Menganalisis Batuk Anda...
  </h6>

  <div>
    <LoaderCircle class="w-42 h-42 animate-spin text-gray-400" />
  </div>

  <p class="text-xs text-center w-xs px-4 absolute translate-y-32">
    Harap tunggu sejenak. Sistem AI kami sedang memproses pola dan 
    frekuensi batuk Anda.
  </p>
  {/if}
</div>