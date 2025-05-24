import React, { useEffect, useState } from 'react';
import WatchCard from '../components/WatchCard';

const WatchList = () => {
  const [watches, setWatches] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/watches')
      .then(res => res.json())
      .then(data => setWatches(data));
  }, []);

  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {watches.map(watch => (
        <WatchCard key={watch._id} watch={watch} />
      ))}
    </div>
  );
};

export default WatchList;