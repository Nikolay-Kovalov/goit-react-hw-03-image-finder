import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const getImages = async (querry, page) => {
    const response = await axios.get('',
        {
            params: {
                q: querry,
                page: page,
                key: '31924399-5ed70afbd2fbb0ac4f5aecf83',  
                image_type: 'photo',
                orientation: 'horizontal',
                per_page: 12
            }
        }

    )
    return response;
}