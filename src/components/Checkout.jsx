import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase/config";


export const Checkout = () => {
    
    const [docId, setDocId] = useState("");

    const { carrito, calcularTotal, vaciarCarrito } = useContext(CartContext);

    const { register, handleSubmit } = useForm();


    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: calcularTotal()
        }
        
        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setDocId(doc.id);
                vaciarCarrito();
            })
    }

    if (docId) {
        return (
            <>
            <div className="container-final">
                <h1>Muchas gracias por tu compra</h1>
                <p>Aqui puedes ver el estado de tu pedido: {docId}</p>
            </div>
            </>
        )
    }

  return (
    <div className="formulario-compra">
        <h1 className="title-finalizarcompra">Finalizar compra</h1>
        <form onSubmit={handleSubmit(comprar)}>

            <input type="text" placeholder="Ingrese su nombre" {...register("nombre")} />
            <input type="email" placeholder="Ingrese su e-mail" {...register("email")} />
            <input type="teléfono" placeholder="Ingrese su teléfono" {...register("teléfono")} />
            <button type="submit">Comprar</button>
        </form>
    </div>
  )
}