import axios from "axios"

const api = "http://localhost:8000"

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

// register
export async function register(email, password, confirmPassword) {
    try {
        const response = await axios.post(`${api}/register`, {
            email,
            password,
            confirm_password: confirmPassword, // ✅ ubah key JSON-nya
        });
        const token = response.data.token; // ambil token dari response
        localStorage.setItem("token", token); // simpan token ke localStorage
        return response.data;
    } catch (error) {
        console.error("gagal register:", error);
        throw error;
    }
}

// postuser
export async function postUser(nama, telepon, alamat, kodepos, provinsi, imgFile) {
    try {
        const formData = new FormData();
        formData.append("nama", nama);
        formData.append("telepon", telepon);
        formData.append("alamat", alamat);
        formData.append("kodepos", kodepos);
        formData.append("provinsi", provinsi);

        if (imgFile) {
            formData.append("img", imgFile); // hanya jika file ada
        }

        const token = localStorage.getItem("token"); 
        
        if (!token) {
            throw new Error("Token tidak tersedia. Silakan login terlebih dahulu.");
        }

        const response = await axios.post(`${api}/postuser`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`  // Format standar untuk JWT
            },
        });

        return response.data;
    } catch (error) {
        console.error("gagal post user:", error);
        throw error;
    }
}

// get user by id
export async function getUserLogin() {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Token tidak tersedia');
      }
      
      const response = await axios.get(`${api}/getuserlogin`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      return response.data; // Return response.data bukan hanya response
    } catch (error) {
      console.error("Gagal get user:", error);
      throw error;
    }
  }


// get produk
export async function getProduks() {
    try {
        const response = await axios.get(`${api}/products`)
        console.log(response.data)
        return response.data
    } catch (error) {
        console.error("gagal ambil produk:", error)
        throw error
    }
}

// history
export async function getorder() {
    try {
        const token = localStorage.getItem("token")
        const response = await axios.get(`${api}/user/orders`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response.data
    } catch (error) {
        console.error("gagal ambil order:", error)
        throw error
    }
}