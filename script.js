function ex1(){
    mudaCor('b1', '#add8e6')
    mudaCor('b2', '')
    mudaCor('b3', '')
    mudaCor('b4', '')
    mudaCor('b5', '')
    mudaCor('b6', '')
    mudaCor('b7', '')
    mudaCor('b8', '')

    let nome = document.getElementById('nome').value 
    let idade = document.getElementById('idade').value
    let sexo = document.getElementById('sexo').value

    let exibe1 = document.getElementById("resultado1")

    exibe1.innerHTML += `Nome: ${nome}<br>Idade: ${idade} <br>Sexo: ${sexo}`
}

function ex2(){
    mudaCor('b1', '')
    mudaCor('b2', '#add8e6')
    mudaCor('b3', '')
    mudaCor('b4', '')
    mudaCor('b5', '')
    mudaCor('b6', '')
    mudaCor('b7', '')
    mudaCor('b8', '')

    let vel = document.getElementById('velocidade').value
    
    let exibe2 = document.getElementById("resultado2")

    ms = vel/3.6

    exibe2.innerHTML+= `${vel}km/h em m/s é ${ms.toFixed(2)}`    
}

function ex3(vet1, vet2){
    mudaCor('b1', '')
    mudaCor('b2', '')
    mudaCor('b3', '#add8e6')
    mudaCor('b4', '')
    mudaCor('b5', '')
    mudaCor('b6', '')
    mudaCor('b7', '')
    mudaCor('b8', '')

    let v1 = document.getElementById('vetor1').value
    let v2 = document.getElementById('vetor2').value
    let exibe3 = document.getElementById("resultado3")

    v3 = v1.concat(v2)

    exibe3.innerHTML += `${v3}`
}

function ex4(vetNro){
    mudaCor('b1', '')
    mudaCor('b2', '')
    mudaCor('b3', '')
    mudaCor('b4', '#add8e6')
    mudaCor('b5', '')
    mudaCor('b6', '')
    mudaCor('b7', '')
    mudaCor('b8', '')

    let v4 = document.getElementById('vetooor').value
    let exibe4 = document.getElementById("resultado4")
    let posMaior = 0;
    let posMenor = 0;
    let maior = 0;
    let menor = 0;

    for (let i = 0; i < v4.length; i++){
        if (v4[i] > maior){
            maior = v4[i];
            posMaior = i;
        }
    }
    for (let i = 1; i < v4.length; i++){
        if (v4[i] < menor){
            menor = v4[i];
            posMenor = i;
        }
    }
    exibe4.innerHTML += `O menor valor do vetor é: ${menor}, na posição ${posMenor}<br>
                         O maior valor do vetor é: ${maior}, na posição ${posMaior}`
}

var Disciplinas = [
    {
        nome: "Algoritmos e Lógica de Programação",
        semestre: 1,
        carga_horaria: [60,60,120] /*teórica, prática e total */
    },
    {
        nome: "Fundamentos de Matemática",
        semestre: 1,
        carga_horaria: [90,0,90] /*teórica, prática e total */
    },
    {
        nome: "Arquitetura e Organização de Computadores",
        semestre: 1,
        carga_horaria: [30,15,45] /*teórica, prática e total */
    },
    {
        nome: "Fundamentos de WEB Design",
        semestre: 1,
        carga_horaria: [0,30,30] /*teórica, prática e total */
    },
    {
        nome: "Estrutura de Dados",
        semestre: 2,
        carga_horaria: [30,60,90] /*teórica, prática e total */
    },
    {
        nome: "Modelagem de Banco de Dados",
        semestre: 2,
        carga_horaria: [30,0,30] /*teórica, prática e total */
    },
    {
        nome: "Lógica e Computação",
        semestre: 2,
        carga_horaria: [15,30,45] /*teórica, prática e total */
    },
    {
        nome: "Linguagem de Script para WEB",
        semestre: 2,
        carga_horaria: [0,30,30] /*teórica, prática e total */
    },
    {
        nome: "Sistemas Operacionais",
        semestre: 2,
        carga_horaria: [45,15,60] /*teórica, prática e total */
    }]


function ex5(vetorObjetos){

    mudaCor('b1', '')
    mudaCor('b2', '')
    mudaCor('b3', '')
    mudaCor('b4', '')
    mudaCor('b5', '#add8e6')
    mudaCor('b6', '')
    mudaCor('b7', '')
    mudaCor('b8', '')

    let ordena = vetorObjetos.sort((a,b)=>{
        return a.nome.localeCompare(b.nome); //sintaxe para ordenar por ordem alfabética um array de objetos
    });

    let sorted = ordena.sort((a,b)=>{
        return a.semestre - b.semestre; //para ordenar do maior para o menor, é só inverter, ficando b.semestre - a.semestre
    });

    let exibe5 = document.getElementById("resultado5");

    exibe5.innerHTML += `<table border="1" align="center" width="1000" height="50">
                            <tr align="center">
                            <td width = "400">Disciplina</td>
                            <td>Semestre</td>
                            <td width="400">Carga Horária</td>
                            </tr></table>`
                            for(let i = 0; i < sorted.length; i++){
                            exibe5.innerHTML += 
                            `<table border="1" align="center" width="1000" height="50">
                            <tr align="center">
                            <td width="400">${sorted[i].nome}</td>
                            <td>${sorted[i].semestre}</td>
                            <td width="400">${sorted[i].carga_horaria}</td>
                            </tr>
                            </table>`
                            }
    
}

