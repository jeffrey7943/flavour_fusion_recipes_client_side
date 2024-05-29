import Navbar from "./ui/navbar/navbar";
import FeaturedRecipe from "./ui/landing_page/featured_recipe";
import RecipeSection from "./ui/landing_page/recipe_section";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={`container-fluid ${styles.column}`}>
      <Navbar />
      <div className={`row ${styles.column}`}>
        <div className={`col-sm-12 col-lg-7 ${styles.column}`}>
          <FeaturedRecipe />
        </div>
        <div className={`col-sm-12 col-lg-5 ${styles.column}`}>
          <RecipeSection />
        </div>
      </div>
    </div>
  );
}
