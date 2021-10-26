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
								<h3 class="bangla-font">নতুন রক্ত দাতার নিবন্ধন</h3>
							</div>
						</template>
						<template>
							<form>
								<div class="row">
									<div class="col-md-12">
										<div class="form-group">
											<label class="bangla-font mb-0 font-weight-bold"
												>রক্তের গ্রুপ<span class="text-danger">*</span></label
											>
											<select class="form-control bangla-font">
												<option>রক্তের গ্রুপ বাছাই করুন</option>
												<option>O+</option>
												<option>O-</option>
												<option>AB+</option>
											</select>
										</div>
										<div class="form-group">
											<label class="bangla-font mb-0 font-weight-bold"
												>রক্ত দাতার নাম<span class="text-danger">*</span></label
											>
											<input
												type="text"
												class="form-control bangla-font"
												id="exampleFormControlInput1"
												placeholder="নাম লিখুন"
											/>
										</div>
										<div class="form-group">
											<label class="bangla-font mb-0 font-weight-bold"
												>মোবাইল<span class="text-danger">*</span></label
											>
											<input
												type="text"
												class="form-control bangla-font"
												id="exampleFormControlInput1"
												placeholder="মোবাইল নাম্বার দিন "
											/>
										</div>
										<div class="form-group">
											<label class="bangla-font mb-0 font-weight-bold"
												>বিকল্প মোবাইল</label
											>
											<input
												type="text"
												class="form-control bangla-font"
												id="exampleFormControlInput1"
												placeholder="বিকল্প মোবাইল নাম্বার দিন যদি থাকে "
											/>
										</div>
										<div class="form-group">
											<label class="bangla-font mb-0 font-weight-bold"
												>ঠিকানা<span class="text-danger">*</span></label
											>
											<textarea
												class="form-control bangla-font"
												id="exampleFormControlTextarea1"
												rows="3"
												placeholder="বর্তমান ঠিকানা লিখুন "
											></textarea>
										</div>
										<div class="form-group">
											<label class="bangla-font mb-0 font-weight-bold"
												>ছবি</label
											>
											<input
												type="file"
												class="form-control bangla-font"
												id="exampleFormControlInput1"
												placeholder="বিকল্প মোবাইল নাম্বার দিন যদি থাকে "
											/>
										</div>
										<div class="form-group">
											<p class="bangla-font">
												<span class="text-danger">*</span> চিহ্নিত স্থান গুলো
												অবশ্যই পূরণ করতে হবে।
											</p>
										</div>
										<div class="text-center">
											<base-button
												type="primary"
												class="my-4 bangla-font"
												@click.prevent="viewDetails"
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
			<div class="row">
				<div class="col-md-4">
					<modal
						:show.sync="modals.modal1"
						gradient="danger"
						modal-classes="modal-danger modal-dialog-top"
					>
						<!-- <h6 slot="header" class="modal-title" id="modal-title-notification">
							Your attention is required
						</h6> -->

						<div class="py-3 text-center">
							<i class="ni ni-bell-55 ni-3x"></i>
							<h1 class="mt-4 bangla-font">ধন্যবাদ</h1>
							<p class="bangla-font">
								রক্তদাতা হিসাবে আপনার নিবন্ধন সম্পূর্ণ হয়েছে , কর্তৃপক্ষ আপানার
								দেওয়া তথ্য যাচাই করে ওয়েব সাইটে প্রকাশ করবে।
							</p>
						</div>

						<template slot="footer">
							<base-button
								type="white"
								@click="modals.modal1 = false"
								class="bangla-font"
								>কেটে দিন</base-button
							>
							<!-- <base-button
								type="link"
								text-color="white"
								class="ml-auto"
								@click="modals.modal1 = false"
							>
								Close
							</base-button> -->
						</template>
					</modal>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
import Modal from "../../components/Modal.vue";
export default {
	name: "BloodDonorForm",
	components: {
		Modal,
	},
	data() {
		return {
			modals: {
				modal1: false,
				modal2: false,
				modal3: false,
			},
		};
	},
	methods: {
		viewDetails() {
			this.modals.modal1 = true;
		},
	},
};
</script>
<style>
</style>
