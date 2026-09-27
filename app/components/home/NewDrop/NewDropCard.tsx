import Reveal from "../../animations/Reveal";
import Image from "next/image";
import styles from "./newdrop.module.css";

type NewDropCardProps = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  align: "left" | "right";
  number: string;
  priority?: boolean;
};

export default function NewDropCard({
  title,
  subtitle,
  description,
  image,
  align,
  number,
  priority = false,
}: NewDropCardProps) {
  const alignmentClass =
    align === "left" ? styles.alignLeft : styles.alignRight;

 return (
  <article className={`${styles.dropCard} ${alignmentClass}`}>
    <Reveal direction={align === "left" ? "right" : "left"}>
      <div className={styles.imageColumn}>
        <div className={styles.imageFrame}>
          <Image
            src={image}
            alt={`${subtitle} de WILDCORE`}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 65vw"
            className={styles.dropImage}
          />

          <div className={styles.imageOverlay} aria-hidden="true" />
          <div className={styles.imageNoise} aria-hidden="true" />

          <span className={styles.imageNumber}>{number}</span>

          <p className={styles.imageCaption}>
            WILDCORE
            <span>DROP 01</span>
          </p>
        </div>
      </div>
    </Reveal>

    <Reveal
      direction={align === "left" ? "left" : "right"}
      delay={0.15}
    >
      <div className={styles.contentColumn}>
        <p className={styles.cardLabel}>
          <span>{number}</span>
          NEW DROP
        </p>

        <h3 className={styles.cardTitle}>{title}</h3>

        <p className={styles.cardSubtitle}>{subtitle}</p>

        <div className={styles.cardDivider} />

        <p className={styles.cardDescription}>{description}</p>

        <a href="#" className={styles.shopButton}>
          <span>SHOP NOW</span>
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </Reveal>
  </article>
);
}
