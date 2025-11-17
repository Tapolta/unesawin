<script lang="ts">
    import RoleList from "../components/RoleList.svelte";
    import Mail from "@lucide/svelte/icons/mail";
    import Lock from "@lucide/svelte/icons/lock";
    import Eye from "@lucide/svelte/icons/eye";
    import EyeClosed from "@lucide/svelte/icons/eye-closed";
    import Role from "../enums/Role.enum";
    import { push, replace, pop } from "svelte-spa-router";

    let isPassVisible = $state(false);

    const togglePassVisible = () => {
        isPassVisible = !isPassVisible;
    }

    const onLogin = () => {
        push('/unesawin/dashboard');
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

        <RoleList role={Role.Pengguna} />

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

            <div class="flex w-full">
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

        <div class="flex items-center my-4">
            <div class="flex-grow border-t-3 border-gray-300"></div>
            <span class="px-4 text-gray-500">
                atau Login dengan
            </span>
            <div class="flex-grow border-t-3 border-gray-300"></div>
        </div>

        <ul class="flex justify-center gap-8 my-8">
            <li>
                <img 
                    src="/unesawin/img/facebook_icon.webp"
                    alt="google icon"
                    class="w-12 bg-white p-2 rounded-xl"
                />
            </li>
            <li>
                <img 
                    src="/unesawin/img/google_icon.png"
                    alt="google icon"
                    class="w-12 bg-white p-3 rounded-xl"
                />
            </li>
            <li>
                <img 
                    src="/unesawin/img/apple_icon.png"
                    alt="google icon"
                    class="w-12 bg-white p-2 rounded-xl"
                />
            </li>
        </ul>

        <p class="text-center">
            Tidak punya akun? 
            <a href="/unesawin/#/sign-up" class="text-two font-semibold">
                Daftar
            </a>
        </p>
    </div>
</section>