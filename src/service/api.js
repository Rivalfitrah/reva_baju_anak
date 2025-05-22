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
export async function postUser(nama, telepon, alamat, kodepos, kota, provinsi, imgFile) {
    try {
        const formData = new FormData();
        formData.append("nama", nama);
        formData.append("telepon", telepon);
        formData.append("alamat", alamat);
        formData.append("kodepos", kodepos);
        formData.append("provinsi", provinsi);
        formData.append("kota", kota);

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
        return response.data
    } catch (error) {
        console.error("gagal ambil produk:", error)
        throw error
    }
}

// get produk by id
export async function getprodukById(id) {
    try {
        const response = await axios.get(`${api}/products/${id}`)
        return response.data
        console.log(response.data)
    } catch (error) {
        console.error("gagal ambil produk:", error)
        throw error
    }
}

// gambar
export function getImageUrl(imagePath) {
  // Jika path gambar null/undefined, kembalikan placeholder
  if (!imagePath) {
    return "https://marketplace.apg-wi.com/imgs/media.images/75035/75035.widea.jpg";
  }

  // Ganti backslash dengan slash agar URL valid
  const normalizedPath = imagePath.replaceAll("\\", "/");

  // Jika path gambar sudah dimulai dengan http/https, gunakan path lengkap
  if (normalizedPath.startsWith("http://") || normalizedPath.startsWith("https://")) {
    return normalizedPath;
  }

  // Jika path gambar adalah untuk avatar user
  if (normalizedPath.includes("uploads/avatar/")) {
    return `${api}/${normalizedPath}`;
  }

  // Format untuk upload gambar produk
  if (normalizedPath.includes("uploads/products/")) {
    return `${api}/${normalizedPath}`;
  }

  // Format untuk ID produk (asumsi produk ID sebagai folder)
  if (!normalizedPath.includes("/")) {
    return `${api}/uploads/products/${normalizedPath}/1.jpg`;
  }

  // Default case
  return `${api}/${normalizedPath}`;
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

export async function edituser(nama, telepon, alamat, kota, kodepos, provinsi, imgFile) {
    try {
        const token = localStorage.getItem("token")

        if(!token) {
            throw new Error("Token tidak tersedia. Silakan login terlebih dahulu.")
        }

        const formData = new FormData()
        formData.append("nama", nama)
        formData.append("telepon", telepon)
        formData.append("alamat", alamat)
        formData.append("kota", kota)
        formData.append("kodepos", kodepos)
        formData.append("provinsi", provinsi)
        if (imgFile) {
            formData.append("img", imgFile)
        }

        const response = await axios.put(`${api}/edituser`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`
            }
        });
        return response.data
        
    } catch (error) {
        console.error("gagal edit user:", error)
        throw error
    }
}

// cart
export async function getcartdetail() {
    try {
        const token = localStorage.getItem("token")
        const response = await axios.get(`${api}/cartdetail`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response.data
    } catch (error) {
        console.error("gagal ambil cart:", error)
        throw error
    }
}

// add to cart
export async function addToCart( produk_id, quantity, ukuran_id ) {
  try {

    const token = localStorage.getItem("token")

    if(!token) {
        throw new Error("Token tidak tersedia. Silakan login terlebih dahulu.")
    }
    const response = await axios.post(
      `${api}/addcart`,
      {
        produk_id,
        quantity,
        ukuran_id
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error("Gagal menambahkan ke keranjang:", error);
    throw error;
  }
}

// delete cart
export async function deletecartById(id) {
    try {
        const token = localStorage.getItem("token")
        const response = await axios.delete(`${api}/deletecart/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response.data
    } catch (error) {
        console.error("gagal hapus cart:", error)
        throw error
    }
}

export async function order (items) {
try {
    const token = localStorage.getItem("token");
    const response = await axios.post(
      `${api}/orders`,
      { items },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error("Gagal mengirim order via chat:", error);
    throw error;
  }
}