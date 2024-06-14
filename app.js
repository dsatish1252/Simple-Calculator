(function() {

    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    // capturing the number after clicking any button
    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            let value = e.target.dataset.num;
            screen.value += value;
            
        })
    });
    // calculating the expression
    equal.addEventListener('click', function(e){
        if(screen.value === ''){
            screen.value = "";
        }else{
            let answer = calculateExpression(screen.value);
            screen.value = answer;
            
        }
    });
    // calculation function
    function calculateExpression(expression) {
        let tokens = expression.split(/([+\-*/%])/);
        let result = parseFloat(tokens[0]);
    
        for (let i = 1; i < tokens.length; i += 2) {
            let operator = tokens[i];
            let operand = parseFloat(tokens[i + 1]);
    
            switch (operator) {
                case '+':
                    result += operand;
                    break;
                case '-':
                    result -= operand;
                    break;
                case '*':
                    result *= operand;
                    break;
                case '/':
                    result /= operand;
                    break;
                case '%':
                    result %= operand;
            }
        }
    
        return result;
    }



    clear.addEventListener('click', function(e){

        screen.value = "";
    })

})();

