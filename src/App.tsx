import "./i18n";
import { useTranslation } from "react-i18next";
import { useDemoStore } from "./store";
import styles from "./App.module.scss";
function App() {
  const { count, inc } = useDemoStore();
  const { t } = useTranslation();
  return (
    <>
      <div> {t("hello")}</div>
      <div className={styles.testStyles}>
        react + ts + zustand + i18n + vite + ahook
      </div>

      <div>
        demo
        <div>
          <span>{count}</span>
          <button onClick={inc}>one up</button>
        </div>
      </div>
    </>
  );
}

export default App;
