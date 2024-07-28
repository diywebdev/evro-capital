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
	<RouterView />
</template>
