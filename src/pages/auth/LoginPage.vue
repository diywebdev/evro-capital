<script setup>
import { ref } from "vue";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";
import AuthHeader from "@/components/AuthHeader.vue";
import AuthFooter from "@/components/AuthFooter.vue";
const router = useRouter();
const store = useAuthStore();
const email = ref(null);
const password = ref(null);

const onSubmit = async () => {
	setTimeout(() => {
		store.user.id = "123";
		store.user.email = email.value;
		router.push({ name: "cabinet.index" });
	}, 1000);
};
</script>

<template>
	<div>
		<AuthHeader>
			<router-link :to="{ name: 'sign-up' }" class="btn btn-primary">Регистрация</router-link>
		</AuthHeader>
		<h1 class="text-center text-2xl font-bold my-10">Вход в личный кабинет</h1>
		<form class="space-y-5 mb-6" @submit.prevent="onSubmit">
			<div class="">
				<input
					type="email"
					name="email"
					class="w-full outline-none border border-red-500 rounded py-3 px-4 focus:border-red-500 font-normal placeholder:font-normal placeholder:text-red-400"
					placeholder="Email"
					required
					v-model="email"
				/>
				<div class="text-xs text-red-500 mt-1">Поле обязательно для заполнения</div>
			</div>
			<div class="">
				<input
					type="password"
					class="w-full outline-none border rounded py-3 px-4 focus:border-lime-500 font-normal placeholder:font-normal"
					placeholder="Пароль"
					required
					autocomplete="off"
					v-model="password"
				/>
			</div>
			<div class="">
				<button
					class="btn btn-primary btn-lg w-full disabled:bg-gray-400 disabled:cursor-not-allowed"
					:disabled="!email && !password"
				>
					Войти
				</button>
			</div>
		</form>
		<div class="text-right">
			<a href="#" class="text-gray-500 underline hover:no-underline">Забыли пароль?</a>
		</div>
		<hr class="mt-8 mb-5" />
		<AuthFooter />
	</div>
</template>

<style></style>
