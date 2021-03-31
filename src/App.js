import React from "react";
import styles from "./styles/app.module.css"
import CategoriesTabs from "./components/CategoriesTabs"


function App() {

    return (
        <div className={styles.container}>
            <h1>News</h1>
			<CategoriesTabs/>
        </div>
    );
}

export default App;