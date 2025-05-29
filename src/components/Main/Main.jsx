import styles from "./Main.module.css";

import Category from "../Category/Category";

import Search from "../Search/Search";
import ProductSlider from "../Slider/Slider";

export default function Main() {
  return (
    <div className={styles.container}>
      <Search />

      <Category />

      <div className={styles.slider}>
        <ProductSlider />
      </div>
    </div>
  );
}
