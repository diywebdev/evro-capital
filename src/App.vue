<script setup>
import { watch, computed } from "vue";
import { useRoute } from "vue-router";
import { SITE_NAME } from "./consts";
import defaultLayout from "./layouts/DefaultLayout.vue";
import authLayout from "./layouts/AuthLayout.vue";
const route = useRoute();
watch(route, () => {
	document.title = route?.meta?.title ? `${route.meta.title} | ${SITE_NAME}` : SITE_NAME;
});
const layout = computed(() => {
	return route?.meta?.layout ? authLayout : defaultLayout;
});
</script>

<template v-cloak>
	<component :is="layout">
		<router-view />
	</component>
</template>
