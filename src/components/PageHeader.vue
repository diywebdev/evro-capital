<script setup>
import { ref, computed } from "vue";
const isOpen = ref(false);
import TheLogo from "./TheLogo.vue";
const props = defineProps({
	menu: {
		type: Array,
		required: false,
		default: () => []
	}
});
const items = computed(() => {
	return props.menu.filter((item) => item?.meta?.isShowMenu);
});
</script>

<template>
	<header class="border-b absolute top-0 left-0 w-full z-50">
		<div class="container">
			<div class="h-[60px] sm:h-[80px] flex items-center justify-between sm:gap-4">
				<div class="">
					<TheLogo />
				</div>
				<nav
					class="flex-grow max-lg:fixed max-lg:h-screen max-lg:bg-white max-lg:top-0 max-lg:right-0 max-lg:shadow-2xl max-lg:z-50 max-lg:py-10 max-lg:min-w-[320px] max-lg:w-fit max-lg:px-4 max-lg:overflow-y-auto transition-transform duration-300 ease-in-out lg:!translate-x-0"
					:class="{
						'translate-x-0': isOpen,
						'translate-x-full': !isOpen,
						hidden: !items.length
					}"
				>
					<button
						class="absolute w-10 h-10 top-0 right-0 lg:hidden"
						@click="isOpen = false"
					>
						<i class="fa-regular fa-circle-xmark text-lg text-gray-500"></i>
					</button>
					<ul
						class="flex justify-center flex-col lg:flex-row gap-5 text-xs xl:text-sm font-medium"
					>
						<li class="relative group flex items-center gap-1 cursor-pointer hidden">
							Как получить
							<i
								class="fa-solid fa-chevron-down text-[10px] transition-transform origin-center duration-300 group-hover:-rotate-180"
							></i>
							<ul
								class="absolute top-full px-4 py-3 min-w-[300px] w-fit bg-white rounded-xl shadow-lg z-40 opacity-0 invisible transition-all group-hover:opacity-100 group-hover:visible"
							>
								<li>
									<a
										href="#"
										class="flex items-center gap-2 py-1 px-2 transition-colors hover:text-lime-600 whitespace-nowrap"
										>Банковская карта</a
									>
								</li>
							</ul>
						</li>
						<li class="relative group flex items-center gap-1 cursor-pointer hidden">
							Как вернуть
							<i
								class="fa-solid fa-chevron-down text-[10px] transition-transform origin-center duration-300 group-hover:-rotate-180"
							></i>
							<ul
								class="absolute top-full px-4 py-3 min-w-[300px] w-fit bg-white rounded-xl shadow-lg z-40 opacity-0 invisible transition-all group-hover:opacity-100 group-hover:visible"
							>
								<li>
									<a
										href="#"
										class="flex items-center gap-2 py-1 px-2 transition-colors hover:text-lime-600 whitespace-nowrap"
										>Банковская карта</a
									>
								</li>
								<li>
									<a
										href="#"
										class="flex items-center gap-2 py-1 px-2 transition-colors hover:text-lime-600 whitespace-nowrap"
										>Элекснет</a
									>
								</li>
								<li>
									<a
										href="#"
										class="flex items-center gap-2 py-1 px-2 transition-colors hover:text-lime-600 whitespace-nowrap"
										>Банковский перевод</a
									>
								</li>
							</ul>
						</li>
						<li class="relative group flex items-center gap-1 cursor-pointer hidden">
							О нас
							<i
								class="fa-solid fa-chevron-down text-[10px] transition-transform origin-center duration-300 group-hover:-rotate-180"
							></i>
							<ul
								class="absolute top-full px-4 py-3 min-w-[300px] w-fit bg-white rounded-xl shadow-lg z-40 opacity-0 invisible transition-all group-hover:opacity-100 group-hover:visible"
							>
								<li>
									<a
										href="#"
										class="flex items-center gap-2 py-1 px-2 transition-colors hover:text-lime-600 whitespace-nowrap"
										>О компании</a
									>
								</li>
								<li>
									<a
										href="#"
										class="flex items-center gap-2 py-1 px-2 transition-colors hover:text-lime-600 whitespace-nowrap"
										>Документы</a
									>
								</li>
								<li>
									<a
										href="#"
										class="flex items-center gap-2 py-1 px-2 transition-colors hover:text-lime-600 whitespace-nowrap"
										>Информация</a
									>
								</li>
								<li>
									<a
										href="#"
										class="flex items-center gap-2 py-1 px-2 transition-colors hover:text-lime-600 whitespace-nowrap"
										>Контакты</a
									>
								</li>
								<li>
									<a
										href="#"
										class="flex items-center gap-2 py-1 px-2 transition-colors hover:text-lime-600 whitespace-nowrap"
										>Инвесторам</a
									>
								</li>
							</ul>
						</li>
						<li class="relative group flex items-center gap-1 cursor-pointer hidden">
							Помощь
							<i
								class="fa-solid fa-chevron-down text-[10px] transition-transform origin-center duration-300 group-hover:-rotate-180"
							></i>
							<ul
								class="absolute top-full px-4 py-3 min-w-[300px] w-fit bg-white rounded-xl shadow-lg z-40 opacity-0 invisible transition-all group-hover:opacity-100 group-hover:visible"
							>
								<li>
									<a
										href="#"
										class="flex items-center gap-2 py-1 px-2 transition-colors hover:text-lime-600 whitespace-nowrap"
										>Получение займа</a
									>
								</li>
								<li>
									<a
										href="#"
										class="flex items-center gap-2 py-1 px-2 transition-colors hover:text-lime-600 whitespace-nowrap"
										>Возврат займа</a
									>
								</li>
								<li>
									<a
										href="#"
										class="flex items-center gap-2 py-1 px-2 transition-colors hover:text-lime-600 whitespace-nowrap"
										>Разное</a
									>
								</li>
							</ul>
						</li>
						<li v-for="item in items" :key="item.name">
							<router-link
								:to="{ name: item.name }"
								class="flex items-center gap-2 py-1 px-2 transition-colors hover:text-lime-600 whitespace-nowrap"
								active-class="text-lime-600"
								@click="isOpen = false"
								>{{ item?.meta?.title || "Item" }}</router-link
							>
						</li>
					</ul>
				</nav>
				<div class="flex items-center flex-nowrap gap-2 sm:gap-4 flex-shrink-0 justify-end">
					<router-link :to="{ name: 'login' }" class="btn btn-secondary"
						><i class="fa-solid fa-user max-[340px]:hidden"></i>Войти</router-link
					>
					<router-link :to="{ name: 'sign-up' }" class="btn btn-primary"
						>Регистрация</router-link
					>
					<i
						class="fa-solid fa-bars text-xl text-gray-600 cursor-pointer lg:hidden"
						@click="isOpen = true"
					></i>
				</div>
			</div>
		</div>
	</header>
</template>

<style></style>
