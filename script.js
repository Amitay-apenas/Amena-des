function switchImage(){
    var imagem = document.getElementById("closedParch");
    var texto = document.getElementById("poema_texto")

    if (imagem.src.endsWith("parchment_closes_an_open.png")){
        imagem.src = "parchmentopen.png";
        texto.style.display = "block";
    }else{
        imagem.src = "parchment_closes_an_open.png";
        texto.style.display = "none";
    }

}

function nextPage(){
    var para1 = document.getElementById('para1');
    var para2 = document.getElementById('para2');

    if(para1.style.display = "block"){
        para1.style.display = "none"
        para2.style.display = "block"
    }else{
        para1.style.display = "block"
        para2.style.display = "none"
    }
}