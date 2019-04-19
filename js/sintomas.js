var sintoma1;
var sintoma2;
var sintoma3;

function recebeSintoma1true() {
    var div = document.getElementById('check1');
    div.style.display = 'inline';

    sintoma1 = 'true';
    return sintoma1;
}
function recebeSintoma2true() {
    var div = document.getElementById('check2');
    div.style.display = 'inline';

    sintoma2 = 'true';
    return sintoma2;
}
function recebeSintoma3true() {
    var div = document.getElementById('check3');
    div.style.display = 'inline';

    sintoma3 = 'true';
    return sintoma3;
}

function recebeSintoma1false() {
    var div = document.getElementById('check1');
    div.style.display = 'inline';

    sintoma1 = 'false';
    return sintoma1;
}
function recebeSintoma2false() {
    var div = document.getElementById('check2');
    div.style.display = 'inline';

    sintoma2 = 'false';
    return sintoma2;
}
function recebeSintoma3false() {
    var div = document.getElementById('check3');
    div.style.display = 'inline';

    sintoma3 = 'false';
    return sintoma3;
}

function resultadoSintoma(sintoma1,sintoma2,sintoma3) {

    if(this.sintoma1 == 'true' && this.sintoma2 == 'true' && this.sintoma3 == 'true' ){
        alert("Você possui todos os sintomas, peça ajuda médica provavelmente você esta infectado!");
    } else if (this.sintoma1 == 'true' && this.sintoma2 == 'true' && this.sintoma3 == 'false'){
        alert("Você possui todos os sintomas, peça ajuda médica provavelmente você esta infectado!");
    } else if (this.sintoma1 == 'true' && this.sintoma2 == 'false' && this.sintoma3 == 'true'){
        alert("Você possui todos os sintomas, peça ajuda médica provavelmente você esta infectado!");
    } else if (this.sintoma1 == 'false' && this.sintoma2 == 'true' && this.sintoma3 == 'true') {
        alert("Você possui todos os sintomas, peça ajuda médica provavelmente você esta infectado!");
    } else {
        alert("Você possui apenas 1 ou nenhum sintoma, você não esta infectado. ");
    }
}