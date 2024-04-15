const arrayBotoesTeclado = document.querySelectorAll('.btn');
const inputCalculadora = document.querySelector('.calc-numbers');

class Calculadora{
    constructor(){
        this.buffer = '';
        this.resultado = 0;
    }

    limpaTela(inputCalculadora){
        inputCalculadora.value = '0';
        this.buffer = '';
    }

    apagarDigitos(inputCalculadora){
        if(inputCalculadora.value === '0'){
            inputCalculadora.value = '0';
        }else{
            if(inputCalculadora.value.length > 1){
                inputCalculadora.value = inputCalculadora.value.slice(0, -1);
                this.buffer = inputCalculadora.value; // atualizando o buffer
            }else{
                inputCalculadora.value = '0'; //inserir na tela
                this.buffer = inputCalculadora.value; // atualizando o buffer
            }                                                                                                
        }
        console.log(this.buffer);  
    }

    calculaResultado(inputCalculadora){
        let arrayApartirDoBuffer = this.buffer.split('');//separa string em array
        let novoArray = arrayApartirDoBuffer.map(e => { // substitui os elementos errados e junta o array
            if(e === 'x'){
                return '*';
            }else if(e === '÷'){
                return '/';
            }else{
                return e;
            }
        }).join('');//juntando as posições do array em uma unica string
        inputCalculadora.value = eval(novoArray) //inserir na tela
    }

    atualizaBuffer(inputCalculadora, teclaPressionada){
        if(inputCalculadora.value === '0'){
            inputCalculadora.value = ''; //inserir na tela
        }
        inputCalculadora.value += teclaPressionada; //inserir na tela
        this.buffer += teclaPressionada;
        console.log(this.buffer);
    }
}

const calculadora = new Calculadora();

arrayBotoesTeclado.forEach(botao => {
    botao.addEventListener('click', (event) =>{
        
        let teclaPressionada = event.target.innerHTML;

        if(teclaPressionada === "C"){
            calculadora.limpaTela(inputCalculadora);
        }else if(teclaPressionada === "←"){
            calculadora.apagarDigitos(inputCalculadora);
        }else if(teclaPressionada === '='){
            calculadora.calculaResultado(inputCalculadora)
        }else{
            calculadora.atualizaBuffer(inputCalculadora, teclaPressionada);
        }
    });
});

//dividir a logica entre atualizar a interface e a calculadora em si, para isso duas classes.