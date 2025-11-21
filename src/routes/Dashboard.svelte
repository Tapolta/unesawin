<script lang="ts">
  import Navbar from "../components/Navbar.svelte";
  import NewsCard from "../components/NewsCard.svelte";
  import SuggestionBtn from "../components/SuggestionBtn.svelte";
</script>

<div class="max-w-xl mx-auto h-screen">
    <div class="bg-three px-6 min-h-[100%]">
        <div class="sticky top-0 left-0 w-full z-[9999] bg-three pb-2">
            <div class="flex justify-between items-center py-6">
                <div class="flex justify-center items-center gap-2">
                    <img 
                        src="https://cdn.pixabay.com/photo/2012/04/18/23/36/boy-38262_1280.png"
                        alt="profil-pic"
                        class="w-12 h-12 rounded-full bg-gray-300"
                    />
                    <div>
                        <p class="text-xs translate-y-1">
                            Selamat siang,
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

            <h2 class="text-2xl font-bold mb-4">
                Apa yang ingin Anda ketahui hari ini?
            </h2>

            <div class="overflow-x-auto withespace-nowrap flex flex-col gap-2">
                <div class="flex items-center justify-between gap-2">
                    <SuggestionBtn title={"Gejala penyakit Tuberkolosis"} />
                    <SuggestionBtn title={"Dampak & Resiko"} />
                </div>
                <div class="flex items-center justify-between gap-2">
                    <SuggestionBtn title={"Solusi pencegahan"} />
                    <SuggestionBtn title={"Pentingnya deteksi dini"} />
                </div>
            </div>
        </div>

        <section class="flex flex-col gap-3 overflow-y-auto pb-24">
            <NewsCard title={"Tuberkolosis (TBC)"} detail={"Penyakit menular yang disebabkan oleh bakteri Mycobacterium tuberculosis, yang paling sering menyerang paru-paru, tetapi bisa juga menyerang organ tubuh lain seperti ginjal, tulang belakang, dan otak."} />
            <NewsCard title={"Tuberkolosis (TBC)"} detail={"Penyakit menular yang disebabkan oleh bakteri Mycobacterium tuberculosis, yang paling sering menyerang paru-paru, tetapi bisa juga menyerang organ tubuh lain seperti ginjal, tulang belakang, dan otak."} />
            <NewsCard title={"Tuberkolosis (TBC)"} detail={"Penyakit menular yang disebabkan oleh bakteri Mycobacterium tuberculosis, yang paling sering menyerang paru-paru, tetapi bisa juga menyerang organ tubuh lain seperti ginjal, tulang belakang, dan otak."} />
            <NewsCard title={"Tuberkolosis (TBC)"} detail={"Penyakit menular yang disebabkan oleh bakteri Mycobacterium tuberculosis, yang paling sering menyerang paru-paru, tetapi bisa juga menyerang organ tubuh lain seperti ginjal, tulang belakang, dan otak."} />
        </section>
    </div>

    <Navbar page={"dashboard"} />
</div>
