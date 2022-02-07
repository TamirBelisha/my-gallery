'use strict';
console.log('Starting up');

$(initPage)

function initPage() {
    renderProjs();
}

function renderProjs() {
    var projs = getProjs();
    var $elPortfolioSection = $('#portfolio')
    var strHtml = `
    <div class="container">
        <div class="row">
            <div class="col-lg-12 text-center">
                <h2 class="section-heading">Portfolio</h2>
                <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
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