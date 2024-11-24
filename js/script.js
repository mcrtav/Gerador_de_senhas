//comandos
// alt + shift + f  = formatar tabulação

//============================================================
//formulario
let form = document.querySelector('#formRange');
//range tamanho
let p_tamanho_range = document.querySelector('#p_tamanho_range');
let ipt_range_tamanho = document.querySelector("#ipt_range_tamanho")
//range quantidade
let p_quantidade_range = document.querySelector("#p_quantidade_range")
let ipt_range_quantidade = document.querySelector('#ipt_range_quantidade');
//Checkbox de opções
let chk_binario = document.querySelector('#binario');
let chk_numeros = document.querySelector('#numeros');
let chk_maiusculo = document.querySelector('#maiusculo');
let chk_minusculo = document.querySelector('#minusculo');
let chk_especiais = document.querySelector('#especiais');
let caixa_senha_gerada = document.querySelector('#senha_gerada');
let checkboxes = document.querySelectorAll('input[type="checkbox"]');
let btn_reset = document.querySelector('#reset');
let btn_submit = document.querySelector('#submit');
let btn_copiar = document.querySelector('#copiar');

// Hora Local atualizada a cada 1 segundo
setInterval(myTimer, 100);
function myTimer() {
    const d = new Date();
    document.querySelector("#hora").innerHTML = d.toLocaleTimeString();
}

// Data Local atualizada a cada 1 segundo
setInterval(mydate, 100);
function mydate() {
    const c = new Date();
    document.querySelector("#data").innerHTML = c.toLocaleDateString();
}

// Atualizar o quantidade do range no paragrafo quantidade
// (function () {
//     ipt_range_quantidade.addEventListener('input', () => {
//         p_quantidade_range.innerHTML = ipt_range_quantidade.value;
//     });
// })();
// Atualizar o quantidade do range no parágrafo quantidade
(function () {
    ipt_range_quantidade.addEventListener('input', () => {
        p_quantidade_range.textContent = ipt_range_quantidade.value;
    });
})();
//=============================//
// Evento e Limtar e Gerar Sena//
//=============================//
(function () {
    // Valores iniciais padrão
    let valorInicialTan = "8";
    let valorInicialQua = "1";

    // Função para inicializar
    function inicializar() {
        ipt_range_tamanho.value = valorInicialTan;
        p_tamanho_range.textContent = valorInicialTan;
        ipt_range_quantidade.value = valorInicialQua;
        p_quantidade_range.textContent = valorInicialQua;
        caixa_senha_gerada.value = "";
        checkboxes.forEach((ch) => {
            ch.checked = false;
        });
    }

    // Atualizar o tamanho do range no parágrafo tamanho
    ipt_range_tamanho.addEventListener('input', () => {
        p_tamanho_range.textContent = ipt_range_tamanho.value;
    });

    // Evento reset para sincronizar o texto com o slider
    form.addEventListener('reset', (event) => {
        event.preventDefault();
        inicializar();
    });

    // Função para gerar senha única
    function gerarSenha(tamanho, opcoes) {
        const caracteres = {
            binario: "111111111111111000000000000000",
            numeros: "012345678901234567890123456789",
            maiusculo: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            minusculo: "abcdefghijklmnopqrstuvwxyz",
            especiais: "!@#$%¨&*()_-+=`{[^~}]|\<,>.:;?/",
        };

        let conjunto = "";
        if (opcoes.binario) conjunto += caracteres.binario;
        if (opcoes.numeros) conjunto += caracteres.numeros;
        if (opcoes.maiusculo) conjunto += caracteres.maiusculo;
        if (opcoes.minusculo) conjunto += caracteres.minusculo;
        if (opcoes.especiais) conjunto += caracteres.especiais;

        if (!conjunto) return "Selecione ao menos uma opção de caracteres.";

        let senha = "";
        for (let i = 0; i < tamanho; i++) {
            senha += conjunto[Math.floor(Math.random() * conjunto.length)];
        }
        return senha;
    }

    // Evento de clique no botão Gerar
    btn_submit.addEventListener('click', (event) => {
        event.preventDefault();

        let tamanho = parseInt(ipt_range_tamanho.value);
        let quantidade = parseInt(ipt_range_quantidade.value);
        let opcoes = {
            binario: chk_binario.checked,
            numeros: chk_numeros.checked,
            maiusculo: chk_maiusculo.checked,
            minusculo: chk_minusculo.checked,
            especiais: chk_especiais.checked,
        };

        // Validar seleção de ao menos uma opção
        if (!opcoes.binario && !opcoes.numeros && !opcoes.maiusculo && !opcoes.minusculo && !opcoes.especiais) {
            alert("Selecione ao menos uma opção...!");
            caixa_senha_gerada.value = '';
           // caixa_senha_gerada.value = "Erro: Selecione ao menos uma opção!";
            return;
        }

        // Gerar as senhas
        let senhasGeradas = [];
        for (let i = 0; i < quantidade; i++) {
            senhasGeradas.push(gerarSenha(tamanho, opcoes));
        }

        // Atualizar o conteúdo da área de texto
        caixa_senha_gerada.value = senhasGeradas.join("\n");
    });

    // Inicializar ao carregar a página
    inicializar();
})();

