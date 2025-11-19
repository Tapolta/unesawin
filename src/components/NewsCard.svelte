<script lang="ts">
    let {title, detail} = $props<{
        title: string,
        detail: string,
    }>();
</script>

<div class="bg-two rounded-lg text-white p-8">
    <h3 class="text-3xl font-semibold mb-2">
        {title}
    </h3>
    <p class="text-gray-200 text-xs">
        {detail}
    </p>
</div>