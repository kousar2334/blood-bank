<template>
	<section class="section section-shaped section-lg my-0">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-lg-8">
					<card type="secondary" header-classes="bg-white pb-5" body-classes="px-lg-5 py-lg-5"
						class="border-0">
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
											<label class="bangla-font mb-0 font-weight-bold">রক্তের গ্রুপ<span
													class="text-danger">*</span></label>
											<select class="form-control bangla-font" @change="setBloodGroup($event)">
												<option :selected="selected_blood_group === ''">
													রক্তের গ্রুপ বাছাই করুন
												</option>
												<option v-for="(blood_group, index) in blood_groups" :key="index"
													:value="blood_group.id">
													{{ blood_group.name }}
												</option>
											</select>
											<div v-if="errors.blood_group">
												<p v-for="(
														blood_groupError, index
													) in errors.blood_group" :key="index" class="text-danger bangla-font font-size-13 mb-0">
													{{ blood_groupError }}
												</p>
											</div>
										</div>
										<div class="form-group">
											<label class="bangla-font mb-0 font-weight-bold">রক্ত দাতার নাম<span
													class="text-danger">*</span></label>
											<input type="text" class="form-control bangla-font" placeholder="নাম লিখুন"
												v-model="name" />
											<div v-if="errors.name">
												<p v-for="(nameError, index) in errors.name" :key="index"
													class="text-danger bangla-font font-size-13 mb-0">
													{{ nameError }}
												</p>
											</div>
										</div>
										<div class="form-group">
											<label class="bangla-font mb-0 font-weight-bold">মোবাইল<span
													class="text-danger">*</span></label>
											<input type="text" class="form-control bangla-font"
												placeholder="মোবাইল নাম্বার দিন " v-model="mobile" />
											<div v-if="errors.mobile">
												<p v-for="(mobileError, index) in errors.mobile" :key="index"
													class="text-danger bangla-font font-size-13 mb-0">
													{{ mobileError }}
												</p>
											</div>
										</div>
										<div class="form-group">
											<label class="bangla-font mb-0 font-weight-bold">বিকল্প মোবাইল</label>
											<input type="text" class="form-control bangla-font"
												placeholder="বিকল্প মোবাইল নাম্বার দিন, যদি থাকে " v-model="mobile_2" />
											<div v-if="errors.mobile_2">
												<p v-for="(mobile_2Error, index) in errors.mobile_2" :key="index"
													class="text-danger bangla-font font-size-13 mb-0">
													{{ mobile_2Error }}
												</p>
											</div>
										</div>
										<div class="form-group">
											<label class="bangla-font mb-0 font-weight-bold">ইমেইল</label>
											<input type="email" class="form-control bangla-font"
												placeholder="ইমেইল দিন , যদি থাকে " v-model="email" />
											<div v-if="errors.email">
												<p v-for="(emailError, index) in errors.email" :key="index"
													class="text-danger bangla-font font-size-13 mb-0">
													{{ emailError }}
												</p>
											</div>
										</div>
										<div class="form-group">
											<label class="bangla-font mb-0 font-weight-bold">ঠিকানা<span
													class="text-danger">*</span></label>
											<textarea v-model="address" class="form-control bangla-font" rows="3"
												placeholder="বর্তমান ঠিকানা লিখুন "></textarea>
											<div v-if="errors.address">
												<p v-for="(addressError, index) in errors.address" :key="index"
													class="text-danger bangla-font font-size-13 mb-0">
													{{ addressError }}
												</p>
											</div>
										</div>
										<div class="form-group">
											<label class="bangla-font mb-0 font-weight-bold">ছবি</label>
											<input type="file" class="form-control bangla-font"
												placeholder="বিকল্প মোবাইল নাম্বার দিন যদি থাকে " ref="image"
												@change="getImage($event)" />
											<div v-if="errors.image">
												<p v-for="(imageError, index) in errors.image" :key="index"
													class="text-danger bangla-font font-size-13 mb-0 mb-0">
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
											<base-button type="primary" class="my-4 bangla-font"
												@click.prevent="createNewBloodDonor">জমা দিন</base-button>
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
					<modal :show.sync="notification_modal" gradient="danger"
						modal-classes="modal-danger modal-dialog-top">
						<div class="py-3 text-center">
							<i class="ni ni-bell-55 ni-3x"></i>
							<h1 class="mt-4 bangla-font">{{ notifination_header }}</h1>
							<p class="bangla-font">
								{{ notifination_message }}
							</p>
						</div>

						<template slot="footer">
							<base-button type="white" @click="notification_modal = false" class="bangla-font">কেটে
								দিন</base-button>
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
	name: "BloodDonorForm",
	components: {
		Modal,
	},
	data() {
		return {
			notification_modal: false,
			notifination_header: "",
			notifination_message: "",
			blood_groups: [],
			name: "",
			mobile: "",
			mobile_2: "",
			image: "",
			address: "",
			email: "",
			selected_blood_group: "",
			errors: [],
		};
	},
	mounted() {
		this.getAllBloodGroup();
	},
	methods: {
		/**
		 * Get all blood groups
		 */
		getAllBloodGroup() {
			axios
				.get("/api/get-all-blood-groups")
				.then((response) => {
					if (response.data.success) {
						this.blood_groups = response.data.blood_groups;
					}
				})
				.catch((error) => { });
		},
		/**
		 * Get selected blood group
		 */
		setBloodGroup(event) {
			this.selected_blood_group = event.target.value;
		},
		/**
		 * Get Donor Image
		 */
		getImage(event) {
			this.image = event.target.files[0];
		},
		/**
		 * Store new blood donor
		 */
		createNewBloodDonor() {
			this.errors = [];
			let form_data = new FormData();
			form_data.append("name", this.name);
			form_data.append("mobile", this.mobile);
			form_data.append("mobile_2", this.mobile_2);
			form_data.append("image", this.image);
			form_data.append("email", "");
			form_data.append("address", this.address);
			form_data.append("email", this.email);
			form_data.append("blood_group", this.selected_blood_group);
			axios
				.post("/api/store-new-blood-donor", form_data)
				.then((response) => {
					if (response.data.success) {
						this.notifination_header = "ধন্যবাদ";
						this.notifination_message =
							"রক্তদাতা হিসাবে আপনার নিবন্ধন সম্পূর্ণ হয়েছে , কর্তৃপক্ষ আপানার দেওয়া তথ্য যাচাই করে ওয়েব সাইটে প্রকাশ করবে।";
						this.name = "";
						this.mobile = "";
						this.image = "";
						this.mobile_2 = "";
						this.address = "";
						this.email = "";
						this.selected_blood_group = "";
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
		title: "নতুন রক্ত দাতার নিবন্ধন",
	},
};
</script>
<style>

</style>
