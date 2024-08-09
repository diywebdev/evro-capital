<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
import { useAuthStore } from "@/stores/auth";
const store = useAuthStore();
</script>

<template>
	<div>
		<p class="text-gray-700 text-sm" v-if="store.user.step === 'cabinet.profile'">
			Чтобы оформить займ, заполните личные данные
		</p>
		<form class="mt-12">
			<h3 class="mb-2 font-bold text-lg">Паспортные данные</h3>
			<p class="text-sm mb-8">
				Обращаем Ваше внимание, что все данные заполняются в точности
				<b class="font-bold">как в паспорте</b>
			</p>
			<div class="grid lg:grid-cols-3 gap-x-5 gap-y-5 sm:gap-y-8 mb-5 sm:mb-8">
				<div>
					<label for="firstName" class="block"
						>Фамилия <sup class="text-red-500">*</sup></label
					>
					<input
						type="text"
						name="firstName"
						id="firstName"
						v-model="store.user.firstName"
						class="w-full outline-none border rounded py-3 px-4 focus:border-lime-500 font-normal placeholder:font-normal"
						placeholder="ИВАНОВ"
					/>
				</div>
				<div>
					<label for="middleName" class="block"
						>Имя <sup class="text-red-500">*</sup></label
					>
					<input
						type="text"
						name="middleName"
						id="middleName"
						v-model="store.user.middleName"
						class="w-full outline-none border rounded py-3 px-4 focus:border-lime-500 font-normal placeholder:font-normal"
						placeholder="ИВАН"
					/>
				</div>
				<div>
					<label for="lastName" class="block">Отчество (если есть)</label>
					<input
						type="text"
						name="lastName"
						id="lastName"
						v-model="store.user.lastName"
						class="w-full outline-none border rounded py-3 px-4 focus:border-lime-500 font-normal placeholder:font-normal"
					/>
				</div>
				<div>
					<label for="birthdate" class="block"
						>Дата рождения <sup class="text-red-500">*</sup></label
					>
					<input
						type="date"
						name="birthdate"
						id="birthdate"
						v-model="store.user.birthdate"
						class="w-full outline-none border rounded py-3 px-4 focus:border-lime-500 font-normal placeholder:font-normal"
						placeholder="01.01.2006"
					/>
				</div>
				<div>
					<label for="birthplace" class="block"
						>Место рождения <sup class="text-red-500">*</sup></label
					>
					<input
						type="text"
						name="birthplace"
						id="birthplace"
						v-model="store.user.birthplace"
						class="w-full outline-none border rounded py-3 px-4 focus:border-lime-500 font-normal placeholder:font-normal"
						placeholder="ГОР. МОСКВА"
					/>
				</div>
			</div>
			<div class="grid lg:grid-cols-3 gap-x-5 gap-y-5 sm:gap-y-8 mb-5 sm:mb-8">
				<div>
					<label for="passportNumber" class="block"
						>Серия и номер паспорта <sup class="text-red-500">*</sup></label
					>
					<input
						type="text"
						name="passportNumber"
						id="passportNumber"
						class="w-full outline-none border rounded py-3 px-4 focus:border-lime-500 font-normal placeholder:font-normal"
						placeholder="0000 123456"
					/>
				</div>
				<div>
					<label for="passportDate" class="block"
						>Дата выдачи <sup class="text-red-500">*</sup></label
					>
					<input
						type="date"
						name="passportDate"
						id="passportDate"
						class="w-full outline-none border rounded py-3 px-4 focus:border-lime-500 font-normal placeholder:font-normal"
						placeholder="12.12.2006"
					/>
				</div>
				<div>
					<label for="passportCode" class="block"
						>Код подразделения <sup class="text-red-500">*</sup></label
					>
					<input
						type="text"
						name="passportCode"
						id="passportCode"
						class="w-full outline-none border rounded py-3 px-4 focus:border-lime-500 font-normal placeholder:font-normal"
						placeholder="123-456"
					/>
				</div>
			</div>
			<div class="grid lg:grid-cols-2 gap-x-5 gap-y-5 sm:gap-y-8">
				<div>
					<label for="passportOrgan" class="block"
						>Кем выдан <sup class="text-red-500">*</sup></label
					>
					<input
						type="text"
						name="passportOrgan"
						id="passportOrgan"
						class="w-full outline-none border rounded py-3 px-4 focus:border-lime-500 font-normal placeholder:font-normal"
						placeholder="УФМС РОССИИ В ГОР. МОСКВА"
					/>
				</div>
				<div>
					<label for="address" class="block"
						>Адрес регистрации <sup class="text-red-500">*</sup></label
					>
					<input
						type="text"
						name="address"
						id="address"
						class="w-full outline-none border rounded py-3 px-4 focus:border-lime-500 font-normal placeholder:font-normal"
						placeholder="ГОР. МОСКВА, УЛ. ЛЕНИНА, Д. 1"
					/>
				</div>
			</div>
			<hr class="my-7 sm:my-10" />
			<h3 class="mb-5 sm:mb-8 font-bold text-lg">Место жительства</h3>
			<div class="grid lg:grid-cols-2 gap-x-5 gap-y-5 sm:gap-y-8">
				<div>
					<label for="addressHome" class="block"
						>Место проживания <sup class="text-red-500">*</sup></label
					>
					<input
						type="text"
						name="addressHome"
						id="addressHome"
						class="w-full outline-none border rounded py-3 px-4 focus:border-lime-500 font-normal placeholder:font-normal"
						placeholder="ГОР. МОСКВА, УЛ. ЛЕНИНА, Д. 1"
					/>
					<label class="flex items-center flex-nowrap gap-2 mt-2">
						<input type="checkbox" name="" id="" />
						<span>совпадает с адресом регистрации</span>
					</label>
				</div>
				<div>
					<label for="addressPhone" class="block">Домашний телефон</label>
					<input
						type="tel"
						name="addressPhone"
						id="addressPhone"
						class="w-full outline-none border rounded py-3 px-4 focus:border-lime-500 font-normal placeholder:font-normal"
						placeholder="+7 (495) 123-45-67"
					/>
				</div>
			</div>
			<hr class="my-7 sm:my-10" />
			<h3 class="mb-5 sm:mb-8 font-bold text-lg">Связь</h3>
			<div class="grid lg:grid-cols-3 gap-x-5 gap-y-5 sm:gap-y-8">
				<div>
					<label for="phone" class="block"
						>Телефон <sup class="text-red-500">*</sup></label
					>
					<input
						type="tel"
						name="phone"
						id="phone"
						class="w-full outline-none border rounded py-3 px-4 focus:border-lime-500 font-normal placeholder:font-normal"
						v-model="store.user.phone"
						placeholder="+7 (999) 123-45-67"
					/>
				</div>
				<div>
					<label for="secondPhone" class="block">Дополнительный телефон</label>
					<input
						type="tel"
						name="secondPhone"
						id="secondPhone"
						class="w-full outline-none border rounded py-3 px-4 focus:border-lime-500 font-normal placeholder:font-normal"
						placeholder="+7 (999) 123-45-67"
					/>
				</div>
				<div>
					<label for="phone" class="block">Email <sup class="text-red-500">*</sup></label>
					<input
						type="email"
						name="email"
						id="email"
						class="w-full bg-gray-200 outline-none border rounded py-3 px-4 font-normal"
						v-model="store.user.email"
						readonly
					/>
				</div>
			</div>
			<div class="flex justify-end mt-10">
				<button class="btn btn-primary btn-lg max-md:w-full">Сохранить</button>
			</div>
		</form>
	</div>
</template>

<style></style>
