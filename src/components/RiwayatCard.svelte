<script lang="ts">
  import { Calendar, Clock, SquareChevronDown } from "@lucide/svelte";

  let { name, address, date, time, pending } = $props<{
    name: string,
    address: string,
    date: string,
    time: string,
    pending: boolean
  }>()
</script>

<div class={`${pending ? 'bg-one' : ''} text-white rounded-t-[30%] rounded-b-4xl w-full`}>
  <div class="bg-two py-1 rounded-full flex justify-center">
    <div class="py-2 w-xs">
      <h4 class="font-bold text-xl">
        {name}
      </h4>

      <p class="text-sm font-semibold">
        {address}
      </p>

      <div class="flex gap-2 items-center">
        <div class="flex gap-1 items-center">
          <Calendar class="w-5 h-5" />
          <p class="text-xs">
            {date}
          </p>
        </div>

        <div class="flex gap-1 items-center">
          <Clock class="w-5 h-5" />
          <p class="text-xs">
            {time}
          </p>
        </div>
      </div>

      <div class="flex justify-end">
        <a href="/" class="flex items-center gap-1">
          <SquareChevronDown class="w-4 h-4" />
          <p class="italic text-xs font-bold text-right">
            Selengkapnya
          </p>
        </a>
      </div>
    </div>
  </div>

  {#if pending}
    <div class="w-full flex justify-center pt-2 pb-3">
      <div class="flex items-center w-xs gap-3">
        <div class="bg-two rounded-full w-2 h-2"></div>
        <p class="text-two font-semibold">
          Pending
        </p>
      </div>
    </div>
  {/if}
</div>