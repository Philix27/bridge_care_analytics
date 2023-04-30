import NavBar from "../../comps/navbar/navbar.comp";
import { SideBar } from "../../comps/sidebar/sidebar";
import styles from "./profile.module.scss";
import { RightSidebar } from "../../comps/right_sidebar/sidebar";
import PodsComp from "./comps/pods";
import JobsComp from "./comps/jobs";
import DeamonSetComp from "./comps/deamonset";
import WorkloadComp from "./comps/workload";
import DeploymentComp from "./comps/deployment";

export const KubeView = () => {
  return (
    <>
      <SideBar />
      <NavBar />
      <div className={styles.container}>
        <div className={styles.contents}>
          <PodsComp />
          <JobsComp />
          <DeploymentComp />
          <DeamonSetComp />
          <WorkloadComp />
        </div>
      </div>
      <RightSidebar />
    </>
  );
};

export default KubeView;
