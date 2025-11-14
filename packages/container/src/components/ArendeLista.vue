<script setup lang="ts">
    import { ref, onMounted, computed } from 'vue';
    import { useRouter, useRoute } from 'vue-router';
    import arendeLista from '../assets/arendeLista.json';

    export type ArendeItem = {
        id: number,
        typ: string,
        status: string
    };

    const items = ref<ArendeItem[]>([]);
    const router = useRouter();
    const route = useRoute();

    onMounted(async () => { items.value = await arendeLista;})

    function goTo(item: { id: number, typ: string }) {
        router.push({
            name: 'item',
            params: { id: item.id.toString()},
            query: { title: item.typ }
        });
    };

    const activeId = computed(() => {
        return route?.params?.id ? Number(route.params.id) : null;
    });
</script>

<template>
    <ul class="list list--unstyled">
        <li v-for="item in items" :key="item.id"
            :class="['id-list__item', { 'id-list__item--active': item.id === activeId }]"
            @click="goTo(item)">
            <strong>{{ item.typ }}</strong><br />
            <span>ID: {{ item.id }} - Status: {{ item.status }}</span>
        </li>
    </ul>
</template>