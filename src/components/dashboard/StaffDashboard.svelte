<script lang="ts">
  import { Bot, Check, File } from "@lucide/svelte";
  import StaffNavbar from "../navbar/StaffNavbar.svelte";
  import Header from "../Header.svelte";

  let status: 'normal' | 'mengirim' | 'selesai' = $state<'normal' | 'mengirim' | 'selesai'>('normal');
</script>

<section class="max-w-xl mx-auto relative">
  <div class="absolute top-0 z-[99] w-full px-8">
    <Header />
  </div>
  <div 
    class="relative flex justify-center items-center flex-col max-w-xl bg-three h-screen w-[100%] mx-auto"
  >
    {#if status === 'normal'}
    <h4 class="absolute -translate-y-48 text-two text-3xl font-bold">
      Upload File
    </h4>
    
    <div class="rounded-full p-10 bg-one">
      <button
        onclick={() => status = 'mengirim'}
        class="rounded-full p-6 bg-two"
      >
        <File class="text-white w-28 h-28" />
      </button>
    </div>
    {:else if status === 'mengirim'}
    <div class="rounded-full bg-one">
      <button
        onclick={() => status = 'selesai'}
        class="rounded-full p-6 bg-two"
      >
        <Bot class="text-white w-44 h-44" />
      </button>
    </div>
    <h4 class="absolute translate-y-40 text-3xl font-semibold">
      Menganalisis
    </h4>
    {:else}
    <div class="rounded-full bg-one">
      <button
        class="rounded-full p-6 bg-two"
      >
        <Check class="text-white w-44 h-44" />
      </button>
    </div>
    <h4 class="absolute translate-y-40 text-3xl font-semibold">
      Terkirim ke Radiolog
    </h4>
    {/if}
  </div>
  
  <StaffNavbar status={'mode_ai'} />
</section>