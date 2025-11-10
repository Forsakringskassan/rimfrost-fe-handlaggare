<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getItemById, type Arende } from '../data/useItems'

const route = useRoute()
const item = ref<Arende | null>(null)
const loading = ref(false)
const error = ref<string | null>(null)

async function load() {
  error.value = null
  loading.value = true
  try {
    const id = Number(route.params.id)
    item.value = await getItemById(id)
    if (!item.value) error.value = `Item ${id} not found`
  } catch (e:any) {
    error.value = e?.message ?? 'Failed to load'
  } finally {
    loading.value = false
  }
}
onMounted(load)
watch(() => route.params.id, load)
</script>

<template>
  <div class="container-fluid">
    <h1 id="main-title" tabindex="-1" class="h1">Item {{ route.params.id }}</h1>

    <p v-if="loading">Laddar…</p>
    <p v-else-if="error" class="text-danger">{{ error }}</p>

    <article v-else-if="item" class="card">
      <div class="card__body">
        <h2 class="h2">{{ item.fornamn }}</h2>
        <p class="body">{{ item.personnummer
         }}</p>
      </div>
    </article>
  </div>
</template>
