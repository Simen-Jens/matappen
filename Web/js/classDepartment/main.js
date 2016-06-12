// kode fra Matrett.js
function Matrett(navn, beskrivelse, bilde, ingr, inst, contain) {
    //variables
    this.name = navn;
    this.desc = beskrivelse;
    this.image = bilde;
    this.ingredienser = ingr
    this.instrukser = inst
    this.doesContain = contain;
    this.canContain = new Array('kjott', 'fisk', 'fugl', 'gulrot', 'lok', 'brokkoli', 'salat', 'avokado', 'tomat', 'sopp', 'agurk', 'paprika', 'brod', 'potet', 'melk', 'korn', 'pasta', 'sitron', 'egg', 'yoghurt', 'ris');
    this.xContain = new Array();

    //constructor
    this.setX();

}
//methodes
Matrett.prototype.setX = function () {
    var found = false;
    for (var i = 0; i < this.canContain.length; i++) {
        for (var k = 0; k < this.doesContain.length; k++) {
            if (this.canContain[i] == this.doesContain[k]) found = true;
        }
        if (found == false) this.xContain.push(this.canContain[i]);
        found = false;
    }
}

Matrett.prototype.getName = function () {
    return this.name;
}
// kode fra Matrett.js












// kode fra Alleretter.js
function Matsamling(elementNavn) {
    this.liste = new Array();
    this.utgitt = new Array();
    var lines = document.getElementById(elementNavn).innerHTML.split('\n');
    for (var i = 0; i < lines.length; i++) {
        if (lines[i] == "!NYMAT") this.leggtilMatrett(lines, i);
    }
    //alert(this.liste[1].doesContain);
}

Matsamling.prototype.leggtilMatrett = function (lines, plass) {
    var navn = lines[plass + 1];
    var beskrivelse = lines[plass + 2];
    var bilde = lines[plass + 3];
    var inneholder = new Array();
    var ingr = new Array();
    var inst = new Array();

    var i = 0;
    while (lines[plass + 4 + i] != '!ingr') {
        inneholder.push(lines[plass + 4 + i]);
        i++;
    }

    while (lines[plass + 5 + i] != '!inst') {
        ingr.push(lines[plass + 5 + i]);
        i++;
    }

    while (lines[plass + 6 + i] != '!NYMAT' && (plass + 6 + i) < lines.length) {
        inst.push(lines[plass + 6 + i]);
        i++;
    }

    this.liste.push(new Matrett(navn, beskrivelse, bilde, ingr, inst, inneholder));
}

Matsamling.prototype.getTilfeldig = function () {
    return this.liste[Math.floor((Math.random() * this.liste.length) + 0)];
}

var nr = -1
Matsamling.prototype.getNeste = function () {
    nr++;
    //alert(nr);
    return this.liste[nr];
}

var bitArray = new Array();
Matsamling.prototype.getValid = function () {
    this.createRandomArray();

    for (var i = 0; i < this.liste.length; i++) {
        var booleantest = true;
        for (var k = 0; k < this.liste[bitArray[i]].doesContain.length; k++) {
            for (var j = 0; j < doesNotWant().length; j++) {
                if (doesNotWant()[j].toString() == this.liste[bitArray[i]].doesContain[k].toString()) booleantest = false;
            }
        }
        if (booleantest) return this.liste[bitArray[i]];
    }
    alert('no match');
}

Matsamling.prototype.createRandomArray = function () {
    bitArray = new Array();
    for (var i = 0; i < this.liste.length;) {
        var randNM = Math.floor((Math.random() * this.liste.length) + 0);
        var kanLeggetil = true;
        for (var k = 0; k < bitArray.length; k++) {
            if (randNM == bitArray[k]) kanLeggetil = false;

        }
        if (kanLeggetil) {
            bitArray.push(randNM);
            i++;
        }
    }
    return bitArray;
}
// kode fra Alleretter.js











// kode fra Dager.js
var samling;
$(document).ready(function () {
    samling = new Matsamling('filInput');
});
function Dag_Mandag() {
    //this.hovedrett = samling.getValid();
    this.hovedrett = samling.getNeste();
}
function Dag_Tirsdag() {
    //this.hovedrett = samling.getValid();
    this.hovedrett = samling.getNeste();
}
function Dag_Onsdag() {
    //this.hovedrett = samling.getValid();
    this.hovedrett = samling.getNeste();
}
function Dag_Torsdag() {
    //this.hovedrett = samling.getValid();
    this.hovedrett = samling.getNeste();
}
function Dag_Fredag() {
    //this.hovedrett = samling.getValid();
    this.hovedrett = samling.getNeste();
}
function Dag_Lordag() {
    //this.hovedrett = samling.getValid();
    this.hovedrett = samling.getNeste();
}
function Dag_Sondag() {
    //this.hovedrett = samling.getValid();
    this.hovedrett = samling.getNeste();
}

