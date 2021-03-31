import React from 'react'
import { Card } from 'antd';

const { Meta } = Card;

const NewsCard = ({ news }) => {
	const { title, urlToImage } = news

	return ( 
		<Card
			style={{ width: 300, margin: "0 auto 40px" }}
			cover={
			<img
				alt="newsImage"
				src={urlToImage}
			/>
			}
		>
			<Meta
				title={title}
			/>
		</Card>
	);
}
 
export default NewsCard;