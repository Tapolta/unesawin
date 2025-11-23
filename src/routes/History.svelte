<script lang="ts">
  import Navbar from "../components/Navbar.svelte";
  import RecorederWrapper from "../components/Recorder/RecorederWrapper.svelte";
  import RiwayatCard from "../components/RiwayatCard.svelte";
  import { getHistoryDatas } from "../utils/get_json_data.utils";

  let isRiwayat = $state(true);

  let toggleRiwayat = () => {
    isRiwayat = !isRiwayat;
  }

  let isDeleteMode = $state(false);

  const historyList = getHistoryDatas();
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
  <ul class="w-full flex flex-col gap-4 overflow-y-auto mb-28">
    <li>
      <RecorederWrapper date={"Senin, 17/11/25 "} recorders={[
        {
          id: 1,
          isPotential: true,
          audioPath: '',
          duration: '00.00'
        },
        {
          id: 2,
          isPotential: true,
          audioPath: '',
          duration: '00.00'
        },
        {
          id: 3,
          isPotential: true,
          audioPath: '',
          duration: '00.00'
        },
        {
          id: 4,
          isPotential: true,
          audioPath: '',
          duration: '00.00'
        },
        ]} 
      />
    </li>
    <li>
      <RecorederWrapper date={"Senin, 17/11/25 "} recorders={[
        {
          id: 5,
          isPotential: true,
          audioPath: '',
          duration: '00.00'
        },
        {
          id: 6,
          isPotential: true,
          audioPath: '',
          duration: '00.00'
        },
        {
          id: 7,
          isPotential: true,
          audioPath: '',
          duration: '00.00'
        },
        {
          id: 8,
          isPotential: true,
          audioPath: '',
          duration: '00.00'
        },
        {
          id: 9,
          isPotential: true,
          audioPath: '',
          duration: '00.00'
        },
        ]} 
      />
    </li>
  </ul>
  {/if}

  <Navbar page={"history"} />
</section>
