<!--
This component displays what will later be embedded as a GUI
sent from the corresponding regel system
-->

<script setup lang="ts">
    import { computed, onMounted, ref, watch } from 'vue';
    import { getItemById, type Arende } from '../utils/useItems';
    import { useRoute } from 'vue-router';

    const route = useRoute();
    const item = ref<Arende | null>(null);
    const loading = ref(false);
    const error = ref<string | null>(null)

    const pageTitle = computed(() => route.query.title ?? 'Ingen titel');
    const pageId = computed(() => route.params.id ?? 'Inget ID');

    async function loadArende() {
        error.value = null;
        loading.value = true;

        try {
            const id = Number(route.params.id);
            item.value = await getItemById(id);
            if (!item.value) {
                error.value = `Item ${id} not found`;
            }
        } catch (error: any) {
            error.value = error?.message ?? 'Failed to load';
        } finally {
            loading.value = false;
        }
    }

    onMounted(loadArende);
    watch(() => route.params.id, loadArende)
</script>

<template>
    <h1>{{ pageTitle }} - {{ pageId }}</h1>
</template>