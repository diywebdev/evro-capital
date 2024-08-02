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
const layout = computed(() => (route?.meta?.layout ? `${route.meta.layout}` : "default"));
</script>

<template v-cloak>
	<component :is="layout === 'auth' ? authLayout : defaultLayout"></component>
</template>
