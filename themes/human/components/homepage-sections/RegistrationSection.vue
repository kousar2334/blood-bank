<template>
    <section class="cta-2" id="jon-us-cta">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 col-md-5 col-sm-4 join-us" id="join-us"
                    style="background: url(&quot;https://www.bidyanondo.org/uploads/settings/bidyanondo-home_volunteer_image-1560684467.jpg&quot;) center center / cover no-repeat local; height: 480px;">
                    <span>Join us</span>
                    <div class="dark-overlay"></div>
                </div>
                <div class="col-12 col-md-7 col-sm-8 sing-up  wow fadeInRightSlow"
                    style="visibility: visible; animation-name: fadeInRightSlow; height: 481px;">
                    <h3>
                        Registration for volunteer program </h3>
                    <span>Serve the humanity</span>
                    <p>Our opportunity to volunteer to inspire a nation extends from the work of the Office to the
                        grassroots personnel stage. If you have a commitment to time and work as a marginalized
                        community,
                        we are waiting to welcome you to our team.</p>
                    <a href="https://www.bidyanondo.org/volunteer/registration" class="btn text-white">Registration</a>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: "VolunteerRegistrationSection",
}
</script>
<style scoped>
@media (max-width: 767px) {
    .cta-2 .sing-up {
        padding: 55px 15px 55px 70px;
    }
}

@media (max-width: 767px) {
    .cta-2 .sing-up h3 {
        font-size: 20px;
    }
}

.cta-2 {
    background-color: #15181d;
}

#jon-us-cta #join-us {
    padding: 0;
}

.cta-2 .join-us {
    position: relative;
}

.cta-2 .join-us span {
    padding-top: 3.5em;
}

.cta-2 .join-us span {
    width: 100%;
    height: 100%;
    font-size: 55px;
    text-align: center;
    text-transform: uppercase;
    font-weight: 700;
    position: absolute;
    left: 0;
    top: 0;
    background-clip: text;
}

.dark-overlay {
    width: 100%;
    height: 100%;
    background-color: #ed3237b8;
}

.cta-2 .sing-up {
    padding: 85px 25px 85px 100px;
}

.cta-2 .sing-up {
    width: 585px;
    padding: 85px 0 85px 140px;
}

.cta-2 .sing-up h3 {
    color: #fff;
    margin: 0 0 .4em;
    position: relative;
}

.cta-2 .sing-up span {
    font-size: 17px;
}

.cta-2 .sing-up span {
    color: #484e59;
    font-weight: 700;
    display: block;
    margin-bottom: 1.44em;
}

.cta-2 .sing-up p {
    text-align: justify !important;
}

.cta-2 .sing-up p {
    font-size: 16px;
}

.cta-2 .sing-up p {
    margin: 0 0 1.83em;
    color: #6b7483;
}
</style>