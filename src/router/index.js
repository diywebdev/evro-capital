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
		},
		{
			path: "/cabinet",
			name: "cabinet.index",
			meta: {
				title: "Личный кабинет",
				menu: true
			},
			component: () => import("../pages/cabinet/CabinetPage.vue"),
			redirect: "/cabinet/loan",
			children: [
				{
					path: "loan",
					name: "cabinet.loan",
					meta: {
						title: "Активный займ",
						isShowMenu: true
					},
					component: () => import("../pages/cabinet/LoanPage.vue")
				},
				{
					path: "profile",
					name: "cabinet.profile",
					meta: {
						title: "Личные данные",
						isShowMenu: true
					},
					component: () => import("../pages/cabinet/ProfilePage.vue")
				},
				{
					path: "documents",
					name: "cabinet.documents",
					meta: {
						title: "Документы",
						isShowMenu: true
					},
					component: () => import("../pages/cabinet/DocumentsPage.vue")
				},
				{
					path: "cards",
					name: "cabinet.cards",
					meta: {
						title: "Карты",
						isShowMenu: true
					},
					component: () => import("../pages/cabinet/CardsPage.vue")
				},
				{
					path: "process",
					name: "cabinet.process",
					meta: {
						title: "Оформить",
						isShowMenu: true
					},
					component: () => import("../pages/cabinet/ProcessPage.vue")
				}
			]
		}
	]
});

export default router;
