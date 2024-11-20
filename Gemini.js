// npm install @google/generative-ai
const { GoogleGenerativeAI } = require("@google/generative-ai");
// npm install readline-sync
const rl = require('readline-sync');

// Substitua "SUA_CHAVE_API" pela sua chave real da API
const genAI = new GoogleGenerativeAI("SUA_CHAVE_API");

// Função para enviar a pergunta à API
async function perguntar(prompt) {
    try {
        console.log("\nEnviando pergunta para a API...\n");

        // Obtém o modelo (você pode usar gemini-1.5-flash ou gemini-1.5-flash-8b)
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-8b" });

        // Envia o prompt para a API
        const result = await model.generateContent(prompt);

        // Exibe a resposta
        console.log("Resposta:\n");
        console.log(result.response.text());
        console.log("\n|-----------|\n");
    } catch (error) {
        console.error("Erro ao usar a API:", error.message);
    }
}

// Loop para permitir múltiplas perguntas
(async () => {
    console.clear();
    console.log("Bem-vindo ao assistente de perguntas!");
    console.log('Digite "sair" para encerrar o programa.\n');

    while (true) {
        const pergunta = rl.question("Sua pergunta: ");

        if (pergunta.toLowerCase() === "sair") {
            console.log("\nEncerrando o programa. Até a próxima!");
            break;
        }

        await perguntar(pergunta);
    }
})();
