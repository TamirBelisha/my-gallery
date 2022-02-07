'use strict';
console.log('Starting up');

$(initPage);

function initPage() {
    renderProjs();
    renderContactForm();
}

function renderProjs() {
    var projs = getProjs();
    var $elPortfolioSection = $('#portfolio')
    var strHtml = `
    <div class="container">
        <div class="row">
            <div class="col-lg-12 text-center">
                <h2 class="section-heading">Portfolio</h2>
                <h3 class="section-subheading text-muted">Some projects made by me</h3>
            </div>
        </div>
        <div class="row">
        `

    var arrHtml = projs.map((proj) => {
        return `
                <div class="col-md-4 col-sm-6 portfolio-item">
                    <a class="portfolio-link" data-toggle="modal" href="#portfolioModal">
                        <div class="portfolio-hover" onclick="renderModal('${proj.id}')">
                            <div class="portfolio-hover-content">
                                <i class="fa fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img class="img-fluid" src="img/portfolio/${proj.id} thumbnail.png" alt="">
                    </a>
                    <div class="portfolio-caption">
                        <h4>${proj.name}</h4>
                        <p class="text-muted">${proj.title}</p>
                    </div>
                </div>
            `
    })
    strHtml += arrHtml.join('');
    strHtml += `</div></div>`

    $elPortfolioSection.html(strHtml);

}

function renderModal(projId) {
    console.log('projId', projId);
    console.log('got to render modal');
    var proj = getProjById(projId)
    var strHtml = `
    <div class="modal-dialog">
                <div class="modal-content">
                    <div class="close-modal" data-dismiss="modal">
                        <div class="lr">
                            <div class="rl"></div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8 mx-auto">
                                <div class="modal-body">
                                    <!-- Project Details Go Here -->
                                    <h2>${proj.name}</h2>
                                    <p class="item-intro text-muted"></p>
                                    <img class="img-fluid d-block mx-auto" src="img/portfolio/${proj.id}.png" alt="">
                                    <p>${proj.desc}</p>
                                    <ul class="list-inline">
                                        <li>Date: ${proj.publishedAt}</li>
                                        <li>Client: Coding Academy</li>
                                        <li>Category: ${proj.title}</li>
                                    </ul>
                                    <a href="${proj.url}" target="_blank">
                                    <button class="btn btn-primary" type="button">
                                    Open Project</button>
                                    </a>
                                    <button class="btn btn-primary" data-dismiss="modal" type="button">
                        <i class="fa fa-times"></i>
                        Close Project</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `
    $('.modal').html(strHtml)
}

function onSubmit() {
    var $elSubjectVal = $('#form-Subject').val()
    var $elTextVal = $('#form-text').val()
    var resSubject = $elSubjectVal.split(' ').join('%20')
    var resText = $elTextVal.split(' ').join('%20')

    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=TamirBelisha@gmail.com&su=${resSubject}&body=${resText}`, '_blank')
    $('#form-name').val('')
    $('#form-email').val('')
    $('#form-Subject').val('')
    $('#form-text').val('')
}


function renderContactForm() {
    $('.offcanvas-aside').html(`
    <!-- Section: Contact v.1 -->
        <section class="my-5">

            <!-- Section heading -->
            <h2 class="h1-responsive font-weight-bold text-center my-5">Contact</h2>
            <!-- Section description -->
            <p class="text-center w-responsive mx-auto pb-1 text-light">+972-54-263-1200</p>
            <p class="text-center w-responsive mx-auto pb-1 text-light">TamirBelisha@gmail.com</p>

            <!-- Grid row -->
            <div class="row">

                <!-- Grid column -->
                <div class="col-12 mb-lg-0 mb-4">

                    <!-- Form with header -->
                    <div class="card">
                        <div class="card-body">
                            <!-- Header -->
                            <div class="form-header blue accent-1">
                                <h3 class="mt-2"><i class="fa fa-envelope"></i> Contact me:</h3>
                            </div>
                            <p class="text-muted">I'll write back A S A P</p>
                            <!-- Body -->
                            <div class="md-form">
                                <i class="fa fa-user prefix grey-text"></i>
                                <label for="form-name">Your name</label>
                                <input type="text" id="form-name" class="form-control">
                            </div>
                            <div class="md-form">
                                <i class="fa fa-envelope prefix grey-text"></i>
                                <label for="form-email">Your email</label>
                                <input type="text" id="form-email" class="form-control">
                            </div>
                            <div class="md-form">
                                <i class="fa fa-tag prefix grey-text"></i>
                                <label for="form-Subject">Subject</label>
                                <input type="text" id="form-Subject" class="form-control">
                            </div>
                            <div class="md-form">
                                <i class="fa fa-pencil prefix grey-text"></i>
                                <label for="form-text">Your message</label>
                                <textarea id="form-text" class="form-control md-textarea" rows="3"></textarea>
                            </div>
                            <div class="text-center">
                                <button class="btn btn-light-blue" onclick="onSubmit()">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    `)
}