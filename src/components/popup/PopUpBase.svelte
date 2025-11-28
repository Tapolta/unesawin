<script lang="ts">
  import { fade, scale } from 'svelte/transition';
  import type { Snippet } from 'svelte';
	import type { PopUpProps } from '../../structures/popup.struct';

  let { popUp, children } = $props<{ popUp: PopUpProps, children : Snippet }>();

  const sizes = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-2xl'
  };

  const closePopup = () => {
    if (popUp.closable) {
      dispatchEvent(new CustomEvent('close'));
      popUp.onClose();
    }
  }

  const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closePopup();
    }
  }

  $effect(() => {
    document.body.classList.toggle('overflow-hidden', popUp.visible);
  })
</script>

{#if popUp.visible}
  <div
    class={`fixed inset-0 z-50 flex pt-4 justify-center bg-black/50 backdrop-blur-sm
      ${popUp.alignCenter ? 'items-center': 'items-start'} px-2`}
    role="dialog"
    tabindex="0"
    onkeydown={handleKeydown}
    onclick={(e) => e.target === e.currentTarget && closePopup()}
    transition:fade
  >
    <div
      class={`relative w-full max-h-[90vh] ${popUp.overflow ? 'overflow-y-auto' : 'overflow-y-none'} p-6 rounded-2xl shadow-xl bg-three
        ${sizes[popUp.size as keyof typeof sizes]}`}
      transition:scale={{ duration: 150 }}
    >
      {#if popUp.closable}
        <button
          class="absolute top-0 right-1 text-five hover:text-red-500 text-4xl z-[9999]"
          aria-label="Tutup"
          onclick={closePopup}>
          &times;
        </button>
      {/if}

      {@render children()}
    </div>
  </div>
{/if}
