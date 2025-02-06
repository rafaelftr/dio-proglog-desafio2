const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getUserInput(message, callback) {
    rl.question(message, (input) => {
        callback(input);
    });
}

function getHeroNivel(wins) {
    switch (true) {
        case (wins <= 10):
            return "Ferro";
        case (wins <= 20):
            return "Bronze";
        case (wins <= 50):
            return "Prata";
        case (wins <= 80):
            return "Ouro";
        case (wins <= 90):
            return "Diamante";
        case (wins <= 100):
            return "Lendário";
        default:
            return "Imortal";
    }
}

getUserInput("Digite o nome do herói: ", (heroName) => {
    getUserInput("Digite o número de vitórias: ", (winAmmount) => {
        const heroWins = parseFloat(winAmmount);

        if (isNaN(heroWins)) {
            console.error("Digite um número válido.");
            rl.close();
        } else {
            getUserInput("Digite o número de derrotas: ", (defeatAmmount) => {
                const heroDefeats = parseFloat(defeatAmmount);

                if (isNaN(heroDefeats)) {
                    console.error("Digite um número válido.");
                    rl.close();
                } else {
            const heroFinalWins = heroWins - heroDefeats;
            const heroNivel = getHeroNivel(heroFinalWins)
            console.log(`O Herói de nome **${heroName}** tem um saldo de vitórias de **${heroTotalWins}** e está no nível de **${heroNivel}**`);
            rl.close();
        }
    });
}});
});
