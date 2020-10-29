---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

title: We audit applications of any size.
layout: default
description: App Audits offer a range of 3rd cyber inspection, including check quality, due diligence and dispute resolution. 
        We provide professional reporting on softwares your firm has contracted to make, software companies you intend to take over, and more.

# Bar 1
title1: Service
description1: We offer an independent report based on your software application.

# Bar 2
title2: About Us
description2: Might remove this.

# Bar 3
title3: Dispute Resolution
description3: An independent report to assist in resolution of disputes when trying to mediate prior to litigation. Have our team inspect the issues or perceived issues in the a disputed product or service and do more business to avoid costly legal battles.

# Bar 4
title4: Due Diligence
description4: A detailed report of software state and processes based on the context of where the existing products are and where the idea is to take the business.

# Bar 5
title5: Lay of the Land
description5: A review of your existing products, perfect for a new CTO or CEO when taking over an existing organisation who wants to understand more about the current state of strengths and weaknesses.

---

<style>
    body {
        background: #171717;
    }

    .background {
        background-image: url(/assets/img/background.jpg);
        background-size: cover;
        background-position: center center;
        background-attachment: fixed;
        padding-top: 100px;
    }

    .home-page-triangle {
        width: 0;
        height: 0;
        border-bottom: calc(100vh - 100px) solid white;
        border-left: 100vw solid transparent;
    }

    .home-page-title {
        position: absolute;
        top: 7vh;
        left: 7vw;
        padding: 50px;
        max-width: 400px;
    }

    .home-page-title h1 {
        color: white;
        font-size: 50px;
    }

    .home-page-content {
        position: absolute;
        bottom: 7vh;
        right: 7vw;
        max-width: 500px;
        text-align: right;
        padding: 50px;
    }

    .home-page-content img {
        max-width: 450px;
        height: auto;
    }

    .home-page-content p {
        margin-inline-start: 2em;
    }

    @media (max-width: 1050px) and (orientation: portrait) {
        .home-page-title {
            padding: 20px 60px 20px 20px;
            top: 50px;
            left: 0;
        }
        .home-page-title h1 {
                font-size: 40px;
            }
        .home-page-content {
            padding: 20px;
            bottom: 0;
            right: 0;
        }
        .home-page-content img {
            width: 90%;
            height: auto;
        }
    }

     @media (max-width: 800px) {
        .background {
            background-attachment: scroll;
        }
        .home-page-title {
            padding: 20px 60px 20px 20px;
            top: 50px;
            left: 0;
        }
        .home-page-title h1 {
                font-size: 40px;
        }
        .home-page-content {
            padding: 20px;
            bottom: 0;
            right: 0;
            max-width: 400px;
        }
        .home-page-content img {
            width: 90%;
            height: auto;
        }
    }

    @media (max-height: 500px) {
        .background {
            background-attachment: scroll;
        }
        .home-page-title h1 {
                font-size: 30px;
        }
        .home-page-content {
            max-width: 400px;
        }
        .home-page-content img {
            width: 90%;
            height: auto;
            max-width: 150px;
        }
    }

    @media (max-width: 350px) {
        .home-page-title {
            padding: 20px;
            max-width: 70vw;
        }
        .home-page-title h1 {
            font-size: 25px;
        }
    }
</style>
<section class="background">
    <section class="home-page-triangle"></section>
</section>

<section class="home-page-title">
    <h1>{{ page.title }}</h1>
</section>

<section class="home-page-content">
    <img src="{{ site.baseurl }}/assets/img/logo-white.png">
    <p>App Audits offer a range of 3rd cyber inspection, including check quality, due diligence and dispute resolution.</p>
</section>

{% include indexdescription.html %} 
{% include indexbottom.html %} 