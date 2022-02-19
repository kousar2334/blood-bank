<template>
	<footer class="footer-area pt-100">
		<div class="container">
			<div class="row">
				<div class="col-sm-6 col-lg-4">
					<div class="footer-item">
						<div class="footer-logo">
							<a class="logo" href="index.html">
								<img src="/uploads/general/02182022073801logo.png" alt="Logo" />
							</a>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
								vero, magni est placeat neque, repellat maxime a dolore
							</p>
							<ul class="pl-0">
								<li>
									<a href="#" target="_blank">
										<i class="icofont-facebook"></i>
									</a>
								</li>
								<li>
									<a href="#" target="_blank">
										<i class="icofont-twitter"></i>
									</a>
								</li>
								<li>
									<a href="#" target="_blank">
										<i class="icofont-youtube-play"></i>
									</a>
								</li>
								<li>
									<a href="#" target="_blank">
										<i class="icofont-instagram"></i>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div class="col-sm-6 col-lg-4">
					<div class="footer-item">
						<div class="footer-links">
							<h3>Quick links</h3>
							<ul class="pl-0">
								<li>
									<a href="about.html"> About </a>
								</li>
								<li>
									<a href="blog.html"> Blog </a>
								</li>
								<li>
									<a href="events.html"> Events </a>
								</li>
								<li>
									<a href="donation.html"> Donation </a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="col-sm-6 col-lg-4">
					<div class="footer-item">
						<div class="footer-contact">
							<h3>Contact info</h3>
							<div class="contact-inner">
								<ul class="pl-0">
									<li>
										<a href="#">6B, Helvetica street, Jordan</a>
									</li>
									<li>
										<i class="icofont-ui-call"></i>
										<a href="tel:+123456789">+123-456-789</a>
									</li>
								</ul>
							</div>
							<div class="contact-inner">
								<ul>
									<li>
										<a href="#">6A, New street, Spain</a>
									</li>
									<li>
										<a href="tel:+548658956">+548-658-956</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="copyright-area">
				<p class="bangla-font">
					&copy;{{ year }} {{ info.site_name }}. Designed By
					<a href="https://hibootstrap.com/" target="_blank">Kousar Rahman</a>
				</p>
			</div>
		</div>
	</footer>
</template>
<script>
import axios from "axios";
export default {
	name: "app-footer",
	data() {
		return {
			year: new Date().getFullYear(),
			social_accounts: "",
			info: "",
		};
	},
	mounted() {
		this.getFooterContent();
	},
	methods: {
		/**
		 *Get footer contnet
		 */
		getFooterContent() {
			console.log("footer content");
			axios
				.post("/api/get-footer-content")
				.then((response) => {
					if (response.data.success) {
						this.social_accounts = response.data.social_accounts;
						this.info = response.data.info;
					}
				})
				.catch((error) => {});
		},
	},
};
</script>
<style>
</style>
