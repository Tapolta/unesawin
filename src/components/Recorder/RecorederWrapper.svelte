<script lang="ts">
  import type { RecorderStruct } from "../../structures/recorder.struct";
  import RecorderCard from "./RecorderCard.svelte";

  let {date, recorders} = $props<{
    date: string,
    recorders: RecorderStruct[]
  }>();

  let isSelectedAll = $state(false);
</script>

<div>
  <div class="flex items-center mb-2 w-full">
    <div class="flex-grow border-t-3 border-gray-300"></div>
      <span class="px-4 text-gray-500">
          {date}
      </span>
      <div class="flex-grow border-t-3 border-gray-300"></div>
  </div>

  <div class="flex justify-end items-center gap-2 mb-4">
    <input 
      bind:checked={(isSelectedAll)}
      type="checkbox"
      id={date}
      class="w-4 h-4"
    />
    <p class="text-sm text-gray-500">
      Pilih Rekaman
    </p>
  </div>

  <ul class="flex flex-col gap-4">
    {#each recorders as recorder}
      <li>
        <RecorderCard recorder={recorder} bind:isSelectedMode={isSelectedAll} />
      </li>
    {/each}
  </ul>
</div>