import { createApp } from "vue";
import "./style.css";
import App from "./visaArbetsgivare.vue";

// createApp(App).mount('#app')

export function init(selector: string, params?: { uppgiftId?: number }) {
  document
    .querySelector(selector)
    ?.addEventListener("component-validity", (event: Event) => {
      console.log("App stoppar");
      event.stopPropagation();
    });

  document
    .querySelector(selector)!
    .addEventListener("component-unmount", (event: Event) => {
      console.log("App stoppar");
      event.stopPropagation();
    });

  const app = createApp(App, { uppgiftId: params?.uppgiftId ?? null });
  app.mount(selector);
}
