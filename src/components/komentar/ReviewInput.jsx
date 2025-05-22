import { useState } from "react";

function ReviewInput({ onSubmit }) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [ulasan, setUlasan] = useState("");

  const handleSubmit = () => {
    if (rating === 0 || ulasan.trim() === "") {
      alert("Mohon beri rating dan isi ulasan.");
      return;
    }

    // Kirim data
    onSubmit({ rating, isi: ulasan, nama: "User" }); // nama bisa diganti sesuai user login

    // Reset form
    setRating(0);
    setHoverRating(0);
    setUlasan("");
  };

  return (
    <div className="mt-4">
      <div className="flex space-x-1 mb-2">
        {[1, 2, 3, 4, 5].map((bintang) => (
          <span
            key={bintang}
            className={`cursor-pointer text-2xl ${
              (hoverRating || rating) >= bintang ? "text-yellow-400" : "text-gray-300"
            }`}
            onClick={() => setRating(bintang)}
            onMouseEnter={() => setHoverRating(bintang)}
            onMouseLeave={() => setHoverRating(0)}
          >
            ★
          </span>
        ))}
      </div>

      <textarea
        className="w-full h-24 p-2 border border-gray-300 rounded-lg"
        placeholder="Tulis ulasan Anda di sini..."
        value={ulasan}
        onChange={(e) => setUlasan(e.target.value)}
      ></textarea>

      <button
        onClick={handleSubmit}
        className="mt-2 bg-pink-400 text-white py-2 px-4 rounded-lg hover:bg-pink-500"
      >
        Kirim Ulasan
      </button>
    </div>
  );
}

export default ReviewInput;
