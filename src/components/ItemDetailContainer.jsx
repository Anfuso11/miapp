import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from './ItemDetail';
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";

const ItemDetailContainer = () => {
    const { itemId } = useParams();
    const [producto, setProducto] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducto = async () => {
            try {
                const docRef = doc(db, "productos", itemId);
                const res = await getDoc(docRef);
                if (res.exists()) {
                    setProducto({ ...res.data(), id: res.id });
                } else {
                    setProducto(null);
                }
            } catch (error) {
                console.error("Error fetching producto:", error);
                setProducto(null);
            } finally {
                setLoading(false);
            }
        };

        fetchProducto();
    }, [itemId]);

    if (loading) {
        return <div>Cargando...</div>;
    } else if (producto !== null) {
        return <ItemDetail producto={producto} />;
    } else {
        return <div>Producto no encontrado</div>;
    }
};

export default ItemDetailContainer;

