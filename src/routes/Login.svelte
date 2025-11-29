<script lang="ts">
  import RoleList from "../components/RoleList.svelte";
  import Mail from "@lucide/svelte/icons/mail";
  import Lock from "@lucide/svelte/icons/lock";
  import Eye from "@lucide/svelte/icons/eye";
  import EyeClosed from "@lucide/svelte/icons/eye-closed";
  import Role from "../enums/Role.enum";
  import { push } from "svelte-spa-router";
  import LoginMethod from "../components/LoginMethod.svelte";

  let isPassVisible = $state(false);
  let role: Role = $state(Role.Pengguna);

  const togglePassVisible = () => {
    isPassVisible = !isPassVisible;
  }

  const onLogin = () => {
    switch (role) {
      case Role.Pengguna:
        push('/dashboard');
        break;
      case Role.Pemeriksa:
        push('/staff-dashboard');
        break
      case Role.Radiolog:
        push('/radiolog-dashboard');
        break;
    }
  }
</script>

<section class="bg-two h-full min-h-screen flex flex-col max-w-xl mx-auto">
  <div class="h-[30vh] flex flex-col justify-center pl-10 z-1">
    <h1 class="font-bold text-5xl text-white">
      Hai!
    </h1>
    <p class="text-white text-md font-semibold">
      Selamat datang pada layanan 
      <br/> UNESAWIN
    </p>
  </div>

  <img 
    src="/unesawin/img/flower-bg.png"
    alt="bunga"
    class="absolute -left-15 w-60 top-10 z-[0] filter invert brightness-0 opacity-30"
  />

  <div class="px-8 py-10 bg-one rounded-t-4xl min-h-[70vh]">
    <h1 class="text-two text-4xl font-bold mb-8">
      Login
    </h1>

    <RoleList bind:role={role} />

    <div class="w-full my-8">
      <div class="flex items-center bg-white rounded-xl w-full mb-6 px-2 gap-2">
        <Mail class="text-gray-400"/>
        <input 
          type="text"
          class="bg-white w-full h-10"
          placeholder="Email"
        />
      </div>

      <div class="flex items-center bg-white rounded-xl w-full mb-1 px-2 gap-2">
        <Lock class="text-gray-400"/>

        <input 
          type={isPassVisible ? 'text' : 'password'}
          class="bg-white w-full h-10"
          placeholder="Kata Sandi"
        />

        <button onclick={togglePassVisible} class="text-gray-400">
          {#if isPassVisible}
          <Eye />
          {:else}
          <EyeClosed />
          {/if}
        </button>
      </div>

      <div class="flex w-full pt-1">
        <a href="/forgot" class="font-bold text-two ml-auto">
          Lupa sandi
        </a>
      </div>
    </div>

    <button
      onclick={onLogin}
      class="bg-two w-full py-2 rounded-xl text-white font-semibold"
    >
      Login
    </button>

    <LoginMethod />

    <p class="text-center">
      Tidak punya akun? 
      <a href="/unesawin/#/sign-up" class="text-two font-semibold">
        Daftar
      </a>
    </p>
  </div>
</section>