const form = document.getElementById("quizForm");

const resultado = document.getElementById("resultado");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const nome =
    document.getElementById("nome").value;

    const pele =
    document.getElementById("pele").value;

    const aroma =
    document.getElementById("aroma").value;

    const momento =
    document.querySelector(
        'input[name="momento"]:checked'
    );

    // VALIDAÇÃO

    if(
        nome === "" ||
        pele === "" ||
        aroma === "" ||
        !momento
    ){

        resultado.style.display = "block";

        resultado.innerHTML = `
            ⚠️ Preencha todas as perguntas
            para descobrir seu sabonete ideal.
        `;

        return;
    }

    let sabonete = "";

    // RESULTADO

    if(pele === "oleosa"){

        sabonete = "Argila Verde";
    }

    else if(momento.value === "autoestima"){

        sabonete = "Alta Estima";
    }

    else if(aroma === "herbal"){

        sabonete = "Sete Ervas";
    }

    else{

        sabonete = "Camomila & Alfazema";
    }

    resultado.style.display = "block";

    resultado.innerHTML = `
        ✨ ${nome}, o sabonete ideal para você é:
        <strong>${sabonete}</strong>!
        <br><br>
        Cada produto da Saboaria das Marias
        é desenvolvido para transformar seu
        autocuidado em um momento especial.
    `;
});