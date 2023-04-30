import NavBar from "../../comps/navbar/navbar.comp";
import { SideBar } from "../../comps/sidebar/sidebar";
import styles from "./profile.module.scss";
import { RightSidebar } from "../../comps/right_sidebar/sidebar";

export const ProfileView = () => {
  return (
    <>
      <SideBar />
      <NavBar />
      <div className={styles.container}>
        <div className={styles.contents}></div>
      </div>
      <RightSidebar />
    </>
  );
};

export default ProfileView;
