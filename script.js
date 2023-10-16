// ========================================================================================================
//                                                  GLOBAIS
// ========================================================================================================

x = 0;
y = 0;
res = 0;
operador = "null";

// ========================================================================================================
//                                                NÚMEROS ONCLICK
// ========================================================================================================

function teclarZero() {
    alterarVisor(0);
}
function teclarUm() {
    alterarVisor(1);
}
function teclarDois() {
    alterarVisor(2);
}
function teclarTres() {
    alterarVisor(3);
}
function teclarQuatro() {
    alterarVisor(4);
}
function teclarCinco() {
    alterarVisor(5);
}
function teclarSeis() {
    alterarVisor(6);
}
function teclarSete() {
    alterarVisor(7);
}
function teclarOito() {
    alterarVisor(8);
}
function teclarNove() {
    alterarVisor(9);
}

// ========================================================================================================
//                                            NÚMEROS LER TECLADO
// ========================================================================================================

document.addEventListener("keydown", function(event) {
    let teclaPressionada = event.key;

    if (/^[0-9]$/.test(teclaPressionada)) {
        let numero = parseInt(teclaPressionada);
        
        switch (numero) {
            case 1:
                    teclarUm(1);
                break;
            case 2:
                    teclarDois(2);
                break;
            case 3:
                    teclarTres(3);
                break;
            case 4:
                    teclarQuatro(4);
                break;
            case 5:
                    teclarCinco(5);
                break;
            case 6:
                    teclarSeis(6);
                break;
            case 7:
                    teclarSete(7);
                break;
            case 8:
                    teclarOito(8);
                break;
            case 9:
                    teclarNove(9);
                break;
            case 0:
                    teclarZero(0);
                break;
            default:
                break;
        }
    } else if (teclaPressionada == "+") {
        atribuirValorX();
        teclarMais();
    } else if (teclaPressionada == "*") {
        atribuirValorX();
        teclarVezes();
    } else if (teclaPressionada == "/") {
        atribuirValorX();
        teclarDividir();
    } else if (teclaPressionada == "-") {
        atribuirValorX();
        teclarMenos();
    } else if (teclaPressionada == ".") {
        teclarPonto();
    } else if (teclaPressionada == "c" || teclaPressionada == "C") {
        teclarC();
    } else if (teclaPressionada == "%") {
        atribuirValorX();
        teclarResto();
    } else if (teclaPressionada == "=") {
        teclarIgual();
    }
});

// ========================================================================================================
//                                               OPERADORES
// ========================================================================================================

function atribuirValorX() {
    numDoVisor = document.getElementById("visor-res");
    numDoVisorInt = parseFloat(numDoVisor.textContent);

    x = numDoVisorInt;
    //alert(x);

    numDoVisor.textContent = 0;
}

function teclarMais() {
    operador = "+";
    //alert(operador)
}
function teclarMenos() {
    operador = "-";
    //alert(operador)
}
function teclarVezes() {
    operador = "*";
    //alert(operador)
}
function teclarDividir() {
    operador = "/"
    //alert(operador)
}
function teclarInverte() {
    alterarVisor(-1);
}
function teclarPonto() {
    alterarVisor(".")
}
function teclarIgual() {
    numDoVisor = document.getElementById("visor-res");
    numDoVisorInt = parseFloat(numDoVisor.textContent);
    numDoVisor.textContent = "0";

    y = numDoVisorInt;

    switch (operador) {
        case "+":
                res = x + y;
            break;

        case "-":
                res = x - y;
            break;
        case "*":
                res = x * y;
            break;
        case "/":
                res = x + y;
            break;
        case "%":
                res = x%y;
            break;
        default:
            res = x + y;
            break;
    }
    alterarVisor(res);
}
function teclarC() {
    alterarVisor("delete");
}
function teclarParentese() {
    
}
function teclarResto() {
    operador = "%";
    //alert(operador)
}

// ========================================================================================================
//                                            VISOR CALCULADORA
// ========================================================================================================

function alterarVisor(numPass) {
    const numDoVisor = document.getElementById("visor-res");
    const numDoVisorTexto = numDoVisor.textContent;

    if (numDoVisorTexto.length > 17) {
        numDoVisorTexto = numDoVisorTexto.substring(0, 17);
    }

    if (numPass == "-1") {
        if (numDoVisorTexto === "0" || numDoVisorTexto === "-0") {
            numDoVisor.textContent = "-1";
        } else {
            if (numDoVisorTexto.includes("-")) {
                //alert("CONTÉM");
                numDoVisor.textContent = numDoVisorTexto.replace(/-/g, "");
            } else {
                //alert("NÃO CONTÉM");
                numDoVisor.textContent = "-" + numDoVisorTexto;
            }
        }
    } else if (numDoVisorTexto == "0" || numDoVisorTexto == "-0") {
        numDoVisor.textContent = numPass;
    } else {
        numDoVisor.textContent = `${numDoVisorTexto}${numPass}`;
    }

    if (numPass == "delete") {
        numDoVisor.textContent = "0";
    }
    if (numPass == ".") {
        if (!numDoVisorTexto.includes(".")) {
            //alert("PONTO NÃO EXISTE");
            numDoVisor.textContent = `${numDoVisorTexto}${numPass}`;
        } else {
            //alert("PONTO EXISTE");
            numDoVisor.textContent = numDoVisorTexto.replace(".", "");
        }
    }    
}