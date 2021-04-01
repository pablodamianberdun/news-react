import React from 'react'
import { Card } from 'antd';
import styles from "../styles/newsCard.module.css"

const { Meta } = Card;

const NewsCard = ({ news }) => {
	const { title, urlToImage, description } = news

	return ( 
		<Card
			className={styles.card}
			cover={
			<img
				alt="newsImage"
				src={urlToImage}
			/>
			}
		>
			<Meta
				title={title}
				description={description}
			/>
		</Card>
	);
}
 
export default NewsCard;