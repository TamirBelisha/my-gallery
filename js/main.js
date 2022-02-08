'use strict';
console.log('Starting up');

$(initPage);

function initPage() {
    renderProjs();
}

function renderProjs() {
    var projs = getProjs();
    var $elPortfolioDiv = $('#portfolio')
    var arrHtml = projs.map((proj) => {
        return `
                <div class="col-md-4 col-sm-6 portfolio-item">
                    <a class="portfolio-link" data-toggle="modal" href="#portfolioModal">
                        <div class="portfolio-hover">
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
    var strHtml = arrHtml.join('');

    $elPortfolioDiv.html(strHtml);
    $('.portfolio-item').each(function(idx, el) {
        console.log(el);
        $(el).click({ projId: projs[idx].id }, renderModal)
    })
}

function renderModal(ev) {
    console.log(ev);
    var { projId } = ev.data
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