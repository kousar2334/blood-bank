<template>
    <div class="benefit-area three pt-100 pb-70">
        <div class="container">
            <div class="section-title">
                <h2 class="sub-title bangla-font">আমাদের অন্যান্য সেবা সমূহ</h2>
            </div>
            <div class="row">
                <div class="col-sm-6 col-lg-3" v-for="(service, index) in services" :key="index">
                    <div class="benefit-item">
                        <!-- <i class="flaticon-house"></i> -->
                        <img :src="'/' + service.icon" class="flaticon-house" />

                        <router-link :to="service.url">
                            <h3 class="bangla-font">{{ service.name }}</h3>
                        </router-link>
                        <p class="bangla-font">
                            ইউক্রেন ও রাশিয়ার মধ্যে আসন্ন যুদ্ধের যে লক্ষণগুলো সম্পর্কে
                            সতর্ক করা হয়েছিল তা এখন পুরোপুরি প্রস্তুত বলে মনে করা হচ্ছে।
                            সীমান্তের কাছাকাছি ফিল্ড হাসপাতাল স্থাপন করা হয়েছে।
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "serviceSection",
    data() {
        return {
            services: [
                {
                    name: "হাসপাতাল",
                    icon: "static/img/theme/hospital_one.png",
                    url: "/hospitals-clinics",
                },
                {
                    name: "অ্যাম্বুলেন্স",
                    icon: "static/img/theme/ambulance225x225.png",
                    url: "/all-ambulance",
                },
                {
                    name: "ফায়ার সার্ভিস",
                    icon: "static/img/theme/fire_station_one.png",
                    url: "/fire-stations",
                },
                {
                    name: "পুলিশ",
                    icon: "static/img/theme/police_one.png",
                    url: "/police-stations",
                },
            ],
        };
    }
}
</script>