<script lang="ts">
  import { AudioLines, LoaderCircle, Mic } from "@lucide/svelte";
  import { push } from 'svelte-spa-router';

  let isRecord = $state(false);
  let afterRecord = $state(false);

  const onRecord = (record: boolean) => {
    isRecord = record;
  }

  const handlePointerUp = () => {
    onRecord(false);
    afterRecord = true;

    setTimeout(() => {
      push("/record-check/coba");
    }, 6000);
  }

  const handlePointerDown = () => {
    onRecord(true);
  }
</script>

<div 
  class="relative flex justify-center items-center flex-col max-w-xl bg-three h-screen w-[100%] mx-auto"
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
      class="rounded-full p-6 bg-two"
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
    Tahan untuk merekam
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
    Harap tunggu sejenak. Sistem AI kami sedang memproses pola dan frekuensi batuk Anda.
  </p>
  <p></p>
  {/if}
</div>
