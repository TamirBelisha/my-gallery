'use strict';

var gProjs = createProjs();

function getProjs() {
    return gProjs;
}


function createProjs() {
    return [
        createProj('Day 09 tasks', 'Two basic projects', 'https://tamirbelisha.github.io/CaJan22-Day09/', 'January 2022'),
        createProj('Mine sweeper', 'Board game', 'https://tamirbelisha.github.io/Mine-Sweeper/', 'January 2022'),
        createProj('Pacman', 'Board game', 'https://tamirbelisha.github.io/CaJan22-Pacman/', 'January 2022'),
    ]
}

function createProj(projName, title, url, publishedAt) {

    return {
        id: projName.toLowerCase(),
        name: projName,
        title,
        desc: makeLorem(12),
        url,
        publishedAt,
        labels: null
    }
}

function getProjById(projId) {
    return gProjs.find(proj => proj.id === projId)
}