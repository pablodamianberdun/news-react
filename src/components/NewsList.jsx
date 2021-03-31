import React from 'react'
import NewsCard from "./NewsCard"

const NewsList = ({ allNews }) => {

	return ( 
		<div>
			{allNews.map( news => (
				<NewsCard key={news.url} news={news}/>
			))}
		</div>
	);
}
 
export default NewsList;