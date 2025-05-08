'use client'

import Link from 'next/link'
import { useRef } from 'react'
import styles from './page.module.css'

export default function LandingPage() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)



  return (
    <div className={styles.landing}>
      <h1 ref={titleRef}>Descubra sua próxima jornada personalizada.</h1>
      <Link href="/simulador">
        <button ref={buttonRef}>Iniciar Simulação</button>
      </Link>
    </div>
  )
}
