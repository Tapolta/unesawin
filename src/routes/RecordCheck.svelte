<script lang="ts">
  import { AlertTriangle, AudioLines, CheckCircle, CircleAlert, LoaderCircle, PlayCircle } from "@lucide/svelte";
  import { push } from "svelte-spa-router";
  import { getRecHistoryData } from "../utils/get_json_data.utils";
  import type { RecorderStruct } from "../structures/recorder.struct";
  import { params } from "svelte-spa-router";
  import { onMount } from "svelte";
  
  let id = $derived($params?.id);
  let data: RecorderStruct | undefined = $state();

  const formatedDate = (date: Date) => {
    if (!date) { return ''}

    return date.toLocaleString("id-ID", {
      weekday: "long",       
      day: "2-digit",        
      month: "short",        
      year: "numeric",       
      hour: "2-digit",       
      minute: "2-digit",     
      hour12: false,         
      timeZoneName: "short"
    });
  };

  const saveHistory = () => {
    push('/history');
  };

  $effect(() => {
    if (id) (async() => data = await getRecHistoryData(id as string))();
  });

  onMount( async() => {
    window.scrollTo(0, 0);
  });
</script>

<div class="max-w-xl mx-auto min-h-screen h-full bg-three mx-8">
  {#if data === undefined}
  <div class="flex justify-center items-center h-screen">
    <LoaderCircle class="animate-spin w-48 h-48 text-four" />
  </div>
  {:else}
  <div class={`min-h-screen ${data?.is_potential ? "bg-five/40" : "bg-seven/40"} flex flex-col 
    justify-between`}
  >
    <div class="flex items-center flex-col gap-2 pt-12 pb-8">
      <div class={`rounded-full ${data?.is_potential ? "bg-five" : "bg-seven"}`}>
        {#if data?.is_potential}
          <CircleAlert class="text-white w-30 h-30" />
        {:else}
          <CheckCircle class="text-white w-30 h-30" />
        {/if}
      </div>

      <p class="text-xl font-bold">
        Analisis selesai
      </p>

      <h3 class={`text-4xl ${data?.is_potential ? 'text-five' : 'text-seven'}  font-bold`}>
        {data?.is_potential ? 'Indikasi Tinggi TBC' : 'Tidak Terindikasi TBC'}
      </h3>
    </div>

    <div class="h-full bg-three mx-2 p-5 rounded-t-4xl flex flex-col gap-6">
      <section>
        <h6 class="font-bold text-md pb-1">
          Detail rekaman
        </h6>
        
        <div class="text-sm pb-3 text-gray-700">
          <p>
            ID rekaman: {data?.id}
          </p>
          <p>
            Tanggal & Waktu: {formatedDate(data?.date as Date)}
          </p>
          <p>
            Durasi rekaman: {data?.recorder.duration}
          </p>
        </div>

        <div class="bg-one py-2 relative flex items-center justify-center">
            <div class={`flex w-full absolute justify-center 
              ${data?.is_potential ? "text-five" : "text-seven"}`}
            >
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

            <button class={`${data?.is_potential ? "bg-five" : "bg-seven"} rounded-full z-1`}>
              <PlayCircle class="w-10 h-10 text-white" />
            </button>
        </div>
      </section>

      <section>
        <h6 class="font-bold tex-md mb-1">
          Intepretasi Data Teknis
        </h6>

        <div class="text-sm text-gray-700">
          <p>
            Pola Batuk Dideteksi: {data?.details.cough_pattern}
          </p>
          <p>
            Frekuensi Batuk: {data?.details.cough_frequency}
          </p>
          <p>
            Analisis AI: 
            {data?.is_potential ? 'Anomali terdeteksi' : 'Tidak ada anomali terdeteksi'}
          </p>
        </div>

        {#if data?.is_potential}
        <h5 class="w-full bg-six/10 text-center text-six font-bold py-2 mt-3 text-lg rounded-lg">
          Segera Konsultasi Dokter
        </h5>
        {/if}
      </section>
        
      {#if data?.is_potential}
      <section>
        <h6 class="font-bold text-md mb-1">
          Rekomendasi Cepat
        </h6>

        <a href="/" class="underline text-gray-700">
          RSU Bhakti Rahayu Surabaya
        </a>

        <div class="flex items-center justify-between text-xs text-gray-700">
          <p class="flex-1">
            Jl. Ketintang Madya I No.16, Ketintang, Kec. Gayungan, Surabaya, Jawa Timur 60232
          </p>
          <p>
            80 m
          </p>
        </div>

        <div class="flex items-center bg-six/10 gap-2 px-4 py-3 rounded-lg mt-6">
          <AlertTriangle class="text-five w-8 h-8" />
          <p class="flex-1 text-xs">
            <span class="font-bold">
              Penting:
            </span>
            Hasil ini merupakan Indikasi Awal. Selalu konsultasikan dengan Dokter untuk untuk 
            diagnosis dan penanganan yang tepat.
          </p>
        </div>
      </section>
      {:else}
      <section>
        <h5 class="text-xl font-bold text-two pb-2">
          Rekomendasi
        </h5>

        <p class="leading-tight text-gray-700">
          Pertahankan gaya hidup sehat. Lakukan perekaman batuk secara berkala 
          (misal: 1 bulan sekali). Jika batuk berlanjut lebih dari 2 minggu, segera periksa ke 
          dokter.
        </p>
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
  {/if}
  
</div>