---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

title: We audit applications of any size.
layout: default
description: App Audits offer a range of 3rd cyber inspection, including check quality, due diligence and dispute resolution. 
        We provide professional reporting on softwares your firm has contracted to make, software companies you intend to take over, and more.

service: Service
service_description: We offer an independent report based on your software application.

options:
    - title: Dispute Resolution
      description: An independent report to assist in resolution of disputes when trying to mediate prior to litigation. Have our team inspect the issues or perceived issues in the a disputed product or service and do more business to avoid costly legal battles.
      link: dispute-resolution
      image: dispute-resolution-header.jpg

    - title: Due Diligence
      description: A detailed report of software state and processes based on the context of where the existing products are and where the idea is to take the business.
      link: due-diligence
      image: due-diligence-header.jpg

    - title: Lay of the Land
      description: A review of your existing products, perfect for a new CTO or CEO when taking over an existing organisation who wants to understand more about the current state of strengths and weaknesses.
      link: lay-of-the-land
      image: lay-of-the-land-header.jpg

about_us: About Us
about_us_description: Experts in Software Development and working with clients to achieve their goals, our clientelle range from turnovers in the multiple billions to brand-new start-up businesses. Working with these organisations we found that there is often a missing piece for both technical and non-technical personelle who need more facts about the software applications that they are involved with, whether they are a business owner who has paid for software to be developed that they are unsure actually does the job they expect; a Venutre Capital firm looking to aqcuire a new business 

---
<link rel="stylesheet" text="text/css" href="{{ site.baseurl }}/assets/css/homepage.css">

<section class="background">
    <section class="home-page-triangle"></section>
</section>

<section class="home-page-title">
    <h1>{{ page.title }}</h1>
</section>

<section class="home-page-content">
    <img alt="logo" src="{{ site.baseurl }}/assets/img/logo-white.png">
    <p>App Audits offer a range of independent software inspections, including around due diligence and dispute resolution.</p>
</section>

<section class="bar">
    <section class="description-section">
        <h2>{{ page.service }}</h2>
        <p>{{ page.service_description }}</p>
    </section>
</section>

{% for option in page.options %}
    {% include button.html link=option.link image=option.image title=option.title description=option.description %}
{% endfor %}

<section class="bar">
    <section class="description-section">
        <h2>{{ page.about_us }}</h2>
        <p>{{ page.about_us_description }}</p>
    </section>
</section>