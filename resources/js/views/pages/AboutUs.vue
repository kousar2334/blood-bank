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
				<div class="col-lg-12">
					<card
						type="secondary"
						shadow
						header-classes="bg-white pb-5"
						body-classes="px-lg-5 py-lg-8"
						class="border-0"
					>
						<template>
							<div class="btn-wrapper text-center mb-5">
								<h3 class="bangla-font">আমাদের সম্পর্কে</h3>
							</div>
						</template>
						<template>
							<p class="bangla-font">
								আজ শুক্রবার ছুটির দিন হওয়ায় নগরের রাস্তায় মানুষের ভিড় কম। নগরের
								মুরাদপুর, জিইসি মোড় ও টাইগারপাস এলাকায় আজ বাস চলাচল তেমন একটা
								দেখা যায়নি। তবে মাঝেমধ্যে দু-একটি বাস চলতে দেখা গেছে। এই বাসগুলো
								ছিল যাত্রীতে ঠাসা। চট্টগ্রাম বিশ্ববিদ্যালয়ে আজ ভর্তি পরীক্ষা
								থাকায় বিশ্ববিদ্যালয় থেকে নিউমার্কেটগামী বাস চলাচল করতে দেখা
								গেছে। এই রুটের বাস চালক হাসান মিয়া প্রথম আলোকে বলেন,
								পরীক্ষার্থীদের কথা চিন্তা করে তাঁরা আজ বাস চালাচ্ছেন। চট্টগ্রাম
								সড়ক পরিবহন মালিক গ্রুপের মহাসচিব মঞ্জুরুল আলম আজ প্রথম আলোকে
								বলেন, ‘আমরা কেউ ধর্মঘটের ডাক দিইনি। তেলের দাম বাড়ানো হয়েছে।
								কিন্তু বাসভাড়া বাড়ানোর বিষয়ে কোনো সিদ্ধান্ত আসেনি। বাড়তি ভাড়া
								নিতে গেলে যাত্রীদের সঙ্গে বাসচালকের বাগ্‌বিতণ্ডা হবে। তাই বাস
								চলছে না। আর যাঁদের আগে থেকে তেল মজুত আছে, সেসব চালক রাস্তায় বাস
								নামিয়েছেন।’ মঞ্জুরুল আলম জানান, আজ বিকেল তিনটায় নগরের বিআরটিসি
								এলাকায় তাঁরা বৈঠকে বসবেন। এই বৈঠকে পরবর্তী পদক্ষেপ সম্পর্কে
								সিদ্ধান্ত নেওয়া হবে।
							</p>
						</template>
					</card>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
import Modal from "../../components/Modal.vue";
export default {
	name: "AboutUs",
	components: {
		Modal,
	},
	data() {
		return {};
	},

	metaInfo: {
		title: "আমাদের সম্পর্কে",
	},
};
</script>
<style>
</style>
