function carregar(){
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = (`AGORA SÃO ${hora} HORAS E ${min} MINUTOS.`)

    if (hora >= 0 && hora < 12){
        img.src = 'manha.jpg'
        document.body.style.background = "#fffad2"
    } else if (hora >= 12 && hora < 18){
        img.src = 'tarde.jpg'
        document.body.style.background = "#aab1bc"
    } else{
        img.src = 'noite.jpg'
        document.body.style.background = "#044990"
    }
}