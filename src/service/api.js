import axios from "axios"

const api = "https://localhost:8000"

export async function loginUser(email, password) {
    try {
        const response = await axios.post(`${api}/login`, {
            email,
            password,
        })
        const token = response.data.token

        localStorage.setItem("token", token)
        return response.data
    }
    catch (error) {
        console.error("gagal login:", error)
        throw error
    }
}