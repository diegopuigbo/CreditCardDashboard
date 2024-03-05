import { useState } from "react";

const useCreditCards = () => {
  const [creditCards, setCreditCards] = useState([]);
  const LocalStorageCards = localStorage.getItem("cards");

  const fetchCreditCards = async (quantity) => {
    try {
      if (!LocalStorageCards && quantity && quantity !== 0) {
        const response = await fetch(
          `https://fakerapi.it/api/v1/credit_cards?_quantity=${quantity}`
        );
        const data = await response.json();
        setCreditCards(data.data);
        localStorage.setItem("cards", JSON.stringify(data.data));
      } else {
        setCreditCards(JSON.parse(LocalStorageCards) || []);
      }
    } catch (error) {
      console.error("Error fetching credit cards:", error);
    }
  };

  return { creditCards, fetchCreditCards };
};

export default useCreditCards;
