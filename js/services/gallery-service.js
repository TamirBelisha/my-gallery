'use strict';


function createProj(projName, title, url) {

    return {
        id: projName.toLowerCase(),
        name: projName,
        title,
        desc: makeLorem(12),
        url,
        publishedAt: Date.now(),
        labels: ["Matrixes", "keyboard events"],
    }
}