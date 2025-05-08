// app/Destino/Destino.tsx
'use client'

import { useRef, useState } from "react";
import styles from './page.module.scss'; 
interface DestinoProps {
  onNext: () => void;
  setDestino: React.Dispatch<React.SetStateAction<string>>;
}

export default function Destino({ onNext, setDestino }: DestinoProps) {
  const [destino, setLocalDestino] = useState("");
  const [sugestoes, setSugestoes] = useState<string[]>([]);

  const cidades = ['Rio', 'Paris', 'Londres', 'Nova York', 'Tóquio'];

  const containerRef = useRef<HTMLDivElement>(null);
  const listaRef = useRef<HTMLUListElement>(null);



  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value;
    setLocalDestino(valor);

    if (valor.length > 1) {
      const filtradas = cidades.filter((cidade) =>
        cidade.toLowerCase().includes(valor.toLowerCase())
      );
      setSugestoes(filtradas);
    } else {
      setSugestoes([]);
    }
  };

  const handleSelecionarCidade = (cidade: string) => {
    setLocalDestino(cidade);
    setSugestoes([]);
    setDestino(cidade); 
    onNext();
  };

 
  return (
    <main>
      <div className={styles.container} ref={containerRef}>
        <h2>Para onde você quer viajar?</h2>
        <input
          type="text"
          value={destino}
          onChange={handleChange}
          placeholder="Digite um destino"
        />
      </div>

      {sugestoes.length > 0 && (
        <ul className={styles.lista} ref={listaRef}>
          {sugestoes.map((cidade) => (
            <li key={cidade} onClick={() => handleSelecionarCidade(cidade)}>
              {cidade}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
