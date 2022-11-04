const calculadora = {
    screen: document.getElementById('paragId'),
    digit: function(digit){        
    
        if(digit.innerText === '.' && (/[.]/).test(this.screen.innerText)){
            this.screen.innerText = this.screen.innerText;
            return this.screen.innerText;
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
        
    }
}

