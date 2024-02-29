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
      <div className="navbar">
        <img src="./src/assets/creditcard.png" alt="Logo" />
        <div className="search-bar">
          <input type="text" value={searchValue} onChange={handleSearchTermChange} placeholder="Buscar..." />
        </div>
        <div className="login-icon">
          <img src="./src/assets/login.png" alt="Login" />
        </div>
      </div>

      <div className="main-container">
        <div className="sidebar">
          <label>
            Cantidad:
            <input type="number" value={quantity} onChange={(event) => setQuantity(event.target.value)} />
          </label>
          <button onClick={() => handleCardTypeFilter('Visa')}>Visa</button>
          <button onClick={() => handleCardTypeFilter('MasterCard')}>Mastercard</button>
          <button onClick={() => handleCardTypeFilter('American Express')}>American Express</button>
          <button onClick={() => handleCardTypeFilter('Discover Card')}>American Express</button>
          <button onClick={() => setCardTypeFilter(null)}>Clear Filter</button>
        </div>
        <div className="content">
          {filteredCreditCards.map((data, index) => (
            <CreditCard key={index} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
