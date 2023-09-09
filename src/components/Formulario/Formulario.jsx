import { useState } from "react";

const Formulario = () => {
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);
    const [imc, setIMC] = useState(0);
    const [classificacao, setClassificacao] = useState("");

    const calcularIMC = () => {
        if (altura > 0 && peso > 0) {
            const imcCalculado = peso / (altura * altura);
            setIMC(imcCalculado);

            if (imcCalculado < 18.5) {
                setClassificacao("Abaixo do peso");
            } else if (imcCalculado >= 18.5 && imcCalculado < 24.9) {
                setClassificacao("Peso normal");
            } else if (imcCalculado >= 25 && imcCalculado < 29.9) {
                setClassificacao("Sobrepeso");
            } else if (imcCalculado >= 30 && imcCalculado < 34.9) {
                setClassificacao("Obesidade Grau I");
            } else if (imcCalculado >= 35 && imcCalculado < 39.9) {
                setClassificacao("Obesidade Grau II");
            } else {
                setClassificacao("Obesidade Grau III");
            }
        }
    };

    return (
        <form>
            <input
                type="number"
                placeholder="Altura (metros)"
                onChange={(evento) => setAltura(parseFloat(evento.target.value))}
            />
            <input
                type="number"
                placeholder="Peso (kg)"
                onChange={(evento) => setPeso(parseFloat(evento.target.value))}
            />
            <button type="button" onClick={calcularIMC}>
                Calcular IMC
            </button>
            <p>IMC: {imc.toFixed(2)}</p>
            <p>Classificação: {classificacao}</p>
        </form>
    );
};

export default Formulario;
