import Image from "next/image";
import styles from "./recipe_card.module.css";

export default function RecipeCard(props) {
  return (
    <div className={`${props.col} ${styles.card_container}`}>
      <div className={`card ${styles.card}`}>
        <Image
          src={props.image}
          className={`card-img-top ${styles.card_image}`}
          alt={props.alt_text}
        />
        <div className="card-body">
          <h6
            className={`card-subtitle mb-2 text-body-secondary ${styles.card_subtitle}`}
          >
            {props.subtitle}
          </h6>
          <h5 className={`card-title ${styles.card_title}`}>{props.title}</h5>
        </div>
        <div className="card-footer text-body-secondary">
          <p className={styles.timer}>{props.timer} mins</p>
          <a href="#">
            <button variant="primary" className={styles.button}>
              VIEW RECIPE
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
