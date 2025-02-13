import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const res = await fetch('https://randomuser.me/api/');
    const userData = await res.json();
    const u = userData.results[0];
    setData({
      name: u.name.first + ' ' + u.name.last,
      email: u.email,
      phone: u.phone,
      image: u.picture.large,
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!data) return <div className="flex items-center justify-center min-h-screen">Yüklənir...</div>;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
        <img src={data.image} alt="User" className="w-32 h-32 rounded-full mx-auto mb-4" />
        <h2 className="text-xl font-bold">{data.name}</h2>
        <p className="text-gray-600">{data.email}</p>
        <p className="text-gray-600">{data.phone}</p>
        <button onClick={fetchData} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
          Yeni İstifadəçi
        </button>
      </div>
    </div>
  );
}

export default App;