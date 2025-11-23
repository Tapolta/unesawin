<script lang="ts">
  import { Calendar, Clock, SquareChevronDown } from "@lucide/svelte";
  import HistoryStatus from "../enums/historyStatus.enum";
  import type { HistoryStruct } from "../structures/history.struct";

  let { history } = $props<{
    history: HistoryStruct
  }>();

  let statusText = $state('');

  switch (history.status) {
    case HistoryStatus.Pending:
      statusText = 'Pending';
      break;
    case HistoryStatus.Tb:
      statusText = 'Potensi Tb';
      break;
    case HistoryStatus.NoTb:
      statusText = 'Tidak Potensi Tb';
      break;
  }
</script>

<div class="bg-one text-white rounded-t-[30%] rounded-b-4xl w-full">
  <div class="bg-two py-1 rounded-3xl flex justify-center">
    <div class="py-2 w-[16rem]">
      <h4 class="font-bold text-xl">
        {history.name}
      </h4>

      <p class="text-xs font-semibold">
        {history.address}
      </p>

      <div class="flex gap-2 items-center">
        <div class="flex gap-1 items-center">
          <Calendar class="w-4 h-4" />
          <p class="text-[0.6rem]">
            {history.day},
            {history.date}
          </p>
        </div>

        <div class="flex gap-1 items-center">
          <Clock class="w-4 h-4" />
          <p class="text-[0.6rem]">
            {history.time}
          </p>
        </div>
      </div>

      {#if history.status != HistoryStatus.Pending}
      <div class="flex justify-end">
        <a href={`/unesawin/#/history/${history.id}`} class="flex items-center gap-1">
          <SquareChevronDown class="w-4 h-4" />
          <p class="italic text-xs font-bold text-right">
            Selengkapnya
          </p>
        </a>
      </div>
      {/if}
    </div>
  </div>

  <div class="w-full flex justify-center pt-2 pb-3">
    <div class="flex items-center w-[16rem] gap-3">
      {#if history.status === HistoryStatus.Pending}
      <div class="bg-six rounded-full w-2 h-2"></div>
      <p class="text-six font-semibold">
        Pending
      </p>
      {:else if history.status === HistoryStatus.Tb}
      <div class="bg-five rounded-full w-2 h-2"></div>
      <p class="text-five font-semibold">
        Potensi Tb
      </p>
      {:else}
      <div class="bg-two rounded-full w-2 h-2"></div>
      <p class="text-two font-semibold">
        Tidak Potensi Tb
      </p>
      {/if}
    </div>
  </div>
</div>