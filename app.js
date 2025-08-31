let listasCafes=[];
let contador=1;
numero_cafe=cafeteras()
AsignarTexto("cuantas cafeteras tiene el momo");
console.log(numero_cafe);
function verificarIntento(){
    let intento=document.getElementById("intentos").value;
    console.log(intento);
    if (intento==numero_cafe){
        AsignarTexto(`felicidades adivinaste tiene ${numero_cafe} cafeteras`);
        alert(`lo hizo en ${contador} intentos`)
        document.getElementById('reiniciar').removeAttribute('disabled')
    }else{
        if (intento>numero_cafe){
            AsignarTexto("tiene menos")
            contador++
        }
        else{
            AsignarTexto("tiene mas")
            contador++
        }
    }
}
function cafeteras(){
    let cafe= Math.floor(Math.random()*10)+1;
    if (listasCafes.includes(cafe)){
        
        return cafeteras()

    }else{
        listasCafes.push(cafe);
        console.log(listasCafes)
    } return cafe 
}
function Limpiar(){
    document.querySelector('#intentos').value=''
    AsignarTexto("cuantas cafeteras tiene el momo")
}
function AsignarTexto(texto){
       let titulo=document.querySelector('p');
       titulo.innerHTML = texto
       return;
}
function suma(numero){
    let valor1=parseInt(prompt("ingrese un numero"));
    let valor2=parseInt(prompt("ingrese otro numero"));
    let resultado=valor1+valor2;
    numero=numero*2
    console.log(resultado);
    console.log(valor1);
    console.log(numero);
        console.log(valor2);
    alert(resultado);
}
function reiniciarJuego(){
    numero_cafe=cafeteras();
    console.log(numero_cafe);
    Limpiar();
    contador=1;
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
function calculadoraAltura(){
    let altura=parseFloat(prompt("ingrese su altura en M ejem: 1.90m"));
    let peso=parseFloat(prompt("ingrese su peso en kg:"));
    let indiceMasa=imc(altura,peso);
    if (indiceMasa>18 & indiceMasa<28){
        AsignarTexto("usted esta sano")
        alert(indiceMasa);
    }else{
        if (indiceMasa<18){
            AsignarTexto("tiene desnutricion");
        }else{
            AsignarTexto("tiene sobre peso")
        }
    }
}
function imc(altura,peso){
    let indice=(peso/(altura*altura))
    return indice

}
