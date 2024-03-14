import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Dashboard.scss';

const Dashboard = ({ favorites, setFavorites }) => {
  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, [setFavorites]);

  return (
    <div>
      <header className="bg-gray-900 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="logo text-2xl font-bold">Dashboard</div>
        </div>
      </header>
      <div className="p-10">
        <div className="flex">
          <Link to="/list" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center mb-10">
            Go to List
          </Link>
        </div>
        {favorites.length > 0 && (
          <div className="overflow-x-auto">
            <h2 className="text-3xl font-bold mb-2">Favorites</h2>
            <table className="table-auto min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {favorites.map(favorite => (
                  <tr key={favorite.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{favorite.id}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{favorite.title}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;