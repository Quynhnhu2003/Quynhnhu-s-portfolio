// *** Style Import
import styles from "./index.module.scss";

// ** Another Import
import { Toaster } from "react-hot-toast";

function ToastifyProvider() {
  return <Toaster reverseOrder={true} />;
}

export default ToastifyProvider;
