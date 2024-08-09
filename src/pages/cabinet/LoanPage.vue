<script setup>
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";
const store = useAuthStore();
const router = useRouter();
const loansList = store.user.loans;
const loansActiveList = loansList.length ? loansList.filter((loan) => loan.active) : [];
if (!loansList.length) {
	router.push({ name: store.user.step });
}
</script>

<template>
	<div class="" v-if="loansList.length"></div>
	<div class="" v-else-if="loansActiveList.length"></div>
	<div class="" v-else>
		<p>
			У Вас нет активного займа,
			<router-link
				class="underline text-lime-600 hover:no-underline"
				:to="{ name: 'cabinet.process' }"
				>оформите</router-link
			>
			прямо сейчас!
		</p>
	</div>
</template>

<style></style>
