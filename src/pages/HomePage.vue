<script setup></script>

<template>
	<div class="bg-gray-50 py-32">
		<div class="container">
			<div class="grid md:grid-cols-2 xl:grid-cols-3">
				<div
					class="xl:col-span-1 relative mb-10 sm:mb-32 md:mb-0 flex flex-col justify-between"
				>
					<h1
						class="text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl font-extrabold md:pr-10 lg:pr-0 mb-10 md:mb-0"
					>
						Онлайн займы на карту. Первый заём без процентов*
					</h1>
					<div class="">
						<div class="flex items-center gap-10 mb-5">
							<div class="xl:text-lg font-bold">Способы получения</div>
							<div
								class="bg-white rounded-full text-center py-2 px-4 hidden lg:inline-block"
							>
								Деньги у вас уже в <span class="text-lime-500">17:17</span>
							</div>
						</div>
						<div class="flex items-center gap-10">
							<img src="/img/icons/master-card.svg" alt="master" />
							<img src="/img/icons/visa-card.svg" alt="visa" />
							<img src="/img/icons/mir-card.svg" alt="mir" />
						</div>
					</div>
				</div>
				<div class="flex items-center justify-center relative z-[1] xl:col-span-2">
					<img
						src="/img/1.png"
						class="w-full xl:w-2/3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1]"
						alt=""
					/>
					<div class="bg-white/90 shadow-2xl rounded-xl p-5 relative z-10 lg:min-w-96">
						<h2 class="font-bold text-xl">
							Первый заём <span class="text-lime-500">бесплатно</span>
						</h2>
						<p class="text-xs">При условии возврата займа в срок</p>
						<a href="#" class="text-lime-600 text-xs underline hover:no-underline"
							>Условия акции</a
						>
						<div class="my-10">
							<small class="text-xs block text-gray-500">Сумма займа</small>
							<div class="text-4xl font-bold tracking-tight mb-5">
								{{ Number(amount).toLocaleString("ru-RU") }}
								<sup class="font-normal text-gray-600 text-xl">₽</sup>
							</div>
							<input
								type="range"
								name=""
								id=""
								min="2000"
								max="30000"
								step="500"
								value="30000"
								class="w-full"
								v-model="amount"
							/>
						</div>
						<div class="flex justify-between mb-8">
							<div class="flex flex-col">
								<small class="text-xs block text-gray-500">Вы вернёте</small>
								<div class="sm:text-xl">
									{{
										Number(amount).toLocaleString("ru-RU", {
											style: "currency",
											currency: "RUB",
											minimumFractionDigits: 0
										})
									}}
								</div>
							</div>
							<div class="flex flex-col">
								<small class="text-xs block text-gray-500"
									>Ставка <sup>*</sup></small
								>
								<div class="sm:text-xl">Без процентов</div>
							</div>
						</div>
						<a href="#" class="btn btn-primary btn-lg">Получи бесплатно и учавствуй</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style></style>
