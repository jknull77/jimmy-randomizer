
function sleep(s) {
    return new Promise(resolve => setTimeout(resolve, s * 1000));
}


function weightedSample(elems, weights) {

    var totalWeight = weights.reduce((a, b) => a + b, 0);

    var weighedElems = [];
    var currentElem = 0;
    while (currentElem < elems.length) {
        for (i = 0; i < weights[currentElem]; i++)
            weighedElems[weighedElems.length] = elems[currentElem];
        currentElem++;
    }

    var rnd = Math.floor(Math.random() * totalWeight);
    return weighedElems[rnd];

}



