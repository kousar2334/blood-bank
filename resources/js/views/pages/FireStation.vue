<template>
	<div>
		<hero></hero>
		<section class="section section-lg pt-0">
			<div class="container p-0">
				<div class="col-12 page-header pb-2 pt-2">
					<h2 class="bangla-font text-center mb-2 mt-2">
						{{ title }}
					</h2>
				</div>
				<div class="col-lg-12 p-3">
					<b-table
						bordered
						class="bangla-font"
						:items="items"
						:fields="fields"
					></b-table>
					<div class="text-right">
						<a
							href="http://www.fireservice.gov.bd/"
							target="_blank"
							class="bangla-font"
							>তথ্য সূত্রঃ বাংলাদেশ ফায়ার সার্ভিস ও সিভিল ডিফেন্স অধিদপ্তর</a
						>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>
<script>
import Hero from "../../components/Hero.vue";
export default {
	name: "FireStation",
	components: {
		Hero,
	},
	data() {
		return {
			title: "ফায়ার সার্ভিস",
			fields: [
				{
					key: "no",
					label: "ক্রমিক নং",
				},
				{
					key: "name",
					label: "অফিস / ফায়ার স্টেশনের নাম ",
				},
				{
					key: "mobiles",
					label: "যোগাযোগের নাম্বার",
				},
			],
			items: [
				{
					no: "০১",
					name: "সহকারী পরিচালক , বগুড়া",
					mobiles: "০৫১-৬৫১০১, ০১৭৩০-০০২৪৯৬",
				},
				{
					no: "০২ ",
					name: "বগুড়া ফায়ার স্টেশন",
					mobiles: "০৫১-৬৩৩৩৩ , ০১৭৩-০০২৪৯৭ ",
				},
				{
					no: "০৩",
					name: "সোনাতলা ফায়ার স্টেশন",
					mobiles: "০৫৩২-৭৯০০৯, ০১৭৩০-০০২৪৯৮",
				},
				{
					no: "০৪",
					name: "সারিয়াকান্দি ফায়ার স্টেশন",
					mobiles: "০৫০২৮-৫৬২০০, ০১৭৩২-৫৩৫৫১১",
				},
				{
					no: "০৫",
					name: "শেরপুর ফায়ার স্টেশন",
					mobiles: "০৫০২৯-৭৭৩৩৩, ০১৭৩০-০০২৩৩২",
				},
				{
					no: "০৬",
					name: "ধুনট ফায়ার স্টেশন",
					mobiles: "০৫০২৩-৫৬২০০, ০১৭৫৮-৮০৭৮১৭",
				},
				{
					no: "০৭",
					name: "গাবতলি ফায়ার স্টেশন",
					mobiles: "০১৭৩০-০৮২২২৪",
				},
				{
					no: "০৮",
					name: "কাহালু ফায়ার স্টেশন",
					mobiles: "০৫০২৬৫৬২২২, ০১৭৫১-৫২২২৬০",
				},
				{
					no: "০৯",
					name: "নন্দীগ্রাম ফায়ার স্টেশন",
					mobiles: "০১৩০৪-১৭১৭৩৬",
				},
				{
					no: "১০",
					name: "শিবগঞ্জ ফায়ার স্টেশন",
					mobiles: "০১৭৪৭-৪১৫৮৭২",
				},
				{
					no: "১১",
					name: "দুপচাঁচিয়া ফায়ার স্টেশন",
					mobiles: "০১৭৪৭-১৬৫০৬২",
				},
				{
					no: "১২",
					name: "শাহজানপুর ফায়ার স্টেশন",
					mobiles: "০১৭৯৯-৫৫৪৪৪০",
				},
				{
					no: "১৩",
					name: "শাহজানপুর ফায়ার স্টেশন",
					mobiles: "০১৭২৬-১৪২৯২৯",
				},
			],
		};
	},
	metaInfo: {
		title: "ফায়ার সার্ভিস",
		meta: [
			{ vmid: "description", name: "description", content: "The home page" },
		],
	},
};
</script>
<style scoped>
table tr th {
	font-family: "SolaimanLipiNormal";
}
td {
	font-family: "SolaimanLipiNormal";
}
</style>
