<script lang="ts">
  import { AudioLines, CheckCircle, CircleAlert, PlayCircle } from "@lucide/svelte";
  import { push } from "svelte-spa-router";

  let isTb = $state(false);

  const saveHistory = () => {
    push('/history');
  }
</script>

<div class="max-w-xl mx-auto min-h-screen h-full bg-three mx-8">
  <div class={`min-h-screen ${isTb ? "bg-five/40" : "bg-seven/40"} flex flex-col justify-between`}>
    <div class="flex items-center flex-col gap-2 pt-12 pb-8">
      <div class={`rounded-full ${isTb ? "bg-five" : "bg-seven"}`}>
        {#if isTb}
          <CircleAlert class="text-white w-30 h-30" />
        {:else}
          <CheckCircle class="text-white w-30 h-30" />
        {/if}
      </div>

      <p class="text-xl font-bold">
        Analisis selesai
      </p>

      {#if isTb}
      <h3 class="text-4xl text-five font-bold">
        Indikasi Tinggi TBC
      </h3>
      {:else}
      <h3 class="text-4xl text-seven font-bold">
        Tidak Terindikasi TBC
      </h3>
      {/if}
    </div>

    <div class="h-full bg-three mx-2 p-5 rounded-t-4xl flex flex-col gap-6">
      <section>
        <h6 class="font-bold text-md pb-1">
          Detail rekaman
        </h6>
        
        <div class="text-sm pb-3 text-gray-500">
          <p>
            ID rekaman: VN-20251120-001
          </p>
          <p>
            Tanggal & Waktu: Kamis, 20 Nov 2025, 22.30 WIB
          </p>
          <p>
            Durasi rekaman: 12 detik
          </p>
        </div>

        <div class="bg-one py-2 relative flex items-center justify-center">
            <div class={`flex w-full absolute justify-center ${isTb ? "text-five" : "text-seven"}`}>
              <AudioLines />
              <AudioLines />
              <AudioLines />
              <AudioLines />
              <AudioLines />
              <AudioLines />
              <AudioLines />
              <AudioLines />
              <AudioLines />
              <AudioLines />
              <AudioLines />
              <AudioLines />
              <AudioLines />
            </div>

            <button class={`${isTb ? "bg-five" : "bg-seven"} rounded-full z-1`}>
              <PlayCircle class="w-10 h-10 text-white" />
            </button>
        </div>
      </section>

      <section>
        <h6 class="font-bold tex-md mb-1">
          Intepretasi Data Teknis
        </h6>

        <div class="text-sm pb-3 text-gray-500">
          <p>
            Pola Batuk Dideteksi: Batuk berdahak parah
          </p>
          <p>
            Frekuensi Batuk: 5 kali dalam 4 detik
          </p>
          <p>
            Analisis AI: Anomali terdeteksi
          </p>
        </div>

        {#if isTb}
        <h5 class="w-full bg-six/10 text-center text-six font-bold py-2 text-lg rounded-lg">
          Segera Konsultasi Dokter
        </h5>
        {/if}
      </section>
        
      {#if isTb}
      <section>
        <h6 class="font-bold text-md mb-1">
          Rekomendasi Cepat
        </h6>

        <a href="/" class="underline text-gray-500">
          RSU Bhakti Rahayu Surabaya
        </a>

        <div class="flex items-center justify-between text-xs text-gray-500">
          <p class="flex-1">
            Jl. Ketintang Madya I No.16, Ketintang, Kec. Gayungan, Surabaya, Jawa Timur 60232
          </p>
          <p>
            80 m
          </p>
        </div>
      </section>
      {/if}

      <button 
        onclick={saveHistory}
        class="bg-two py-2 w-full rounded-xl text-white font-bold text-lg my-4"
      >
        Simpan ke Riwayat
      </button>
    </div>
  </div>
</div>