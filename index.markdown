---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

title: We audit any programmes of any size.
layout: default
description: App Audits offer a range of 3rd cyber inspection, including check quality, due diligence and dispute resolution. 
        We provide professional reporting on softwares your firm has contracted to make, software companies you intend to take over, and more.

# Bar 1
title1: Service
description1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel justo sodales, posuere arcu porttitor, scelerisque leo. Suspendisse libero ipsum, luctus lacinia metus sit amet, semper maximus purus. Nullam rutrum tempor massa, sit amet euismod dui pellentesque et. Donec vitae finibus metus. Suspendisse auctor tortor est, et elementum arcu pulvinar tincidunt. Etiam varius eget lacus ut finibus. Fusce enim enim, tempus at eleifend vitae, varius a mauris. Mauris eu purus a ex sagittis imperdiet et sit amet est.

# Bar 2
title2: About Us
description2: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel justo sodales, posuere arcu porttitor, scelerisque leo. Suspendisse libero ipsum, luctus lacinia metus sit amet, semper maximus purus. Nullam rutrum tempor massa, sit amet euismod dui pellentesque et. Donec vitae finibus metus. Suspendisse auctor tortor est, et elementum arcu pulvinar tincidunt. Etiam varius eget lacus ut finibus. Fusce enim enim, tempus at eleifend vitae, varius a mauris. Mauris eu purus a ex sagittis imperdiet et sit amet est.

# Bar 2
title3: Lay of the Land
description3: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel justo sodales, posuere arcu porttitor, scelerisque leo. Suspendisse libero ipsum, luctus lacinia metus sit amet, semper maximus purus. Nullam rutrum tempor massa, sit amet euismod dui pellentesque et. Donec vitae finibus metus. Suspendisse auctor tortor est, et elementum arcu pulvinar tincidunt. Etiam varius eget lacus ut finibus. Fusce enim enim, tempus at eleifend vitae, varius a mauris. Mauris eu purus a ex sagittis imperdiet et sit amet est.

# Bar 2
title4: Due Diligence
description4: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel justo sodales, posuere arcu porttitor, scelerisque leo. Suspendisse libero ipsum, luctus lacinia metus sit amet, semper maximus purus. Nullam rutrum tempor massa, sit amet euismod dui pellentesque et. Donec vitae finibus metus. Suspendisse auctor tortor est, et elementum arcu pulvinar tincidunt. Etiam varius eget lacus ut finibus. Fusce enim enim, tempus at eleifend vitae, varius a mauris. Mauris eu purus a ex sagittis imperdiet et sit amet est.

# Bar 2
title5: Dispute Resolution
description5: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel justo sodales, posuere arcu porttitor, scelerisque leo. Suspendisse libero ipsum, luctus lacinia metus sit amet, semper maximus purus. Nullam rutrum tempor massa, sit amet euismod dui pellentesque et. Donec vitae finibus metus. Suspendisse auctor tortor est, et elementum arcu pulvinar tincidunt. Etiam varius eget lacus ut finibus. Fusce enim enim, tempus at eleifend vitae, varius a mauris. Mauris eu purus a ex sagittis imperdiet et sit amet est.

---

<style>
    body {
        background-image: url(/app-audits/assets/img/background.jpg);
        background-size: cover;
        background-position: center center;
        background-attachment: fixed;
    }

    .home-page-triangle {
        margin-top: 100px;
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

    @media (max-width: 1000px) and (orientation: portrait) {
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

    @media (max-height: 400px) {
        .home-page-content img {
            width: 90%;
            height: auto;
            max-width: 150px;
        }
    }

    @media (max-width: 350px) {
        .home-page-title {
            padding: 20px;
        }
        .home-page-title h1 {
            font-size: 30px;
        }
    }
}
    
</style>

<section class="home-page-triangle"></section>

<section class="home-page-title">
    <h1>{{ page.title }}</h1>
</section>

<section class="home-page-content">
    <img src="/app-audits/assets/img/logo-white.png">
    <p>App Audits offer a range of 3rd cyber inspection, including check quality, due diligence and dispute resolution.</p>
</section>

{% include indexdescription.html %} 
{% include indexbottom.html %} 