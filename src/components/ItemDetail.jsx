import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export const ItemDetail = ({ producto }) => {
    const { agregarAlCarrito } = useContext(CartContext);

    // Manejar el caso donde producto es null o undefined
    if (!producto) {
        return <p>El producto no está disponible.</p>;
    }

    return (
        <div className='pre-carrito'>
            <img className='imagengrande' src={producto.imagen} alt={producto.nombre}/>
            <h1>{producto.nombre}</h1>
            <p>{producto.descripcion}</p>
            <p>${producto.precio}</p>
            <button className='agregar-al-carrito' onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
        </div>
    );
};