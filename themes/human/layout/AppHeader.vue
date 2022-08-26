<template>
	<header class="header-global header" ref="Header">
		<div class="topbar style5 d-none d-lg-block">
			<div class="container">
				<ul class="topbar-info">
					<li>
						<span
							><i class="fa fa-envelope-o mr-1"></i>{{ site_info.email }}</span
						>
					</li>

					<li>
						<span
							><i class="fa fa-map-marker mr-1"></i
							>{{ site_info.address }}</span
						>
					</li>
				</ul>
				<!-- Language-->
				<div class="topbar-links">
					<b-dropdown
						id="dropdown-left"
						:text="$i18n.locale"
						variant="primary"
						class="m-2"
					>
						<b-dropdown-item
							href="#"
							v-for="(locale, index) in locales"
							:key="index"
							@click.prevent="setLocale(locale)"
							>{{ locale }}</b-dropdown-item
						>
					</b-dropdown>
				</div>
				<!--End Language -->
				<div class="topbar-links">
					<ul class="topbar-info">
						<li class="nav-item mr-0">
							<a
								class="nav-link nav-link-icon social-link"
								href="https://www.facebook.com/creativetim"
								target="_blank"
								rel="noopener"
								data-toggle="tooltip"
								title="Like us on Facebook Kousar"
							>
								<i class="fa fa-facebook-square"></i>
								<span class="nav-link-inner--text d-lg-none">Facebook</span>
							</a>
						</li>
						<li class="nav-item mr-0">
							<a
								class="nav-link nav-link-icon social-link"
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
						<li class="nav-item mr-0">
							<a
								class="nav-link nav-link-icon social-link"
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
					</ul>
				</div>
			</div>
		</div>
		<p>{{ $t("activate") }}</p>
		<p>{{ $t("action") }}</p>
		<div class="sticky-header" @scroll="scrollHandler" ref="fooHeader">
			<base-nav class="navbar-main p-1" type="" effect="light" expand>
				<router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
					<img v-if="site_info.logo" :src="`/${site_info.logo}`" alt="logo" />
					<h2 v-else class="bangla-font">{{ site_info.site_name }}</h2>
				</router-link>

				<div class="row" slot="content-header" slot-scope="{ closeMenu }">
					<div class="col-6 collapse-brand">
						<a href="/">
							<h2 class="text-black bangla-font">{{ site_info.site_name }}</h2>
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
					<base-dropdown tag="li" class="nav-item">
						<a
							slot="title"
							href="#"
							class="nav-link nav-link-icon"
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
						<router-link
							to="/add-new-ambulance"
							class="dropdown-item bangla-font"
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
					<li class="nav-item d-none d-lg-block ml-lg-4">
						<router-link class="btn btn-neutral btn-icon" to="/blood-bank">
							<span class="nav-link-inner--text bangla-font">রক্ত প্রয়োজন</span>
						</router-link>
					</li>
				</ul>
			</base-nav>
		</div>
	</header>
</template>
<script>
import BaseNav from "../components/BaseNav";
import BaseDropdown from "../components/BaseDropdown";
import CloseButton from "../components/CloseButton";
import axios from "axios";

export default {
	components: {
		BaseNav,
		CloseButton,
		BaseDropdown,
	},
	data() {
		return {
			site_info: {},
			social_accounts: "",
			info: "",
			locales: ["en", "bd"],
			lang: {
				bd: {
					Hello: "হ্যালো",
				},
				en: {
					Hello: "Hello data",
				},
			},
		};
	},
	mounted() {
		this.getSiteInfo();
		window.addEventListener("scroll", this.scrollHandler);
		let headerH = this.$refs.Header.clientHeight;
		let headerM = this.$refs.fooHeader;
		headerM.parentElement.style.minHeight = headerH + "px";
	},
	methods: {
		setLocale(language) {
			this.$store
				.dispatch("changeLocale", language)
				.then(() => {
					this.$i18n.locale = language;
					location.reload();
				})
				.catch((error) => {});
		},
		/**
		 *Get site logo and name
		 */
		getSiteInfo() {
			axios
				.get("/api/get-site-logo-name")
				.then((response) => {
					if (response.data.success) {
						this.site_info = response.data.info;
						this.social_accounts = response.data.social_accounts;
					}
				})
				.catch((error) => {});
		},
		scrollHandler() {
			const fooHeader = this.$refs.fooHeader;
			window.pageYOffset > this.$refs.Header.clientHeight
				? fooHeader.classList.add("sticky")
				: fooHeader.classList.remove("sticky");
		},
	},
};
</script>
<style lang="scss">
.sticky-header {
	background-color: #fff;
	&.sticky {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 99;
		animation-duration: 0.8s;
		animation-fill-mode: backwards;
		animation-name: fadeInDown;
		box-shadow: 0 4px 25px -12px gray;
	}
}

.topbar.style5 {
	padding: 2px 0;
}

.topbar {
	background: #040722;
	float: left;
	padding: 5px 0;
	width: 100%;
}
.topbar .container {
	display: table;
}
.topbar-info {
	list-style: none;
	margin: 0;
	padding: 0;
	display: table-cell;
	vertical-align: middle;
}
.topbar-info > li {
	color: #ffffff;
	float: left;
	font-family: roboto;
	font-size: 11px;
	letter-spacing: 0;
	margin-right: 20px;
}
.topbar.style5 .topbar-links {
	float: right;
	list-style: outside none none;
	margin: 0;
	padding-left: 0;
}

.topbar-links {
	display: table-cell;
	vertical-align: middle;
}
.topbar-links > a {
	color: #d6d6d6;
	float: left;
	font-family: roboto;
	font-size: 13px;
	font-weight: 500;
	letter-spacing: 0.5px;
	padding: 4px 20px;
	position: relative;
}
.topbar-links > a:before {
	background: #474747;
	content: "";
	height: 10px;
	margin-top: -5px;
	position: absolute;
	right: 0;
	top: 50%;
	width: 1px;
}
</style>

