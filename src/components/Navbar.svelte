<script lang="ts">
    import {House, Mic, ScrollText, Settings, User} from "@lucide/svelte";

</script>

<div class="fixed bottom-0 w-full bg-white px-6 py-3 flex justify-between z-[9999] max-w-xl mx-auto">
    <a href="/#/beranda" class="flex flex-col justify-center items-center text-two">
        <House class="w-7 h-7" />
        <p class="text-xs">Beranda</p>
    </a>
    <a href="/#/riwayat" class="flex flex-col justify-center items-center text-gray-400">
        <ScrollText class="w-7 h-7" />
        <p class="text-xs">Riwayat</p>
    </a>
    <a href="/#/rekam" class="flex flex-col justify-center items-center -translate-y-10 bg-two p-2 rounded-full text-white">
        <Mic class="w-10 h-10"/>
    </a>
    <a href="/#/profil" class="flex flex-col justify-center items-center text-gray-400">
        <User class="w-7 h-7" />
        <p class="text-xs">Profil</p>
    </a>
    <a href="/#/pengaturan" class="flex flex-col justify-center items-center text-gray-400">
        <Settings class="w-7 h-7" />
        <p class="text-xs">Pengaturan</p>
    </a>
</div>