// js/formulario.js

const formulario = document.getElementById("quizForm");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const aroma = document.getElementById("aroma").value;
    const pele = document.getElementById("pele").value;

    const banho = document.querySelector('input[name="banho"]:checked');

    if(nome === "" || email === "" || aroma === "" || pele === "" || !banho){

        resultado.style.display = "block";

        resultado.innerHTML = `
            ❌ Preencha todos os campos para descobrir seu sabonete ideal.
        `;

        resultado.style.background = "#ffe5e5";

        return;
    }

    let sabonete = "";

    // Lógica do quiz

    if(aroma === "floral"){
        sabonete = "✨ Oxum — delicado, floral e acolhedor.";
    }

    else if(aroma === "herbal"){
        sabonete = "🌿 Sete Ervas — refrescante e terapêutico.";
    }

    else if(aroma === "suave"){
        sabonete = "🌙 Yemanjá — calmante e leve.";
    }

    else if(aroma === "intenso"){
        sabonete = "🔥 Xangô — marcante e energizante.";
    }

    if(pele === "oleosa"){
        sabonete += "<br><br>💚 Sua pele também combina com a Argila Verde.";
    }

    resultado.style.display = "block";

    resultado.style.background = "#edf3ea";

    resultado.innerHTML = `
        <h3>Resultado para ${nome}</h3>

        <p>
            O sabonete ideal para você é:
        </p>

        <strong>${sabonete}</strong>

        <br><br>

        ✨ Obrigada por participar do quiz da Saboaria das Marias.
    `;
});