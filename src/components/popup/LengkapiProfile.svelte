<script lang="ts">
  let { popUpStatus = $bindable() } = $props<{
    popUpStatus: boolean
  }>();

  let nextPage = $state(false);
</script>

{#if !nextPage}
  <section class="flex flex-col items-center justif-center text-center w-full bg-red/200 relative h-100">
  <div class="-translate-y-35 w-full absolute">
    <img 
      alt="Decoration"
      src="/unesawin/img/decor1.png"
      class="w-60 h-auto m-auto"
    />

    <h1 class="text-2xl font-bold pb-10">
      Lengkapi Profil
    </h1>

    <div class="w-full">
      <p class="font-bold">
        Masukkan usia anda
      </p>

      <input 
        type="range"
        class="w-full bg-black h-1 range-black"
      />

      <div class="flex justify-between text-xs">
        <p>
          0
        </p>
        <p>
          100
        </p>
      </div>
    </div>

    <div class="flex items-center gap-30 justify-center pt-2">
      <div>
        <h6>
          Tinggi Badan
        </h6>

        <div class="bg-four/20 flex w-26 items-center rounded-lg px-2 mt-2">
          <input 
            type="number"
            maxlength="2"
            class="w-full h-8"
          />
          <p>
            cm
          </p>
        </div>
      </div>
      <div>
        <h6>
          Berat Badan
        </h6>
        <div class="bg-four/20 flex w-26 items-center rounded-lg px-2 mt-2">
          <input 
            type="number"
            maxlength="2"
            class="w-full h-8"
          />
          <p>
            kg
          </p>
        </div>
      </div>
    </div>

    <button 
      onclick={() => nextPage = true}
      class="bg-two px-2 py-1 rounded-lg text-white font-bold mt-8 w-full"
    >
      Selanjtutnya
    </button>

    <div class="flex items-center justify-center gap-2 pt-10">
      <div class={`p-2 ${nextPage ? '' : 'bg-two'} rounded-full`}></div>
      <div class={`p-2 ${nextPage ? '' : 'bg-four'} rounded-full`}></div>
    </div>
  </div>
</section>
{:else}
<section>
  <h1 class="text-2xl font-bold pb-8 text-center">
    Lengkapi Profil
  </h1>
  
  <div class="pb-6">
    <p class="leading-tight">
      Apakah anggota keluarga Anda (yang serumah) pernah  terdiagnosa TB?
    </p>

    <div class="flex items-center gap-2 pt-2">
      <button class={`bg-four/20 rounded-md px-2 w-20`}>
        Ya
      </button>
      <button class={`bg-four/20 rounded-md px-2 w-20`}>
        Tidak
      </button>
    </div>
  </div>

  <div class="pb-6">
    <p class="leading-tight">
      Apakah Anda pernah terdiagnosa HIV?
    </p>

    <div class="flex items-center gap-2 pt-2">
      <button class={`bg-four/20 rounded-md px-2 w-20`}>
        Ya
      </button>
      <button class={`bg-four/20 rounded-md px-2 w-20`}>
        Tidak
      </button>
    </div>
  </div>

  <div class="pb-6">
    <p class="leading-tight">
      Apakah Anda perokok?
    </p>

    <div class="flex items-center gap-2 pt-2">
      <button class={`bg-four/20 rounded-md px-2 w-20`}>
        Ya
      </button>
      <button class={`bg-four/20 rounded-md px-2 w-20`}>
        Tidak
      </button>
    </div>
  </div>

  <div>
    <p class="leading-tight">
      Apakah Anda pernah terkena gejala Diabetes?
    </p>

    <div class="flex items-center gap-2 pt-2">
      <button class={`bg-four/20 rounded-md px-2 w-20`}>
        Ya
      </button>
      <button class={`bg-four/20 rounded-md px-2 w-20`}>
        Tidak
      </button>
    </div>
  </div>

  <button 
      onclick={() => popUpStatus = false}
      class="bg-two px-2 py-1 rounded-lg text-white font-bold mt-8 w-full"
    >
      Simpan
    </button>

    <div class="flex items-center justify-center gap-2 pt-10">
      <div class={`p-2 ${nextPage ? 'bg-four' : 'bg-two'} rounded-full`}></div>
      <div class={`p-2 ${nextPage ? 'bg-two' : 'bg-four'} rounded-full`}></div>
    </div>
</section>
{/if}

<style>
.range-black {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 2px;
  background: black;
  border-radius: 4px;
}

/* Thumb (Chrome/Safari/Edge) */
.range-black::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 16px;
  height: 16px;
  background: var(--color-two);
  border-radius: 50%;
  cursor: pointer;
}

/* Firefox track */
.range-black::-moz-range-track {
  height: 4px;
  background: black;
}
</style>