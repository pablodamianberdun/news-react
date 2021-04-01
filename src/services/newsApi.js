import axios from "axios"
const API_KEY = process.env.REACT_APP_NEWS_API_KEY

export const getNewsApi = async (category) => {
	const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${category}&pageSize=100&apiKey=${API_KEY}`

	const response = await axios.get(url)
	return response.data.articles
}