import React, { useEffect, useState } from 'react';
import data from "./data/productos.json";
import categories from "./data/productos.json";
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom';

export const ItemListContainer = () => {

  let { categoryId } = useParams();
  let [productos, setProductos] = useState([]);

  let [titulo, setTitulo] = useState("PRODUCTOS");
  
  const pedirProductos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    })
  }

  useEffect(() => {
    
    pedirProductos()
      .then((res) => {
        if (!categoryId) {
          setTitulo("ENVÍOS GRATIS A TODO EL PAÍS");
          setProductos(res);
        } else {
          setTitulo(categories.find((cat) => cat.id === categoryId).nombre);
          setProductos(res.filter((prod) => prod.categoria.id === categoryId));
        }
      })
      
  }, [categoryId]);
  

  return (
    <div className="item-list-container">
      <h1 className='banner'>{titulo}</h1>
      <ItemList productos={productos} />
    </div>
  )
}