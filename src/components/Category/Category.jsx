import styles from "./Category.module.css";
import { useDispatch, useSelector } from "react-redux";
import { sortBy } from "../../features/basketCount/addItembasket";
import { setSortOrder } from "../../features/basketCount/addItembasket";
import { useMemo } from "react";
function Category() {
  const dispatch = useDispatch();
  const sort = useSelector((state) => state.item.sortBy);

  const categories = [
    { name: "По цене ASC", value: "price",sort:'asc' },
  
    { name: "По цене DESC", value: "-price",sort:'desc' },
    { name: "Новые", value: "like" },
  ]; 
  
  const clickCategory = (value,sorting) => {
    dispatch(sortBy(value))
  
    dispatch(setSortOrder(sorting))
   
  };

  return (
    <ul className={styles.sort_list}>

      {categories.map((category) => (
        <li
          onClick={() => clickCategory(category.value,category.sort)}
          key={category.name}
         
          className={
            sort === category.value 
              ? `${styles.categories_active}`
              : `${styles.categories}`
          }
        >
          {category.name}
        </li>
      ))}
    </ul>
  );
}

export default Category;
