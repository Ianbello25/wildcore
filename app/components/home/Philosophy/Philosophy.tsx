import Reveal from "../../animations/Reveal";
import styles from "./philosophy.module.css";

export default function Philosophy() {
  return (
    <section id="about" className={styles.philosophy}>
      <div className={styles.backgroundGlow} aria-hidden="true" />

      <div className={styles.container}>
        <Reveal>
          <div className={styles.eyebrow}>
            <span>02</span>
            OUR PHILOSOPHY
          </div>
        </Reveal>

        <div className={styles.statement}>
          <Reveal direction="left">
            <p>DISCIPLINE</p>
          </Reveal>

          <Reveal direction="right" delay={0.12}>
            <p className={styles.muted}>ISN&apos;T BORN.</p>
          </Reveal>

          <Reveal direction="left" delay={0.24}>
            <p>IT IS EARNED.</p>
          </Reveal>

          <Reveal direction="right" delay={0.36}>
            <p className={styles.accent}>EVERY SINGLE DAY.</p>
          </Reveal>
        </div>

        <div className={styles.bottom}>
          <Reveal delay={0.45}>
            <p className={styles.description}>
              WILDCORE representa a quienes entienden que el carácter no se
              hereda. Se construye a través de la constancia, el sacrificio y
              la voluntad de superar los propios límites.
            </p>
          </Reveal>

          <Reveal delay={0.55}>
            <div className={styles.signature}>
              <span />
              BUILT THROUGH DISCIPLINE
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
