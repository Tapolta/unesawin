<script lang="ts">
  import { RefreshCcw } from "@lucide/svelte";
  import SuggestionBtn from "./SuggestionBtn.svelte";
  import { onMount } from "svelte";

  let { onSuggestion } = $props<{
    onSuggestion?: (value: string) => void,
  }>();
  let container: HTMLDivElement;

  let suggestions = $state([
    "Gejala penyakit Tuberkolosis",
    "Dampak & Resiko",
    "Solusi pencegahan",
    "Pentingnya deteksi dini",
    "Cara penularan TBC",
    "Mitos dan fakta tentang Tuberkulosis",
    "Pengobatan efektif",
    "Peran vaksinasi",
    "Statistik global TBC",
    "Nutrisi untuk penderita TBC",
  ]);

  const refreshSuggestions = () => {
    suggestions = suggestions.sort(() => Math.random() - 0.5);
    if (container) container.scrollLeft = 0;
  };

  const half = $derived(Math.ceil(suggestions.length / 2));
  const topSuggestions = $derived(suggestions.slice(0, half));
  const bottomSuggestions = $derived(suggestions.slice(half));

  onMount(() => {
    refreshSuggestions();
  });
</script>

<div 
  bind:this={container}
  class="flex items-stretch overflow-x-auto"
>
  <div class="whitespace-nowrap flex flex-col gap-2">
    <div class="flex items-center justify-between gap-2">
      {#each topSuggestions as item}
        <SuggestionBtn title={item} onClick={onSuggestion} />
      {/each}
    </div>

    <div class="flex items-center justify-between gap-2">
      {#each bottomSuggestions as item}
        <SuggestionBtn title={item} onClick={onSuggestion} />
      {/each}
    </div>
  </div>

  <button
    onclick={refreshSuggestions}
    class="text-white px-2 bg-two flex items-center justify-center"
  >
    <RefreshCcw />
  </button>
</div>

