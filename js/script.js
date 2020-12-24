document.getElementById('player').addEventListener("mouseover",sumarPuntos);

puntos = 0;
tiempo = 21;
necesarios = 21;
function sumarPuntos(){
    puntos++;
    document.getElementById("puntos").innerHTML = "Puntos: <b>" + puntos + "/" + necesarios + "</b>"
    randNum = Math.round(Math.random()*500);
    randNum2 = Math.round(Math.random()*500);
    document.getElementById("player").style.marginTop = randNum + "px";
    document.getElementById("player").style.marginLeft = randNum2 + "px";
    if (puntos == 21) {
        alert("Feliz Cumple Cami!! Lo lograste, ahora pasemos a la siguiente seccion.");
    }
}

function ned() {

}

function restarTiempo() {
    tiempo--;
    document.getElementById("tiempo").innerHTML = "&nbsp;&nbsp;&nbsp;Tiempo: " +tiempo;
    if (tiempo == 0) {
        alert("Felicitaciones!!!! Perdiste capita, igual como somos buenos te damos otra oportunidad.");
        tiempo = 0;
        puntos = 0;
    }
}

setInterval(restarTiempo,1000);