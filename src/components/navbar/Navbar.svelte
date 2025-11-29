<script lang="ts">
    import { House, Mic, ScrollText, Settings, User } from "@lucide/svelte";

    let { page } = $props<{
      page: 'dashboard' | 'history' | 'record' | 'profile' | 'settings'
    }>();

    function isActive(p: string) {
      return page === p;
    }
</script>

<div class="fixed bottom-0 w-full bg-white px-6 py-1 flex justify-between z-[10] max-w-xl mx-auto">
  <!-- Dashboard -->
  <a href="/unesawin/#/dashboard" 
    class={`flex flex-col justify-center items-center 
      ${isActive('dashboard') ? 'text-two' : 'text-four'}`}
    >
    <House class="w-7 h-7" />
    <p class="text-xs">Beranda</p>
  </a>

  <!-- History -->
  <a href="/unesawin/#/history" 
    class={`flex flex-col justify-center items-center 
      ${isActive('history') ? 'text-two' : 'text-four'}`}
    >
    <ScrollText class="w-7 h-7" />
    <p class="text-xs">Riwayat</p>
  </a>

  <!-- Record (buton tengah) -->
  <a href="/unesawin/#/record" 
    class="flex flex-col justify-center items-center -translate-y-8 bg-two p-2 
    rounded-full text-white border-2 border-four"
  > 
    <Mic class="w-10 h-10"/> 
  </a>

  <!-- Profile -->
  <a href="/unesawin/#/profile" 
    class={`flex flex-col justify-center items-center 
      ${isActive('profile') ? 'text-two' : 'text-four'}`}
    >
    <User class="w-7 h-7" />
    <p class="text-xs">Profil</p>
  </a>

  <!-- Settings -->
  <a href="/unesawin/#/settings" 
    class={`flex flex-col justify-center items-center 
      ${isActive('settings') ? 'text-two' : 'text-four'}`}
    >
    <Settings class="w-7 h-7" />
    <p class="text-xs">Pengaturan</p>
  </a>
</div>
