<script setup lang="ts">
    // import { computed } from 'vue';
    // import { useRoute, useRouter } from 'vue-router';
    import {
        FLayoutApplicationTemplate,
        FLayoutLeftPanel,
        FPageHeader,
        FLogo,
    } from '@fkui/vue';
import IdList from './components/IdList.vue';
    /*const route = useRoute();
    const router = useRouter();
    const currentTop = computed(() => {
        return typeof route.name === 'string' ? route.name : ''
    });

    function onSelectedTop(routeName: string) {
        if (routeName === 'item') router.push({ name: 'item', params: { id: '1' } });
        else router.push({ name: routeName });
    }*/
</script>

<template>
  <f-layout-application-template>
    <!-- Header -->
    <template #header>
      <f-page-header skip-link="main-title">
        <template #logo><f-logo size="small">Ductus</f-logo></template>
        Rimfrost Demoapp
        <template #right>Förnamn Efternamn</template>
      </f-page-header>
    </template>

    <!-- Vänster navpanel -->
    <f-layout-left-panel>
      <template #heading>
        <h3 class="h3">Poster</h3>
      </template>

      <template #content>
        <p class="body">Välj en post i listan.</p>
        <IdList />
        <!-- Filter/sök -->
      </template>

      <!-- Primary content (default slot) -->
      <router-view />
    </f-layout-left-panel>

    <!-- Footer (optional) -->
    <template #footer>
      <div class="container-fluid" style="padding:1rem 0;text-align:center">
        <small>© Ductus</small>
      </div>
    </template>
  </f-layout-application-template>
</template>