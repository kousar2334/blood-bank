<template>
	<header class="header-global">
		<base-nav class="navbar-main" transparent type="" effect="light" expand>
			<router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
				<img src="img/brand/white.png" alt="logo" />
			</router-link>

			<div class="row" slot="content-header" slot-scope="{ closeMenu }">
				<div class="col-6 collapse-brand">
					<a
						href="https://demos.creative-tim.com/vue-argon-design-system/documentation/"
					>
						<img src="img/brand/white.png" />
					</a>
				</div>
				<div class="col-6 collapse-close">
					<close-button @click="closeMenu"></close-button>
				</div>
			</div>

			<ul class="navbar-nav navbar-nav-hover align-items-lg-center">
				<li class="nav-item">
					<router-link class="nav-link nav-link-icon" to="/">
						<span class="nav-link-inner--text bangla-font">হোম </span>
					</router-link>
				</li>
				<li class="nav-item">
					<router-link
						class="nav-link nav-link-icon"
						to="/blood-donor-registration"
					>
						<span class="nav-link-inner--text bangla-font"
							>রক্ত দিতে চান ?
						</span>
					</router-link>
				</li>
				<li class="nav-item">
					<router-link class="nav-link nav-link-icon" to="/add-new-doctor">
						<span class="nav-link-inner--text bangla-font"
							>ডাক্তার যোগ করুন
						</span>
					</router-link>
				</li>
				<!-- <base-dropdown class="nav-item" menu-classes="dropdown-menu-xl">
					<a
						slot="title"
						href="#"
						class="nav-link"
						data-toggle="dropdown"
						role="button"
					>
						<i class="ni ni-ui-04 d-lg-none"></i>
						<span class="nav-link-inner--text bangla-font">গ্যালারী</span>
					</a>
					<div class="dropdown-menu-inner">
						<a
							href="https://demos.creative-tim.com/vue-argon-design-system/documentation/"
							class="media d-flex align-items-center"
						>
							<div
								class="
									icon icon-shape
									bg-gradient-primary
									rounded-circle
									text-white
								"
							>
								<i class="ni ni-spaceship"></i>
							</div>
							<div class="media-body ml-3">
								<h6 class="heading text-primary mb-md-1">Getting started</h6>
								<p class="description d-none d-md-inline-block mb-0">
									Get started with Bootstrap, the world's most popular framework
									for building responsive sites.
								</p>
							</div>
						</a>
						<a
							href="https://demos.creative-tim.com/vue-argon-design-system/documentation/"
							class="media d-flex align-items-center"
						>
							<div
								class="
									icon icon-shape
									bg-gradient-warning
									rounded-circle
									text-white
								"
							>
								<i class="ni ni-ui-04"></i>
							</div>
							<div class="media-body ml-3">
								<h5 class="heading text-warning mb-md-1">Components</h5>
								<p class="description d-none d-md-inline-block mb-0">
									Learn how to use Argon compiling Scss, change brand colors and
									more.
								</p>
							</div>
						</a>
					</div>
				</base-dropdown> -->
				<base-dropdown tag="li" class="nav-item">
					<a
						slot="title"
						href="#"
						class="nav-link"
						data-toggle="dropdown"
						role="button"
					>
						<i class="ni ni-collection d-lg-none"></i>
						<span class="nav-link-inner--text bangla-font">নিবন্ধন ফর্ম</span>
					</a>
					<router-link
						to="/blood-donor-registration"
						class="dropdown-item bangla-font"
						>রক্তদাতা
					</router-link>
					<router-link to="/add-new-doctor" class="dropdown-item bangla-font"
						>ডাক্তার
					</router-link>
					<router-link
						to="/add-new-hospital-clinic"
						class="dropdown-item bangla-font"
						>হাসপাতাল/ক্লিনিক
					</router-link>
					<router-link to="/add-new-ambulance" class="dropdown-item bangla-font"
						>অ্যাম্বুলেন্স
					</router-link>
				</base-dropdown>
				<li class="nav-item">
					<router-link class="nav-link nav-link-icon" to="/about-us">
						<span class="nav-link-inner--text bangla-font"
							>আমাদের সম্পর্কে
						</span>
					</router-link>
				</li>
			</ul>
			<ul class="navbar-nav align-items-lg-center ml-lg-auto">
				<li class="nav-item">
					<a
						class="nav-link nav-link-icon"
						href="https://www.facebook.com/creativetim"
						target="_blank"
						rel="noopener"
						data-toggle="tooltip"
						title="Like us on Facebook"
					>
						<i class="fa fa-facebook-square"></i>
						<span class="nav-link-inner--text d-lg-none">Facebook</span>
					</a>
				</li>
				<li class="nav-item">
					<a
						class="nav-link nav-link-icon"
						href="https://www.instagram.com/creativetimofficial"
						target="_blank"
						rel="noopener"
						data-toggle="tooltip"
						title="Follow us on Instagram"
					>
						<i class="fa fa-instagram"></i>
						<span class="nav-link-inner--text d-lg-none">Instagram</span>
					</a>
				</li>
				<li class="nav-item">
					<a
						class="nav-link nav-link-icon"
						href="https://twitter.com/creativetim"
						target="_blank"
						rel="noopener"
						data-toggle="tooltip"
						title="Follow us on Twitter"
					>
						<i class="fa fa-twitter-square"></i>
						<span class="nav-link-inner--text d-lg-none">Twitter</span>
					</a>
				</li>
				<li class="nav-item d-none d-lg-block ml-lg-4">
					<router-link class="btn btn-neutral btn-icon" to="/blood-bank">
						<span class="btn-inner--icon">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								class="bi bi-box-arrow-in-right"
								viewBox="0 0 16 16"
							>
								<path
									fill-rule="evenodd"
									d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"
								/>
								<path
									fill-rule="evenodd"
									d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
								/>
							</svg>
						</span>
						<span class="nav-link-inner--text bangla-font ml-2 danger"
							>রক্ত প্রয়োজন</span
						>
					</router-link>
				</li>
			</ul>
		</base-nav>
	</header>
</template>
<script>
import BaseNav from "../components/BaseNav";
import BaseDropdown from "../components/BaseDropdown";
import CloseButton from "../components/CloseButton";

export default {
	components: {
		BaseNav,
		CloseButton,
		BaseDropdown,
	},
};
</script>
<style>
</style>
