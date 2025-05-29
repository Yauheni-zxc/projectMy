import styles from "./magazine.module.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../../features/basketCount/addItembasket";
import { AiFillCloseSquare } from "react-icons/ai";
import { removeFavorites } from "../../features/basketCount/Likes";

export default function Favorites () {
    const items = useSelector ((state)=> state.like.items);
   console.log(items)
    const dispatch = useDispatch()
    const deleteFavorites = (item)=>{
      dispatch(removeFavorites(item))
    }
    return ( <div className={styles.container}>
        {
        items.map((item) => (
            <div className={styles.wrapper} key={item.id}>
            <div>
              <p className={styles.name}>{item.name}</p>
              <div className={styles.delete}> 
              <AiFillCloseSquare onClick={()=>deleteFavorites(item.id)} />
              </div>
             
              <div className={styles.images}>
                <img src={item.image} className={styles.image} alt="awd" />
              </div>

              <p className={styles.price}>{item.price}$</p>

              <div className={styles.add_box}>
                <button
                  onClick={() => dispatch(addItem(item))}
                  className={styles.product_button1}
                >
                  Add to Cart
                </button>
              </div>
              </div>
             
           
            </div>
          ))}
    </div> );
}

 ; 