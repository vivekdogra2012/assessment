import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const List = ({ favorites, setFavorites }) => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(`https://jsonplaceholder.typicode.com/albums/1/photos?_page=${page}&_limit=10`);
      const data = await response.json();
      setItems(prevItems => [...prevItems, ...data]);
      setLoading(false);
    };
    fetchData();
  }, [page]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, [setFavorites]);

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 50) {
      setPage(prevPage => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const addToFavorites = (item) => {
    if (!favorites.some(favorite => favorite.id === item.id)) {
      const newFavorites = [...favorites, item];
      setFavorites(newFavorites);
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
    } else {
      const newFavorites = favorites.filter(favorite => favorite.id !== item.id);
      setFavorites(newFavorites);
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
    }
  };

  return (
    <div>
        <header className="bg-gray-900 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
            <div className="logo text-2xl font-bold">Lists</div>
        </div>
        </header>
        <div className='flex p-10'>
            <Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center">Back to Dashboard</Link>
        </div>
        <ul className='list'>
            {items.map(item => (
            <li className='list-item' key={item.id}>
                <h3 className='text-2xl'>ID: {item.id}</h3>
                <p className='mb-5'>Title: {item.title}</p>
                <img src={item.url} alt={item.title} />
                <button className={`p-2 text-white font-bold py-2 px-4 rounded text-center ${favorites.some(favorite => favorite.id === item.id) ? 'bg-red-500 hover:bg-red-700' : 'bg-blue-500 hover:bg-blue-700'}`} onClick={() => addToFavorites(item)}>{favorites.some(favorite => favorite.id === item.id) ? "Remove from Favorites" : "Add to Favorites"}</button>
            </li>
            ))}
        </ul>
        {loading && <div className='loader-ss'></div>}
    </div>
  );
};

export default List;