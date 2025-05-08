// app/Datas/Datas.tsx
'use client'

import { Dispatch, SetStateAction } from "react";

// Defina o tipo DatasProps corretamente
interface DatasProps {
  onNext: () => void;
  setDataInicio: Dispatch<SetStateAction<string>>;
  setDataFim: Dispatch<SetStateAction<string>>;
}

export default function Datas({ onNext, setDataInicio, setDataFim }: DatasProps) {
  const handleChangeDataInicio = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataInicio(e.target.value);
  };

  const handleChangeDataFim = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataFim(e.target.value);
  };

  return (
    <div>
      <h2>Escolha as datas</h2>
      <label htmlFor="dataInicio">Data de Início:</label>
      <input
        type="date"
        id="dataInicio"
        onChange={handleChangeDataInicio}
      />

      <label htmlFor="dataFim">Data de Fim:</label>
      <input
        type="date"
        id="dataFim"
        onChange={handleChangeDataFim}
      />

      <button onClick={onNext}>Próxima Etapa</button>
    </div>
  );
}
