<script setup>
import { RouterView, useRouter } from "vue-router";
import PageHeader from "@/components/PageHeader.vue";
import { computed } from "vue";
const router = useRouter();
const children = computed(() => {
	const currentRoute = router.currentRoute.value.name;
	return router.options.routes?.find(
		(route) =>
			(route?.meta?.menu && route.name === currentRoute) ||
			(route?.meta?.menu && route?.children?.find((child) => child.name === currentRoute))
	)?.children;
});
</script>

<template>
	<PageHeader :menu="children" />
	<RouterView />
</template>

<style></style>
