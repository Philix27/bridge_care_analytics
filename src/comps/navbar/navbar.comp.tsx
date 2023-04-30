import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./navbar.module.scss";
import { FaTimes, FaBars } from "react-icons/fa";
import { sidebarItems } from "../sidebar/sidebarItems";

export default function NavBar() {
  const router = useRouter();
  const _path = router.pathname.toString();

  const show = "show";
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <div className={styles.navbar}>
        <label className={styles.brand}>
          <Link href="/" className={styles.brand}>
            Nottie
          </Link>
        </label>

        <ul className={showNav ? styles.show : ""}>
          {sidebarItems.map((item, i) => {
            // if (item.agentType.includes(data?.me?.agent_type)) {
            return (
              <Link href={item.link} className={styles.link} key={i}>
                <li
                  className={_path == item.link ? styles.active : ""}
                  key={i}
                  onClick={() => setShowNav(!showNav)}
                >
                  {item.title}
                </li>
              </Link>
            );
            // }
          })}
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
