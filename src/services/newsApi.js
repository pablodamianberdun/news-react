import axios from "axios"

export const getNewsApi = async (category) => {
	const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${category}&apiKey=38401b69e0a24ff69cd5e963fe13b880`

	const response = await axios.get(url)

	return response.data.articles
}