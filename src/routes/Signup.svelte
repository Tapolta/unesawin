<script lang="ts">
    import RoleList from "../components/RoleList.svelte";
    import Mail from "@lucide/svelte/icons/mail";
    import Lock from "@lucide/svelte/icons/lock";
    import Eye from "@lucide/svelte/icons/eye";
    import EyeClosed from "@lucide/svelte/icons/eye-closed";
    import Phone from "@lucide/svelte/icons/phone";
    import Role from "../enums/Role.enum";

    let isPassVisible = $state(false);
    let isPassCVisible = $state(false);

    const togglePassVisible = () => {
        isPassVisible = !isPassVisible;
    }
    const togglePassCVisible = () => {
        isPassCVisible = !isPassCVisible;
    }
</script>

<section class="bg-two h-full min-h-screen flex flex-col justify-between max-w-xl m-auto">
    <div class="h-30"></div>

    <img 
        src="/img/flower-bg.png"
        alt="bunga"
        class="absolute -left-15 w-60 top-10 z-[0] filter invert brightness-0 opacity-30"
    />

    <div class="bg-one min-h-[90vh] rounded-t-4xl px-8 py-4 z-1">
        <a href="/#/login" class="text-two font-semibold">{`<- Kembali`}</a>

        <h1 class="text-two font-bold text-4xl my-8">
            Daftar
        </h1>

        <RoleList role={Role.Pengguna} />

        <div class="w-full my-8 flex flex-col gap-5">
            <div class="flex items-center bg-white rounded-xl w-full px-2 gap-2">
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

            <div class="flex items-center bg-white rounded-xl w-full mb-1 px-2 gap-2">
                <Lock class="text-gray-400"/>
                <input 
                    type={isPassCVisible ? 'text' : 'password'}
                    class="bg-white w-full h-10"
                    placeholder="Konfirmasi Kata Sandi"
                />

                <button onclick={togglePassCVisible} class="text-gray-400">
                {#if isPassCVisible}
                    <Eye />
                {:else}
                    <EyeClosed />
                {/if}
                </button>
            </div>

            <div class="flex items-center bg-white rounded-xl w-full px-2 gap-2">
                <Phone class="text-gray-400"/>
                <input 
                    type="number"
                    class="bg-white w-full h-10"
                    placeholder="Nomor Telepon"
                />
            </div>
        </div>

        <button class="bg-two w-full py-2 mt-4 rounded-xl text-white font-semibold">
            Daftar
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
                    src="/img/facebook_icon.webp"
                    alt="google icon"
                    class="w-12 bg-white p-2 rounded-xl"
                />
            </li>
            <li>
                <img 
                    src="/img/google_icon.png"
                    alt="google icon"
                    class="w-12 bg-white p-3 rounded-xl"
                />
            </li>
            <li>
                <img 
                    src="/img/apple_icon.png"
                    alt="google icon"
                    class="w-12 bg-white p-2 rounded-xl"
                />
            </li>
        </ul>
    </div>
</section>