<template>
	<footer>
		<div class="footer-wrapper section-bg2"
			data-background="http://blood-bank.local/uploads/profile_image/doctor/09302022174935d.png">
			<!-- Footer Top-->
			<div class="footer-area footer-padding">
				<div class="container">
					<div class="row d-flex justify-content-between">
						<div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
							<div class="single-footer-caption mb-50">
								<div class="single-footer-caption mb-30">
									<div class="footer-tittle">
										<div class="footer-logo mb-20">
											<a href="index.html"><img src="assets/img/logo/logo2_footer.png"
													alt="">DDDDD</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-xl-3 col-lg-3 col-md-4 col-sm-5">
							<div class="single-footer-caption mb-50">
								<div class="footer-tittle">
									<h4>Contact Info</h4>
									<ul class="list-unstyled">
										<li>
											<p>Address :Your address goes here, your demo address.</p>
										</li>
										<li><a href="#">Phone : +8880 44338899</a></li>
										<li><a href="#">Email : info@colorlib.com</a></li>
									</ul>
								</div>

							</div>
						</div>
						<div class="col-xl-3 col-lg-3 col-md-4 col-sm-5">
							<div class="single-footer-caption mb-50">
								<div class="footer-tittle">
									<h4>Important Link</h4>
									<ul class="list-unstyled">
										<li><a href="#"> View Project</a></li>
										<li><a href="#">Contact Us</a></li>
										<li><a href="#">Testimonial</a></li>
										<li><a href="#">Proparties</a></li>
										<li><a href="#">Support</a></li>
									</ul>
								</div>
							</div>
						</div>
						<div class="col-xl-3 col-lg-3 col-md-4 col-sm-5">
							<div class="single-footer-caption mb-50">
								<div class="footer-tittle">
									<h4>Newsletter</h4>
									<div class="footer-pera footer-pera2">
										<p>Heaven fruitful doesn't over lesser in days. Appear creeping.</p>
									</div>
									<!-- Form -->
									<div class="footer-form">
										<div id="mc_embed_signup">
											<form target="_blank"
												action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
												method="get" class="subscribe_form relative mail_part">
												<input type="email" name="email" id="newsletter-form-email"
													placeholder="Email Address" class="placeholder hide-on-focus"
													onfocus="this.placeholder = ''"
													onblur="this.placeholder = ' Email Address '">
												<div class="form-icon">
													<button type="submit" name="submit" id="newsletter-submit"
														class="email_icon newsletter-submit button-contactForm"><img
															src="assets/img/gallery/form.png" alt=""></button>
												</div>
												<div class="mt-10 info"></div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- footer-bottom -->
			<div class="footer-bottom-area">
				<div class="container">
					<div class="footer-border">
						<div class="row d-flex justify-content-between align-items-center">
							<div class="col-xl-10 col-lg-9 ">
								<div class="footer-copy-right">
									<p>
										<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
										Copyright &copy; All rights reserved | This template is made with <i
											class="fa fa-heart" aria-hidden="true"></i> by <a
											href="https://colorlib.com" target="_blank">Colorlib</a>
										<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
									</p>
								</div>
							</div>
							<div class="col-xl-2 col-lg-3">
								<div class="footer-social f-right">
									<a href="#"><i class="fab fa-twitter"></i></a>
									<a href="https://www.facebook.com/sai4ull"><i class="fab fa-facebook-f"></i></a>
									<a href="#"><i class="fas fa-globe"></i></a>
									<a href="#"><i class="fab fa-behance"></i></a>
								</div>
							</div>
						</div>
					</div>
				</div>
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
				.catch((error) => { });
		},
	},
};
</script>
<style scoped>
.footer-area .footer-tittle h4 {
	color: #ffffff;
	font-size: 20px;
	margin-bottom: 29px;
	font-weight: 400;
	text-transform: capitalize;
}

.footer-area .footer-tittle ul li p {
	color: #868c98;
	font-weight: 300;
}

p {
	font-family: "Muli", sans-serif;
	color: #10285d;
	font-size: 16px;
	line-height: 30px;
	margin-bottom: 15px;
	font-weight: normal;
}

/* line 893, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_common.scss */
.footer-padding {
	padding-top: 160px;
	padding-bottom: 120px;
}

@media only screen and (min-width: 768px) and (max-width: 991px) {

	/* line 893, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_common.scss */
	.footer-padding {
		padding-top: 100px;
		padding-bottom: 70px;
	}
}

@media only screen and (min-width: 576px) and (max-width: 767px) {

	/* line 893, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_common.scss */
	.footer-padding {
		padding-top: 80px;
		padding-bottom: 70px;
	}
}

@media (max-width: 575px) {

	/* line 893, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_common.scss */
	.footer-padding {
		padding-top: 80px;
		padding-bottom: 0px;
	}
}

/* line 963, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_common.scss */
.section-bg2 {
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
}

