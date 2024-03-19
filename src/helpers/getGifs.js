
export const getGifs = async (category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=cqULLSfsRWabgvlPRlMeaLZOwfetHNmR&q=${ category }&limit=10`;
    //const url=`http://54.165.41.23:5054/ValidaAcceso.asmx/ConsultaDatosFertirriegoCampo`;
    const resp = await fetch(url);
    const{ data } = await resp.json(); 

    const gifs = data.map(img =>({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }));
    
    return gifs;
}