<script setup>
import AuthHeader from "@/components/AuthHeader.vue";
</script>

<template>
	<AuthHeader>
		<router-link :to="{ name: 'sign-up' }" class="btn btn-primary">Регистрация</router-link>
	</AuthHeader>
	<h1 class="text-center text-2xl font-bold my-10">Вход в личный кабинет</h1>
</template>

<style></style>
