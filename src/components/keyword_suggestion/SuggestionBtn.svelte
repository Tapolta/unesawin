<script lang="ts">
  let {title, onClick} = $props<{
    title: string,
    onClick?: (value: string) => void,
  }>();

  const handleClick = () => {
    if (onClick) onClick(title);
  };
</script>

<button 
  onclick={handleClick}
  class="px-6 py-2 rounded-xl bg-white text-two text-sm whitespace-nowrap"
>
  {title}
</button>