// Selecionar o botão de copiar e o textarea
let textarea_senha = document.querySelector('#senha_gerada');

// Evento de clique no botão "Copiar"
btn_copiar.addEventListener('click', () => {
    let texto = textarea_senha.value; // Pegar o texto da textarea
    if (texto.trim() === "") {
        alert("Nada para copiar! Gere uma senha primeiro.");
        return;
    }

    // Usar a API Clipboard para copiar o texto
    navigator.clipboard.writeText(texto)
        .then(() => {
            alert("Senha copiada para a área de transferência!");
        })
        .catch((err) => {
            console.error("Erro ao copiar texto: ", err);
        });
});

// console.log(ipt_range_quantidade, p_quantidade_range, btn_submit);

// console.log(ipt_range_tamanho, p_tamanho_range, btn_reset);




///////                          ///////
//                                    //
// acima Revisado - OK - 21-11-2024   //
//====================================//
//====================================//
// abaixo Revisar -?? ERROR ???       //
//                                    //
///////                          ///////






























// // Criar a Lista de Senhsa Geradas
// bnt02.addEventListener("click", () => {
//     let checkboxes = [...document.querySelectorAll('input[type="checkbox"]:checked')];
//     for (v in checkboxes) {
//         let asasa = checkboxes[v].value
//         const pp = document.createElement("p")
//         const div = document.querySelector("#div1")
//         pp.setAttribute("class", "p_teste")
//         opc = asasa
//         pp.innerHTML += opc
//         div.appendChild(pp)
//     }
// })




//Verfica se algum chekbox esta ticado

// btn_Gerar.addEventListener('click', () => {
//     let todosDesmarcados = true; // Assume que todos estão desmarcados

//     checkboxes.forEach(checkbox => {
//         if (checkbox.checked) { // Se algum checkbox estiver marcado
//             todosDesmarcados = false; // Defina como falso
//         }
//     });

//     if (todosDesmarcados) {
//         h1_resultado.innerHTML = "Marque pelo menos uma opção !"
//         console.log('É Preciso de pelo menos uma opção marcada, para a senha ser GERADA !')
//     } else {

//         senhanumeros()
//         console.log('GEROU !')
//     }
// }

// );
// crypto.randombytes()



// /// ipt_tamanhorange ///
// function senhanumeros() {
//     let condition = ""
//     condition = ipt_tamanhorange.value
//     if (chk_numeros.checked) {
//         let caracter = "";
//         while (condition > 0) {
//             const ascii = Math.floor(Math.random() * 10) + 48; // 97 é o código ASCII da letra 'a'
//             caracter += String.fromCharCode(ascii);
//             condition -= 1;
//             h1_resultado.textContent = caracter
//         }
//     }
// }


/// ipt_tamanhosenha///
// function senhanumeros(){
// let condition = ""
// condition = ipt_tamanhosenha.value
// if (chk_numeros.checked) {
//     let caracter = "";
//     while (condition > 0) {
//         const ascii = Math.floor(Math.random() * 10) + 48; // 97 é o código ASCII da letra 'a'
//         caracter += String.fromCharCode(ascii);
//         condition -= 1;
//         h1_resultado.textContent = caracter
//     }
// }
// }







//Numeros 0 - 9

// function gerarnumero() {
//     const ascii = Math.floor(Math.random() * 10)
//     return ascii.toString()
// }
// //console.log(gerarnumero())

