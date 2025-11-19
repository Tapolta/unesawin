<script lang="ts">
  import Navbar from "../components/Navbar.svelte";
  import RecorederWrapper from "../components/Recorder/RecorederWrapper.svelte";
  import RiwayatCard from "../components/RiwayatCard.svelte";

  let isRiwayat = $state(false);

  let toggleRiwayat = () => {
    isRiwayat = !isRiwayat;
  }
</script>

<section class="max-w-xl min-h-screen bg-three mx-auto flex flex-col items-center px-8">
  <div class="pt-16 pb-5 flex gap-3 items-center justify-center">
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
    <li>
      <RiwayatCard 
        address={"Jl. Ketintang Selatan 1, Wonokromo, Surabaya"} 
        date={"Senin, 17 November 2025"} 
        time={"12.00"} 
        name={"Rs.Unesa Ketintang"}
        pending={true}
      />
    </li>
    <li>
      <RiwayatCard 
        address={"Jl. Lidah Wetan 5, Lakarsantri, Surabaya"} 
        date={"Kamis, 15 Oktober 2025"} 
        time={"15.00"} 
        name={"Rs. Unesa Lidah Wetan"}
        pending={false}
      />
    </li>
  </ul>
  {:else}
  <ul class="w-full flex flex-col gap-4 overflow-y-auto mb-28">
    <li>
      <RecorederWrapper date={"Senin, 17/11/25 "} recorders={[
        {
          isPotential: true,
          audioPath: '',
          duration: '00.00'
        },
        {
          isPotential: true,
          audioPath: '',
          duration: '00.00'
        },
        {
          isPotential: true,
          audioPath: '',
          duration: '00.00'
        },
        {
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
          isPotential: true,
          audioPath: '',
          duration: '00.00'
        },
        {
          isPotential: true,
          audioPath: '',
          duration: '00.00'
        },
        {
          isPotential: true,
          audioPath: '',
          duration: '00.00'
        },
        {
          isPotential: true,
          audioPath: '',
          duration: '00.00'
        },
        {
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
