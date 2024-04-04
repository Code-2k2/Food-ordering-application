import Image from "next/image";
import styles from "../styles/navbar.module.css";
import {useRouter} from "next/router";
import Link from 'next/link';
// import HashLink from "react-router-hash"

const Navbar = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>996 446 2238</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li><Link href="." className={styles.listItem}>Homepage</Link></li>
          <li><Link href=".#menu" className={styles.listItem}>Menu</Link></li>
          {/* <li><a href="pizzalist.html#menu" className={styles.listItem}>Menu</a></li> */}
          {/* <li><a class="nav-link" href="#Overview">Overview</a></li> */}
          <Image src="/img/logo1.png" alt="" width="80" height="80" />
          <li><Link href="/order" className={styles.listItem}>Order Status</Link></li>
          <li className={styles.listItem}>Events</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}  onClick={() => router.push('/cart')}>
          <Image src="/img/cart.png" alt="" width="30" height="30" />
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;