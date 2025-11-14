<script setup lang="ts">
  import { onMounted } from 'vue'

  onMounted(async () => {
        const response = await fetch('/api/hamta-uppgifter');
        const result = await response.json();
        
        const importedUppgift01 = await import(result[0].url);
        importedUppgift01.init("#imported-uppgift-01");
    })
</script>

<template>
    <div id="imported-uppgift-01"></div>
</template>
