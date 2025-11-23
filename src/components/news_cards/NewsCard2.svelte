<script lang="ts">
  let { title, src, detail, isZoomed = false } = $props<{
    title: string,
    src: string,
    detail: string,
    isZoomed?: boolean
  }>();
</script>

<div
  class="bg-white rounded-lg p-8 transition-transform duration-300 shadow-md cursor-pointer"
>
  <h3 class={`${isZoomed ? 'text-2xl' : 'text-xl'} font-semibold mb-2`}>
    {title}
  </h3>

  <img 
    src={src}
    alt="Gambar"
    class="w-full py-4 rounded"
  />

  <p class={`${isZoomed ? 'text-lg text-gray-500' : 'text-xs'}`}>
    {detail}
  </p>
</div>
