<script lang="ts">
  import RoleList from "../components/RoleList.svelte";
  import Mail from "@lucide/svelte/icons/mail";
  import Lock from "@lucide/svelte/icons/lock";
  import Eye from "@lucide/svelte/icons/eye";
  import EyeClosed from "@lucide/svelte/icons/eye-closed";
  import Phone from "@lucide/svelte/icons/phone";
  import Role from "../enums/Role.enum";
  import LoginMethod from "../components/LoginMethod.svelte";
  import { IdCard, LoaderCircle, User } from "@lucide/svelte";
  import type { SignUpStruct } from "../structures/user.struct";
  import { signup } from "../utils/login.utils";
  import PopUpBase from "../components/popup/PopUpBase.svelte";
  import { unmount } from "svelte";
  import { push } from "svelte-spa-router";

  let isPassVisible = $state(false);
  let isPassCVisible = $state(false);
  const signup_user = $state({
    full_name: '',
    email: '',
    NIK: '',
    password: '',
    confirm_password: '',
    phone_number: ''
  });

  let NIK_alert = $state(false);
  let password_alert = $state(false);
  let confirm_password_alert = $state(false);
  let loading_submit = $state(false);
  let canSubmit = $derived(
    !NIK_alert &&
    !password_alert &&
    !confirm_password_alert &&
    signup_user.full_name.trim().length > 0 &&
    signup_user.email.trim().length > 0 &&
    signup_user.NIK.trim().length > 0 &&
    signup_user.password.trim().length > 0 &&
    signup_user.confirm_password.trim().length > 0 &&
    signup_user.phone_number.trim().length > 0 &&
    !loading_submit
  );
  let message = $state('');
  let popUpOpen = $state(false);

  const passwordValidation = () => {
    const pwd = signup_user.password;

    if (pwd.length === 0) return;

    const panjangOk = pwd.length >= 8;

    const adaUpper = /[A-Z]/.test(pwd);

    const adaLower = /[a-z]/.test(pwd);

    const adaNumber = /[0-9]/.test(pwd);

    const adaSymbol = /[^A-Za-z0-9]/.test(pwd);

    password_alert = !panjangOk || !adaUpper || !adaLower || !adaNumber || !adaSymbol;
  };

  const passwordConfirmationValidation = () => {
    if (signup_user.confirm_password.length === 0) return;
    confirm_password_alert = signup_user.confirm_password !== signup_user.password;
  };

  const togglePassVisible = () => {
    isPassVisible = !isPassVisible;
  };
  const togglePassCVisible = () => {
    isPassCVisible = !isPassCVisible;
  };

  const submitHandle = async() => {
    if (canSubmit) {
      const final_user: SignUpStruct = {
        full_name: signup_user.full_name,
        email: signup_user.email,
        NIK: Number(signup_user.NIK),
        password: signup_user.password,
        phone_number: Number(signup_user.phone_number)
      }

      loading_submit = true;

      const res = await signup(final_user);
      
      loading_submit = false;

      message = res?.message || '';

      if (res.success) popUpOpen = true;
    }
  };

  const goLoginPage = () => {
    popUpOpen = false;
    push('/login');
  }
</script>

