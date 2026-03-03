<script lang="ts">
  import { LoaderIcon, Trash2 } from "@lucide/svelte";
  import Navbar from "../components/navbar/Navbar.svelte";
  import RecorederWrapper from "../components/Recorder/RecorederWrapper.svelte";
  import RiwayatCard from "../components/RiwayatCard.svelte";
  import { getHistoryDatas, getRecHistoryDatas } from "../utils/get_json_data.utils";
  import PopUpBase from "../components/popup/PopUpBase.svelte";
  import { onMount } from "svelte";
  import type { RecorderStruct } from "../structures/recorder.struct";
  import { deleteRecorder } from "../api/record.api";

  let isRiwayat = $state(true);
  let editedMode = $state(false);
  let popUpOpen = $state(false);
  let checkDeleteList: string[] = $state([]);
  let loading: boolean = $state(false);

  const historyList = getHistoryDatas();
  let recHistory: {date: string, history_record: RecorderStruct[]}[]= $state([]);

  const cancelEditMode = () => {
    editedMode = false;
    checkDeleteList = [];
  };

  const toggleRiwayat = () => {
    window.scrollTo(0, 0);
    isRiwayat = !isRiwayat;
    editedMode = false;
  };

  const deleteHandle = async () => {
    loading = true;
    const success = await deleteRecorder(checkDeleteList);
    loading = false;

    if (success) {
      cancelEditMode();
      popUpOpen = false;
      recHistory = await getRecHistoryDatas();
    }
  };

  onMount( async() => {
    recHistory = await getRecHistoryDatas();
    window.scrollTo(0, 0);
  });
</script>

<section class="max-w-xl min-h-screen bg-three mx-auto flex flex-col items-center px-8">
  <div class="pt-6 pb-5 flex gap-3 items-center justify-center sticky top-0 z-10 bg-three w-full">
    <button 
      onclick={toggleRiwayat}
      disabled={isRiwayat}
      class={`text-md py-[1px] rounded-md text-white w-24 ${!isRiwayat ? 'bg-four' : 'bg-two'}`}
    >
      Riwayat
    </button>
    <button 
      onclick={toggleRiwayat}
      disabled={!isRiwayat}
      class={`text-md py-[1px] rounded-md text-white w-24 ${isRiwayat ? 'bg-four' : 'bg-two'}`}
    >
      Rekaman
    </button>
  </div>

  {#if isRiwayat}
  <ul class="w-full flex flex-col gap-5 mb-28">
    {#each historyList as history (history.id)}
    <li>
      <RiwayatCard {history} />
    </li>
    {/each}
  </ul>
  {:else}
  <div class="w-full flex justify-end gap-1 mb-2">
    {#if editedMode}
     <button
      onclick={cancelEditMode} 
      class="bg-two rounded-xl text-white px-2 py-1"
    >
      Batalkan
    </button>
    {:else if recHistory.length > 0}
     <button
      onclick={() => editedMode = !editedMode} 
      class="bg-two rounded-xl text-white px-2 py-1"
    >
      Pilih Rekaman
    </button>
    {/if}

    {#if editedMode}
    <button
      onclick={() => popUpOpen = true}
      class={`flex items-center gap-1 rounded-xl 
        ${checkDeleteList.length === 0 ? 'bg-four' : 'bg-five'} text-white px-2 py-1`}
      disabled={checkDeleteList.length === 0}
    >
      <Trash2 />
      Hapus
    </button>
    {/if}
  </div>

  {#each recHistory as history}
  <ul class="w-full flex flex-col gap-4 overflow-y-auto mb-28">
    <li>
      <RecorederWrapper
        date={history.date} 
        recorders={history.history_record} 
        isEditMode={editedMode}
        bind:groupDeleted={checkDeleteList}
      />
    </li>
  </ul>
  {/each}
  
  <h1 class="text-2xl font-bold">
    {recHistory.length > 0 ? '' : 'Belum ada rekaman'}
  </h1>
  {/if}

  <Navbar page={"history"} />
</section>

<PopUpBase popUp={{
  closable: false,
  size: 'sm',
  visible: popUpOpen,
  alignCenter: true,
}}>
  {#if loading}
  <h2 class="text-two font-semibold text-2xl text-center mb-6">
    Menghapus
  </h2>
  <LoaderIcon class="mx-auto animate-spin w-10 h-10" />
  {:else}
  <div class="flex flex-col gap-10">
    <h6 class="text-two text-2xl font-bold text-center">
      Hapus 
      <span class="text-five">
        {checkDeleteList.length}
      </span>
      Record?
    </h6>

    <div class="flex items-center justify-between px-20">
      <button
        onclick={() => popUpOpen = false}
        class="font-bold text-two text-xl"
      >
        Tidak
      </button>

      <button
        class="text-four text-xl"
        onclick={deleteHandle}
      >
        Ya
      </button>
    </div>
  </div>
  {/if}
</PopUpBase>
