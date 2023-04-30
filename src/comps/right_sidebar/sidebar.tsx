import styles from "./sidebar.module.scss";
import Link from "next/link";
import { sidebarItems } from "./sidebarItems";

export const RightSidebar = () => {
  return (
    <div className={styles.sidebar}>
      {/* <Link href="/">
        <h3>bridge Care</h3>
      </Link> */}
      <ul>
        {sidebarItems.map((item, i) => {
          // if (item.agentType.includes(data?.me?.agent_type)) {
          return (
            <Link href={item.link} key={i}>
              <li className={styles.styles} key={i} onClick={() => {}}>
                <span>{item.icon}</span>
                <span className={styles.title}> {item.title}</span>
              </li>
            </Link>
          );
          // }
        })}
      </ul>
    </div>
  );
};
