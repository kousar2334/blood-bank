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
								<h3 class="bangla-font">অ্যাম্বুলেন্স নিবন্ধন</h3>
							</div>
						</template>
						<template>
							<form>
								<div class="row">
									<div class="col-md-12">
										<div class="form-group">
											<label class="bangla-font mb-0 font-weight-bold"
												>ক্যাটেগরি<span class="text-danger">*</span></label
											>
											<select
												class="form-control bangla-font"
												@change="setCategory($event)"
											>
												<option :selected="cat_id === ''">
													ক্যাটেগরি বাছাই করুন
												</option>
												<option
													v-for="(cat, index) in categories"
													:key="index"
													:value="cat.id"
												>
													{{ cat.bn_name }}
												</option>
											</select>
											<div v-if="errors.cat_id">
												<p
													v-for="(cat_idError, index) in errors.cat_id"
													:key="index"
													class="text-danger bangla-font font-size-13 mb-0"
												>
													{{ cat_idError }}
												</p>
											</div>
										</div>
										<div class="form-group">
											<label class="bangla-font mb-0 font-weight-bold">
												নাম<span class="text-danger">*</span></label
											>
											<input
												type="text"
												class="form-control bangla-font"
												placeholder="নাম লিখুন"
												v-model="bn_name"
											/>
											<div v-if="errors.bn_name">
												<p
													v-for="(bn_name, index) in errors.bn_name"
													:key="index"
													class="text-danger bangla-font font-size-13 mb-0"
												>
													{{ bn_name }}
												</p>
											</div>
										</div>
										<div class="form-group">
											<label class="bangla-font mb-0 font-weight-bold">
												নাম (ইংরেজিতে) <span class="text-danger">*</span></label
											>
											<input
												type="text"
												class="form-control bangla-font"
												placeholder="নাম লিখুন"
												v-model="name"
											/>
											<div v-if="errors.name">
												<p
													v-for="(nameError, index) in errors.name"
													:key="index"
													class="text-danger bangla-font font-size-13 mb-0"
												>
													{{ nameError }}
												</p>
											</div>
										</div>
										<div class="form-group">
											<label class="bangla-font mb-0 font-weight-bold"
												>মোবাইল<span class="text-danger">*</span></label
											>
											<input
												type="text"
												class="form-control bangla-font"
												placeholder="মোবাইল নাম্বার দিন "
												v-model="mobile_1"
											/>
											<div v-if="errors.mobile_1">
												<p
													v-for="(mobileError, index) in errors.mobile_1"
													:key="index"
													class="text-danger bangla-font font-size-13 mb-0"
												>
													{{ mobileError }}
												</p>
											</div>
										</div>
										<div class="form-group">
											<label class="bangla-font mb-0 font-weight-bold"
												>বিকল্প মোবাইল</label
											>
											<input
												type="text"
												class="form-control bangla-font"
												placeholder="বিকল্প মোবাইল নাম্বার দিন, যদি থাকে "
												v-model="mobile_2"
											/>
											<div v-if="errors.mobile_2">
												<p
													v-for="(mobile_2Error, index) in errors.mobile_2"
													:key="index"
													class="text-danger bangla-font font-size-13 mb-0"
												>
													{{ mobile_2Error }}
												</p>
											</div>
										</div>
										<div class="form-group">
											<label class="bangla-font mb-0 font-weight-bold"
												>টেলিফোন নাম্বার</label
											>
											<input
												type="text"
												class="form-control bangla-font"
												placeholder="টেলিফোন নাম্বার , যদি থাকে "
												v-model="phone"
											/>
											<div v-if="errors.phone">
												<p
													v-for="(phoneError, index) in errors.phone"
													:key="index"
													class="text-danger bangla-font font-size-13 mb-0"
												>
													{{ phoneError }}
												</p>
											</div>
										</div>
										<div class="form-group">
											<label class="bangla-font mb-0 font-weight-bold"
												>ইমেইল</label
											>
											<input
												type="email"
												class="form-control bangla-font"
												placeholder="ইমেইল দিন , যদি থাকে "
												v-model="email"
											/>
											<div v-if="errors.email">
												<p
													v-for="(emailError, index) in errors.email"
													:key="index"
													class="text-danger bangla-font font-size-13 mb-0"
												>
													{{ emailError }}
												</p>
											</div>
										</div>
										<div class="form-group">
											<label class="bangla-font mb-0 font-weight-bold"
												>অ্যাম্বুলেন্সের বর্ণনা
												<span class="text-danger">*</span></label
											>
											<textarea
												v-model="description"
												class="form-control bangla-font"
												rows="4"
												placeholder="অ্যাম্বুলেন্সের  বর্ণনা লিখুন "
											></textarea>
											<div v-if="errors.description">
												<p
													v-for="(
														descriptionerror, index
													) in errors.description"
													:key="index"
													class="text-danger bangla-font font-size-13 mb-0"
												>
													{{ descriptionerror }}
												</p>
											</div>
										</div>

										<div class="form-group">
											<label class="bangla-font mb-0 font-weight-bold"
												>ছবি</label
											>
											<input
												type="file"
												class="form-control bangla-font"
												ref="image"
												@change="getImage($event)"
											/>
											<div v-if="errors.image">
												<p
													v-for="(imageError, index) in errors.image"
													:key="index"
													class="text-danger bangla-font font-size-13 mb-0 mb-0"
												>
													{{ imageError }}
												</p>
											</div>
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
												@click.prevent="createNewAmbulance"
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
						:show.sync="notification_modal"
						gradient="danger"
						modal-classes="modal-danger modal-dialog-top"
					>
						<div class="py-3 text-center">
							<i class="ni ni-bell-55 ni-3x"></i>
							<h1 class="mt-4 bangla-font">{{ notifination_header }}</h1>
							<p class="bangla-font">
								{{ notifination_message }}
							</p>
						</div>

						<template slot="footer">
							<base-button
								type="white"
								@click="notification_modal = false"
								class="bangla-font"
								>কেটে দিন</base-button
							>
						</template>
					</modal>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