var mandag;
var tirsdag;
var onsdag;
var torsdag;
var fredag;
var lordag;
var sondag;
function nesteDag() {
    var dayName = document.getElementById('dayName');
    if (dayName.innerHTML == 'MAN') {
        dayName.innerHTML = 'TIR';
        callDag(tirsdag);
    } else if (dayName.innerHTML == 'TIR') {
        dayName.innerHTML = 'ONS';
        callDag(onsdag);
    } else if (dayName.innerHTML == 'ONS') {
        dayName.innerHTML = 'TOR';
        callDag(torsdag);
    } else if (dayName.innerHTML == 'TOR') {
        dayName.innerHTML = 'FRE';
        callDag(fredag);
    } else if (dayName.innerHTML == 'FRE') {
        dayName.innerHTML = 'LØR';
        callDag(lordag);
    } else if (dayName.innerHTML == 'LØR') {
        dayName.innerHTML = 'SØN';
        callDag(sondag);
    } else if (dayName.innerHTML == 'SØN') {
        dayName.innerHTML = 'MAN';
        callDag(mandag);
    } else {
        alert('unknown day');
    }
}
function forrigeDag() {
    var dayName = document.getElementById('dayName');
    if (dayName.innerHTML == 'MAN') {
        dayName.innerHTML = 'SØN';
        callDag(sondag);
    } else if (dayName.innerHTML == 'TIR') {
        dayName.innerHTML = 'MAN';
        callDag(mandag);
    } else if (dayName.innerHTML == 'ONS') {
        dayName.innerHTML = 'TIR';
        callDag(tirsdag);
    } else if (dayName.innerHTML == 'TOR') {
        dayName.innerHTML = 'ONS';
        callDag(onsdag);
    } else if (dayName.innerHTML == 'FRE') {
        dayName.innerHTML = 'TOR';
        callDag(torsdag);
    } else if (dayName.innerHTML == 'LØR') {
        dayName.innerHTML = 'FRE';
        callDag(fredag);
    } else if (dayName.innerHTML == 'SØN') {
        dayName.innerHTML = 'LØR';
        callDag(lordag);
    } else {
        alert('unknown day');
    }
}
function callDag(dag) {
    removeIngr();
    removeSet();
    document.getElementById('foodTitleText').innerHTML = dag.hovedrett.name;
    document.getElementById('foodDescText').innerHTML = dag.hovedrett.desc;
    document.getElementById('currentDayEX').style.backgroundImage = "url('" + dag.hovedrett.image + "')";
    for (var i = 0; i < dag.hovedrett.ingredienser.length; i++) addIngr(dag.hovedrett.ingredienser[i]);
    for (var i = 0; i < dag.hovedrett.instrukser.length; i++) addSet(dag.hovedrett.instrukser[i]);
}
// kode fra Dager.js






function get_GET(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.href);
    if (results == null)
        return "";
    else
        //if (results[1] == '0') return "";
        if (results[1] == '1') return name;
        if (results[1] == '2') return name;
        if (results[1] == '3') return name;
        //return "";
}

function makeArray_GET() {
    var tmp = new Array('kjott', 'fisk', 'fugl', 'gulrot', 'lok', 'brokkoli', 'salat', 'avokado', 'tomat', 'sopp', 'agurk', 'paprika', 'brod', 'potet', 'melk', 'korn', 'pasta', 'sitron', 'egg', 'yoghurt', 'ris');
    var returnThis = new Array();
    for (var i = 0; i < tmp.length; i++) {
        returnThis.push(get_GET(tmp[i]));
    }
    return returnThis;
}

function doesNotWant() {
    var found = false;
    var all = new Array('kjott', 'fisk', 'fugl', 'gulrot', 'lok', 'brokkoli', 'salat', 'avokado', 'tomat', 'sopp', 'agurk', 'paprika', 'brod', 'potet', 'melk', 'korn', 'pasta', 'sitron', 'egg', 'yoghurt', 'ris');
    var selected = makeArray_GET();
    var notWant = Array();
    for (var i = 0; i < all.length; i++) {
        for (var k = 0; k < selected.length; k++) {
            if (all[i] == selected[k]) found = true;
        }
        if (found == false) notWant.push(all[i]);
        found = false;
    }
    return notWant;
}

$(document).ready(function () {
    mandag = new Dag_Mandag();
    tirsdag = new Dag_Tirsdag();
    onsdag = new Dag_Onsdag();
    torsdag = new Dag_Torsdag();
    fredag = new Dag_Fredag();
    lordag = new Dag_Lordag();
    sondag = new Dag_Sondag();
    //alert(doesNotWant());
    //alert(samling.createRandomArray());
});
