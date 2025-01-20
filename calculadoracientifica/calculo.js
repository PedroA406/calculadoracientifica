function soma(a, b){
    return a + b
}

function subtracao(a, b){
    return a - b
}

function multiplicacao(a, b){
    return a * b
}

function divisao(a, b){
    if(b == 0){
        return null
    }
    return a / b
}

function numeroFatorial(a){
    let fatorial = a
    
    if(a==0){
        fatorial = 1
    
    }
    
    while(a>1){
        a--
    fatorial=fatorial*a
    
    }
    return fatorial
    }


    const buton2 = document.getElementById("clique2")
    buton2.addEventListener("click", clique2)

    function clique2(){
        let n1 = document.getElementById('n1').value
        var r = numeroFatorial(parseFloat(n1))
            document.getElementById('resultado').innerText=r
        }

function clique(){
    let n1 = document.getElementById('n1').value
    let n2 = document.getElementById('n2').value
    if(!n1 || !n2){
        alert('Digite os dois valores!')
    } else{
        let op = document.getElementsByName('op')

        if(op[0].checked){
            var r = soma(parseFloat(n1), parseFloat(n2))
            document.getElementById('resultado').innerText = r
        }else if(op[1].checked){
            var r = subtracao(parseFloat(n1), parseFloat(n2))
            document.getElementById('resultado').innerText = r
        }else if(op[2].checked){
            var r = multiplicacao(parseFloat(n1), parseFloat(n2))
            document.getElementById('resultado').innerText = r
        }else if(op[3].checked){
            var r = divisao(parseFloat(n1), parseFloat(n2))
            if(r != null){
                document.getElementById('resultado').innerText = r
            }else{
                alert('ERRO: DivisÃ£o por Zero!')
            }

        }


        
        else{
            alert('Selecione uma OperaÃ§Ã£o!')
        }
    }
}