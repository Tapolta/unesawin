<script lang="ts">
  import { Info, X } from "@lucide/svelte";
  import { push } from "svelte-spa-router";

  let isDetailOpen = $state(false);
  let data = $state([
    '/unesawin/img/rontgen_example.jpeg',
    '/unesawin/img/rontgen_example2.jpeg'
  ]);

  const detailToggled = () => {
    isDetailOpen = !isDetailOpen;
  }

  const selectHandle = () => {
    push('/rontgen-check/12');
  }

</script>

<div class="flex flex-col items-center gap-2">
  <div class="flex overflow-x-auto rounded-xl">
    {#each data as img}
    <img 
      src={img}
      alt={img}
    />
    {/each}
  </div>

  <div class="flex items-center justify-center gap-4 w-full px-4">
    <button
      onclick={selectHandle}
      class="bg-two font-bold flex-1 py-1 rounded-lg text-white"
    >
      Selengkapnya
    </button>

    <button
      onclick={detailToggled}
      class="rounded-full bg-two text-white"
    >
      {#if isDetailOpen}
      <X class="w-8 h-8"/>
      {:else}
      <Info class="w-8 h-8" />
      {/if}
    </button>
  </div>

  {#if isDetailOpen}
  <div class="text-left w-full px-4">
    <p class="text-xs font-bold">
      Tanggal : 
      <span class="font-normal">
        17/11/25
      </span>
    </p>
    <p class="text-xs font-bold">
      ID Dokumen :  
      <span class="font-normal">
        AA16543
      </span>
    </p>
    <p class="text-xs font-bold">
      ID Pengirim :  
      <span class="font-normal">
        Gustavolta Khizqi Ismail
      </span>
    </p>
    <p class="text-xs font-bold">
      Instansi : 
      <span class="font-normal">
        RS. Unesa Ketintang
      </span>
    </p>
  </div>
  {/if}
</div>
