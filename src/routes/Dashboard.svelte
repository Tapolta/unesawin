<script lang="ts">
  import { onMount } from "svelte";
  import SuggestionWrapper from "../components/keyword_suggestion/SuggestionWrapper.svelte";
  import Navbar from "../components/Navbar.svelte";
  import NewsCard from "../components/news_cards/NewsCard.svelte";
  import NewsCard2 from "../components/news_cards/NewsCard2.svelte";
  import PopUpBase from "../components/popup/PopUpBase.svelte";
  import { getWaktuIndonesia } from "../utils/time.utils";

  type ComponentItem =
    | { component: typeof NewsCard; props: { title: string; detail: string } }
    | { component: typeof NewsCard2; props: { title: string; detail: string; src: string } };
  
  let newsTitle = $state('Untuk Anda');
  let tag = $state('');
  let popUpVisible = $state(false);
  let currentComponent: ComponentItem | null = $state(null);

  const handleSuggestion = (value: string) => {
    newsTitle = value;
    tag = value.toLowerCase();
  };

  const setPopUp = (isShow: boolean, newComponent: any) => {
    if (isShow) {
      currentComponent = newComponent;
    }

    popUpVisible = isShow;
  };

  const components = [
    {
      component: NewsCard,
      tag: 'gejala penyakit tuberkolosis',
      props: { 
        title: "Bagaimana cara mencegah penularan TB jika serumah penderita TB?", 
        detail: "Penularan TB terjadi ketika seseorang menghirup percikan ludah saat seseorang terinfeksi TB bersin atau batuk. Oleh sebab itu, resiko penularan penyakit TB ini lebih tinggi pada orang yang tinggal serumah dengan penderita TB. Anda tidak perlu khawatir, penyakit TB ini bisa sembuh total dengan konsumsi obat secara teratur sesuai anjuran dokter yang menangani. Penyakit ini bisa saja kambuh jika anda terpapar lagi dengan penderita TB. Umumnya orang yang tinggal serumah dengan anda diperlukan untuk melakukan pemeriksaan untuk memastikan mereka tertular atau tidak dari anda, jika tertular maka akan dilakukan pengobatan juga, jika tidak tertular maka sebaiknya jaga jarak dengan keluarga anda tinggal serumah, gunakan masker." 
      } 
    },
    {
      component: NewsCard,
      tag: 'gejala penyakit tuberkolosis',
      props: { 
        title: "Apa ciri-ciri tubuh sudah sembuh total dari TB?", 
        detail: "" 
      } 
    },
    {
      component: NewsCard,
      tag: 'gejala penyakit tuberkolosis',
      props: { 
        title: "Apakah berat badan turun dan keringat malam termasuk gejala TB paru?", 
        detail: "" 
      } 
    },
    {
      component: NewsCard,
      tag: 'gejala penyakit tuberkolosis',
      props: { 
        title: "Apakah penderita TB bisa sembuh total  jika rutin minum obat dan menjaga pola hidup?", 
        detail: "" 
      } 
    },
    {
      component: NewsCard,
      tag: 'gejala penyakit tuberkolosis',
      props: { 
        title: "Tuberkolosis", 
        detail: "Penyakit menular yang disebabkan oleh bakteri Mycobacterium tuberculosis, yang paling sering menyerang paru-paru, tetapi bisa juga menyerang organ tubuh lain seperti ginjal, tulang belakang, dan otak." 
      } 
    },
    { 
      component: NewsCard2,
      tag: 'statistik global tbc',
      props: { 
        title: "5 Negara dengan Penderita TBC Terbanyak", 
        detail: "Indonesia menempati urutan ke-2 dengan kasus penderita TBC terbanyak sedunia menurut lorem ipsum dolor si amet.", 
        src: "/unesawin/img/grafik_berita.jpg"
      } 
    },
    { 
      component: NewsCard,
      tag: 'gejala penyakit tuberkolosis', 
      props: { 
        title: "Ini Gejala Penyakit TBC! No. 5 Bikin Merinding", 
        detail: "1.apalah \n 2.itulah" 
      } 
    },
    {
      component: NewsCard2,
      tag: 'statistik global tbc',
      props: { 
        title: "5 Negara dengan Penderita TBC Terbanyakk", 
        detail: "Indonesia menempati urutan ke-2 dengan kasus penderita TBC terbanyak sedunia menurut lorem ipsum dolor si amet.", 
        src: "https://cdn.pixabay.com/photo/2025/09/22/17/45/vietnam-9849104_960_720.jpg"
      } 
    },
  ];

  onMount(() => {
    window.scrollTo(0, 0);
  });
</script>

<div class="max-w-xl mx-auto min-h-screen h-full">
  <div class="bg-three px-6 min-h-screen">
    <div class="flex justify-between items-center py-5">
      <div class="flex justify-center items-center gap-2">
        <img 
          src="https://cdn.pixabay.com/photo/2012/04/18/23/36/boy-38262_1280.png"
          alt="profil-pic"
          class="w-12 h-12 rounded-full bg-gray-300"
        />
        <div>
          <p class="text-xs translate-y-1">
            Selamat {getWaktuIndonesia()},
          </p>
          <p class="text-lg font-semibold">
            Devain Rirung Samperuru
          </p>
        </div>
      </div>

      <button class="border-1 border-gray-400 rounded-full p-2">
        <img
          src="https://cdn.pixabay.com/photo/2015/12/16/17/41/bell-1096279_1280.png"
          alt="bell"
          class="w-5 h-5"
        />
      </button>
    </div>

    <h2 class="text-xl font-bold">
      Apa yang ingin Anda ketahui hari ini?
    </h2>

    <section class="sticky top-0 left-0 w-full z-[2] bg-three py-2">
      <SuggestionWrapper onSuggestion={handleSuggestion} />
    </section>

    <section class="flex flex-col gap-3 overflow-y-auto pb-28 pt-4 h-full">
      <h3 class="text-xl font-bold text-two">
        {newsTitle}
      </h3>
      {#each components as item (item.props.title)}
        {#if tag === '' || item.tag.includes(tag)}
        <button
          onclick={() => setPopUp(true, item)}
          class="text-left"
        >
          <item.component {...item.props as any} />
        </button>
        {/if}
      {/each}
    </section>
  </div>

  <Navbar page={"dashboard"} />
</div>

<PopUpBase popUp={{
  size: 'sm',
  closable: true,
  visible: popUpVisible,
  alignCenter: true,
  onClose: () => setPopUp(false, null)
}}>
  <div>
  {#if currentComponent}
    <currentComponent.component {...currentComponent.props as any} isZoomed={true} />
  {/if}
  </div>
</PopUpBase>