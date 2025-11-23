<script lang="ts">
  import type { RecorderStruct } from "../../structures/recorder.struct";
  import RecorderCard from "./RecorderCard.svelte";

  let { date, recorders, isEditMode = false, groupDeleted = $bindable() } = $props<{
    date: string,
    recorders: RecorderStruct[],
    isEditMode?: boolean,
    groupDeleted: string[]
  }>();

  let checkedIds = $state(new Set<string>());

  const toggle = (id: string) => {
    if (checkedIds.has(id)) {
      checkedIds.delete(id);
      groupDeleted = groupDeleted.filter((x: string) => x !== id);
    } else {
      checkedIds.add(id);
      groupDeleted = [...groupDeleted, id];
    }
  };

  $effect(() => {
    checkedIds = new Set(groupDeleted);
  });
</script>

<div>
  <div class="flex items-center mb-2 w-full">
    <div class="flex-grow border-t-3 border-gray-300"></div>
    <span class="px-4 text-gray-500">{date}</span>
    <div class="flex-grow border-t-3 border-gray-300"></div>
  </div>

  <ul class="flex flex-col gap-4">
    {#each recorders as recorder}
      <li class="flex items-center gap-1">
        {#if isEditMode}
          <input
            type="checkbox"
            class="w-5 h-5"
            checked={checkedIds.has(recorder.id)}
            onchange={() => toggle(recorder.id)}
          />
        {/if}

        <div class="flex-1">
          <RecorderCard recorder={recorder} />
        </div>
      </li>
    {/each}
  </ul>
</div>
