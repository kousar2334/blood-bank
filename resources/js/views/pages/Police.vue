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
							href="https://www.google.com/search?q=police+station+information+of+bogra+district&client=ubuntu&hs=mdD&tbm=lcl&sxsrf=AOaemvLaWacHjcaT5_33xpqma11plUXHVw%3A1636477367465&ei=t6mKYcrhG_zdz7sP8cOn2A0&oq=police+station+information+of+bogra+district&gs_l=psy-ab.3...0.0.0.1601394.0.0.0.0.0.0.0.0..0.0....0...1c..64.psy-ab..0.0.0....0.3gwp5ytkF-4#rlfi=hd:;si:;mv:[[25.0609866,89.6044077],[24.622163099999998,88.9512468]];tbs:lrf:!1m4!1u2!2m2!2m1!1e1!2m1!1e2!3sIAE,lf:1,lf_ui:2"
							target="_blank"
							class="bangla-font"
							>তথ্য সূত্রঃ গুগল ম্যাপ</a
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
	name: "Police",
	components: {
		Hero,
	},
	data() {
		return {
			title: "পুলিশ স্টেশন ",
			fields: [
				{
					key: "no",
					label: "ক্রমিক নং",
				},
				{
					key: "name",
					label: "অফিস / পুলিশ স্টেশনের নাম ",
				},
				{
					key: "mobiles",
					label: "যোগাযোগের নাম্বার",
				},
			],
			items: [
				{
					no: "০১",
					name: "পুলিশ সুপারের কার্যালয়, বগুড়া",
					mobiles: "০১৭১৩-৩৭৪০৫৮",
				},
				{
					no: "০২ ",
					name: "শান্তাহার রেলওয়ে পুলিশ স্টেশন",
					mobiles: "নাই",
				},
				{
					no: "০৩",
					name: "সদর থানা , বগুড়া",
					mobiles: "০৫১-৭৮২৬৬",
				},
				{
					no: "০৪",
					name: "নারুলী পুলিশ ফাঁড়ি",
					mobiles: "নাই",
				},
				{
					no: "০৫",
					name: "রেলওয়ে পুলিশ ফাঁড়ী, বগুড়া",
					mobiles: "০১৭৩৩-৩৯০২০৫",
				},
				{
					no: "০৬",
					name: "ধুনট পুলিশ স্টেশন",
					mobiles: "নাই",
				},
				{
					no: "০৭",
					name: "সারিয়াকান্দি পুলিশ স্টেশন",
					mobiles: "০১৭১৩-৩৭৪০৬৫",
				},
				{
					no: "০৮",
					name: "কাহালু পুলিশ স্টেশন",
					mobiles: "০১৭১৩-৩৭৪০৬৮",
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
					name: "দুপচাঁচিয়া পুলিশ স্টেশন",
					mobiles: "০১৭১৩-৩৭৪০৬৭",
				},
				{
					no: "১২",
					name: "শাহজানপুর পুলিশ স্টেশন",
					mobiles: "০১৭১৩-৩৭৪০৭২",
				},
				{
					no: "১৩",
					name: "আদমদিঘী পুলিশ স্টেশন",
					mobiles: "০১৭১৩-৩৭৪০৬৬",
				},
				{
					no: "১৪",
					name: "গাবতলি মডেল পুলিশ স্টেশন",
					mobiles: "০১৭১৩-৩৭৪০৬৪",
				},
				{
					no: "১৫",
					name: "সোনাতলা পুলিশ স্টেশন",
					mobiles: "নাই",
				},
				{
					no: "১৬",
					name: "শেরপুর  পুলিশ স্টেশন",
					mobiles: "নাই",
				},
				{
					no: "১৭",
					name: "শিবগঞ্জ পুলিশ স্টেশন",
					mobiles: "০১৭১৩-৩৭৪০৬২",
				},
				{
					no: "১৮",
					name: "নন্দিগ্রাম পুলিশ স্টেশন",
					mobiles: "০১৭১৩-৩৭৪০৭১",
				},
				{
					no: "১৯",
					name: "ফুলবাড়ী পুলিশ ফাঁড়ী",
					mobiles: "০১৩২০-১২৬৬০৮",
				},
				{
					no: "২০",
					name: "সাত মাথা ট্রাফিক পুলিশ বক্স",
					mobiles: "নাই",
				},
			],
		};
	},
	metaInfo: {
		title: "পুলিশ স্টেশন",
		meta: [
			{ vmid: "description", name: "description", content: "The home page" },
		],
	},
};
</script>
