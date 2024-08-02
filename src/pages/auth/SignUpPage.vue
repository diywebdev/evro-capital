<script setup>
import AuthHeader from "@/components/AuthHeader.vue";
import AuthFooter from "@/components/AuthFooter.vue";
import { SITE_NAME } from "@/consts";
</script>

<template>
	<AuthHeader>
		<router-link :to="{ name: 'login' }" class="btn btn-secondary"
			><i class="fa-solid fa-user"></i>Вход</router-link
		>
	</AuthHeader>
	<h1 class="text-center text-2xl font-bold my-10">
		Начните регистрироваться, <br />и&nbsp;получите ваш первый
		<span class="text-lime-500">заём под&nbsp;0%</span>
	</h1>
	<form class="space-y-5 mb-6">
		<div class="">
			<input
				type="email"
				class="w-full outline-none border rounded py-3 px-4 focus:border-lime-500 font-normal placeholder:font-normal"
				placeholder="Email"
				required
			/>
		</div>
		<div class="">
			<input
				type="password"
				class="w-full outline-none border rounded py-3 px-4 focus:border-lime-500 font-normal placeholder:font-normal"
				placeholder="Пароль"
				required
			/>
		</div>
		<div class="">
			<input
				type="password"
				class="w-full outline-none border rounded py-3 px-4 focus:border-lime-500 font-normal placeholder:font-normal"
				placeholder="Повторите пароль"
				required
			/>
		</div>
		<label class="flex items-center gap-2 flex-nowrap select-none cursor-pointer">
			<input type="checkbox" required />
			<span class="text-sm">У меня есть паспорт РФ</span>
		</label>
		<div class="flex items-center gap-2 flex-nowrap select-none">
			<label class="flex items-center gap-2 flex-nowrap select-none cursor-pointer">
				<input type="checkbox" required />
				<span class="text-sm">Я ознакомлен и согласен</span>
			</label>
			<a href="#" class="text-sm text-lime-600 underline hover:no-underline">со следующим</a>
		</div>
		<div class="">
			<button class="btn btn-primary btn-lg w-full">Регистрация</button>
		</div>
		<label class="flex items-center gap-2 flex-nowrap select-none cursor-pointer">
			<input type="checkbox" required />
			<a href="#" class="text-sm text-lime-600 underline hover:no-underline"
				>Правила предоставления займов</a
			>
		</label>
		<label class="flex items-center gap-2 flex-nowrap select-none cursor-pointer">
			<input type="checkbox" required />
			<a href="#" class="text-sm text-lime-600 underline hover:no-underline"
				>Соглашение об использовании АСП</a
			>
		</label>
		<label class="flex items-center gap-2 flex-nowrap select-none cursor-pointer">
			<input type="checkbox" required />
			<a href="#" class="text-sm text-lime-600 underline hover:no-underline"
				>Согласие на получение рекламы</a
			>
		</label>
		<label class="flex items-center gap-2 flex-nowrap select-none cursor-pointer">
			<input type="checkbox" required />
			<a href="#" class="text-sm text-lime-600 underline hover:no-underline"
				>Общие условия договора потребительского займа</a
			>
		</label>
		<label class="flex items-center gap-2 flex-nowrap select-none cursor-pointer">
			<input type="checkbox" required />
			<a href="#" class="text-sm text-lime-600 underline hover:no-underline"
				>Согласие на обработку персональных данных</a
			>
		</label>
		<label class="flex items-start gap-2 flex-nowrap select-none cursor-pointer">
			<input type="checkbox" required class="mt-1" />
			<span
				>Подтверждаю, что в отношениях с ПАО МФК «{{ SITE_NAME }}» действую сознательно,
				свободно, своей волей и в своих интересах, мои действия не контролируются иными
				третьими лицами, самостоятельно представляю свои интересы, также подтверждаю что я
				не являюсь
				<a href="#" class="text-lime-600 underline hover:no-underline"
					>публичным должностным лицом</a
				></span
			>
		</label>
	</form>
	<hr class="mt-8 mb-5" />
	<AuthFooter />
</template>

<style></style>
