'use strict';
console.log('Starting up');

$(onInit)

function onInit() {
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
                    <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
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
    strHtml += arrHtml.join('');
    strHtml += `</div></div>`

    $elPortfolioSection.html(strHtml);

}