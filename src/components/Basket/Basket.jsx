import styles from "./Basket.module.css";

import { useSelector,useDispatch } from "react-redux";
import { removeItem,deleteItem,clearCart } from "../../features/basketCount/addItembasket";

export default function Basket () {
const menu = useSelector((state) => state.menu.isMenu);
const items = useSelector((state)=>state.item.items)
const dispatch = useDispatch()
const removeCart = (itemId)=>{
    dispatch(removeItem(itemId))
}
const deleteCart = (itemId)=>{
    dispatch(deleteItem(itemId))
}

    return (  
        <div className={styles.container_cart}>
            <div className={!menu ?`${styles.wrapper_title}` : `${styles.menu_none}`}> <h1 className={styles.cart_title}>Shopping Cart</h1>
          { items.length? <button className={styles.clear_cart} onClick={()=>dispatch(clearCart())}>ClearBasket</button>:'Корзина пуста ):'}</div>
           <div className={styles.cart_wrapper}>
            {items.map(cart=>(
                <div key={cart.id} className={styles.item}>
                    <h3 className={styles.cart_name}>{cart.name}</h3>
                    <div className={styles.wrapper_price}> <p className={styles.price}>price:${cart.price}</p>
                    <p className={styles.quantity}>Quantity:{cart.quantity}</p></div>
                   
                    <img className={styles.Cart_images} src={cart.image} alt={cart.title} />
                    <div className={styles.desc}> 
                    </div>
                    <div className={styles.wrapper_buttons}>
                    <button className={styles.button_deleteCart} onClick={()=>deleteCart(cart.id)} >Delete Cart </button>
                    <button className={styles.button_remove} onClick={()=>removeCart(cart.id)}>RemoveItem</button>
                    </div>
                   
                   
                   
                   
                </div>
            ))}
            </div>
            </div>
                )
         
           

        
    
    }
    


