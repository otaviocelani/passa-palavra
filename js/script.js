﻿//GlOBALS
//Conta em qual letra esta
var LETTER_COUNT = 0;
//Conta o numero de erros
var ERROR_COUNT = 0;
//Conta numero de acertos
var HIT_COUNT = 0;
//Salva ultimo numero random
var LAST_RANDOM_NUMBER = 0;

//US04 - Vai para o menu principal
function MenuPrincipal() {
    location.href = '../index.html';
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//US01
//Resgata o valor do contador
cont = sessionStorage.getItem("cont");

//i é o numero da letra, 0=a
function LerPergunta(i) {
    LAST_RANDOM_NUMBER = getRandomInt(0, 1);
    var pergunta = DB.dados[i].questoes[LAST_RANDOM_NUMBER].pergunta;
    document.getElementById('question').innerHTML = pergunta;
    return pergunta;
}

function PassouAPalavra(){
    colorirCircle(3);
    LETTER_COUNT++;
    LerPergunta(LETTER_COUNT);
}

function colorirCircle(i){
    // se a pergunta respondida estiver certa
    if (i == 1){
        document.getElementById("circle-"+String.fromCharCode(LETTER_COUNT+65)).classList.add("btn-success");
        
    // se errar
    }if(i == 2){
        document.getElementById("circle-"+String.fromCharCode(LETTER_COUNT+65)).classList.add("btn-danger");
    }
    
    // se for passa a palavra
    if (i == 3){
        document.getElementById("circle-"+String.fromCharCode(LETTER_COUNT+65)).classList.add("btn-warning");
    }
       
}


    n = getRandomInt(0, 1);

    var pergunta = DB.dados[i].questoes[n].pergunta;
    document.getElementById('question').innerHTML = pergunta;
    return pergunta;

function contador(i) {
    document.getElementById("respostaFinal").innerHTML = "Voce acertou "+HIT_COUNT+" perguntas!";
}

//resets all global variables and go to game screen
function resetGame(where_from){
    LETTER_COUNT = 0;
    ERROR_COUNT = 0;
    HIT_COUNT = 0;
    if (where_from == "index"){
        location.replace("./views/tela_jogo.html")
    }
    else{
        location.replace("../views/tela_jogo.html")
    }
}

//Confere o valor no Form=form-resposta com o .resposta no JSON
function ConfereResposta(i) {
    var Fres = document.getElementById('form-resposta').elements[0].value;
    var JSres = DB.dados[i].questoes[n].resposta;

    Fres = TratamentoString(Fres);
    JSres = TratamentoString(JSres);

    //Resposta correta
    if (Fres == JSres) {

    }
    //Resposta incorreta
    else {

    }

}

//Tratamento da string
function TratamentoString(str) {
    str = str.replace(/ /g, "");
    str = str.replace(/[AÁÀÂÃÄáàâãä]/g, "a");
    str = str.replace(/[B]/g, "b");
    str = str.replace(/[Cç]/g, "c");
    str = str.replace(/[D]/g, "d");
    str = str.replace(/[EÉÈÊËéèêë]/g, "e");
    str = str.replace(/[F]/g, "f");
    str = str.replace(/[G]/g, "g");
    str = str.replace(/[H]/g, "h");
    str = str.replace(/[IÍÌÎÏíìîï]/g, "i");
    str = str.replace(/[J]/g, "j");
    str = str.replace(/[K]/g, "k");
    str = str.replace(/[L]/g, "l");
    str = str.replace(/[M]/g, "m");
    str = str.replace(/[N]/g, "n");
    str = str.replace(/[OÓÒÔÕÖóòôõö]/g, "o");
    str = str.replace(/[P]/g, "p");
    str = str.replace(/[Q]/g, "q");
    str = str.replace(/[R]/g, "r");
    str = str.replace(/[S]/g, "s");
    str = str.replace(/[T]/g, "t");
    str = str.replace(/[UÚÙÛÜúùûü]/g, "u");
    str = str.replace(/[V]/g, "v");
    str = str.replace(/[W]/g, "w");
    str = str.replace(/[X]/g, "x");
    str = str.replace(/[Y]/g, "y");
    str = str.replace(/[Z]/g, "z");
    return str;
}

    var JSres = DB.dados[i].questoes[LAST_RANDOM_NUMBER].resposta;
    
    //Resposta correta
    if (Fres == JSres) {
        colorirCircle(1)
        HIT_COUNT++;
        LETTER_COUNT++;
        LerPergunta(LETTER_COUNT);
    }
    //Resposta incorreta
    else {
        colorirCircle(2)
        ERROR_COUNT++;
        LETTER_COUNT++;
        LerPergunta(LETTER_COUNT);
    }
 }
