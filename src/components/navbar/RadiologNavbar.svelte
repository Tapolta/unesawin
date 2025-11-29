<script lang="ts">
    import { House, Settings, User } from "@lucide/svelte";

    let { page } = $props<{
      page: 'dashboard' | 'profile' | 'settings'
    }>();

    function isActive(p: string) {
      return page === p;
    }
</script>

<div class="fixed bottom-0 w-full bg-white px-6 py-4 flex justify-center gap-12 z-[10] max-w-xl mx-auto">
  <a href="/unesawin/#/dashboard" 
    class={`flex flex-col justify-center items-center 
      ${isActive('dashboard') ? 'text-two' : 'text-four'}`}
    >
    <House class="w-7 h-7" />
    <p class="text-xs">Beranda</p>
  </a>

  <a href="/unesawin/#/profile" 
    class={`flex flex-col justify-center items-center 
      ${isActive('profile') ? 'text-two' : 'text-four'}`}
    >
    <User class="w-7 h-7" />
    <p class="text-xs">Profil</p>
  </a>

  <a href="/unesawin/#/settings" 
    class={`flex flex-col justify-center items-center 
      ${isActive('settings') ? 'text-two' : 'text-four'}`}
    >
    <Settings class="w-7 h-7" />
    <p class="text-xs">Pengaturan</p>
  </a>
</div>
