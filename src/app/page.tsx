import styles from './page.module.css'
import Link from 'next/link'



export default function Home() {
  
  return (
    <main className={styles.main}>
      <div className={styles.back}>
        <div className={styles.out_flex}>
          <p className={styles.back_codar}>#boraCodar <span className={styles.sec_codar}>#boraCodar</span></p>
          <div>
            <div>
              <img className={styles.perfil_real} src="./perfil_real.png" alt="perfil_real" />
              <img className={styles.perfil_draw} src="./perfil_draw.png" alt="perfil_draw" />
            </div>
            <a className={styles.txt_perfil} href="https://github.com/pedrogodoir" target='_blank'>@pedrogodoir</a>
          </div>
        </div>
        <p>Meus projetos:</p>
        <div className={styles.out_grid}>
          <Link href="/conversor-de-moedas">
            <div className={styles.card}>
            </div>
          </Link>
        </div>
      </div>
    </main>
  )
}