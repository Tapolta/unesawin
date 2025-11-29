<script lang="ts">
  import RadiologNavbar from "../navbar/RadiologNavbar.svelte";
  import RontgsenCekCard from "../radiolog/RontgsenCekCard.svelte";

  let data = $state([1, 2]);
</script>

<section class="bg-one max-w-xl overflow-x-none mx-auto min-h-screen h-[100%] pb-24">
  <div class="px-8">
    <ul class="flex flex-col gap-4 pt-10">
      {#each data as card}
      <li>
        <RontgsenCekCard />
      </li>
      {/each}
    </ul>
  </div>

	<RadiologNavbar page={'dashboard'} />
</section>