/* line 11, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_footer.scss */
.footer-area .footer-tittle ul li {
	color: #868c98;
	margin-bottom: 16px;
}

/* line 14, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_footer.scss */
.footer-area .footer-tittle ul li a {
	color: #868c98;
	font-weight: 300;
}

/* line 17, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_footer.scss */
.footer-area .footer-tittle ul li a:hover {
	color: #09cc7f;
	padding-left: 5px;
}

/* line 23, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_footer.scss */
.footer-area .footer-tittle ul li p {
	color: #868c98;
	font-weight: 300;
}

/* line 32, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_footer.scss */
.footer-area .footer-pera p {
	color: #868c98;
	padding-right: 52px;
	font-size: 16px;
	margin-bottom: 50px;
	line-height: 1.8;
}

@media only screen and (min-width: 768px) and (max-width: 991px) {

	/* line 32, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_footer.scss */
	.footer-area .footer-pera p {
		padding-right: 0px;
	}
}

/* line 45, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_footer.scss */
.footer-area .footer-pera.footer-pera2 p {
	padding: 0;
}

/* line 51, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_footer.scss */
.footer-area .footer-tittle-bottom span {
	display: inline-block;
	color: #fff;
	font-weight: 600;
	font-size: 24px;
	margin-right: 11px;
}

@media (max-width: 575px) {

	/* line 51, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_footer.scss */
	.footer-area .footer-tittle-bottom span {
		font-size: 20px;
	}
}

/* line 62, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_footer.scss */
.footer-area .footer-tittle-bottom p {
	display: inline-block;
	color: #fff;
}

/* line 67, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_footer.scss */
.footer-area .footer-form {
	margin-top: 40px;
}

/* line 69, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_footer.scss */
.footer-area .footer-form form {
	position: relative;
}

/* line 71, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_footer.scss */
.footer-area .footer-form form input {
	width: 100%;
	height: 43px;
	padding: 10px 20px;
	border: 1px solid #fff;
	border-radius: 5px;
}

/* line 79, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_footer.scss */
.footer-area .footer-form form .form-icon button {
	position: absolute;
	top: 0;
	right: 0;
	background: none;
	border: 0;
	cursor: pointer;
	padding: 13px 22px;
	background: #09cc7f;
	line-height: 1;
	border-radius: 0 3px 3px 0;
}

/* line 94, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_footer.scss */
.footer-area .info.error {
	color: #09cc7f;
}

/* line 102, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_footer.scss */
.footer-bottom-area .footer-border {
	border-top: 1px solid #2d3544;
	padding: 33px 0px 20px;
}

/* line 107, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_footer.scss */
.footer-bottom-area .footer-copy-right p {
	color: #888888;
	font-weight: 300;
	font-size: 16px;
	line-height: 2;
	margin-bottom: 12px;
}

@media (max-width: 575px) {

	/* line 107, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_footer.scss */
	.footer-bottom-area .footer-copy-right p {
		margin-bottom: 20px;
	}
}

@media only screen and (min-width: 768px) and (max-width: 991px) {

	/* line 107, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_footer.scss */
	.footer-bottom-area .footer-copy-right p {
		margin-bottom: 20px;
	}
}

/* line 119, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_footer.scss */
.footer-bottom-area .footer-copy-right p i {
	color: #09cc7f;
}

/* line 122, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_footer.scss */
.footer-bottom-area .footer-copy-right p a {
	color: #09cc7f;
}

/* line 125, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_footer.scss */
.footer-bottom-area .footer-copy-right p a:hover {
	color: #fff;
}

@media (max-width: 575px) {

	/* line 132, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_footer.scss */
	.footer-bottom-area .footer-social {
		float: left;
	}
}

@media only screen and (min-width: 768px) and (max-width: 991px) {

	/* line 132, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_footer.scss */
	.footer-bottom-area .footer-social {
		float: left;
	}
}

/* line 140, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_footer.scss */
.footer-bottom-area .footer-social>a {
	color: #7b8693;
	font-size: 14px;
	padding-left: 25px;
}

/* line 144, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_footer.scss */
.footer-bottom-area .footer-social>a>i {
	-webkit-transition: 0.4s;
	-moz-transition: 0.4s;
	-o-transition: 0.4s;
	transition: 0.4s;
	transform: rotateY(0deg);
	-webkit-transform: rotateY(0deg);
	-moz-transform: rotateY(0deg);
	-ms-transform: rotateY(0deg);
	-o-transform: rotateY(0deg);
}

/* line 153, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_footer.scss */
.footer-bottom-area .footer-social>a:hover i {
	transform: rotateY(180deg);
	-webkit-transform: rotateY(180deg);
	-moz-transform: rotateY(180deg);
	-ms-transform: rotateY(180deg);
	-o-transform: rotateY(180deg);
}

/* line 160, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_footer.scss */
.footer-bottom-area .footer-social>a:hover {
	color: #09cc7f;
}
</style>
