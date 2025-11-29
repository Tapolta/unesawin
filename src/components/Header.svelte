<script lang="ts">
  import { getWaktuIndonesia } from "../utils/time.utils";

</script>

<div class="flex justify-between items-center py-5">
  <div class="flex justify-center items-center gap-2">
    <img 
      src="https://cdn.pixabay.com/photo/2012/04/18/23/36/boy-38262_1280.png"
      alt="profil-pic"
      class="w-12 h-12 rounded-full bg-gray-300"
    />
    <div>
      <p class="text-xs translate-y-1">
        Selamat {getWaktuIndonesia()},
      </p>
      <p class="text-lg font-semibold">
        Devain Rirung Samperuru
      </p>
    </div>
  </div>

  <button class="border-1 border-gray-400 rounded-full p-2">
    <img
      src="https://cdn.pixabay.com/photo/2015/12/16/17/41/bell-1096279_1280.png"
      alt="bell"
      class="w-5 h-5"
    />
  </button>
</div>