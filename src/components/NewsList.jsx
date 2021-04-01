import React from 'react'
import NewsCard from "./NewsCard"
import styles from "../styles/newsList.module.css"

const NewsList = ({ allNews }) => {

	return ( 
		<div className={styles["container-grid"]}>
			{allNews.map( news => (
				<NewsCard key={news.url} news={news}/>
			))}
		</div>
	);
}
 
export default NewsList;