function ex6(vetorObjetos){
    mudaCor('b1', '')
    mudaCor('b2', '')
    mudaCor('b3', '')
    mudaCor('b4', '')
    mudaCor('b5', '')
    mudaCor('b6', '#add8e6')
    mudaCor('b7', '')
    mudaCor('b8', '')

    function maiorCarga(vetorObjetos){
        let maior = 0;
        let indice = 0;

        for (let i=0; i<vetorObjetos.length; i++){
            if (vetorObjetos[i].semestre == 1){
                if (vetorObjetos[i].carga_horaria[2] > maior){
                    maior = vetorObjetos[i].carga_horaria[2];
                    indice = i;
                }
            }
        }
        return indice;
    }

    function maiorCarga2(vetorObjetos){
        let maior2 = 0;
        let indice2 = 0;

        for (let i=0; i<vetorObjetos.length; i++){
            if (vetorObjetos[i].semestre == 2){
                if (vetorObjetos[i].carga_horaria[2] > maior2){
                    maior2 = vetorObjetos[i].carga_horaria[2]
                    indice2 = i;
                }
            }
        }
        return indice2;
    }

    let maior = maiorCarga(vetorObjetos);
    let maior2 = maiorCarga2(vetorObjetos);

    let exibe6 = document.getElementById("resultado6");

    exibe6.innerHTML += `A disciplina do primeiro período com maior carga horária é ${vetorObjetos[maior].nome} com carga horária de ${vetorObjetos[maior].carga_horaria[2]} horas.
                         <br>A disciplina do segundo período com maior carga horária é ${vetorObjetos[maior2].nome} com carga horária de ${vetorObjetos[maior2].carga_horaria[2]} horas.`
}


function ex7(vetorObjetos){
    mudaCor('b1', '')
    mudaCor('b2', '')
    mudaCor('b3', '')
    mudaCor('b4', '')
    mudaCor('b5', '')
    mudaCor('b6', '')
    mudaCor('b7', '#add8e6')
    mudaCor('b8', '')

    let vetorPratica = [];
    
    for (let i = 0; i <vetorObjetos.length; i++){
        if (vetorObjetos[i].carga_horaria[0] == 0){
            vetorPratica.push(vetorObjetos[i])
        }
    }

    let exibe7 = document.getElementById("resultado7");
    exibe7.innerHTML = `Disciplinas que contém apenas prática: `
    for (let i = 0; i<vetorPratica.length; i++){
        exibe7.innerHTML += `<br>${vetorPratica[i].nome} com carga prática de ${vetorPratica[i].carga_horaria[2]} horas`
    }
}

function ex8(vetorObjetos){
    mudaCor('b1', '')
    mudaCor('b2', '')
    mudaCor('b3', '')
    mudaCor('b4', '')
    mudaCor('b5', '')
    mudaCor('b6', '')
    mudaCor('b7', '')
    mudaCor('b8', '#add8e6')

    let vetor1 = [];
    let vetor2 = [];
    let somaTeorica1 = 0;
    let somaPratica1 = 0;
    let somaTotal1 = 0;
    let somaTeorica2 = 0;
    let somaPratica2 = 0;
    let somaTotal2 = 0;
    let cont1 = 0;
    let cont2 = 0;

    for(let i = 0; i < vetorObjetos.length; i++){
        if (vetorObjetos[i].semestre == 1){
        vetor1.push(vetorObjetos[i]);
        cont1++;
        }
        if (vetorObjetos[i].semestre == 2){
        vetor2.push(vetorObjetos[i]);
        cont2++;
        }
    }

    for (let i = 0; i < vetor1.length; i++){
        somaTeorica1 = somaTeorica1 + vetor1[i].carga_horaria[0];
        somaPratica1 = somaPratica1 + vetor1[i].carga_horaria[1];
        somaTotal1 = somaTotal1 + vetor1[i].carga_horaria[0,1,2];
    }

    for (let i = 0; i < vetor2.length; i++){
        somaTeorica2 = somaTeorica2 + vetor2[i].carga_horaria[0];
        somaPratica2 = somaPratica2 + vetor2[i].carga_horaria[1];
        somaTotal2 = somaTotal2 + vetor2[i].carga_horaria[0,1,2];
    }

    let exibe8 = document.getElementById("resultado8");

    exibe8.innerHTML = `<table border="1" align="center" width="1000" height="50">
                                <tr align="center">
                                <td width="280">Semestre</td>
                                <td width="280">Quantidade de Disciplinas</td>
                                <td width="280">Carga Horária Teórica</td>
                                <td width="280">Carga Horária Prática</td>
                                <td width="280">Carga Horária Total</td>
                                </tr></table>`

    exibe8.innerHTML += `<table border="1" align="center" width="1000" height="50">
                                <tr align="center">
                                    <td width="295"> 1 </td>
                                    <td width="314">${cont1}</td>
                                    <td width="280">${somaTeorica1}</td>
                                    <td width="280">${somaPratica1}</td>
                                    <td width="280">${somaTotal1}</td>
                                </tr>
                                <tr align="center">
                                    <td width="280"> 2 </td>
                                    <td width="280">${cont2}</td>
                                    <td width="280">${somaTeorica2}</td>
                                    <td width="280">${somaPratica2}</td>
                                    <td width="280">${somaTotal2}</td>
                                </tr></table>`                
}

function mudaCor(elemento, cor) {
    document.getElementById(elemento).style.backgroundColor = cor;
}
