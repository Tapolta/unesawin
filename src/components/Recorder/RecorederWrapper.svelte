<script lang="ts">
  import type { RecorderStruct } from "../../structures/recorder.struct";
  import RecorderCard from "./RecorderCard.svelte";

  let {date, recorders} = $props<{
    date: string,
    recorders: RecorderStruct[]
  }>();
</script>

<div>
  <div class="flex items-center mb-4 w-full">
    <div class="flex-grow border-t-3 border-gray-300"></div>
      <span class="px-4 text-gray-500">
          {date}
      </span>
      <div class="flex-grow border-t-3 border-gray-300"></div>
  </div>

  <ul class="flex flex-col gap-4">
    {#each recorders as recorder}
      <li>
        <RecorderCard recorder={recorder} />
      </li>
    {/each}
  </ul>
</div>