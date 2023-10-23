import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [usedPrices, setUsedPrices] = useState([]);
  const [vats, setVats] = useState({});
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const fetchUsedPrices = async () => {
      const response = await axios.get('/api/prices/all');
      setUsedPrices(response.data);
    };

    const fetchVats = async () => {
      const response = await axios.get('/api/prices/current');
      setVats(response.data);
    };

    fetchUsedPrices();
    fetchVats();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post('/api/prices', { price });
    setPrice(0);
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            name='price'
            type='number'
            value={price}
            onChange={(e) => setPrice(+e.target.value)}
          />
          <button type='submit'>Calculate</button>
        </form>
      </div>

      <div>{JSON.stringify(usedPrices)}</div>

      <div>{JSON.stringify(vats)}</div>
    </div>
  );
};

export default App;
