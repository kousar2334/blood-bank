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
											<select
												class="form-control bangla-font"
												@change="setDepartment($event)"
											>
												<option :selected="department === ''">
													বিভাগ বাছাই করুন
												</option>
												>
												<option
													v-for="(department, index) in departments"
													:key="index"
													:value="department.id"
												>
													{{ department.bn_name }}
												</option>
											</select>
											<div v-if="errors.department">
												<p
													v-for="(departmentError, index) in errors.department"
													:key="index"
													class="text-danger bangla-font font-size-13 mb-0"
												>
													{{ departmentError }}
												</p>
											</div>
										</div>
										<div class="form-group">
											<label class="bangla-font mb-0 font-weight-bold"
												>ডাক্তারের নাম<span class="text-danger">*</span></label
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
												>ডাক্তারের নাম(ইংরেজিতে)</label
											>
											<input
												type="text"
												class="form-control bangla-font"
												placeholder="নাম লিখুন ইংরেজিতে"
												v-model="en_name"
											/>
											<div v-if="errors.en_name">
												<p
													v-for="(en_nameError, index) in errors.en_name"
													:key="index"
													class="text-danger bangla-font font-size-13 mb-0"
												>
													{{ en_nameError }}
												</p>
											</div>
										</div>

										<div class="form-group">
											<label class="bangla-font mb-0 font-weight-bold"
												>ডিগ্রী<span class="text-danger">*</span></label
											>
											<textarea
												class="form-control bangla-font"
												rows="3"
												placeholder="ডিগ্রী লিখুন, যেমনঃ এমবিবিএস; এমপিএইচ "
												v-model="qualification"
											></textarea>
											<div v-if="errors.qualification">
												<p
													v-for="(
														qualificationError, index
													) in errors.qualification"
													:key="index"
													class="text-danger bangla-font font-size-13 mb-0"
												>
													{{ qualificationError }}
												</p>
											</div>
										</div>
										<div class="form-group">
											<label class="bangla-font mb-0 font-weight-bold"
												>পদবী</label
											>
											<textarea
												class="form-control bangla-font"
												rows="3"
												placeholder="পদবী লিখুন, যেমনঃ সহকারী অধ্যাপক "
												v-model="position"
											></textarea>
											<div v-if="errors.position">
												<p
													v-for="(positionError, index) in errors.position"
													:key="index"
													class="text-danger bangla-font font-size-13 mb-0"
												>
													{{ positionError }}
												</p>
											</div>
										</div>
										<div class="form-group">
											<label class="bangla-font mb-0 font-weight-bold"
												>কর্মস্থল</label
											>
											<textarea
												class="form-control bangla-font"
												rows="3"
												placeholder="কর্মস্থল, যেমনঃ  ঢাকা মেডিকেল কলেজ "
												v-model="working_place"
											></textarea>
											<div v-if="errors.working_place">
												<p
													v-for="(
														working_placeError, index
													) in errors.working_place"
													:key="index"
													class="text-danger bangla-font font-size-13 mb-0"
												>
													{{ working_placeError }}
												</p>
											</div>
										</div>
										<div class="form-group">
											<label class="bangla-font mb-0 font-weight-bold"
												>কোন বিষয়ে বিশেষজ্ঞ</label
											>
											<textarea
												class="form-control bangla-font"
												rows="3"
												placeholder="কোন বিষয়ে বিশেষজ্ঞ, যেমনঃ মেডিসিন , বাতজর ও হৃদরোগ বিশেষজ্ঞ  "
												v-model="specialist"
											></textarea>
											<div v-if="errors.specialist">
												<p
													v-for="(specialistError, index) in errors.specialist"
													:key="index"
													class="text-danger bangla-font font-size-13 mb-0"
												>
													{{ specialistError }}
												</p>
											</div>
										</div>
										<div class="form-group">
											<label class="bangla-font mb-0 font-weight-bold"
												>বিএমডিসি রেজি. নং:<span class="text-danger"
													>*</span
												></label
											>
											<input
												type="text"
												class="form-control bangla-font"
												placeholder="বিএমডিসি রেজি. নং লিখুন "
												v-model="bmdc_no"
											/>
											<div v-if="errors.bmdc_no">
												<p
													v-for="(bmdc_noError, index) in errors.bmdc_no"
													:key="index"
													class="text-danger bangla-font font-size-13 mb-0"
												>
													{{ bmdc_noError }}
												</p>
											</div>
										</div>
										<div class="form-group">
											<label class="bangla-font mb-0 font-weight-bold"
												>মোবাইল</label
											>
											<input
												type="text"
												class="form-control bangla-font"
												placeholder="মোবাইল নাম্বার দিন "
												v-model="mobile"
											/>
											<div v-if="errors.mobile">
												<p
													v-for="(mobileError, index) in errors.mobile"
													:key="index"
													class="text-danger bangla-font font-size-13 mb-0"
												>
													{{ mobileError }}
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
													class="text-danger bangla-font font-size-13 mb-0"
												>
													{{ imageError }}
												</p>
											</div>
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
													v-model="chamber.chamber"
													placeholder="চেম্বারের নাম "
												/>
												<textarea
													class="form-control mb-2 bangla-font"
													v-model="chamber.address"
													rows="3"
													placeholder="চেম্বারেরর ঠিকানা"
												></textarea>
												<textarea
													class="form-control mb-2 bangla-font"
													v-model="chamber.visiting_time"
													rows="3"
													placeholder="রোগী দেখার সময়, যেমন প্রতি বুধ ও বৃহস্পতিবার সকাল ১০টা০২টা শুক্রবার বিকাল ৩টা-রাত "
												></textarea>
												<textarea
													class="form-control mb-2 bangla-font"
													v-model="chamber.mobiles"
													rows="3"
													placeholder="সিরিয়ালের জন্য মোবাইল নাম্বার"
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
											<base-button
												type="primary"
												class="my-4 bangla-font"
												@click.prevent="storeNewDoctor()"
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
import axios from "axios";
import Modal from "../../components/Modal.vue";
export default {
	name: "DoctorAddForm",
	components: {
		Modal,
	},
	data() {
		return {
			name: "",
			en_name: "",
			department: "",
			qualification: "",
			position: "",
			specialist: "",
			working_place: "",
			mobile: "",
			bmdc_no: "",
			image: "",
			departments: [],
			chambers: [
				{
					chamber: "",
					address: "",
					visiting_time: "",
					mobiles: "",
				},
			],
			errors: [],
			notifination_header: "",
			notifination_message: "",
			notification_modal: false,
		};
	},
	mounted() {
		this.getDocotorDepartments();
	},
	methods: {
		/**
		 * Get doctos divisions
		 */
		getDocotorDepartments() {
			axios
				.get("/api/get-doctors-departments")
				.then((response) => {
					if (response.data.success) {
						this.departments = response.data.departments;
					}
				})
				.catch((error) => {});
		},
		/**
		 * Get selected department
		 */
		setDepartment(event) {
			this.department = event.target.value;
		},
		/**
		 * Get Doctor Image
		 */
		getImage(event) {
			this.image = event.target.files[0];
		},
		/**
		 * Add new chamber
		 */
		AddMoreChamber() {
			this.chambers.push({
				chamber: "",
				address: "",
				visiting_time: "",
				mobiles: "",
			});
		},
		/**
		 * Remove chamber
		 */
		removeChamber(index) {
			this.chambers.splice(index, 1);
		},
		/**
		 * Store new doctor information
		 */
		storeNewDoctor() {
			this.errors = [];
			let form_data = new FormData();
			form_data.append("name", this.name);
			form_data.append("en_name", this.en_name);
			form_data.append("qualification", this.qualification);
			form_data.append("position", this.position);
			form_data.append("image", this.image);
			form_data.append("specialist", this.specialist);
			form_data.append("working_place", this.working_place);
			form_data.append("mobile", this.mobile);
			form_data.append("bmdc_no", this.bmdc_no);
			form_data.append("department", this.department);
			form_data.append("status", 0);
			form_data.append("end", "api");
			const chambers = JSON.stringify(this.chambers);
			form_data.append("chambers", chambers);
			axios
				.post("/api/store-new-doctor", form_data, {
					headers: {
						"Content-Type": "multipart/form-data",
					},
				})
				.then((response) => {
					if (response.data.success) {
						this.notifination_header = "ধন্যবাদ";
						this.notifination_message =
							"আপনার নিবন্ধন সম্পূর্ণ হয়েছে , কর্তৃপক্ষ আপানার দেওয়া তথ্য যাচাই করে ওয়েব সাইটে প্রকাশ করবে।";
						this.name = "";
						this.mobile = "";
						this.image = "";
						this.en_name = "";
						this.qualification = "";
						this.position = "";
						this.department = "";
						this.specialist = "";
						this.working_place = "";
						this.bmdc_no = "";
						this.$refs.image.type = "text";
						this.$refs.image.type = "file";
						this.chambers = [
							{
								chamber: "",
								address: "",
								visiting_time: "",
								mobiles: "",
							},
						];
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
		title: "নতুন ডাক্তার",
		meta: [{ name: "description", content: "foo" }],
	},
};
</script>
<style>
</style>
