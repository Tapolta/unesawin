<script lang="ts">
  import { Pause, Play } from "@lucide/svelte";
  import type { RecorderStruct } from "../../structures/recorder.struct";

  let { recorder } = $props<{
    recorder: RecorderStruct
  }>();
  let isPlay = $state(false);
</script>

<div class="border border-b-0 border-two rounded-3xl mx-[1px]">
  <div class="pl-6 py-1">
    <h5 class="text-two font-bold text-lg">
      {#if recorder.isPotential}
      Berpotensi
      {:else}
      Tidak Berpotensi
      {/if}
    </h5>
  </div>

  <div class="bg-two rounded-lg text-one -mx-[1px] px-3">
    <div class="flex items-center gap-3 translate-y-1">
      <button>
        {#if isPlay}
        <Pause class="w-9 h-9" />
        {:else}
        <Play class="w-9 h-9" /> 
        {/if}
      </button>

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