<section class="bg-two h-full min-h-screen flex flex-col justify-between max-w-xl m-auto">
  <div class="h-30"></div>

  <img 
    src="/unesawin/img/flower-bg.png"
    alt="bunga"
    class="absolute -left-15 w-60 top-10 z-[0] filter invert brightness-0 opacity-30"
  />

  <div class="bg-one min-h-[90vh] rounded-t-4xl px-8 py-4 z-1">
    <a href="/unesawin/#/login" class="text-two font-semibold">{`<- Kembali`}</a>

    <h1 class="text-two font-bold text-4xl my-8">
      Daftar
    </h1>

    <RoleList role={Role.Pengguna} />

    <div class="w-full my-8 flex flex-col gap-5">
      <div class="flex items-center bg-white rounded-xl w-full px-2 gap-2">
        <User class="text-gray-400"/>
        <input 
          type="text"
          class="bg-white w-full h-10"
          placeholder="Nama Lengkap"
          bind:value={signup_user.full_name}
        />
      </div>

      <div class="flex items-center bg-white rounded-xl w-full px-2 gap-2">
        <Mail class="text-gray-400"/>
        <input 
          type="email"
          class="bg-white w-full h-10"
          placeholder="Email"
          bind:value={signup_user.email}
        />
      </div>

      <div>
        <div class="flex items-center bg-white rounded-xl w-full px-2 gap-2">
          <IdCard class="text-gray-400"/>
          <input 
            type="text"
            class="bg-white w-full h-10"
            placeholder="NIK"
            maxlength="16"
            bind:value={signup_user.NIK}
            oninput={(e) => {
              signup_user.NIK = (e.target as HTMLInputElement).value.replace(/\D/g, '');
            }}
            onfocusout={(e) => {
              if ((e.target as HTMLInputElement).value.length != 16 && 
                (e.target as HTMLInputElement).value.length != 0) NIK_alert = true
              else NIK_alert = false;
            }}
          />
        </div>

        {#if NIK_alert}
        <p class="text-xs italic text-five">
          *NIK harus memiliki panjang 16 angka
        </p>
        {/if}
      </div>

      <div>
         <div class="flex items-center bg-white rounded-xl w-full mb-1 px-2 gap-2">
          <Lock class="text-gray-400"/>

          <input 
            type={isPassVisible ? 'text' : 'password'}
            class="bg-white w-full h-10"
            placeholder="Kata Sandi"
            bind:value={signup_user.password}
            onfocusout={passwordValidation}
          />

          <button onclick={togglePassVisible} class="text-gray-400">
            {#if isPassVisible}
            <Eye />
            {:else}
            <EyeClosed />
            {/if}
          </button>
        </div>

        {#if password_alert}
        <p class="text-xs italic text-five">
          *Password harus minimal 8 karakter dan mengandung huruf besar, huruf kecil, angka, 
          serta simbol.
        </p>
        {/if}
      </div>

      <div>
        <div class="flex items-center bg-white rounded-xl w-full mb-1 px-2 gap-2">
          <Lock class="text-gray-400"/>
  
          <input 
            type={isPassCVisible ? 'text' : 'password'}
            class="bg-white w-full h-10"
            placeholder="Konfirmasi Kata Sandi"
            bind:value={signup_user.confirm_password}
            onfocusout={passwordConfirmationValidation}
          />
  
          <button onclick={togglePassCVisible} class="text-gray-400">
            {#if isPassCVisible}
            <Eye />
            {:else}
            <EyeClosed />
            {/if}
          </button>
        </div>
  
         {#if confirm_password_alert}
          <p class="text-xs italic text-five">
            *Password tidak sama.
          </p>
          {/if}
      </div>

      <div class="flex items-center bg-white rounded-xl w-full px-2 gap-2">
        <Phone class="text-gray-400"/>
        <input 
          type="text"
          class="bg-white w-full h-10"
          placeholder="Nomor Telepon"
          bind:value={signup_user.phone_number}
        />
      </div>
    </div>

    <button 
      class={`${canSubmit ? 'bg-two' : 'bg-four'} 
        w-full py-2 mt-4 rounded-xl text-white font-semibold flex items-center justify-center`}
      disabled={!canSubmit}
      onclick={submitHandle}
    >
      {#if loading_submit}
      <LoaderCircle class="w-6 h-6 animate-spin" />
      {:else}
      Daftar
      {/if}
    </button>

    {#if message}
    <p class="text-sm text-five font-bold">
      *{message}
    </p>
    {/if}

    <LoginMethod />
  </div>
</section>

<PopUpBase popUp={{
  closable: false,
  visible: popUpOpen,
  size: 'sm',
  alignCenter: true,
}}>
<div class="flex flex-col items-center justify-center gap-8">
  <h6 class="text-3xl text-two">
    {message}
  </h6>

  <button
    onclick={goLoginPage}
    class="bg-two text-white px-2 rounded-lg py-1 text-xl"
  >
    Masuk!
</button>
</div>
</PopUpBase>