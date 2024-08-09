import { reactive } from "vue";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", () => {
	const user = reactive({
		id: "",
		email: "",
		phone: "",
		loans: [],
		cards: [],
		firstName: "",
		middleName: "",
		lastName: "",
		birthdate: "",
		birthplace: "",
		step: "cabinet.profile"
	});
	return { user };
});
