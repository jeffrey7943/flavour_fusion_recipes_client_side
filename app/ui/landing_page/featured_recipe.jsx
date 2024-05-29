import styles from "./featured_recipe.module.css";

export default function FeaturedRecipe() {
  return (
    <div className={`container-fluid ${styles.main_container}`}>
      <div className={styles.main_header}>
        <div className={styles.text}>
          <h1 className={styles.main_heading}>MAIN READING</h1>
          <p className={styles.main_paragraph}>main paragraph</p>
          <a href="/blogs">
            <button variant="primary" className={styles.button}>
              VIEW RECIPE
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
