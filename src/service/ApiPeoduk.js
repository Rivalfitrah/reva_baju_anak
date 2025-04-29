import axios from "axios";

const base_url = "https://fakestoreapi.com"

export async function getproduk() {
    try {
        const response = await axios.get(`${base_url}/products`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
}

