function removeIngr() {
    $('ul').empty();
}
function removeSet() {
    $('ol').empty();
}

function addIngr(itemList) {
    var entry = document.createElement('li');
    entry.appendChild(document.createTextNode(itemList));
    document.getElementById('ingredienserKnappList').appendChild(entry);
}

function addSet(itemList) {
    var entry = document.createElement('li');
    entry.appendChild(document.createTextNode(itemList));
    document.getElementById('fremgangsKnappList').appendChild(entry);
}