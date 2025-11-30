<script lang="ts">
  import { Bot, MessageCircle, Settings, User } from "@lucide/svelte";

  let { status } = $props<{
    status: 'mode_ai' | 'chat' | 'profil' | 'pengaturan'
  }>();
</script>

<section class="fixed bottom-0 w-full bg-white px-12 py-6 flex justify-between z-[10] max-w-xl mx-auto">
  <div class="flex flex-col items-center gap-1">
    <div class={`${status === 'mode_ai' ? 'bg-two' : 'bg-four'} rounded-full p-1`}> 
      <Bot class="text-white h-8 w-8" />
    </div>
    <p class={`${status === 'mode_ai' ? 'text-two' : 'text-four'} text-two font-bold text-xs`}>
      Mode Ai
    </p>
  </div>
  <div class="flex flex-col items-center gap-1">
    <div class={`${status === 'profil' ? 'bg-two' : 'bg-four'} rounded-full p-1`}> 
      <User class="text-white h-8 w-8" />
    </div>
    <p class={`${status === 'profil' ? 'text-two' : 'text-four'} font-bold text-xs`}>
      Profil
    </p>
  </div>
   <div class="flex flex-col items-center gap-1">
    <div class={`${status === 'pengaturan' ? 'bg-two' : 'bg-four'} rounded-full p-1`}> 
      <Settings class="text-white h-8 w-8" />
    </div>
    <p class={`${status === 'pengaturan' ? 'text-two' : 'text-four'} font-bold text-xs`}>
      Pengaturan
    </p>
  </div>
</section>
