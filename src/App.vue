<script setup>
import { watch, ref } from "vue";
import { RouterView, useRoute } from "vue-router";
import { SITE_NAME } from "./consts";
import PageHeader from "./components/PageHeader.vue";
const route = useRoute();
watch(route, () => {
	document.title = route?.meta?.title ? `${route.meta.title} | ${SITE_NAME}` : SITE_NAME;
});
const amount = ref(30000);
</script>

<template>
	<PageHeader />
	<div class="bg-gray-50 py-32">
		<div class="container">
			<div class="grid md:grid-cols-2 lg:grid-cols-3 items-center">
				<div class="lg:col-span-1 relative mb-10 sm:mb-32 lg:mb-0">
					<h1
						class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold md:pr-10 lg:pr-0"
					>
						Онлайн займы на карту. Первый заём без процентов*
					</h1>
				</div>
				<div class="flex items-center justify-center relative z-[1] lg:col-span-2">
					<img
						src="/img/1.png"
						class="w-full xl:w-2/3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1]"
						alt=""
					/>
					<div class="bg-white/90 shadow-2xl rounded-xl p-5 relative z-10 lg:min-w-96">
						<h2 class="font-bold text-xl">
							Первый заём <span class="text-lime-500">бесплатно</span>
						</h2>
						<p class="text-xs">При условии возврата займа в срок</p>
						<a href="#" class="text-lime-600 text-xs underline hover:no-underline"
							>Условия акции</a
						>
						<div class="my-10">
							<small class="text-xs block text-gray-500">Сумма займа</small>
							<div class="text-4xl font-bold tracking-tight mb-5">
								{{ Number(amount).toLocaleString("ru-RU") }}
								<sup class="font-normal text-gray-600 text-xl">₽</sup>
							</div>
							<input
								type="range"
								name=""
								id=""
								min="2000"
								max="30000"
								step="500"
								value="30000"
								class="w-full"
								v-model="amount"
							/>
						</div>
						<div class="flex justify-between mb-10">
							<div class="flex flex-col">
								<small class="text-xs block text-gray-500">Вы вернёте</small>
								<div class="text-xl">
									{{
										Number(amount).toLocaleString("ru-RU", {
											style: "currency",
											currency: "RUB",
											minimumFractionDigits: 0
										})
									}}
								</div>
							</div>
							<div class="flex flex-col">
								<small class="text-xs block text-gray-500"
									>Ставка <sup>*</sup></small
								>
								<div class="text-xl">Без процентов</div>
							</div>
						</div>
						<a href="#" class="btn btn-primary btn-lg">Получи бесплатно и учавствуй</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	<RouterView />
</template>
