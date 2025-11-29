<script lang="ts">
  let data = $state([
    '/unesawin/img/rontgen_example.jpeg',
    '/unesawin/img/rontgen_example2.jpeg'
  ]);
</script>

<section class="mx-auto max-w-xl bg-three min-h-screen px-8 flex flex-col items-center">
  <div class="flex overflow-x-auto rounded-t-xl pt-8">
    {#each data as img}
    <img 
      src={img}
      alt={img}
      class="w-100 h-50"
    />
    {/each}
  </div>

  <h1 class="font-bold text-left w-full py-4">
    Detail Hasil Medis
  </h1>

  <div class="w-full bg-white py-4 px-4 rounded-lg mb-2">
    <p class="mb-4 text-sm font-bold">
      Keterangan<span class="text-five">*</span>
    </p>

    <input 
      type="text"
      class="w-full border-b border-gray-400"
      placeholder="jawaban Anda"
    />
  </div>

  <div class="w-full bg-white py-4 px-4 rounded-lg mb-4">
    <p class="mb-4 text-sm font-bold">
      Diagnoter Dokter<span class="text-five">*</span>
    </p>

    <input 
      type="text"
      class="w-full border-b border-gray-400"
      placeholder="jawaban Anda"
    />
  </div>
  
  <div class="w-full flex justify-end">
    <button class="bg-two px-2 text-white rounded-lg font-bold px-8">
      Kirim
    </button>
  </div>
</section>