import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./navbar.module.scss";
import { FaTimes, FaBars } from "react-icons/fa";
import Image from "next/image";

export default function LandingNavBar() {
  const router = useRouter();
  const _path = router.pathname.toString();
  const [user, setUser] = useState(null);
  const show = "show";
  const [showNav, setShowNav] = useState(false);
  // console.log("Path -", _path);
  return (
    <>
      <div className={styles.navbar}>
        <label className={styles.brand}>
          {/* <img src="/images/logo.png" className={styles.imgd} /> */}
          <Link href="/" className={styles.brand}>
            Nottie
          </Link>
        </label>

        <ul className={showNav ? styles.show : ""}>
          <li
            onClick={() => setShowNav(!showNav)}
            className={_path == `/home/more` ? styles.active : ""}
          >
            <Link href={"/home/more"} className={styles.link}>
              More
            </Link>
          </li>
          <li
            onClick={() => setShowNav(!showNav)}
            className={_path == `/home/pricing` ? styles.active : ""}
          >
            <Link href={"/home/pricing"} className={styles.link}>
              Pricing
            </Link>
          </li>
          <li
            onClick={() => setShowNav(!showNav)}
            className={_path == `/home/contact` ? styles.active : ""}
          >
            <Link href={"/home/contact"} className={styles.link}>
              Contact us
            </Link>
          </li>
          <li
            onClick={() => setShowNav(!showNav)}
            className={_path == `/profile` ? styles.active : ""}
          >
            <Link href={"/profile"} className={styles.link}>
              Login
            </Link>
          </li>
        </ul>

        <label className={styles.icon}>
          {showNav ? (
            <FaTimes onClick={() => setShowNav(!showNav)} />
          ) : (
            <FaBars onClick={() => setShowNav(!showNav)} />
          )}
        </label>
      </div>
    </>
  );
}
