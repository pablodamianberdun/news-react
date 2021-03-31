import React from "react";
import styles from "../styles/categoriesTabs.module.css"
import { Tabs } from "antd";
const { TabPane } = Tabs;

const CategoriesTabs = ({ category, setCategory }) => {

	const tabs = [
		{value: "general", label: "General"},
		{value: "business", label: "Negocios"},
		{value: "entertainment", label: "Entretenimiento"},
		{value: "health", label: "Salud"},
		{value: "science", label: "Ciencia"},
		{value: "sports", label: "Deportes"},
		{value: "technology", label: "Tecnología"}
	]

	return (
		<Tabs
			className={styles.tabs}
			onChange={e => setCategory(e)}
			activeKey={category}
        >
            {tabs.map((tab) => (
                <TabPane tab={tab.label} key={tab.value}></TabPane>
            ))}
        </Tabs>
	)
};

export default CategoriesTabs;
