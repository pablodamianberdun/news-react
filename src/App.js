import React, { useState, useEffect } from "react";
import styles from "./styles/app.module.css"
import CategoriesTabs from "./components/CategoriesTabs"
import { getNewsApi } from "./services/newsApi"
import { LoadingOutlined } from "@ant-design/icons"


function App() {

	const [category, setCategory] = useState("general")
	const [news, setNews] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect( () => {
		const getNews = async () => {
			setLoading(true)
			const response = await getNewsApi(category)
			setNews(response);
			setLoading(false)
			console.log(response);
		}
		getNews()
	}, [category])

    return (
        <div className={styles.container}>
            <h1>News</h1>
			<CategoriesTabs
				category={category}
				setCategory={setCategory}
			/>
			{loading ? <LoadingOutlined style={{fontSize: 30}} /> : null}
        </div>
    );
}

export default App;