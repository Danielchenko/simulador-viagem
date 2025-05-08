// app/Orcamento/Orcamento.tsx
'use client'

import { Dispatch, SetStateAction } from "react";

// Definir o tipo OrcamentoProps
interface OrcamentoProps {
  onNext: () => void;
  setOrcamento: Dispatch<SetStateAction<number>>;
}

export default function Orcamento({ onNext, setOrcamento }: OrcamentoProps) {
  const handleChangeOrcamento = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOrcamento(Number(e.target.value));
  };

  return (
    <div>
      <h2>Qual o seu orçamento?</h2>
      <input
        type="number"
        placeholder="Digite o orçamento"
        onChange={handleChangeOrcamento}
      />

      <button onClick={onNext}>Finalizar</button>
    </div>
  );
}
