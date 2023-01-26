const apiKey = 'xwMITpgwEovEJ9ZnwxrsC8SaNFH00fg9';
const limit = 20;

export const getGifs = async(category) => {
  const url      = `http://api.giphy.com/v1/gifs/search?api_key=${ apiKey }&q=${category}&limit=${limit}`;
  const resp     = await fetch(url)
  const { data } = await resp.json()
  const gifs = data.map( img =>({
    id : img.id,
    title : img.title,
    url : img.images.downsized_medium.url
  }))
  return gifs;
}