import axios from 'axios';

async function fetchImages(query, page = 1) {
  const apiKey = '35193871-7d122815c37d1c9f4ada7ea8e';
  const perPage = 12;
  const apiUrl = `https://pixabay.com/api/?q=${query}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=${perPage}`;

  try {
    const response = await axios.get(apiUrl);

    if (response.status !== 200) {
      throw new Error(`Error fetching images for query: ${query}`);
    }

    const data = response.data;

    if (data.hits && data.hits.length > 0) {
      return data.hits.map(item => ({
        id: item.id,
        webformatURL: item.webformatURL,
        largeImageURL: item.largeImageURL,
      }));
    } else {
      throw new Error(`No images found for query: ${query}`);
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}

const api = {
  fetchImages,
};

export default api;
