import "./assets/main.scss";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { useAuthStore } from "./stores/auth";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);

router.beforeEach((to, from, next) => {
	const store = useAuthStore(pinia);
	if (to.name.includes("cabinet") && !store.user.id) {
		next({ name: "login" });
	} else if (store.user.id && (to.name === "login" || to.name === "sign-up")) {
		next({ name: "cabinet.index" });
	} else {
		next();
	}
});

app.mount("#app");
