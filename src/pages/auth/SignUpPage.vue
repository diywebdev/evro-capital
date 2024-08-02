<script setup>
import AuthHeader from "@/components/AuthHeader.vue";
</script>

<template>
	<AuthHeader>
		<router-link :to="{ name: 'login' }" class="btn btn-secondary"
			><i class="fa-solid fa-user"></i>Войти</router-link
		>
	</AuthHeader>
	<h1 class="text-center text-2xl font-bold my-10">
		Начните регистрироваться, <br />и&nbsp;получите ваш первый
		<span class="text-lime-500">заём под&nbsp;0%</span>
	</h1>
</template>

<style></style>
