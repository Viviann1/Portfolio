import styles from './layout.module.css'
console.log(styles)

function AboutPage() {
  return (
    <div className={styles.background}>
          <h1>Litt om meg..</h1>
          <p>Kreativ sjel med bakgrunn som grafisk designer/
          AD i reklamebyråer.
          Jobbet som grafisk designer i Gazette 
          - gratis-magasin på Lanzarote. 
          Var med på å starte opp og drev kunst/håndverksbutikk/kollektiv i Irland.  
          Vil nå tilbake til å jobbe mer med det kreative 
          og vil derfor utvide mine kunnskaper. 
          Ser veldig frem til å bli god på koding og kunne designe mine egne nettsider. 
          Har mange idèer 
          - og ser fram til å få de gjennomført!</p>

    </div>
  )
}

export default AboutPage;