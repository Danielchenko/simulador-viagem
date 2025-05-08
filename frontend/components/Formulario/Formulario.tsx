'use client'

import { useState } from "react";
import Destino from "../Destino/Destino";
import Datas from "../Datas/Datas";
import Estilo from "../Estilo/Estilo";
import Orcamento from "../Orcamento/Orcamento";
import Resultado from "../Resultado/Resultado"; 

export default function Formulario() {
  const [etapa, setEtapa] = useState(1);
  const [destino, setDestino] = useState("");
  const [dataInicio, setDataInicio] = useState("");
  const [dataFim, setDataFim] = useState("");
  const [estilo, setEstilo] = useState("");
  const [orcamento, setOrcamento] = useState(0);

  const proximaEtapa = () => setEtapa(etapa + 1);

  const mostrarResultado = () => setEtapa(5);

  return (
    <>
      {etapa === 1 && <Destino onNext={proximaEtapa} setDestino={setDestino} />}
      {etapa === 2 && <Datas onNext={proximaEtapa} setDataInicio={setDataInicio} setDataFim={setDataFim} />}
      {etapa === 3 && <Estilo onNext={proximaEtapa} setEstilo={setEstilo} />}
      {etapa === 4 && <Orcamento onNext={mostrarResultado} setOrcamento={setOrcamento} />}
      {etapa === 5 && (
        <Resultado
          destino={destino}
          dataInicio={dataInicio}
          dataFim={dataFim}
          estilo={estilo}
          orcamento={orcamento}
        />
      )}
    </>
  );
}
