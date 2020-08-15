import React from "react";

import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.App}>
      <span role="img" aria-label="Rocket Emoji">
        🚀
      </span>{" "}
      Vroom Vroom{" "}
      <span role="img" aria-label="Rocket Emoji">
        🚀
      </span>
    </div>
  );
}

export default App;
