import React, { useEffect, useState } from 'react';

import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';

export const ItemListContainer = () => {

  let [productos, setProductos] = useState([]);

  let [titulo] = useState("PRODUCTOS");

  const categoria = useParams().categoria;
  
  useEffect(() => {
    
    const productosRef = collection(db, "productos");

    const q = categoria ? query(productosRef, where("categoria", "==", categoria)) : productosRef;  

    getDocs(q)
      .then((resp) => {
        setProductos(
          resp.docs.map((doc) => {
            return { ...doc.data(), id: doc.id }
          })
        )
      })
  }, [categoria]);
  

  return (
    <div className="item-list-container">
      <h1 className='banner'>{titulo}</h1>
      <ItemList productos={productos} />
    </div>
  )
}