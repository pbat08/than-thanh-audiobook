import React, { useState, useEffect } from 'react';
import { useStore } from '../store';
import axios from 'axios';

const Library = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const { favorites, addToFavorites, removeFromFavorites } = useStore();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('/api/books');
        setBooks(response.data);
        setFilteredBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  useEffect(() => {
    let filtered = books;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(book => book.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(book =>
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query)
      );
    }

    setFilteredBooks(filtered);
  }, [books, selectedCategory, searchQuery]);

  const categories = [
    { id: 'all', name: 'Tất cả' },
    { id: 'truyen-co-tich', name: 'Truyện cổ tích, dân gian' },
    { id: 'tho-ca-dao', name: 'Thơ, ca dao, tục ngữ' },
    { id: 'truyen-tich-cuc', name: 'Những mẫu chuyện tích cực' }
  ];

  const handleFavorite = (book) => {
    const isFavorite = favorites.some(fav => fav.id === book.id);
    if (isFavorite) {
      removeFromFavorites(book.id);
    } else {
      addToFavorites(book);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Thư viện sách</h1>
        
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Tìm kiếm sách..."
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <select
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredBooks.map(book => (
          <div
            key={book.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src={book.coverImage}
              alt={book.title}
              className="w-full h-48 object-cover"
            />
            
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{book.title}</h3>
              <p className="text-gray-600 mb-2">{book.author}</p>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">
                  {book.duration} phút
                </span>
                
                <button
                  onClick={() => handleFavorite(book)}
                  className="text-gray-500 hover:text-pink-500"
                  title={favorites.some(fav => fav.id === book.id) ? 'Bỏ yêu thích' : 'Yêu thích'}
                >
                  <svg
                    className="w-6 h-6"
                    fill={favorites.some(fav => fav.id === book.id) ? 'currentColor' : 'none'}
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
              </div>
              
              <button
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                onClick={() => {
                  // Handle play book
                }}
              >
                Nghe sách
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredBooks.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-600">Không tìm thấy sách phù hợp</p>
        </div>
      )}
    </div>
  );
};

export default Library; 