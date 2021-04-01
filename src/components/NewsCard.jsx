import React, { Fragment, useState } from "react";
import { Card } from "antd";
import styles from "../styles/newsCard.module.css";
import NewsModal from "./NewsModal"

const NewsCard = ({ news }) => {
    const { title, urlToImage, description, url } = news;

	const [isModalVisible, setIsModalVisible] = useState(false);

	const showModal = () => {
        setIsModalVisible(true);
    };

    return (
        <Fragment>
            {urlToImage && description ? (
                <Fragment>
					<Card
                    className={styles.card}
                    cover={<img alt="newsImage" src={urlToImage} />}
					onClick={showModal}
					>
					<h3>{title}</h3>
					</Card>

					<NewsModal 
						isModalVisible={isModalVisible}
						setIsModalVisible={setIsModalVisible}
						title={title}
						description={description}
						url={url}
					/>
				</Fragment>
            ) : null}
        </Fragment>
    );
};

export default NewsCard;
