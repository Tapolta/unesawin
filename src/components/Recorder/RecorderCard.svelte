<script lang="ts">
  import { Info, Pause, Play, Trash } from "@lucide/svelte";
  import type { RecorderStruct } from "../../structures/recorder.struct";
  import { push } from "svelte-spa-router";

  let { recorder} = $props<{
    recorder: RecorderStruct,
  }>();
  let isPlay = $state(false);
  let audioEl: HTMLAudioElement | undefined = $state();

  const openHistoryInfo = () => {
    push(`/record-check/${recorder.id}`);
  };

  const togglePlayAudio = () => {
    if (isPlay) {
      audioEl?.pause();
    } else {
      audioEl?.play();
    }

    isPlay = !isPlay;
  };
  
  const handleEnded = () => {
    isPlay = false;
  };
</script>

<div class="border border-b-0 border-two rounded-3xl mx-[1px]">
  <div class="px-6 py-1 flex justify-between items-center">
    <h5 class="text-two font-bold text-lg">
      {#if recorder.model.status}
      Berpotensi
      {:else}
      Tidak Berpotensi
      {/if}
    </h5>

    <button 
      onclick={openHistoryInfo}
      class="bg-two text-white rounded-full"
    >
      <Info class="w-6 h-6" />
    </button>
  </div>

  <div class="bg-two rounded-lg text-one -mx-[1px] px-3">
    <div class="flex items-center gap-3 translate-y-1">
      <button
        onclick={togglePlayAudio}
      >
        {#if isPlay}
        <Pause class="w-9 h-9" />
        {:else}
        <Play class="w-9 h-9" /> 
        {/if}
      </button>

      <audio
        bind:this={audioEl}
        src={recorder.audio_path}
        onended={handleEnded}
      ></audio>

      <div class="py-1 bg-one w-full"></div>
    </div>

    <div class="flex w-full justify-between pl-12">
      <p class="text-[0.6rem]">
        00.00
      </p>
      <p class="text-[0.6rem]">
        {recorder.duration}
      </p>
    </div>
  </div>
</div>