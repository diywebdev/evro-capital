<script setup>
import { SITE_NAME } from "@/consts";
const date = new Date();
const year = date.getFullYear();
</script>

<template>
	<div class="text-sm text-gray-600">
		<small class="block mb-2">&copy; {{ year }} {{ SITE_NAME }} | Все права защищены</small>
		<small class="block">ОГРН: 737373723984230432</small>
		<small class="block">Свидетельство № 65130353200465656</small>
	</div>
</template>

<style></style>
