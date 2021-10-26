<template>
	<section class="section section-shaped section-lg my-0">
		<div class="shape shape-style-1 bg-gradient-default">
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</div>
		<div class="container pt-lg-md">
			<div class="row justify-content-center">
				<div class="col-lg-8">
					<card
						type="secondary"
						shadow
						header-classes="bg-white pb-5"
						body-classes="px-lg-5 py-lg-5"
						class="border-0"
					>
						<template>
							<div class="btn-wrapper text-center mb-5">
								<h3 class="bangla-font">নতুন ডাক্তার নিবন্ধন</h3>
							</div>
						</template>
						<template>
							<form>
								<div class="row">
									<div class="col-md-12">
										<div class="form-group">
											<label class="bangla-font mb-0 font-weight-bold"
												>বিভাগ <span class="text-danger">*</span></label
											>
											<select class="form-control bangla-font">
												<option>বিভাগ বাছাই করুন</option>
												<option>O+</option>
												<option>O-</option>
												<option>AB+</option>
											</select>
										</div>
										<div class="form-group">
											<label class="bangla-font mb-0 font-weight-bold"
												>ডাক্তারের নাম<span class="text-danger">*</span></label
											>
											<input
												type="text"
												class="form-control bangla-font"
												placeholder="নাম লিখুন"
											/>
										</div>

										<div class="form-group">
											<label class="bangla-font mb-0 font-weight-bold"
												>ডিগ্রী<span class="text-danger">*</span></label
											>
											<textarea
												class="form-control bangla-font"
												rows="3"
												placeholder="বর্তমান ঠিকানা লিখুন "
											></textarea>
										</div>
										<div class="form-group">
											<label class="bangla-font mb-0 font-weight-bold"
												>পদবী<span class="text-danger">*</span></label
											>
											<textarea
												class="form-control bangla-font"
												rows="3"
												placeholder="বর্তমান ঠিকানা লিখুন "
											></textarea>
										</div>
										<div class="form-group">
											<label class="bangla-font mb-0 font-weight-bold"
												>কর্মস্থল<span class="text-danger">*</span></label
											>
											<textarea
												class="form-control bangla-font"
												rows="3"
												placeholder="বর্তমান ঠিকানা লিখুন "
											></textarea>
										</div>
										<div class="form-group">
											<label class="bangla-font mb-0 font-weight-bold"
												>কোন বিষয়ে বিশেষজ্ঞ<span class="text-danger"
													>*</span
												></label
											>
											<textarea
												class="form-control bangla-font"
												rows="3"
												placeholder="বর্তমান ঠিকানা লিখুন "
											></textarea>
										</div>
										<div class="form-group">
											<label class="bangla-font mb-0 font-weight-bold"
												>বিএমডিসি রেজি. নং:<span class="text-danger"
													>*</span
												></label
											>
											<textarea
												class="form-control bangla-font"
												rows="3"
												placeholder="বর্তমান ঠিকানা লিখুন "
											></textarea>
										</div>
										<div class="form-group">
											<label class="bangla-font mb-0 font-weight-bold"
												>মোবাইল<span class="text-danger">*</span></label
											>
											<input
												type="text"
												class="form-control bangla-font"
												placeholder="মোবাইল নাম্বার দিন "
											/>
										</div>
										<div class="form-group">
											<label class="bangla-font mb-0 font-weight-bold"
												>ছবি</label
											>
											<input
												type="file"
												class="form-control bangla-font"
												placeholder="বিকল্প মোবাইল নাম্বার দিন যদি থাকে "
											/>
										</div>
										<div class="form-group">
											<div
												class="border-1 mt-3"
												v-for="(chamber, index) in chambers"
												:key="index"
											>
												<label class="bangla-font mb-0 font-weight-bold"
													>চেম্বার</label
												>
												<label
													v-if="index > 0"
													class="
														bangla-font
														mb-0
														font-weight-bold
														float-right
														text-danger
														cursor-pointer
													"
													@click.prevent="removeChamber(index)"
													>এই চেম্বার টি মুছে ফেলুন
												</label>
												<input
													type="text"
													class="form-control bangla-font mb-2"
													v-model="chamber.chamber_name"
													placeholder="চেম্বারের নাম "
												/>
												<textarea
													class="form-control mb-2 bangla-font"
													v-model="chamber.chamber_address"
													rows="3"
													placeholder="চেম্বারেরর ঠিকানা"
												></textarea>
												<textarea
													class="form-control mb-2 bangla-font"
													v-model="chamber.time_scedule"
													rows="3"
													placeholder="রোগী দেখার সময়"
												></textarea>
											</div>
											<button
												class="btn btn-sm btn-success bangla-font"
												@click.prevent="AddMoreChamber"
											>
												আরও চেম্বার যোগ করুন
											</button>
										</div>

										<div class="form-group">
											<p class="bangla-font">
												<span class="text-danger">*</span> চিহ্নিত স্থান গুলো
												অবশ্যই পূরণ করতে হবে।
											</p>
										</div>
										<div class="text-center">
											<base-button type="primary" class="my-4 bangla-font"
												>জমা দিন</base-button
											>
										</div>
									</div>
								</div>
							</form>
						</template>
					</card>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
export default {
	name: "DoctorAddForm",
	data() {
		return {
			chambers: [
				{
					chamber_name: "",
					chamber_address: "",
					time_scedule: "",
				},
			],
		};
	},
	methods: {
		/**
		 * Add new chamber
		 */
		AddMoreChamber() {
			this.chambers.push({
				chamber_name: "",
				chamber_address: "",
				time_scedule: "",
			});
		},
		/**
		 * Remove chamber
		 */
		removeChamber(index) {
			this.chambers.splice(index, 1);
		},
	},
};
</script>
<style>
</style>
