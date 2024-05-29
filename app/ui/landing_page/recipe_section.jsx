import RecipeCard from "../misc/recipe_card";
import styles from "./recipe_section.module.css";

export default function RecipeSection() {
  return (
    <div className={`container-fluid ${styles.main_container}`}>
      <h1 className={styles.section_logo}>
        DISCOVER CULINARY DELIGHTS WITH OUR FEATURED RECIPES THAT BRING FLAVOURS
        TO LIFE
      </h1>
      <div className={styles.recipe_section}>
        <h1 className={styles.main_heading}>PREPARING A BREAKFAST BUFFET</h1>
        <div className="container">
          <div className="row">
            <RecipeCard
              col="col-sm-6"
              alt_text="recipe"
              subtitle="RECIPE SUBTITLE"
              title="RECIPE TITLE"
              timer="19"
            />
            <RecipeCard
              col="col-sm-6"
              alt_text="recipe"
              subtitle="RECIPE SUBTITLE"
              title="RECIPE TITLE"
              timer="19"
            />
            <RecipeCard
              col="col-sm-6"
              alt_text="recipe"
              subtitle="RECIPE SUBTITLE"
              title="RECIPE TITLE"
              timer="19"
            />
            <RecipeCard
              col="col-sm-6"
              alt_text="recipe"
              subtitle="RECIPE SUBTITLE"
              title="RECIPE TITLE"
              timer="19"
            />
            <RecipeCard
              col="col-sm-6"
              alt_text="recipe"
              subtitle="RECIPE SUBTITLE"
              title="RECIPE TITLE"
              timer="19"
            />
            <RecipeCard
              col="col-sm-6"
              alt_text="recipe"
              subtitle="RECIPE SUBTITLE"
              title="RECIPE TITLE"
              timer="19"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
