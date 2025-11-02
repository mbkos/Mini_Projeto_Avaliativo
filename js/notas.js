
let colorCont = 0;


function inserir() {
    var nota = document.getElementById("nota_Inserir").value
    var urgente = document.getElementById("check_urgente").checked
    var nao_urgente = document.getElementById("check_nao_urgente").checked


    if(urgente == true && nao_urgente == true){
        alert("Selecione apenas uma opção: Urgente ou Não Urgente.")
    }else if(nao_urgente == true) {
        var novo
        novo = document.createElement("p")
        novo.id = "nota_nao_urgente"
        novo.innerHTML = `${nota}`
        if(colorCont == 0){
            novo.style.color = "blue"
        }else if(colorCont == 1){
            novo.style.color = "green"
        }else{
            novo.style.color = "purple"
        }
        var div = document.getElementById("nao_urgentes")
        div.appendChild(novo)
        colorCont = (colorCont + 1) % 3;

    }else if(urgente == true){
        var novo 
        novo = document.createElement("p")
        novo.id = "nota_urgente"
        novo.innerHTML = `${nota}`
        if(colorCont == 0){
            novo.style.color = "blue"
        }else if(colorCont == 1){
            novo.style.color = "green"
        }else{
            novo.style.color = "purple"
        }
        var div = document.getElementById("urgentes")
        div.appendChild(novo)
        colorCont = (colorCont + 1) % 3;

    }else if (urgente== false || nao_urgente == false) {
        alert("Selecione uma opção: Urgente ou Não Urgente.")
    }
    
}


function excluir_nota_NU(){
    var p = document.getElementById("nota_nao_urgente")
    if(p){
        p.remove()
    }else{
        alert("Não há texto para remover!")
    }
}


function excluir_nota_U(){
    var p = document.getElementById("nota_urgente")
    if(p){
        p.remove()
    }else{
        alert("Não há texto para remover!")
    }
}


function excluir_todas_NU(){
    var div = document.querySelectorAll("#nota_nao_urgente")
    if(div.length == 0){
        alert("Não há notas para remover!")
    }else{
        div.forEach(function(n){
            n.remove()
        })
    }
}


function excluir_todas_U(){
    var div = document.querySelectorAll("#nota_urgente")
    if(div.length == 0){
        alert("Não há notas para remover!")
    }else{
        div.forEach(function(n){
            n.remove()
        })
    }
}
