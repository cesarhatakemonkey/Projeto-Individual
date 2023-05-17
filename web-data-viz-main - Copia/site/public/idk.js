
function calc1() {
    if (ruler == "franc") {
        if (forcaman > 0) {
            if (forcaman > 4 && forcaman < 8) {
                alert("close victory")
                moral -= 10
                man -= 100
                csh += 200
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }
            else if (forcaman > 8) {
                alert("overwelming victory")
                moral += 10
                csh += 300
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`


            }
            if (forcaman < 4) {
                man = 0
                cavalary = 0
                art = 0
                csh = 1000
                moral = 100
                alert('perca anfustiante, volte para a tela inicial')
                div1.innerHTML = `
<button onclick="perdeu()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }
        }
        if (forcaart > 0) {
            if (forcaart > 5 && forcaart < 8) {
                alert("close victory")
                moral -= 10
                man -= 100
                csh += 200
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }
            else if (forcaart > 8) {
                alert("overwelming victory")
                moral += 10
                csh += 300
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`


            }
            if (forcaart < 5) {
                man = 0
                cavalary = 0
                art = 0
                csh = 1000
                moral = 100
                alert('perca anfustiante, volte para a tela inicial')
                div1.innerHTML = `
<button onclick="perdeu()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }

        }

        if (forcacav > 0) {
            if (forcacav >4 && forcacav < 7) {
                alert("close victory")
                moral -= 10
                man -= 100
                csh += 200
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }
            else if (forcacav > 7) {
                alert("overwelming victory")
                moral += 10
                csh += 300
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`


            }
            if (forcacav < 4) {
                man = 0
                cavalary = 0
                art = 0
                csh = 1000
                moral = 100
                alert('perca anfustiante, volte para a tela inicial')
                div1.innerHTML = `
<button onclick="perdeu()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }

        }

        if (forcabal > 0) {
            if (forcabal > 5 && forcabal < 8) {
                alert("close victory")
                moral -= 10
                man -= 100
                csh += 200
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }
            else if (forcabal > 8) {
                alert("overwelming victory")
                moral += 10
                csh += 300
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`


            }
            if (forcabal < 5) {
                man = 0
                cavalary = 0
                art = 0
                csh = 1000
                moral = 100
                alert('perca anfustiante, volte para a tela inicial')
                div1.innerHTML = `
<button onclick="perdeu()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }

        }


    }
    if (ruler == "roman") {
        if (forcaman > 0) {
            if (forcaman > 5 && forcaman < 8) {
                alert("close victory")
                moral -= 10
                man -= 100
                csh += 200
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }
            else if (forcaman > 8) {
                alert("overwelming victory")
                moral += 10
                csh += 300
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`


            }
            if (forcaman < 5) {
                man = 0
                cavalary = 0
                art = 0
                csh = 1000
                moral = 100
                alert('perca anfustiante, volte para a tela inicial')
                div1.innerHTML = `
<button onclick="perdeu()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }
        }
        if (forcaart > 0) {
            if (forcaart > 5 && forcaart < 8) {
                alert("close victory")
                moral -= 10
                man -= 100
                csh += 200
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }
            else if (forcaart > 8) {
                alert("overwelming victory")
                moral += 10
                csh += 300
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`


            }
            if (forcaart < 5) {
                man = 0
                cavalary = 0
                art = 0
                csh = 1000
                moral = 100
                alert('perca anfustiante, volte para a tela inicial')
                div1.innerHTML = `
<button onclick="perdeu()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }

        }

        if (forcacav > 0) {
            if (forcacav > 5 && forcacav < 8) {
                alert("close victory")
                moral -= 10
                man -= 100
                csh += 200
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }
            else if (forcacav > 7) {
                alert("overwelming victory")
                moral += 10
                csh += 300
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`


            }
            if (forcacav < 4) {
                man = 0
                cavalary = 0
                art = 0
                csh = 1000
                moral = 100
                alert('perca anfustiante, volte para a tela inicial')
                div1.innerHTML = `
<button onclick="perdeu()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }

        }

        if (forcabal > 0) {
            if (forcabal > 3 && forcabal < 6) {
                alert("close victory")
                moral -= 10
                man -= 100
                csh += 200
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }
            else if (forcabal > 6) {
                alert("overwelming victory")
                moral += 10
                csh += 300
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`


            }
            if (forcabal < 3) {
                man = 0
                cavalary = 0
                art = 0
                csh = 1000
                moral = 100
                alert('perca anfustiante, volte para a tela inicial')
                div1.innerHTML = `
<button onclick="perdeu()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }

        }


    }

    if (ruler == "otoman") {
        if (forcaman > 0) {
            if (forcaman > 4 && forcaman < 7) {
                alert("close victory")
                moral -= 10
                man -= 100
                csh += 200
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }
            else if (forcaman > 7) {
                alert("overwelming victory")
                moral += 10
                csh += 300
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`


            }
            if (forcaman < 4) {
                man = 0
                cavalary = 0
                art = 0
                csh = 1000
                moral = 100
                alert('perca anfustiante, volte para a tela inicial')
                div1.innerHTML = `
<button onclick="perdeu()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }
        }
        if (forcaart > 0) {
            if (forcaart > 3 && forcaart < 6) {
                alert("close victory")
                moral -= 10
                man -= 100
                csh += 200
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }
            else if (forcaart > 6) {
                alert("overwelming victory")
                moral += 10
                csh += 300
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`


            }
            if (forcaart < 3) {
                man = 0
                cavalary = 0
                art = 0
                csh = 1000
                moral = 100
                alert('perca anfustiante, volte para a tela inicial')
                div1.innerHTML = `
<button onclick="perdeu()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }

        }

        if (forcacav > 0) {
            if (forcacav > 4 && forcacav < 7) {
                alert("close victory")
                moral -= 10
                man -= 100
                csh += 200
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }
            else if (forcacav > 7) {
                alert("overwelming victory")
                moral += 10
                csh += 300
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`


            }
            if (forcacav < 4) {
                man = 0
                cavalary = 0
                art = 0
                csh = 1000
                moral = 100
                alert('perca anfustiante, volte para a tela inicial')
                div1.innerHTML = `
<button onclick="perdeu()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }

        }

        if (forcabal > 0) {
            if (forcabal > 4 && forcabal < 7) {
                alert("close victory")
                moral -= 10
                man -= 100
                csh += 200
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }
            else if (forcabal > 7) {
                alert("overwelming victory")
                moral += 10
                csh += 300
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`


            }
            if (forcabal < 4) {
                man = 0
                cavalary = 0
                art = 0
                csh = 1000
                moral = 100
                alert('perca anfustiante, volte para a tela inicial')
                div1.innerHTML = `
<button onclick="perdeu()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }

        }


    }

    if (ruler == "greek") {
        if (forcaman > 0) {
            if (forcaman > 2.5 && forcaman < 5.5) {
                alert("close victory")
                moral -= 10
                man -= 100
                csh += 200
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }
            else if (forcaman > 5.5) {
                alert("overwelming victory")
                moral += 10
                csh += 300
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`


            }
            if (forcaman < 2.5) {
                man = 0
                cavalary = 0
                art = 0
                csh = 1000
                moral = 100
                alert('perca anfustiante, volte para a tela inicial')
                div1.innerHTML = `
<button onclick="perdeu()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }
        }
        if (forcaart > 0) {
            if (forcaart > 4 && forcaart < 7) {
                alert("close victory")
                moral -= 10
                man -= 100
                csh += 200
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }
            else if (forcaart > 7) {
                alert("overwelming victory")
                moral += 10
                csh += 300
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`


            }
            if (forcaart < 4) {
                man = 0
                cavalary = 0
                art = 0
                csh = 1000
                moral = 100
                alert('perca anfustiante, volte para a tela inicial')
                div1.innerHTML = `
<button onclick="perdeu()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }

        }

        if (forcacav > 0) {
            if (forcacav > 4 && forcacav < 7) {
                alert("close victory")
                moral -= 10
                man -= 100
                csh += 200
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }
            else if (forcacav > 7) {
                alert("overwelming victory")
                moral += 10
                csh += 300
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`


            }
            if (forcacav < 4) {
                man = 0
                cavalary = 0
                art = 0
                csh = 1000
                moral = 100
                alert('perca anfustiante, volte para a tela inicial')
                div1.innerHTML = `
<button onclick="perdeu()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }

        }

        if (forcabal > 0) {
            if (forcabal > 4 && forcabal < 7) {
                alert("close victory")
                moral -= 10
                man -= 100
                csh += 200
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }
            else if (forcabal > 7) {
                alert("overwelming victory")
                moral += 10
                csh += 300
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`


            }
            if (forcabal < 4) {
                man = 0
                cavalary = 0
                art = 0
                csh = 1000
                moral = 100
                alert('perca anfustiante, volte para a tela inicial')
                div1.innerHTML = `
<button onclick="perdeu()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }

        }


    }

    if (ruler == "perisan") {
        if (forcaman > 0) {
            if (forcaman > 3 && forcaman < 6) {
                alert("close victory")
                moral -= 10
                man -= 100
                csh += 200
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }
            else if (forcaman > 6) {
                alert("overwelming victory")
                moral += 10
                csh += 300
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`


            }
            if (forcaman < 3) {
                man = 0
                cavalary = 0
                art = 0
                csh = 1000
                moral = 100
                alert('perca anfustiante, volte para a tela inicial')
                div1.innerHTML = `
<button onclick="perdeu()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }
        }
        if (forcaart > 0) {
            if (forcaart > 4 && forcaart < 7) {
                alert("close victory")
                moral -= 10
                man -= 100
                csh += 200
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }
            else if (forcaart > 7) {
                alert("overwelming victory")
                moral += 10
                csh += 300
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`


            }
            if (forcaart < 4) {
                man = 0
                cavalary = 0
                art = 0
                csh = 1000
                moral = 100
                alert('perca anfustiante, volte para a tela inicial')
                div1.innerHTML = `
<button onclick="perdeu()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }

        }

        if (forcacav > 0) {
            if (forcacav > 4 && forcacav < 7) {
                alert("close victory")
                moral -= 10
                man -= 100
                csh += 200
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }
            else if (forcacav > 7) {
                alert("overwelming victory")
                moral += 10
                csh += 300
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`


            }
            if (forcacav < 4) {
                man = 0
                cavalary = 0
                art = 0
                csh = 1000
                moral = 100
                alert('perca anfustiante, volte para a tela inicial')
                div1.innerHTML = `
<button onclick="perdeu()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }

        }

        if (forcabal > 0) {
            if (forcabal > 4 && forcabal < 7) {
                alert("close victory")
                moral -= 10
                man -= 100
                csh += 200
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }
            else if (forcabal > 7) {
                alert("overwelming victory")
                moral += 10
                csh += 300
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`


            }
            if (forcabal < 4) {
                man = 0
                cavalary = 0
                art = 0
                csh = 1000
                moral = 100
                alert('perca anfustiante, volte para a tela inicial')
                div1.innerHTML = `
<button onclick="perdeu()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }

        }


    }
}

function calc2() {
    if (ruler == "franc") {
        if (forcaman > 0) {
            if (forcaman > 4 && forcaman < 7) {
                alert("close victory")
                moral -= 10
                man -= 100
                csh += 200
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }
            else if (forcaman > 7) {
                alert("overwelming victory")
                moral += 10
                csh += 300
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`


            }
            if (forcaman < 4) {
                man = 0
                cavalary = 0
                art = 0
                csh = 1000
                moral = 100
                alert('perca anfustiante, volte para a tela inicial')
                div1.innerHTML = `
<button onclick="perdeu()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }
        }
        if (forcaart > 0) {
            if (forcaart > 4 && forcaart < 7) {
                alert("close victory")
                moral -= 10
                man -= 100
                csh += 200
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }
            else if (forcaart > 7) {
                alert("overwelming victory")
                moral += 10
                csh += 300
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`


            }
            if (forcaart < 4) {
                man = 0
                cavalary = 0
                art = 0
                csh = 1000
                moral = 100
                alert('perca anfustiante, volte para a tela inicial')
                div1.innerHTML = `
<button onclick="perdeu()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }

        }

        if (forcacav > 0) {
            if (forcacav >3 && forcacav < 6) {
                alert("close victory")
                moral -= 10
                man -= 100
                csh += 200
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }
            else if (forcacav > 6) {
                alert("overwelming victory")
                moral += 10
                csh += 300
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`


            }
            if (forcacav < 3) {
                man = 0
                cavalary = 0
                art = 0
                csh = 1000
                moral = 100
                alert('perca anfustiante, volte para a tela inicial')
                div1.innerHTML = `
<button onclick="perdeu()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }

        }

        if (forcabal > 0) {
            if (forcabal > 4 && forcabal < 7) {
                alert("close victory")
                moral -= 10
                man -= 100
                csh += 200
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }
            else if (forcabal > 7) {
                alert("overwelming victory")
                moral += 10
                csh += 300
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`


            }
            if (forcabal < 4) {
                man = 0
                cavalary = 0
                art = 0
                csh = 1000
                moral = 100
                alert('perca anfustiante, volte para a tela inicial')
                div1.innerHTML = `
<button onclick="perdeu()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }

        }


    }
    if (ruler == "roman") {
        if (forcaman > 0) {
            if (forcaman > 4 && forcaman < 7) {
                alert("close victory")
                moral -= 10
                man -= 100
                csh += 200
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }
            else if (forcaman > 7) {
                alert("overwelming victory")
                moral += 10
                csh += 300
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`


            }
            if (forcaman < 4) {
                man = 0
                cavalary = 0
                art = 0
                csh = 1000
                moral = 100
                alert('perca anfustiante, volte para a tela inicial')
                div1.innerHTML = `
<button onclick="perdeu()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }
        }
        if (forcaart > 0) {
            if (forcaart > 4 && forcaart < 7) {
                alert("close victory")
                moral -= 10
                man -= 100
                csh += 200
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }
            else if (forcaart > 7) {
                alert("overwelming victory")
                moral += 10
                csh += 300
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`


            }
            if (forcaart < 4) {
                man = 0
                cavalary = 0
                art = 0
                csh = 1000
                moral = 100
                alert('perca anfustiante, volte para a tela inicial')
                div1.innerHTML = `
<button onclick="perdeu()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }

        }

        if (forcacav > 0) {
            if (forcacav > 4 && forcacav < 7) {
                alert("close victory")
                moral -= 10
                man -= 100
                csh += 200
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }
            else if (forcacav > 7) {
                alert("overwelming victory")
                moral += 10
                csh += 300
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`


            }
            if (forcacav < 4) {
                man = 0
                cavalary = 0
                art = 0
                csh = 1000
                moral = 100
                alert('perca anfustiante, volte para a tela inicial')
                div1.innerHTML = `
<button onclick="perdeu()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }

        }

        if (forcabal > 0) {
            if (forcabal > 3 && forcabal < 6) {
                alert("close victory")
                moral -= 10
                man -= 100
                csh += 200
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }
            else if (forcabal > 6) {
                alert("overwelming victory")
                moral += 10
                csh += 300
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`


            }
            if (forcabal < 3) {
                man = 0
                cavalary = 0
                art = 0
                csh = 1000
                moral = 100
                alert('perca anfustiante, volte para a tela inicial')
                div1.innerHTML = `
<button onclick="perdeu()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }

        }


    }

    if (ruler == "otoman") {
        if (forcaman > 0) {
            if (forcaman > 4 && forcaman < 7) {
                alert("close victory")
                moral -= 10
                man -= 100
                csh += 200
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }
            else if (forcaman > 7) {
                alert("overwelming victory")
                moral += 10
                csh += 300
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`


            }
            if (forcaman < 4) {
                man = 0
                cavalary = 0
                art = 0
                csh = 1000
                moral = 100
                alert('perca anfustiante, volte para a tela inicial')
                div1.innerHTML = `
<button onclick="perdeu()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }
        }
        if (forcaart > 0) {
            if (forcaart > 3 && forcaart < 6) {
                alert("close victory")
                moral -= 10
                man -= 100
                csh += 200
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }
            else if (forcaart > 6) {
                alert("overwelming victory")
                moral += 10
                csh += 300
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`


            }
            if (forcaart < 3) {
                man = 0
                cavalary = 0
                art = 0
                csh = 1000
                moral = 100
                alert('perca anfustiante, volte para a tela inicial')
                div1.innerHTML = `
<button onclick="perdeu()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }

        }

        if (forcacav > 0) {
            if (forcacav > 4 && forcacav < 7) {
                alert("close victory")
                moral -= 10
                man -= 100
                csh += 200
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }
            else if (forcacav > 7) {
                alert("overwelming victory")
                moral += 10
                csh += 300
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`


            }
            if (forcacav < 4) {
                man = 0
                cavalary = 0
                art = 0
                csh = 1000
                moral = 100
                alert('perca anfustiante, volte para a tela inicial')
                div1.innerHTML = `
<button onclick="perdeu()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }

        }

        if (forcabal > 0) {
            if (forcabal > 4 && forcabal < 7) {
                alert("close victory")
                moral -= 10
                man -= 100
                csh += 200
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }
            else if (forcabal > 7) {
                alert("overwelming victory")
                moral += 10
                csh += 300
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`


            }
            if (forcabal < 4) {
                man = 0
                cavalary = 0
                art = 0
                csh = 1000
                moral = 100
                alert('perca anfustiante, volte para a tela inicial')
                div1.innerHTML = `
<button onclick="perdeu()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }

        }


    }

    if (ruler == "greek") {
        if (forcaman > 0) {
            if (forcaman > 2.5 && forcaman < 5.5) {
                alert("close victory")
                moral -= 10
                man -= 100
                csh += 200
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }
            else if (forcaman > 5.5) {
                alert("overwelming victory")
                moral += 10
                csh += 300
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`


            }
            if (forcaman < 2.5) {
                man = 0
                cavalary = 0
                art = 0
                csh = 1000
                moral = 100
                alert('perca anfustiante, volte para a tela inicial')
                div1.innerHTML = `
<button onclick="perdeu()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }
        }
        if (forcaart > 0) {
            if (forcaart > 4 && forcaart < 7) {
                alert("close victory")
                moral -= 10
                man -= 100
                csh += 200
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }
            else if (forcaart > 7) {
                alert("overwelming victory")
                moral += 10
                csh += 300
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`


            }
            if (forcaart < 4) {
                man = 0
                cavalary = 0
                art = 0
                csh = 1000
                moral = 100
                alert('perca anfustiante, volte para a tela inicial')
                div1.innerHTML = `
<button onclick="perdeu()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }

        }

        if (forcacav > 0) {
            if (forcacav > 4 && forcacav < 7) {
                alert("close victory")
                moral -= 10
                man -= 100
                csh += 200
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }
            else if (forcacav > 7) {
                alert("overwelming victory")
                moral += 10
                csh += 300
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`


            }
            if (forcacav < 4) {
                man = 0
                cavalary = 0
                art = 0
                csh = 1000
                moral = 100
                alert('perca anfustiante, volte para a tela inicial')
                div1.innerHTML = `
<button onclick="perdeu()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }

        }

        if (forcabal > 0) {
            if (forcabal > 4 && forcabal < 7) {
                alert("close victory")
                moral -= 10
                man -= 100
                csh += 200
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }
            else if (forcabal > 7) {
                alert("overwelming victory")
                moral += 10
                csh += 300
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`


            }
            if (forcabal < 4) {
                man = 0
                cavalary = 0
                art = 0
                csh = 1000
                moral = 100
                alert('perca anfustiante, volte para a tela inicial')
                div1.innerHTML = `
<button onclick="perdeu()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }

        }


    }

    if (ruler == "perisan") {
        if (forcaman > 0) {
            if (forcaman > 3 && forcaman < 6) {
                alert("close victory")
                moral -= 10
                man -= 100
                csh += 200
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }
            else if (forcaman > 6) {
                alert("overwelming victory")
                moral += 10
                csh += 300
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`


            }
            if (forcaman < 3) {
                man = 0
                cavalary = 0
                art = 0
                csh = 1000
                moral = 100
                alert('perca anfustiante, volte para a tela inicial')
                div1.innerHTML = `
<button onclick="perdeu()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }
        }
        if (forcaart > 0) {
            if (forcaart > 4 && forcaart < 7) {
                alert("close victory")
                moral -= 10
                man -= 100
                csh += 200
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }
            else if (forcaart > 7) {
                alert("overwelming victory")
                moral += 10
                csh += 300
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`


            }
            if (forcaart < 4) {
                man = 0
                cavalary = 0
                art = 0
                csh = 1000
                moral = 100
                alert('perca anfustiante, volte para a tela inicial')
                div1.innerHTML = `
<button onclick="perdeu()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }

        }

        if (forcacav > 0) {
            if (forcacav > 4 && forcacav < 7) {
                alert("close victory")
                moral -= 10
                man -= 100
                csh += 200
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }
            else if (forcacav > 7) {
                alert("overwelming victory")
                moral += 10
                csh += 300
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`


            }
            if (forcacav < 4) {
                man = 0
                cavalary = 0
                art = 0
                csh = 1000
                moral = 100
                alert('perca anfustiante, volte para a tela inicial')
                div1.innerHTML = `
<button onclick="perdeu()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }

        }

        if (forcabal > 0) {
            if (forcabal > 4 && forcabal < 7) {
                alert("close victory")
                moral -= 10
                man -= 100
                csh += 200
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }
            else if (forcabal > 7) {
                alert("overwelming victory")
                moral += 10
                csh += 300
                div1.innerHTML = `
<button onclick="voltaahome()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`


            }
            if (forcabal < 4) {
                man = 0
                cavalary = 0
                art = 0
                csh = 1000
                moral = 100
                alert('perca anfustiante, volte para a tela inicial')
                div1.innerHTML = `
<button onclick="perdeu()">voltar a suas guarnições</button>`
                divexib.innerHTML = `No momento você tem:<br>${csh} ${moneytim}<br> ${man} soldados de infantria,<br> ${cavalary}de horseman.<br>${art} linhas especializadas`

            }

        }


    }
}



function perdeu() {
    var url = "home.html"
    window.location(url)
}
