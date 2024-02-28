import { useState, useEffect } from 'react';
import CreditCard from './components/CreditCard';
import useCreditCards from './components/useCreditCards';

const App = () => {
  const [quantity, setQuantity] = useState(1);
  const [cardTypeFilter, setCardTypeFilter] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const { creditCards, fetchCreditCards } = useCreditCards();

  useEffect(() => {
    fetchCreditCards(quantity);
  }, [quantity]);

  const handleCardTypeFilter = (type) => {
    setCardTypeFilter(type);
  };

  const handleSearchTermChange = (event) => {
    setSearchValue(event.target.value);
  };

  const filteredCreditCards = creditCards.filter((card) => {
    if (cardTypeFilter && card.type !== cardTypeFilter) {
      return false;
    }

    if (searchValue && !card.number.includes(searchValue)) {
      return false;
    }

    return true;
  });

  return (
    <div>
      <label>
        Quantity:
        <input type="number" value={quantity} onChange={(event) => setQuantity(event.target.value)} />
      </label>
      <label>
        Search by Card Number:
        <input type="text" value={searchValue} onChange={handleSearchTermChange} />
      </label>
      <div>
        <button onClick={() => handleCardTypeFilter('Visa')}>Visa</button>
        <button onClick={() => handleCardTypeFilter('MasterCard')}>Mastercard</button>
        <button onClick={() => handleCardTypeFilter('AmericanExpress')}>American Express</button>
        <button onClick={() => setCardTypeFilter(null)}>Clear Filter</button>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '10px' }}>
        {filteredCreditCards.map((data, index) => (
          <CreditCard key={index} data={data} />
        ))}

      </div>
    </div>
  );
};

export default App;
