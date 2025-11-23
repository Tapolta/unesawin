<script lang="ts">
  import { AlertTriangle, Check, MoveLeft, Star } from "@lucide/svelte";
  import { params } from "svelte-spa-router";
  import Navbar from "../components/Navbar.svelte";
  import { getHistoryData } from "../utils/get_json_data.utils";
  import type { HistoryStruct } from "../structures/history.struct";
  import HistoryStatus from "../enums/historyStatus.enum";
  import { push } from 'svelte-spa-router';
  import { onMount } from "svelte";

  let id = $derived($params?.id);
  let data: HistoryStruct | undefined = $derived(getHistoryData(Number(id)));

  const handleBack = () => {
    window.history.back();
  }

  $effect(() => {
    if (id === undefined) return;

    if (data?.status === HistoryStatus.Pending || !data) {
      push('/history/not-found');
    }
  });

  onMount(() => {
    window.scrollTo(0, 0);
  });
</script>

<section class="mx-auto max-w-xl min-h-screen h-full bg-one flex flex-col">
  <div class="sticky top-0 bg-one z-2 w-full px-8 py-2">
    <button 
      onclick={handleBack}
      class="absolute"
    >
      <MoveLeft />
    </button>

    <h4 class="text-center font-semibold text-lg">
      Riwayat Pemeriksaan
    </h4>
  </div>

  <div class="flex items-center justify-between w-full px-8 pt-4">
    <div>
      <div class="flex items-center pb-2">
        <Star class="text-yellow-600" />
        <p class="text-lg font-bold">
          {data?.doctor.ratting}
        </p>
      </div>

      <h2 class="text-2xl font-bold">
        {data?.doctor.name}
      </h2>

      <p class="tex-sm font-bold">
        Radiology
      </p>
    </div>

    <img 
      src={data?.doctor.photo}
      alt="dokter"
      class="w-42 h-56 left-auto"
    />
  </div>

  <div class="bg-three w-full flex-1 px-8 flex flex-col pb-24">
    <section class="">
      <h5 class="font-bold text-xl pt-4 pb-1">
        Informasi Utama
      </h5>

      <p class="text-lg leading-tight">
        Jenis pemeriksaan: 
        <span class="text-gray-600">
          Konsultasi Dokter Spesialis Paru
        </span>
      </p>

      <p class="text-lg leading-tight">
        Tanggal & Waktu Catatan: 
        <span class="text-gray-600">
          {data?.day}, {data?.date}, {data?.time}
        </span>
      </p>

      <p class="italic text-gray-400 text-xs mb-1">
        Dicacat dari Konsultasi Dokter
      </p>

      <div class={`${data?.status === HistoryStatus.Tb ? 'bg-eight' : 'bg-nine'} 
        flex items-center gap-2 w-full justify-center text-white py-3 rounded-lg my-4 font-bold
        relative`}
      >
        {#if data?.status === HistoryStatus.Tb}
        <AlertTriangle />
        Diagnosis TB Dikonfirmasi
        {:else if data?.status === HistoryStatus.NoTb}
        <div class="flex items-center gap-1 h-6">
          <Check class="w-10 h-10" />
          Tidak Terindikasi TB
        </div>
        {/if}
      </div>

      <h5 class="font-bold text-xl pb-1">
        Informasi Fasilitas Kesehatan & Dokter
      </h5>

      <p class="text-lg leading-tight">
        Nama Fasilitas Kesehatan: 
        <span class="text-gray-600">
          {data?.name}
        </span>
      </p>

      <p class="text-lg leading-tight">
        Nama Dokter: 
        <span class="text-gray-600">
          {data?.doctor.name}
        </span>
      </p>

      <p class="text-lg leading-tight">
        Alamat/Kontak Faskes: 
        <span class="text-gray-600">
          {data?.address}
        </span>
      </p>

      <h5 class="font-bold text-xl pt-4 pb-1">
        Detail Hasil Medis
      </h5>

      <ul class="list-disc ml-8">
        <li>
          <p class="text-lg">
            Keluhan Awal Pasien: 
            <span class="text-gray-600">
              {data?.result.chief_complaint}
            </span>
          </p>
        </li>

        <li>
          <p class="text-lg">
            Pemeriksaan Fisik: 
            <span class="text-gray-600">
              {data?.result.physical_examination}
            </span>
          </p>
        </li>

        <li>
          <p class="text-lg">
            Hasil Tes Lab/Penunjang:
          </p>

          <div class="flex justify-center w-full overflow-x-auto rounded-xl my-2 bg-black">
            {#each data?.result.images as image}
              <img
                src={image}
                alt="rontgen"
                class="max-h-60 w-auto object-contain"
              >
            {/each}
          </div>
        </li>
        
        <li>
          <p class="text-lg">
            Rontgen Dada:
            <span class="text-gray-600">
              {data?.result.desc}
            </span>
          </p>
        </li>
      </ul>

      <p class="pt-4">
        Diagnosis Dokter:
      </p>
      <h5 class="text-xl font-bold ml-8">
        {data?.status === HistoryStatus.Tb ? 
          'Tuberkolosis Paru Positif' : 'Tuberkolosis Paru Negatif'}
      </h5>
    
      {#if data?.status == HistoryStatus.Tb}
      <p class="text-md pt-4">
        *Saran gaya hidup: 
        <span class="text-gray-600">
          Makan makanan yang bergizi
        </span>
      </p>
      {/if}
    </section>

    <section class="mt-auto">
      <h5 class="font-bold text-xl pt-4 pb-3">
        Lokasi penanganan
      </h5>

      <div class="map-wrapper">
        <iframe
          title="maps"
          loading="lazy"
          allowfullscreen
          referrerpolicy="no-referrer-when-downgrade"
          src={data?.url}>
        </iframe>
      </div>
    </section>
  </div>

  <Navbar page={"history"} />
</section>

<style>
  .map-wrapper {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    border-radius: 8px;
  }
  .map-wrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
</style>