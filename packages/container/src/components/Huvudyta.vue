<script setup lang="ts">
    import { computed, onMounted } from 'vue';
    import { useRoute } from 'vue-router';
    import ArendeActions from './ArendeActions.vue';
    import OppnatArende from './OppnatArende.vue';

    const route = useRoute();

    const pageTitle = computed(() => route.query.title ?? 'Ingen titel');
    const pageId = computed(() => route.params.id ?? 'Inget ID');
</script>

<template>
    <h1>{{ pageTitle }} - {{ pageId }}</h1>
    <OppnatArende />
    <ArendeActions />
</template>