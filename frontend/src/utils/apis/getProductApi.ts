import axios from 'axios';
export const fetchProductData = async () => {
    try {
        const response = await axios
        // .create({
        //     headers: {
        //         'Access-Control-Allow-Origin': '*',
        //         "Content-type": "application/json"
        //     },
        // })
        .get('https://localhost:7092/api/Products');
        console.log(response)
        return response.data;
    } catch (error) {
      console.error(error);
    }
}