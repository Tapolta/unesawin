<script lang="ts">
    let {title} = $props<{
        title: string
    }>();
</script>

<button class="px-6 py-2 rounded-xl bg-white text-two font-semibold text-sm whitespace-nowrap">
    {title}    
</button>