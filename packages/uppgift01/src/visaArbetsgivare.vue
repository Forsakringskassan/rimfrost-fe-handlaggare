<script setup lang="ts">
import { computed } from "vue";
import { FStaticField } from "@fkui/vue";
import kunduppgifter from "./assets/mockKunduppgifter.json";

const props = defineProps<{ uppgiftId?: number }>();

const selected = computed(() => {
  let kund = null;

  console.log(props);

  if (typeof props.uppgiftId === "number") {
    kund =
      kunduppgifter.find((kund) => kund.uppgiftId === props.uppgiftId) ??
      kunduppgifter[0];
  }
  return kund;
});

const uppgiftType = computed(() =>
  selected.value?.arbetsgivare ? "arbetsgivare" : "folkbokforing",
);
</script>

<template>
  <div v-if="uppgiftType === 'arbetsgivare'">
    <h2>Arbetsgivare</h2>
    <f-static-field>
      <template #label><span>Namn</span></template>
      <template #default>
        <span>{{ selected?.arbetsgivare?.namn ?? "" }}</span>
      </template>
    </f-static-field>
    <f-static-field>
      <template #label><span>Adress</span></template>
      <template #default>
        <span>{{ selected?.arbetsgivare?.adress ?? "" }}</span>
      </template>
    </f-static-field>
    <f-static-field>
      <template #label>
        <span>Kontaktperson</span>
      </template>
      <template #default>
        <span>{{ selected?.arbetsgivare?.kontaktperson ?? "" }}</span>
      </template>
    </f-static-field>
    <f-static-field>
      <template #label>
        <span>Telefonnummer</span>
      </template>
      <template #default>
        <span>{{ selected?.arbetsgivare?.telefon ?? "" }}</span>
      </template>
    </f-static-field>
  </div>
  <div v-else>
    <h2>Adress</h2>
    <f-static-field>
      <template #label><span>Folkbokförd</span></template>
      <template #default>
        <span>{{ selected?.adress?.folkbokförd ? "Ja" : "Nej" }}</span>
      </template>
    </f-static-field>
    <f-static-field>
      <template #label><span>Gata</span></template>
      <template #default>
        <span>{{
          selected?.adress?.gata && selected?.adress?.nummer
            ? `${selected.adress.gata} ${selected.adress.nummer}`
            : ""
        }}</span>
      </template>
    </f-static-field>
    <f-static-field>
      <template #label><span>Postnummer</span></template>
      <template #default>
        <span>{{ selected?.adress?.postnummer ?? "" }}</span>
      </template>
    </f-static-field>
    <f-static-field>
      <template #label>
        <span>Stad</span>
      </template>
      <template #default>
        <span>{{ selected?.adress?.stad ?? "" }}</span>
      </template>
    </f-static-field>
  </div>
</template>

<style scoped>
.output-field {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1rem;
  & .label span {
    font-weight: bold;
  }
}
</style>
