import styles from "../styles/pizzalist.module.css";

import { PizzaCard } from "./pizzacard";
import { data } from "@/data/product";

const PizzaList = () => {
  return (
    <div id="menu" className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
        You screamed pizza? We heard you. Explore our wide range of veg and
        non-veg pizza options at the most affordable prices. Hurry up and grab
        the best deals for yourself. We'll be waiting!
      </p>
      <div className={styles.wrapper}>
        {data.products.map((item, index) => {
          // console.log(item,index);
          return (
            <>
              <PizzaCard props={item} index={index} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default PizzaList;
