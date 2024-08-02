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
		},
		{
			path: "/login",
			name: "login",
			meta: {
				title: "Авторизация",
				layout: "auth"
			},
			component: () => import("../pages/auth/LoginPage.vue")
		},
		{
			path: "/sign-up",
			name: "sign-up",
			meta: {
				title: "Регистрация",
				layout: "auth"
			},
			component: () => import("../pages/auth/SignUpPage.vue")
		}
	]
});

export default router;
