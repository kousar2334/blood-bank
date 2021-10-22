<template>
	<div>
		<hero></hero>
		<section class="section section-lg pt-lg-0 mt--100">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-lg-12">
						<div class="row row-grid">
							<div class="col-lg-4">
								<router-link to="/doctors">
									<card class="border-0" hover shadow body-classes="py-5">
										<img
											v-lazy="'img/theme/doctor.jpg'"
											class="
												rounded-circle
												img-center img-fluid
												shadow
												shadow-lg--hover
											"
											style="width: 200px"
										/>

										<h2 class="bangla-font text-center mt-5">ডাক্তার</h2>
									</card>
								</router-link>
							</div>
							<div class="col-lg-4">
								<card class="border-0" hover shadow body-classes="py-5">
									<img
										v-lazy="'img/theme/doctor.jpg'"
										class="
											rounded-circle
											img-center img-fluid
											shadow
											shadow-lg--hover
										"
										style="width: 200px"
									/>

									<h2 class="bangla-font text-center mt-5">হাসপাতাল</h2>
								</card>
							</div>
							<div class="col-lg-4">
								<card class="border-0" hover shadow body-classes="py-5">
									<img
										v-lazy="'img/theme/doctor.jpg'"
										class="
											rounded-circle
											img-center img-fluid
											shadow
											shadow-lg--hover
										"
										style="width: 200px"
									/>
									<h2 class="bangla-font text-center mt-5">ব্লাড ব্যাংক</h2>
								</card>
							</div>
						</div>
					</div>
				</div>
				<div class="row justify-content-center mt-5">
					<div class="col-lg-12">
						<div class="row row-grid">
							<div class="col-lg-4">
								<card class="border-0" hover shadow body-classes="py-5">
									<img
										v-lazy="'img/theme/doctor.jpg'"
										class="
											rounded-circle
											img-center img-fluid
											shadow
											shadow-lg--hover
										"
										style="width: 200px"
									/>

									<h2 class="bangla-font text-center mt-5">অ্যাম্বুলেন্স</h2>
								</card>
							</div>
							<div class="col-lg-4">
								<card class="border-0" hover shadow body-classes="py-5">
									<img
										v-lazy="'img/theme/doctor.jpg'"
										class="
											rounded-circle
											img-center img-fluid
											shadow
											shadow-lg--hover
										"
										style="width: 200px"
									/>

									<h2 class="bangla-font text-center mt-5">ফায়ার সার্ভিস</h2>
								</card>
							</div>
							<div class="col-lg-4">
								<card class="border-0" hover shadow body-classes="py-5">
									<img
										v-lazy="'img/theme/doctor.jpg'"
										class="
											rounded-circle
											img-center img-fluid
											shadow
											shadow-lg--hover
										"
										style="width: 200px"
									/>
									<h2 class="bangla-font text-center mt-5">পুলিশ</h2>
								</card>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>
<script>
import Hero from "../../components/Hero";
export default {
	name: "Home",
	components: {
		Hero,
	},
};
</script>
