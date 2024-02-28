import React from 'react';

const CreditCard = ({ data }) => {
    return (
        <div style={{ border: '1px solid #ccc', padding: '2em', margin: '2em', borderRadius: '2em' }}>
            <p>Type: {data.type}</p>
            <p>Number: {data.number}</p>
            <p>Owner: {data.owner}</p>
            <p>Expiration Date: {data.expiration}</p>
        </div>
    );
};

export default CreditCard;