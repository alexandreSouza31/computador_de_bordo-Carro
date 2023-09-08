const carro = {
    ligado: false,
    velocidade: 0,
    ligar: function () {
        if (this.ligado === true) {
            console.log("Este carro já está ligado.");
        } else {
            this.ligado = true;
            console.log(`Carro ligado, velocidade ${this.velocidade}.`);
        }
    },
    acelerar: function () {
        if (this.ligado === true) {
            this.velocidade += 10
            console.log(`Carro ligado, velocidade ${this.velocidade}.`);
        } else {
            this.ligado === true;
            //console.log("Não é possível acelerar um carro desligado.");
            this.startStop();
        }
    },
    desacelerar: function () {
        if (this.ligado === true) {

            if (this.velocidade > 0) {
                this.velocidade -= 10;
                console.log(`Carro ligado, velocidade ${this.velocidade}.`);
            } else {
                //console.log(`Carro ligado, a velocidade ja é ${this.velocidade}.`);
                this.startStop();
            }

        } else {
            console.log("Não é possível desacelerar um carro desligado.")
        }

    },

    desligar: function () {
        if (this.ligado === true) {
            if (this.velocidade === 0) {
                this.ligado = false;
                this.velocidade = 0;
                console.log("Carro desligado. Velocidade: 0.");
            } else {
                console.log("O carro está em movimento. Pare o carro antes de desligar.");
            }
        } else {
            console.log("Este carro já está desligado.");
        }
    },

    startStop: function () {
        if (!this.ligado && this.acelerar) {
            this.ligado = true;
            console.log(`Carro ligado, velocidade ${this.velocidade}.`);
        } else if (this.ligado && this.desacelerar && this.velocidade === 0) {
            this.ligado = false;
            console.log("Carro desligado. Velocidade: 0.")
        }
    }
}

//renomeia e executa as funcoes que vem do objeto
const executarAcao = (acao) => {
    if (acao === "desligar") {
        carro.desligar();
    } else if (acao === "ligar") {
        carro.ligar();
    } else if (acao === "acelerar") {
        carro.acelerar();
    } else if (acao === "desacelerar") {
        carro.desacelerar();
    } else {
        console.log("Por favor, digite alguma ação para o carro.");
    }
    return acao;
}

//repete a acao conforme a quantidade
const repetirAcao = (acao, qtd = 1) => {
    if (qtd < 1) {
        qtd = 1;
    }
    for (let i = 0; i < qtd; i++) {
        executarAcao(acao);
    }

}

repetirAcao();
repetirAcao("desligar", 2);
repetirAcao("acelerar",2);
repetirAcao("ligar",2);

repetirAcao("acelerar",2);
repetirAcao("desacelerar");
repetirAcao("desligar");

repetirAcao("acelerar");
repetirAcao("desacelerar",3);
repetirAcao("desligar",2);
