<template>
    <div>
        Favorites: {{ item }}

        <p>
            Try to update page (F5)
        </p>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
    setup() {
        const route = useRoute();
        const item = computed(() => route.params.item);

        return {
            item
        }
    },
})
</script>