import Modal from "../../components/Modal.vue";
import axios from "axios";
export default {
	name: "AmbulanceForm",
	components: {
		Modal,
	},
	data() {
		return {
			notification_modal: false,
			notifination_header: "",
			notifination_message: "",
			categories: [],
			name: "",
			bn_name: "",
			cat_id: "",
			description: "",
			phone: "",
			mobile_1: "",
			mobile_2: "",
			phone: "",
			image: "",
			email: "",
			status: 0,
			errors: [],
		};
	},
	mounted() {
		this.getAllCetegories();
	},
	methods: {
		/**
		 * Get all categories
		 */
		getAllCetegories() {
			axios
				.get("/api/get-all-ambulance-categories")
				.then((response) => {
					if (response.data.success) {
						this.categories = response.data.categories;
					}
				})
				.catch((error) => {});
		},
		/**
		 * Get selected category
		 */
		setCategory(event) {
			this.cat_id = event.target.value;
		},
		/**
		 * Get ambulane image
		 */
		getImage(event) {
			this.image = event.target.files[0];
		},
		/**
		 * Store new ambulance
		 */
		createNewAmbulance() {
			this.errors = [];
			let form_data = new FormData();
			form_data.append("name", this.name);
			form_data.append("bn_name", this.bn_name);
			form_data.append("description", this.description);
			form_data.append("phone", this.phone);
			form_data.append("mobile_1", this.mobile_1);
			form_data.append("mobile_2", this.mobile_2);
			form_data.append("image", this.image);
			form_data.append("email", this.email);
			form_data.append("status", this.status);
			form_data.append("cat_id", this.cat_id);
			axios
				.post("/api/store-new-ambulance", form_data)
				.then((response) => {
					if (response.data.success) {
						this.notifination_header = "ধন্যবাদ";
						this.notifination_message =
							"আপনার নিবন্ধন সম্পূর্ণ হয়েছে , কর্তৃপক্ষ আপানার দেওয়া তথ্য যাচাই করে ওয়েব সাইটে প্রকাশ করবে।";
						this.name = "";
						this.bn_name = "";
						this.description = "";
						this.name = "";
						this.phone = "";
						this.image = "";
						this.mobile_1 = "";
						this.mobile_2 = "";
						this.email = "";
						this.cat_id = "";
						this.$refs.image.type = "text";
						this.$refs.image.type = "file";
					} else {
						this.notifination_header = "দুঃখিত";
						this.notifination_message =
							"আপানর নিবন্ধন সম্পূর্ণ হয়নি , আবার চেষ্টা করুন ।";
					}
					this.notification_modal = true;
				})
				.catch((error) => {
					if (error.response.status === 422) {
						this.errors = error.response.data.errors;
					} else {
						this.notifination_header = "দুঃখিত";
						this.notifination_message =
							"আপানর নিবন্ধন সম্পূর্ণ হয়নি , আবার চেষ্টা করুন ।";
						this.notification_modal = true;
					}
				});
		},
	},
	metaInfo: {
		title: "অ্যাম্বুলেন্স নিবন্ধন",
	},
};
</script>
<style>
</style>
