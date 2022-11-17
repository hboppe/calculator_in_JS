const calculator = {
    screen: document.getElementById('paragId'),
    digit: function(digit){        
    
        if(digit.innerText === '.' && (/[.]/).test(this.screen.innerText)){
            this.screen.innerText = this.screen.innerText;
            return this.screen.innerText;
        }
        else if(digit.innerText === '.' && this.screen.innerText === '0'){
            this.screen.innerText += '.'
        }
        else if(this.screen.innerText === '0'){
            this.screen.innerText = digit.innerText;
            return this.screen.innerText;
        } else {
            this.screen.innerText += digit.innerText;
            return this.screen.innerText;
            
        }

    },
    clean: function(){
        this.screen.innerText = '0';
    },
    multiplication: function(){
        let num1 = this.screen.innerText;
        console.log(num1)
    }
}

// evento para numeros e ponto
const button = [...document.getElementsByClassName('digit')];

button.forEach(digit => digit.addEventListener('click', function(e){
    calculator.digit(e.target);
}));

// evento para botao de limpar tela

const cleanButton = document.getElementById('cleanScreen');

cleanButton.addEventListener('click', function(e){
    calculator.clean(e.target);
});

// multiplicacao

const multDig = document.getElementById('mult');
multDig.addEventListener('click', calculator.multiplication());



