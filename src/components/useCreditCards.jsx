import { useState } from 'react';

const useCreditCards = () => {
    const [creditCards, setCreditCards] = useState([]);

    const fetchCreditCards = async (quantity) => {
        try {
            const response = await fetch(`https://fakerapi.it/api/v1/credit_cards?_quantity=${quantity}`);
            const data = await response.json();
            setCreditCards(data.data);
        } catch (error) {
            console.error('Error fetching credit cards:', error);
        }
    };

    return { creditCards, fetchCreditCards };
};

export default useCreditCards;