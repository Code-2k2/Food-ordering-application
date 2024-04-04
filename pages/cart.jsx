import styles from "../styles/cart.module.css";
import Image from "next/image";
import {useState, useEffect } from "react";

const Cart = () => {

    const [loader,setLoader]=useState(true);
    useEffect(()=>{
    if (typeof window != 'undefined') 
    setLoader(false);
    },[])

    if(!loader){
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tr className={styles.trTitle}>
            <th>Product</th>
            <th>Name</th>
            <th>Extras</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          <tr className={styles.tr}>
            <td>
              <div className={styles.imgContainer}>
                <Image
                  src="/img/npizza2.png"
                  layout="fill"
                  objectFit="cover"
                  alt=""
                />
              </div>
            </td>
            <td>
              <span className={styles.name}>Chicken Sausage</span>
            </td>
            <td>
              <span className={styles.extras}>
                Cheese burst, Extra mushrooms
              </span>
            </td>
            <td>
              <span className={styles.price}>₹290</span>
            </td>
            <td>
              <span className={styles.quantity}>2</span>
            </td>
            <td>
              <span className={styles.total}>₹580</span>
            </td>
          </tr>
          <tr className={styles.tr}>
            <td>
              <div className={styles.imgContainer}>
                <Image
                  src="/img/vpizza3.png"
                  layout="fill"
                  objectFit="cover"
                  alt=""
                />
              </div>
            </td>
            <td>
              <span className={styles.name}>Veg Extravaganza</span>
            </td>
            <td>
              <span className={styles.extras}>
                Jalapeno sauce
              </span>
            </td>
            <td>
              <span className={styles.price}>₹250</span>
            </td>
            <td>
              <span className={styles.quantity}>2</span>
            </td>
            <td>
              <span className={styles.total}>₹500</span>
            </td>
          </tr>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>₹1080
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>₹100
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>₹980
          </div>
          <button className={styles.button}>CHECKOUT NOW!</button>
        </div>
      </div>
    </div>
  );
};}

export default Cart;