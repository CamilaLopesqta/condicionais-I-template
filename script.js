// condicionais
const booleano1 = true
const booleano2 = false
const booleano3 = true
//se colocar negação no booleano1 vai dar false
//if (booleano1){
    //alert("booleano1 é true")
//}else{
    //alert("booleano1 é false")
//}

if (booleano1 === booleano2){
    alert("booleanos 1 e 2 são iguais")
} else if (booleano2 === booleano3){
    alert ("booleanos 2 e 3 são iguais")
} else if (booleano1 === booleano3){
    alert ("booleanos 2 e 3 são iguais")
} else {
    alert("nenhum valor é igual ao outro")
}

let idade = 80
let autorizacao = true

//if (idade >= 18){
    //alert("pode votar")
//}else{
    //if (idade===16||idade===17&&autorizacao===true){
        //alert("pode votar com autorização dos pais")
    //}else{
    //alert("não pode votar")
//}
//}
if (idade >=18 && idade <70){
    alert("Pode votar")
}else if (idade === 16 || idade === 17){
    alert("Pode votar com autorização")
}else if (idade >=70){
    alert ("Pode votar mas não é obrigatório")
}else {
    alert("Não pode votar")
}
//para guardar na cabeça
let media = 20
if (media >= 5 && media < 10){
    console.log("Você foi aprovado")
}else if (media >= 3 && media < 10){
    console.log("Recuperação")
}else if (media < 3 && media < 10){
    console.log("Estudante reprovado")
}else{
    console.log("dado inválido")
}