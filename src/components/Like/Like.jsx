import { FcLike } from "react-icons/fc";
import styles from "./Like.module.css";
import { toggleProduct,addLike,removeFavorites } from "../../features/basketCount/Likes";

import { useSelector, useDispatch } from "react-redux";

const Like = ({  item}) => {
  const isLiked = useSelector(state => (state.like.likes[item.id] || false));
  const dispatch = useDispatch();

  const handleToggleLike = (item) => {
    dispatch(toggleProduct(item))
    dispatch(addLike(item.id))
    if (isLiked) { 
      dispatch(removeFavorites(item.id)); 
  }
 
  };

  return (
    <button className={styles.button_like} onClick={() => handleToggleLike(item)}>
      {isLiked ? (
        <FcLike className={styles.like} />
      ) : (
        <FcLike className={styles.no_like} /> 
      )}
    </button>
  );
};

export default Like;
