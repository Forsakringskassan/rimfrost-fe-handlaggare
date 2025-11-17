<script setup lang="ts">
    import { RouterLink, type RouterLinkProps } from 'vue-router';
    import { computed } from 'vue';

    const props = defineProps<RouterLinkProps>()

    const isExternal = computed(() => {
        return typeof props.to === 'string' && props.to.startsWith('http');
    })

    const hrefValue = computed(() => {
        return typeof props.to === 'string' ? props.to : '';
    })
</script>

<template>
    <a v-if="isExternal" :href="hrefValue" target="_blank" rel="noopener" class="external-link">
        <slot></slot>
        <i class="fas fa-external-link-alt"></i>
    </a>
    <RouterLink v-else v-bind="$props"><slot></slot></RouterLink>
</template>

<style scoped>
    .external-link i {
        font-size: 0.8rem;
        opacity: 0.7;
    }
</style>