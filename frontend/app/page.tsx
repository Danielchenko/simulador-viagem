'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import styles from './page.module.css'

export default function LandingPage() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    )

    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.5 }
    )
  }, [])

  return (
    <div className={styles.landing}>
      <h1 ref={titleRef}>Descubra sua próxima jornada personalizada.</h1>
      <Link href="/simulador">
        <button ref={buttonRef}>Iniciar Simulação</button>
      </Link>
    </div>
  )
}
