import Sidebar from "../components/Sidebar";
import MyMap from "../components/Map";
import User from "../components/User";
import styles from "./AppLayout.module.css";
import ProtectedRoute from "./ProtectedRoute";

const AppLayout = () => {
  return (
    <ProtectedRoute>
      <div className={styles.app}>
        <Sidebar />
        <MyMap />
        <User />
      </div>
    </ProtectedRoute>
  );
};

export default AppLayout;
