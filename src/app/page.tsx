import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.card}>
          <p className={styles.backCodar}>#boraCodar #boraCodar</p>
        <div>
          <img className={styles.perfil_real} src="./perfil_real.png" alt="perfil_real" />
          <h1 className={styles.perfil}>@pedrogodoi</h1>
          <img className={styles.perfil_draw} src="./perfil_draw.png" alt="perfil_draw" />
        </div>
        <div className={styles.outGrid}>
          <div>

          </div>
        </div>
      </div>
    </main>
  )
}
