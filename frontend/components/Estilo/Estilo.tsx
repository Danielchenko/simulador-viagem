// app/Estilo/Estilo.tsx
'use client'

import { Dispatch, SetStateAction } from "react";

// Definir o tipo EstiloProps
interface EstiloProps {
  onNext: () => void;
  setEstilo: Dispatch<SetStateAction<string>>;
}

export default function Estilo({ onNext, setEstilo }: EstiloProps) {
  const handleChangeEstilo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEstilo(e.target.value);
  };

  return (
    <div>
      <h2>Escolha o estilo</h2>
      <label>
        Estilo 1
        <input
          type="radio"
          name="estilo"
          value="Estilo 1"
          onChange={handleChangeEstilo}
        />
      </label>
      <label>
        Estilo 2
        <input
          type="radio"
          name="estilo"
          value="Estilo 2"
          onChange={handleChangeEstilo}
        />
      </label>

      <button onClick={onNext}>Próxima Etapa</button>
    </div>
  );
}
