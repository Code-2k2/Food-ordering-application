import Image from "next/image";
import styles from "../styles/pizzacart.module.css";
import Link from "next/link";

export const PizzaCard = (props) => {
  const imageLink = props.props.image;
  const productName = props.props.title;
  const url = `/product/${props.index}`;
  const desc = props.props.desc;

  return (
    <div className={styles.container}>
      <Image src={imageLink} alt="" width="100" height="100" />
      <Link href={url}>
        <h1 className={styles.title}>{productName}</h1>
      </Link>
      <span className={styles.price}>₹250</span>
      <Link href={url}>
      <p className={styles.desc}>{desc}</p>
      </Link>
    </div>
  );
};
