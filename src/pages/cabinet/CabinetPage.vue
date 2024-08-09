<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<template>
	<div class="py-20 sm:py-32">
		<div class="container">
			<h1 class="text-3xl font-bold mb-4">{{ route?.meta?.title }}</h1>
			<router-view />
		</div>
	</div>
</template>

<style></style>
