<template>
	<footer class="footer has-cards">
		<!-- <div class="container container-lg">
            <div class="row">
                <div class="col-md-6 mb-5 mb-md-0">
                    <div class="card card-lift--hover shadow border-0">
                        <router-link to="/landing" title="Landing Page">
                            <img v-lazy="'img/theme/landing.jpg'" class="card-img">
                        </router-link>
                    </div>
                </div>
                <div class="col-md-6 mb-5 mb-lg-0">
                    <div class="card card-lift--hover shadow border-0">
                        <router-link to="/profile" title="Profile Page">
                            <img v-lazy="'img/theme/profile.jpg'" class="card-img">
                        </router-link>
                    </div>
                </div>
            </div>
        </div> -->
		<div class="container">
			<div class="row row-grid align-items-center my-md">
				<div class="col-lg-6">
					<h3 class="text-primary font-weight-light mb-2 bangla-font">
						আমাদের সঙ্গে থাকার জন্য ধন্যবাদ
					</h3>
					<!-- <h4 class="mb-0 font-weight-light">
						Let's get in touch on any of these platforms.
					</h4> -->
				</div>
				<div class="col-lg-6 text-lg-center btn-wrapper">
					<a
						target="_blank"
						rel="noopener"
						href="https://twitter.com/creativetim"
						class="btn btn-neutral btn-icon-only btn-twitter btn-round btn-lg"
						data-toggle="tooltip"
						data-original-title="Follow us"
					>
						<i class="fa fa-twitter"></i>
					</a>
					<a
						target="_blank"
						rel="noopener"
						href="https://www.facebook.com/creativetim"
						class="btn btn-neutral btn-icon-only btn-facebook btn-round btn-lg"
						data-toggle="tooltip"
						data-original-title="Like us"
					>
						<i class="fa fa-facebook-square"></i>
					</a>
					<a
						target="_blank"
						rel="noopener"
						href="https://dribbble.com/creativetim"
						class="btn btn-neutral btn-icon-only btn-dribbble btn-lg btn-round"
						data-toggle="tooltip"
						data-original-title="Follow us"
					>
						<i class="fa fa-dribbble"></i>
					</a>
					<a
						target="_blank"
						rel="noopener"
						href="https://github.com/creativetimofficial"
						class="btn btn-neutral btn-icon-only btn-github btn-round btn-lg"
						data-toggle="tooltip"
						data-original-title="Star on Github"
					>
						<i class="fa fa-github"></i>
					</a>
				</div>
			</div>
			<hr />
			<div class="row align-items-center justify-content-md-between">
				<div class="col-md-6">
					<div class="copyright">
						&copy; {{ year }}
						<a
							href="https://www.creative-tim.com"
							target="_blank"
							rel="noopener"
							class="bangla-font"
							>আমার বগুড়া</a
						>
					</div>
				</div>
				<div class="col-md-6">
					<ul class="nav nav-footer justify-content-end">
						<li class="nav-item">
							<a
								href="https://www.facebook.com/kousarrahman"
								class="nav-link"
								target="_blank"
								rel="noopener"
								>Developed By <strong class="success">Kousar Rahman</strong></a
							>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</footer>
</template>
<script>
export default {
	name: "app-footer",
	data() {
		return {
			year: new Date().getFullYear(),
		};
	},
};
</script>
<style>
</style>
