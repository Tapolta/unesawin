<script lang="ts">
  import { Phone } from "@lucide/svelte";
  import Navbar from "../components/navbar/Navbar.svelte";
  import { getWaktuIndonesia } from "../utils/time.utils";
  import PopUpBase from "../components/popup/PopUpBase.svelte";
  import LengkapiProfile from "../components/popup/LengkapiProfile.svelte";
  import Header from "../components/Header.svelte";

  let popUpStatus = $state(true);
</script>

<div class="max-w-xl mx-auto min-h-screen h-full">
  <div class="bg-three px-6 min-h-screen">
     <Header />

    <h2 class="text-xl font-bold pb-3">
      Apa yang ingin Anda ketahui hari ini?
    </h2>

    <section class="flex items-center justify-between bg-white text-black p-4">
      <p class="w-1/3 font-bold text-md">
        Butuh Bantuan Cepat?
      </p>
      <div class="w-1/3">
        <p class="pb-1 text-xs text-center pb-2">
          Hotline TBC Nasional
        </p>
        <div class="flex gap-2 justify-center items-center">
          <Phone />
          <p class="text-2xl font-bold">
            119
          </p>
        </div>
      </div>
      <div class="w-1/3 flex justify-center items-center">
        <Phone class="bg-ten text-white w-10 h-10 p-2 rounded-xl" />
      </div>
    </section>

    <section class="flex gap-2 mt-4">
      <div class="w-1/2 bg-six/20 text-six text-center p-4 flex flex-col justify-between">
        <p class="text-[0.7rem]">
          Pengingat Skinning Rutin Anda
        </p>

        <h6 class="font-bold text-[0.8rem] mb-4">
          Lakukan Deteksi Batuk Mingguan Anda Sekarang!
        </h6>

        <p class="italic text-[0.7rem]">
          terakhir cek: 1 tahun lalu
        </p>
      </div>

      <div class="w-1/2 relative flex justify-center bg-four rounded-lg text-center">
        <div class="absolute rounded-full p-2 -translate-y-2 bg-two z-2"></div>

        <div class="bg-white h-full w-full -rotate-3 rounded-lg p-4">
          <h6 class="font-bold text-[0.8rem] mb-1">
            Tips Sehat Harian
          </h6>

          <p class="text-[0.7rem]">
            Tingkatkan Ventilasi Rumah. Pastikan jendela dan pintu terbuka minimal 2 jam setiap 
            hari untuk mengurangi penumpukan bakteri di udara.
          </p>
        </div>
      </div>
    </section>

    <section class="rounded-xl bg-white flex items-center mt-4 h-32 overflow-hidden">
      <img
        src="https://cdn.pixabay.com/photo/2014/08/26/21/53/dentist-428645_640.jpg"
        alt="kisahInspiratif"
        class="w-1/2 h-full object-cover rounded-l-xl"
      />

      <div class="flex flex-col ml-4 w-1/2">
        <div class="flex">
          <p class="text-[0.6rem] px-2 py-1 mb-1 rounded-md font-bold bg-two/40 text-two">
            Kisah Inspiratif
          </p>
        </div>

        <p class="text-[0.7rem] font-bold">
          Dari Pasien Menjadi Penyintas: Kisah Inspiratif Melawan TBC dan Kembali Sehat.
        </p>
      </div>
    </section>

    <section class="mt-4 pb-18">
      <div class="flex items-center justify-between mb-4">
        <h1 class="font-bold text-xl">
          Baca Artikel Terbaru
        </h1>

        <button class="font-bold px-2 text-two border-2 border-two text-[0.6rem]">
          Lihat Semua
        </button>
      </div>

      <ul class="flex justify-between gap-1 whitespace-nowrap overflow-x-auto">
        <li>
          <button class="font-bold px-2 text-two border-2 border-two text-[0.6rem]">
            Edukasi & Kesadaran
          </button>
        </li>
        <li>
          <button class="font-bold px-2 text-two border-2 border-two text-[0.6rem]">
            Pencegahan & Gaya Hidup
          </button>
        </li>
        <li>
          <button class="font-bold px-2 text-two border-2 border-two text-[0.6rem]">
            Motivasi & Dukungan
          </button>
        </li>
        <li>
          <button class="font-bold px-2 text-two border-2 border-two text-[0.6rem]">
            Pertanya
          </button>
        </li>
      </ul>

      <ul class="flex overflow-x-auto gap-4 snap-x snap-mandatory p-2">
        <li class="min-w-[70%] snap-start bg-white rounded-xl p-2 shadow">
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PEBAQEA8QDhUWFRUVEA8PEA8VFhcPFRUWFhYVFxYYHSggGB0lHRcVITEhJSkrLi4uFyAzODMtNygtLisBCgoKDg0OGhAQGi0lICUtLS0tMi0tLS0tLS8tLS0tLS0tNy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQQFAgMGBwj/xAA6EAABAwIDBQYEBgEDBQAAAAABAAIRAyEEEjEFQVFhcQYTIoGRoTKxwfAHI0JSctHhFDNDYnOCksL/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQMEAgX/xAAlEQACAgICAgMAAgMAAAAAAAAAAQIRAwQhMRJREyJBcYEFFDL/2gAMAwEAAhEDEQA/APX0JJq4qGmkmgGhJNCQTSQoJMkJJoATSTQAhCEAIQsK9UMaSVAM5SzBecdru2Z700aRyNZPeOM3Ii8g/CNwFyd4F1Cb2yc0tpZ6lSpY5AGuMne4OGvy3KiexCJdDBKR6oHA6Geia85HbDFEeGXGYygMd6kCPQrbh/xC7p2TEse79xYwHKOYB+a5jt45OjqWrkSs9BQqvY/aDCYye4qhxGrCHNcPJwCs1pTT5Rnaa4Y0JIUgEISQAUkFCAEimkpIEhCSEAkU0kAkISQGSaQTQAmkmgGhJNANCEISNCSagkAmkmgBNJCAFx/bjb1LDNuBUcPhYdA6QZPGwPqF0e29otwuHrYhwzCmwuy8XaNHmSAvFMfiHY6oXvJkyXcGgiSPms2xl8FSL8GPzdspmS/FiqfFTJL2kGRmLh4SNRcxBWGzKNZtXFlzrGcpafjzS4knXSB5lWhwIIy0yA7RreA4mNNBx0W+hsDGAGKZvuHC+nDVZE0+zb4tdEI7bq4es6k0EgNDWhv6nQAPWPuSooxbKVUur1C+o8y9zLhm7LTG87p66C5m47ZOKbmc6mdLuIuCLSsMfgm06FGoyjL/ABGoSLgjKABwmXGV14xIuRJc9tFra+HqOY8GQWZc0/zOvXRd5+HXberjKhw2ILXPylzHgNBOWJDsvhmDNgNDqvIcVUrgnvQ8CZBaIblIsA3Thcz63Vh2MxjhiqFWjDn03g9252UEEgFoIEgka62my7wrwd3wVZqmuuT6PQtGCxLa1NlRoIDhMOiQd7TG8GR5Let5hBJCRQAhCFJAkihCEAkhCASSaSAEkIQGSEk0A0IQgGhAQgGmkhANCEISCaSEJGiUkKAQe0GF77C4imNXU3R/ICR7gL5/ftbIQwCxB14iBfivoLa+NGHoVKpaX5R8I1JNgAvnrtds1tKo17HOc1wzNDwA5riCC10WkLJsqLaTNeBS8XJdFr2LeK2IykfDc33n59V7LgmtDRAXkv4Z7FcQ7EOmCYpm+g1P08l6phC5oErPFJPg1W3EsnMY4XaD5KHWwFAwO7bbkFKpVmOFkQJVjOFwUu1Ni4epTLXU2kRGgXlH4d7Bedq16TRAZ34L7S1rXZQ4TYm4EERBK9nx5ABP3KpPw7wEDEYyG/n1H5CBfKKj5M8CY/8AVdYo/aivNL6nWYDCto02Um6NaGg30AiTz485W9JC2mEaSEKSASQkhAJJpIAQhJACRTSQCQhCAaaSEA00k0AJpJoATSQgGhJNACJSQgHKJSQgIm16YdRcDpYnoHBea9qOzNTEwXPY2XCIbo08eMR7r1Ko3MCOIhchtijWYWBzYEkBzcuUgCevkeaybGNtpo3a2VKDizPZuAbQoMpUtGtgH5n1VXV26aLnU31gH/sqgtHKJHuFbYDFAWKm4rAYfEgGpTa8jeWgrP4mpP8ATh8P22xAqlrqIe2Y72iHED2Eq62r21GFyCqLvu1gY7Nlgxu6equaezaFMgMY0HkAtPaTYtHEmn3jR8EC3Aokzq16Keh2gdVIJpPgm2aWiON/kuz7OYTuMJhqURkpMEeS4vZfZ91GoJrVHtBhlNxtc2nivRFp1l2zDtvlIyQkhajJY0kIQgEkIQAkmkgBJNIoBIQhAJCEIQMIQhCRppBCAaEIQDQkhANCSEA0kJSgHKUpErCpUDRJIaN5JgIRZnKqO0zgKTTP6tPIrfiNqU2g5TnItAmJ5rito4qpUq1nPMkkMYNwYBm+Z9lzl+sLZ3i+80kTsKQYKtaWbRvqdy5/YmLoh0VTaPDci54ldCMhLQyoAHGLnQQTZec+z2Mf/NkHamLxWFc11LCOxNMgGo9pMhu8AR4ig7dbiC0U6dTwjxOcCAOV7zrbdF4suow9HK0DO4odQHArrxZz8sb5RR7KBrVwf0s8R/l+ket/JdKCoWFDQ94aADYn3ClgrZhVQPO2JXkZmhYymrSgaEk0AIQkgBCEIBIQkgBJNJACEIQAmkE0AJpIQGSEkIBoSQgGlKFoxVcU2yddw5qUrIbo2VKrWiXODRxJAWirjWASDm4R/a5/GjMcz4IJEugSHTaeI3A7lJpkiAST14g/5B81d8SRT8rZvq4+o7Q5OQgn1I+ir62Ic98FxcAJ8XEqRWHvPyURoEu5WHQCFbFJFcm2Y1KZDRAG8mOMlUW125Hg7iPf7+SkbT7U4ShP5grPaIFGlLqhfAtli195suTwu3sZWH+oxmFy4Z5in3J8dPxfG4mSRru46BUbMVLH4v8Ar+S/VbWTyXPv+DfWq5XZSbO+E8HcE9nbYfQxNDvPE0PhsnwkuloJPG+9SMRsOpWpd7Qc2vTOjmkAg8wT8iVzGNqYikctShUfGhyun1iCvIeOS4aPajlVXFnv9GtYHM3yUfE4wM/UTzF/kvIau1sS/ue6q1KYcWjuKgO8wWzq1d7hsSXU8haJGr97j6n73KXJ9HSguyY3GPa4vBuYF40VnhdqtcBnGU8YJHtoqNt4BMf0sMPV8RjQjMCL3nxe8r0NVKWOv08ncco5L/GddTqNd8JDuhWa51jvubrcMa6kZc4xvBk2+lvkrnif4ULL7L1C10qgcA4aFZqotsaEJIBoSQgApIQgBJCEAISQhA0IQhI0JJoATSQgGkhJCBqg2jX7x5h3w2GUiY4wrfGVslN7uAt10C5B4p1HZQ8sqC4/S8c2/uCvwxvkozSrgnUK2cmnUAzATyew2zD5Ebim2pD2N1EOEnXiJ52N+iqq9apLQ4AVmmaThZtX9zIOjiN3mpz67ago1WTBM8CJBBnnujcVe4lKkT3RI3xP9f2tDWCSPZbM1yfbpf6oDZd5Lno6Kt2y6GYuFNocTcwJmyg4bCGlXczWnUc4tBuGuMkjobn1V85sboULEvylhifG0DzMfVcZ4/JjaZbrz+PImigfsY4HEjE4bNlcYq0Rmy5TqQ3hvgbxzVj2g7qJazM7gNJ6rpHsa4CQCq3aFAQSV5H+xLwUUeysEfNy9nAYGic5JkuzB3HTgN1l0mC2kGGCCTyB+ar8S0h2Zoj5p1KBtVYZggPaTv5eyzqTfZqcVXB2mDoCq2951HI7lGrYTu6ktkDNdskgNdw4DkFI2FjMrQC0f4VniqPeNkWO75wtutl8Jc9Hn7eF5I8dor6Vp5X8isHOzuadwGnnZaqp+MafCOkkg/VOrVIdlYJedJ0a397veBvjqV6yPHbrgs9mYlwqZTlDSLNnxSN/RXC5R1Wnh4LqrGOJkvqvaHOPH/AXT0Koe1rmmQQCCOBVGWNOy7FL8NiaSFSXDSQhACEJIASQhCAQhCAE0kIBoQhACJSQSpASkSkSsSVJBXdoKhFGBElwFzA3m/ouYqUazmw6lRrt3AOc1w5teJgq67T+NrGWi5M+Q/tUGH2Xh5tTM8WBzdecha8KqJjzcyowfi3D8qqHEH4W1wBUB3Br5yVektd5qRSrW3jxtLmmfikeIAwQTvBA48SZVPZrYiasEQWuqF7d1sr5CWL2cO6LGyIb4eRFxl/bBAsLcla3HorUZLkld9AzcyJ6lSKTpuqfOThmkzOVpPI2Km4KpaOCrlHgsjLk3uUDGkgCASczSI3+IKwkRdb8Fg7hzh0B+ZWfLljCLs0YcTySVEmjQtJUDaVO0K2qVWt19lW42rYmI4Zl4rR7ifJxm1D4sjTB3uUGntWlSY9pOZrLlzo8T+Q9PZPbuNZTzkuAH6nE+cKn2a4Viaj2QACabHD9W55+7K7X1ZZZcdFextxwxt9/iPTOztVtWixw3gGCIIncVe0idNy4jsfjxLmEzBHoQD99F2jDaV1kh4TcfRxjyfJBS9mnaWCmHt1BBc0fqAm3uq2nSkEy5snMcsgyeMXJ3XMW0V5Rfm1WD8MDMWOvXitWtnr6MybWvf3RRV6AaD/uN3yxo/8Am6u+z1QOoN/M72C4SRBF7NI5CFHrUosRH3qFI2SA3OOJzdbAfQLXkdxMUFUizQsQU1nNA00kKACEkIAQhCAEIQgBCEKQCEJFAEpEoJWJKkgCVgSgla3FSQUm1XZq38QB56/VQ+7vMk9SR7LZiKsue7iTCxZ116dVsjwjHLlm6kGjcBvsthIjhOvyWkHX0Fls1t6AcSoJRVYg5cNHAAb9ZDVswlUmzZJOgGttVYP2E57MrnZQScwbrBdmF9FcYXA06QhrQPmep3qjPtRgqStmjX1JZH5PhEfBYQ2c8Au9h0U82CyIUTE1w0EyvJlJydyPXjBRVRRjXe1oLnGAFx+3dquxL20aIyD95n1/wrLaFY1XBguToFLwOyWgNJFxqVZhx+XL6OcuTw4XZzO0uyVNlHvHl1VwhxLza5Gg0Co3MAc1ok/l+IEf8k+LyXqW2KYFEg8AfIOXC4vLAMbtYHDeV6+s0o1R4u2nKV2U2wcaWYp7bCTA6hoPylenbPxOYeS8dbU7uq9/7ak24ANnfwXpOy8Rlgzb6LFvwqal7N3+Pn5Y3H0dG45bqTTfIlRmuDh1Wis57WkNI880RvuLhUYIXKy/YnUaLJzGvEHyO8KFem/juPRasPjwY3QNGh7vpKVfGAvPCw4Xgbit0U+jz5P9LhpWSh4KpIjhp0UoFVtHadmaEk1B0CEk1ABCSFIBNJCAEJSiVJA5WKCkSgAlYEoJWJKkgRKj16kNceAJ9AtjiomOd+W/+LvkV0kcvopqbJ181tbTvP8AajnENYAC4ZiJDL5jzgAmOcKIzGVnkN7tuU/rBrNA55pBPktaRktFs0y5rB8RNrHU+SvcLgWUxxO9xXPYV4p5MpMB7fie90jMN7pPHer1+JBkAiRq3QjqFRlvpF+JLtklxAKZUI1iRPDXpxWqvjCBA1WDYjSTN+tLlo34nFBqocZiy+eCWIxBcYB6ngua7XbUfTp9xh2ufUd8WXUM/s6LLCDySpGyc1jj5MtezVf/AFGNJF2U2uvxqEhvoBI9V3vdCFx34e7Ocyk5xZkJDAW8DBJHv7LuALCV6MoqH1j+Hmwm5ryl+lXtunNN/wD23fL/AAvMqtNraltSY+/vgvVtoNlr/wCJHsuCxFM/FciTa/EQQdOOi060qTRl2o20zia9KXVrCzpuTEFouuh7M4/NSYCbgZdeFh7QqfFNAq1BuJGki8BRaeN7hwEOyA5srXCSYiJOmgvy9LNnD8saKtXY+KVnrWzcQMsuMbhzK3F5ecrWzxmYhcJhO11N1+5MiA1kkgTwv6kq8wHaVji1ry5oM2phrQSNxMknzWXHhcI0bMmdTdnTA5Q45vhBLnaMaBcrmaOKL5feHOLr8CbdLQse023W1WNwlMFocQahmfywZ3ayQPKVCY6BYzuWnFDi2Zss+aRcUce9rmuYZLTdp/Uz9Teu8HlzXWMeCARoRI6FecsrkOEcQu92Y6aNKf2N9IsuM8ao6wSuyYCslgCnKzmgyQlKJUEjQkhACEkIQCUoSJUgCUiUErAlABKwcUErW4qUQJ5UauZBHEFbHuUeo5do4ZymDoMY3KZdfNUBP+5UJiXneNLaabgpNfEgHWdQdL6BU2PxXdV6rCNNJ4atPuo78UXE8CZ81tXJhcqLutizlJBvBIbzF10lVrK7GuPjBaH0jvykTLTqD0XBd8S0i+itdkdpqdKgyi6ZZAD9Ym8RuA03KrLHqi3DPuy4p03MPgrVjvyGq51v/KSVhjMW50NbqRc9FV4jtDQqOgRTJ8XR0TmExFtQoeN29Sw9IvLwbnS+omB7rHsY24NJG3XyJZE2+CZtna9PBUS9xkmzG73VDoFQbHw7qzu+Lzmd4nG0XuB8gqfCF+0nmq8GP+Nn7W/2ug2LQqMAa0TAAvyt9Fdqa/xx8n2yjc2vll4rpHpnZykadBpdqSSemg+iuiQQCouBpgUWN4NA9llRdYjgs8nbbNUFUUgqNlrl5ji2APcC/KRFg435GLHgvUSLFeX47CuNR+WBDjv18p6rTq9sybfSKXaLCKjzp9RoqTGU83Pn5rrMXh5centJVVUwoErb2YOiiwVaC5pMHeDEEcQDadxVlR2jUpkRTo1B/wBQqNPs6PZVu2MN3bmVIIvFtYUzaVA4WqKbjmDgHUnxAew8OY3j+wqGlZcpPtFrgXkuNRxzPOo3cgAralVkbumi5vC1uCsWVHD7IVi4RxZYCm4nK2bmG8cxMBelUGZWtbwAHoIXG9j6BqPdVI8LfhJ3vI+g+YXZArLmlbNmCNKzcCnK1grIFUF5nKawlOUJMkLFEoBoSSQBKxJTQpIMSVgShCAwcVqe5CF0jlmh7lGquQhdI5Zx3a/C+JlUb/C6OIuD6T6KooAlCFpg+DDkVSJoEa26KhxVO7rgjcHNn3SQpfJCbRV4/awZ4YBdFoDx7zZQ2MfVaS4+W5JCrhzJoum6gmdl2LpZKDnRME+oOnmr/sri/wDVUjUFIU3AugTNxofU/NJC6k6XHoY0m+fZ3OycUWhrHdB6KxpnxOCELAz0kSNy8y21iarH1MmWznF2YEyM2WBe29CFo1VcjLtuor+zUDnJ6X9lX1WxP3970IW1HnN8Fd2iw84cOGoc0+chdNh8DRxeEpU67c4NNkHRwcGiHNOoPNCFTkLsL5Kh/Y7EUzNCq2q3hU8Lvax626Kw2f2ZxNRw7/LRaP2uDnEcosOvshCqcnRcsas7fB0WUmNpsGVo0H15lSmuTQqmXozBWQKELk6MgU5QhCQlEoQoAShCEB//2Q=="
            class="w-full h-32 object-cover rounded-lg"
            alt=""
          />

          <h3 class="text-[0.7rem] font-bold mt-2">
            Bukan Batuk Biasa: Kenali 5 Gejala TBC yang Sering Diabaikan.
          </h3>

          <div class="flex">
            <p class="text-[0.6rem] px-2 text-two bg-two/40">
              Edukasi & Kesadaran
            </p>
          </div>
        </li>
         <li class="min-w-[70%] snap-start bg-white rounded-xl p-2 shadow">
          <img
            src="data:image/jpeg;base64,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"
            class="w-full h-32 object-cover rounded-lg"
            alt=""
          />

          <h3 class="text-[0.7rem] font-bold mt-2">
            Bukan Batuk Biasa: Kenali 5 Gejala TBC yang Sering Diabaikan.
          </h3>

          <div class="flex">
            <p class="text-[0.6rem] px-2 text-two bg-two/40">
              Edukasi & Kesadaran
            </p>
          </div>
        </li>
      </ul>

    </section>
  </div>

  <Navbar page={"dashboard"} />
</div>

<PopUpBase popUp={{
  closable: false,
  size: 'lg',
  visible: popUpStatus,
  alignCenter: true,
}}>
  <LengkapiProfile bind:popUpStatus={popUpStatus} />
</PopUpBase>
