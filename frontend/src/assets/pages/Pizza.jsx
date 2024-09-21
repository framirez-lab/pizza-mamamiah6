import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import '../style/PizzaDetail.css'


const Pizza = () => {
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // ID fijo de la pizza que queremos mostrar
  const pizzaId = 'p001';

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/pizzas/${pizzaId}`);
        if (!response.ok) {
          throw new Error('Error al obtener la pizza');
        }
        const data = await response.json();
        setPizza(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPizza();
  }, []);  // No necesitamos incluir pizzaId como dependencia, porque no cambiará

  if (loading) return <p>Cargando pizza...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="pizza-detail">
      <h2 className='pizza-title'>{pizza.name}</h2>
      <p className='pizza-price'>Precio: ${pizza.price}</p>
      <img src={pizza.img} alt={pizza.name} style={{ width: '100%', height: 'auto' }} />
      <p>{pizza.desc}</p>
      <p>Ingredientes: </p>
        <ul>
            <li>{pizza.ingredients.join(', ')}</li>
        
        </ul>
      <Button variant="primary">Añadir al carrito 🛒</Button>
    </div>
  );
};

export default Pizza;


