<template>
    <div class="team-area pt-160 pb-160">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-6 col-lg-7 col-md-10 col-sm-10">
                    <!-- Section Tittle -->
                    <div class="section-tittle section-tittle2 text-center mb-70">
                        <span>What we are doing</span>
                        <h2>Our Expert Volunteer Alwyes ready</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-team mb-30">
                        <div class="team-img">
                            <img src="http://blood-bank.local/uploads/profile_image/doctor/09302022141616d.png" alt="">
                            <!-- Blog Social -->
                            <ul class="team-social">
                                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fas fa-globe"></i></a></li>
                            </ul>
                        </div>
                        <div class="team-caption">
                            <h3><a href="instructor.html">Bruce Roberts</a></h3>
                            <p>Volunteer leader</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-team mb-30">
                        <div class="team-img">
                            <img src="http://blood-bank.local/uploads/profile_image/doctor/09302022141616d.png" alt="">
                            <!-- Blog Social -->
                            <ul class="team-social">
                                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fas fa-globe"></i></a></li>
                            </ul>
                        </div>
                        <div class="team-caption">
                            <h3><a href="instructor.html">Robart Rechard</a></h3>
                            <p>Volunteer leader</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-team mb-30">
                        <div class="team-img">
                            <img src="http://blood-bank.local/uploads/profile_image/doctor/09302022141616d.png" alt="">
                            <!-- Blog Social -->
                            <ul class="team-social">
                                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fas fa-globe"></i></a></li>
                            </ul>
                        </div>
                        <div class="team-caption">
                            <h3><a href="instructor.html">Brendon Tailor</a></h3>
                            <p>Volunteer leader</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-team mb-30">
                        <div class="team-img">
                            <img src="http://blood-bank.local/uploads/profile_image/doctor/09292022182257d.jpg" alt="">
                            <!-- Blog Social -->
                            <ul class="team-social">
                                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fas fa-globe"></i></a></li>
                            </ul>
                        </div>
                        <div class="team-caption">
                            <h3><a href="instructor.html">Walshr Hasgt</a></h3>
                            <p>Volunteer leader</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "VolunteerSection",
}
</script>
<style scoped>
.mb-70 {
    margin-bottom: 70px;
}

.section-tittle span {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 22px;
    color: #09cc7f;
    text-transform: capitalize;
    display: inline-block;
    letter-spacing: 0.05em;
}

.section-tittle h2 {
    font-size: 42px;
    display: block;
    color: #072366;
    font-weight: 800;
    text-transform: capitalize;
    line-height: 1.4;
}

.pb-160 {
    padding-bottom: 160px;
}

.pt-160 {
    padding-top: 160px;
}

/* line 1, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_team.scss */
.team-area {
    background: #f8fcff;
}

@media only screen and (min-width: 992px) and (max-width: 1199px) {

    /* line 1, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_team.scss */
    .team-area {
        padding-bottom: 150px;
        padding-top: 150px;
    }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {

    /* line 1, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_team.scss */
    .team-area {
        padding-bottom: 100px;
        padding-top: 100px;
    }
}

@media only screen and (min-width: 576px) and (max-width: 767px) {

    /* line 1, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_team.scss */
    .team-area {
        padding-bottom: 70px;
        padding-top: 70px;
    }
}

@media (max-width: 575px) {

    /* line 1, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_team.scss */
    .team-area {
        padding-bottom: 70px;
        padding-top: 70px;
    }
}

/* line 20, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_team.scss */
.team-area .single-team .team-img {
    overflow: hidden;
    position: relative;
}

/* line 23, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_team.scss */
.team-area .single-team .team-img img {
    width: 100%;
    transform: scale(1);
    transition: all 0.6s ease-out 0s;
}

/* line 29, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_team.scss */
.team-area .single-team .team-caption {
    background: #fff;
    padding: 15px 0px;
    text-align: center;
}

/* line 33, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_team.scss */
.team-area .single-team .team-caption h3 {
    margin-bottom: 3px;
}

/* line 35, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_team.scss */
.team-area .single-team .team-caption h3 a {
    color: #33384e;
    font-weight: 700;
    font-size: 25px;
}

@media only screen and (min-width: 768px) and (max-width: 991px) {

    /* line 35, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_team.scss */
    .team-area .single-team .team-caption h3 a {
        font-size: 18px;
    }
}

/* line 42, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_team.scss */
.team-area .single-team .team-caption h3 a:hover {
    color: #09cc7f;
}

/* line 47, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_team.scss */
.team-area .single-team .team-caption p {
    color: #57667e;
}

/* line 55, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_team.scss */
.team-area .single-team:hover .team-img img {
    transform: scale(1.06);
}

/* line 61, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_team.scss */
.team-area .single-team:hover .team-img .team-social a {
    transform: translateY(0px);
    opacity: 1;
    visibility: visible;
}

/* line 72, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_team.scss */
.team-social {
    position: absolute;
    bottom: 22px;
    left: 0;
    right: 0;
    text-align: center;
}

/* line 78, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_team.scss */
.team-social li {
    display: inline-block;
}

/* line 80, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_team.scss */
.team-social li a {
    color: #8ba4b1;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-size: 14px;
    line-height: 40px;
    text-align: center;
    margin-left: 8px;
    display: inline-block;
    background: #fff;
    -webkit-transform: 0.4s;
    -moz-transform: 0.4s;
    -ms-transform: 0.4s;
    transform: 0.4s;
    transform: translateY(60px);
    opacity: 0;
    visibility: hidden;
}

/* line 92, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_team.scss */
.team-social li a i {
    display: inline-block;
}

/* line 102, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_team.scss */
.team-social li:nth-child(1) a {
    transition-delay: 0.0s;
}

/* line 105, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_team.scss */
.team-social li:nth-child(2) a {
    transition-delay: 0.1s;
}

/* line 108, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_team.scss */
.team-social li:nth-child(3) a {
    transition-delay: 0.3s;
}
</style>