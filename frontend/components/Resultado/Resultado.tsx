'use client'

import styles from './page.module.scss'

interface ResultadoProps {
  destino: string
  dataInicio: string
  dataFim: string
  estilo: string
  orcamento: number
}

export default function Resultado({ destino, dataInicio, dataFim, estilo, orcamento }: ResultadoProps) {
  return (
    <main className={styles.resultado}>
      <h2>Resumo da sua viagem ✈️</h2>
      <ul>
        <li><strong>Destino:</strong> {destino}</li>
        <li><strong>Data de ida:</strong> {dataInicio}</li>
        <li><strong>Data de volta:</strong> {dataFim}</li>
        <li><strong>Estilo de viagem:</strong> {estilo}</li>
        <li><strong>Orçamento:</strong> R$ {orcamento.toLocaleString('pt-BR')}</li>
      </ul>
    </main>
  )
}
