import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			meta: {
				title: "Главная"
			},
			component: () => import("../pages/HomePage.vue")
		}
	]
});

export default router;
