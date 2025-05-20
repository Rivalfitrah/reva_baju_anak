import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getImageUrl } from '../../service/api';

function SearchResultItem({ image, name, price, id }) {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/detail/${id}`);
  };
  
  return (
    <div 
      className="flex items-center p-3 border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
      onClick={handleClick}
    >
      <img 
        src={getImageUrl(image)}
        alt={name} 
        className="w-12 h-12 object-cover rounded mr-3"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://marketplace.apg-wi.com/imgs/media.images/75035/75035.widea.jpg";
        }}
      />
      <div className="flex-1">
        <p className="font-medium text-gray-800 truncate">{name}</p>
        <p className="text-sm text-gray-500">Rp {Number(price).toLocaleString('id-ID')}</p>
      </div>
    </div>
  );
}

// Tambahkan default export
export default SearchResultItem;