// //Letra Minuscula
// function letraminuscula() {
//     const ascii = Math.floor(Math.random() * 26) + 97; // 97 é o código ASCII da letra 'a'
//     return String.fromCharCode(ascii);
// }
// //console.log(letraminuscula());


// //Letra Maiuscula de  ASCII 33 - 126
// function letramaiuscula() {
//     const ascii = Math.floor(Math.random() * 26) + 65; // 97 é o código ASCII da letra 'a'
//     return String.fromCharCode(ascii);
// }
// //console.log(letramaiuscula());

// //==================================================


// function Caracter01() {
//     const ascii = Math.floor(Math.random() * 15) + 33; // 97 é o código ASCII da letra 'a'
//     return String.fromCharCode(ascii);
// }
// //console.log(Caracter01());




// //==================================================
// function Caracter02() {
//     const ascii = Math.floor(Math.random() * 7) + 58; // 97 é o código ASCII da letra 'a'
//     return String.fromCharCode(ascii);
// }
// //console.log(Caracter02());



// function Caracter03() {
//     const ascii = Math.floor(Math.random() * 6) + 91; // 97 é o código ASCII da letra 'a'
//     return String.fromCharCode(ascii);
// }

// //console.log(Caracter03());


// function Caracter04() {
//     const ascii = Math.floor(Math.random() * 4) + 123; // 97 é o código ASCII da letra 'a'
//     return String.fromCharCode(ascii);
// }

// //console.log(Caracter04());



// Gerar geral de  33 a 126 /// 127-33 = 94
// function Caracter05() {
//     const ascii = Math.floor(Math.random() * 94) + 33; // 97 é o código ASCII da letra 'a'
//     return String.fromCharCode(ascii);
// }

// console.log(`Esse é com todos: "${Caracter05()}"`);


// GERADOR DE SENHA - CORRETO - OTIMO VOM TUDO
// function senha(condition) {
//     let caracter = "";
//     while (condition > 0) {
//         const ascii = Math.floor(Math.random() * 94) + 33; // 97 é o código ASCII da letra 'a'
//         caracter += String.fromCharCode(ascii);
//         condition -= 1;
//     }
//     return caracter;
// }
// const criadasenha = senha(100)
// console.log(criadasenha)
// document.querySelector("#senha_gerada").value = criadasenha

// // GERADOR DE SENHA - SOMENTE NUMEROE DE 0 - 9 - OTIMO
// // function senhanumeros(condition) {
// //     let caracter = "";
// //     while (condition > 0) {
// //         const ascii = Math.floor(Math.random() * 10) + 48; // 97 é o código ASCII da letra 'a'
// //         caracter += String.fromCharCode(ascii);
// //         condition -= 1;
// //     }
// //     return caracter;
// // }
// //console.log(senhanumeros(6))







// // chk_numeros.addEventListener('change', () => {
// //     if (chk_numeros.checked) {
// //         console.log("Está ticado");
// //     } else {
// //         console.log("Não está ticado");
// //     }
// // });

// // chk_maiusculo.addEventListener('change', () => {
// //     if (chk_maiusculo.checked) {
// //         console.log("Está ticado");
// //     } else {
// //         console.log("Não está ticado");
// //     }
// // });



// // chk_minusculo.addEventListener('change', () => {
// //     if (chk_minusculo.checked) {
// //         console.log("Está ticado");
// //     } else {
// //         console.log("Não está ticado");
// //     }
// // });


// // chk_c_especiais.addEventListener('change', () => {
// //     if (chk_c_especiais.checked) {
// //         console.log("Está ticado");
// //     } else {
// //         console.log("Não está ticado");
// //     }
// // });
// //  function senhanumeros(condition) {
// //     let caracter = "";
// //     while (condition > 0) {
// //         const ascii = Math.floor(Math.random() * 10) + 48; // 97 é o código ASCII da letra 'a'
// //         caracter += String.fromCharCode(ascii);
// //         condition -= 1;
// //     }
// //    return caracter;
// // }
// //  console.log(senhanumeros(6))



// // RESERVA
// // function senhanumeros(condition) {
// //     let caracter = "";
// //     while (condition > 0) {
// //         const ascii = Math.floor(Math.random() * 10) + 48; // 97 é o código ASCII da letra 'a'
// //         caracter += String.fromCharCode(ascii);
// //         condition -= 1;
// //         return caracter
// //     }
// // }
// // console.log(senhanumeros(100))