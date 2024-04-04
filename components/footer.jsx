import Image from "next/image";
import styles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            THERE YOU GO. THE FOODIES' PIZZA, WELL BAKED SLICE OF PIZZA.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            678, 16 Camac Street
            <br /> Kolkata - 825022
            <br /> (033) 8637-1010
          </p>
          <p className={styles.text}>
            2356, M.G. Avenue Street
            <br />Kolkata - 855679
            <br /> (033) 1735-6673
          </p>
          <p className={styles.text}>
            67-B, Carl Road (New)
            <br /> Kolkata - 854920
            <br /> (033) 2462-5188
          </p>
          <p className={styles.text}>
            1614 Walmart Corner Street
            <br /> Kolkata - 853002
            <br /> (602) 9932-8943
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;