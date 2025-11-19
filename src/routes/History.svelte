<script lang="ts">
  import Navbar from "../components/Navbar.svelte";
  import RiwayatCard from "../components/RiwayatCard.svelte";

  let isRiwayat = $state(true);

  let toggleRiwayat = () => {
    isRiwayat = !isRiwayat;
  }
</script>

<section class="max-w-xl min-h-screen bg-three mx-auto flex flex-col items-center px-8">
  <div class="pt-8 pb-4 flex gap-2 items-center justify-center">
    <button 
      onclick={toggleRiwayat}
      disabled={isRiwayat}
      class={`text-[0.65rem] py-[1px] rounded-md text-white w-16 ${!isRiwayat ? 'bg-four' : 'bg-two'}`}
    >
      Riwayat
    </button>
    <button 
      onclick={toggleRiwayat}
      disabled={!isRiwayat}
      class={`text-[0.65rem] py-[1px] rounded-md text-white w-16 ${isRiwayat ? 'bg-four' : 'bg-two'}`}
    >
      Rekaman
    </button>
  </div>

  {#if isRiwayat}
  <ul class="w-full flex flex-col gap-5">
    <li class="">
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
  {/if}
</section>

<Navbar page={"history"} />