import axios from "axios";

const searchImages = async (term) =>{
    const response = await axios.get('https://api.giphy.com/v1/gifs/search',{
        //  headers: {
        //     Authorization: 'api_key '
        //  },
        params: {
            api_key: '',
            q: term,
        }
    });
    //console.log(response);
    return response.data.data;
};

export default searchImages; 