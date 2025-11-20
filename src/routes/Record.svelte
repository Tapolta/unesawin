<script lang="ts">
  import { AudioLines, Mic } from "@lucide/svelte";

  let isRecord = $state(false);

  const onRecord = (record: boolean) => {
    isRecord = record;
  }

  const handlePointerUp = () => {
    onRecord(false);
  }

  const handlePointerDown = () => {
    onRecord(true);
  }
</script>

<div 
  class="relative flex justify-center items-center flex-col max-w-xl bg-three min-h-screen w-[100%] mx-auto"
>
  <h4 class="absolute -translate-y-48 text-two text-3xl font-bold">
    {#if isRecord}
    Sedang direkam
    {:else}
    Cobalah Batuk
    {/if}
  </h4>
  
  <div class="rounded-full p-10 bg-one">
    <button
      onpointerdown={handlePointerDown}
      onpointerup={handlePointerUp}
      onpointercancel={handlePointerUp}
      class="rounded-full p-6 bg-two"
    >
      {#if isRecord}
        <AudioLines class="text-white w-28 h-28" />
      {:else}
        <Mic class="text-white w-28 h-28" />
      {/if}
    </button>
  </div>
</div>