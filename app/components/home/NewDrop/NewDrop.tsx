import Reveal from "../../animations/Reveal";
import { drops } from "./data";
import NewDropCard from "./NewDropCard";
import styles from "./newdrop.module.css";

export default function NewDrop() {
  return (
    <section id="new-drop" className={styles.newDrop}>
      <header className={styles.dropHeader}>
        <div className={styles.headerGlow} aria-hidden="true" />

        <Reveal>
          <p className={styles.dropNumber}>
            <span>01</span>
            THE NEW COLLECTION
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <h2 className={styles.dropTitle}>
            BUILT FOR
            <br />
            <span>THE WILD.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.3}>
          <p className={styles.dropIntro}>
            Una colección creada para quienes convierten la disciplina en
            identidad.
          </p>
        </Reveal>

        <div className={styles.scrollLine} aria-hidden="true" />
      </header>

      <div className={styles.dropList}>
        {drops.map((item, index) => (
          <NewDropCard
            key={item.id}
            title={item.title}
            subtitle={item.subtitle}
            description={item.description}
            image={item.image}
            align={item.align}
            number={String(index + 1).padStart(2, "0")}
            priority={index === 0}
          />
        ))}
      </div>

      <footer className={styles.dropFooter}>
        <p>WILDCORE — DROP 01</p>

        <a href="#" className={styles.collectionLink}>
          EXPLORE THE COLLECTION
          <span aria-hidden="true">→</span>
        </a>
      </footer>
    </section>
  );
}
