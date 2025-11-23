<script lang="ts">
  import { Trash2 } from "@lucide/svelte";
  import Navbar from "../components/Navbar.svelte";
  import RecorederWrapper from "../components/Recorder/RecorederWrapper.svelte";
  import RiwayatCard from "../components/RiwayatCard.svelte";
  import { getHistoryDatas, getRecHistoryDatas } from "../utils/get_json_data.utils";
  import PopUpBase from "../components/popup/PopUpBase.svelte";
  import { onMount } from "svelte";

  let isRiwayat = $state(true);
  let editedMode = $state(false);
  let popUpOpen = $state(false);
  let checkDeleteList: string[] = $state([]);

  const historyList = getHistoryDatas();
  const recHistory = getRecHistoryDatas();

  const cancelEditMode = () => {
    editedMode = false;
    checkDeleteList = [];
  }

  const toggleRiwayat = () => {
    window.scrollTo(0, 0);
    isRiwayat = !isRiwayat;
    editedMode = false;
  }

  onMount(() => {
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
    {:else}
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

  <ul class="w-full flex flex-col gap-4 overflow-y-auto mb-28">
    {#each recHistory as history}
    <li>
      <RecorederWrapper
        date={history.date} 
        recorders={history.history_record} 
        isEditMode={editedMode}
        bind:groupDeleted={checkDeleteList}
      />
    </li>
    {/each}
  </ul>
  {/if}

  <Navbar page={"history"} />
</section>

<PopUpBase popUp={{
  closable: false,
  size: 'sm',
  visible: popUpOpen,
  alignCenter: true,
}}>
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
      >
        Ya
      </button>
    </div>
  </div>
</PopUpBase>
