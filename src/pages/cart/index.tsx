import { useContext } from "react"
import { CartContext } from "../../contexts/CartContex"

export function Cart() {
    const { cart, total, addItemCart, removeItemCart } = useContext(CartContext);
    return (
        <div className="w-full max-w-7xl mx-auto">
            <h1 className="font-medium text-2xl text-center my-4">Meu carrinho</h1>

            {cart.map((item) => (

                <section key={item.id} className="flex items-center justify-between border-b-2 border-gray-300">
                    <img
                        src={item.cover}
                        alt={item.title}
                        className="w-20"
                    />
                    <strong>Preço: {item.price.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL"
                        })}
                    </strong>

                    <div className="flex items-center justify-center gap-3">
                        <button 
                          onClick={()=>removeItemCart(item)}
                         className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center">
                            -
                        </button>
                        {item.amount}
                        <button 
                          onClick={()=> addItemCart(item)}
                         className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center">
                            +
                        </button>

                    </div>

                    <strong className="float-right">Subtotal: 
                        {item.total.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL"
                        })}
                    </strong>
                </section>


            ))}


            <p className="font-bold mt-3">
                Total: {total}
            </p>
        </div>
    )
}