
var csh = 1000
var morale = 100
var man = 0
var cavalary = 0
var art = 0


var ruler = localStorage.getItem("emperador");

var moneytim = ""

function buyingm() {
    if (csh > 100) {
        man = man += 100
        csh = csh -= 100


        if (ruler == "roman") {
            moneytim = "denarius"

            spanart.innerHTML = "linha de arqueiros"
        }
        if (ruler == "greek") {
            moneytim = "drachmas"
            spanart.innerHTML = "linha de arqueiros"
        }
        if (ruler == "franc") {

            spanart.innerHTML = "canhão"
            moneytim = "centimes"
        }
        if (ruler == "otoman") {
            moneytim = "liras"

            spanart.innerHTML = "canhão"
        }
        if (ruler == "perisan") {
            moneytim = "dinares"

            spanart.innerHTML = "linha de arqueiros"
        }
        divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`
    }
    else alert(`${moneytim} insuficente`)
}

function buyingc() {
    if (csh > 250) {
        cavalary = cavalary += 100
        csh = csh -= 250


        if (ruler == "roman") {
            moneytim = "denarius"

            spanart.innerHTML = "linha de arqueiros"
        }
        if (ruler == "greek") {
            moneytim = "drachmas"
            spanart.innerHTML = "linha de arqueiros"
        }
        if (ruler == "franc") {

            spanart.innerHTML = "canhão"
            moneytim = "centimes"
        }
        if (ruler == "otoman") {
            moneytim = "liras"

            spanart.innerHTML = "canhão"
        }
        if (ruler == "perisan") {
            moneytim = "dinares"

            spanart.innerHTML = "linha de arqueiros"
        }
        divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`
    }
    else alert(`${moneytim} insuficente`)
}

function voltaahome(){
    var urlh = "home.html"
    window.location(urlh)
}

function buyinga() {
    if (csh > 500) {
        art = art += 100
        csh = csh -= 500


        if (ruler == "roman") {
            moneytim = "denarius"

            spanart.innerHTML = "linha de arqueiros"
        }
        if (ruler == "greek") {
            moneytim = "drachmas"
            spanart.innerHTML = "linha de arqueiros"
        }
        if (ruler == "franc") {

            spanart.innerHTML = "canhão"
            moneytim = "centimes"
        }
        if (ruler == "otoman") {
            moneytim = "liras"

            spanart.innerHTML = "canhão"
        }
        if (ruler == "perisan") {
            moneytim = "dinares"

            spanart.innerHTML = "linha de arqueiros"
        }
        divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`
    }

    else alert(`${moneytim} insuficente`)
}
function seg() {
    var forcav = Number(cavalary * 0.025)
    var forman = Number(man * 0.01)
    var forart = Number(art * 0.5)


    if (forart > forman && forart > forcav) {
        var forcatotala = Number(forart + forman + forcav)
        if (morale > 50) {
            forcatotala = forcatotala / 2
        }

    }
    if (forman > forart && forman > forcav) {
        var forcatotalm = Number(forart + forman + forcav)
        if (morale > 90) {
            forcatotalm = forcatotalm / 1.5
        }
    }
    if (forcav > forart && forcav > forman) {
        var forcatotalc = forart + forman + forcav
        if (morale > 75) {
            forcatotalc = forcatotalc / 2
        }
    }
    if (forman == forart && forman == forcav && forart == forcav) {
        var forcatotalb = Number(forart + forman + forcav)
        if (morale > 25) {
            forcatotalb = forcatotalb / 2
        }
    }
    var url = "des1.html"

    localStorage.setItem("manp", man);

    localStorage.setItem("arti", art);

    localStorage.setItem("cav", cavalary);

    localStorage.setItem("cash", csh);

    localStorage.setItem("moral", morale);

    localStorage.setItem("forcaart", forcatotala)

    localStorage.setItem("forcacav", forcatotalc)

    localStorage.setItem("forcaman", forcatotalm)

    localStorage.setItem("forcabal", forcatotalb)

    window.location(url)


    }


function perdeu(){
    urla = "home.html"
    window.location(urla)
}