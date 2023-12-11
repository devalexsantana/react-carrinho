import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { ProductsProps } from "../home";
import { api } from "../../services/api";
import { BsCartPlus } from "react-icons/bs";
import { CartContext } from "../../contexts/CartContex";
import toast from "react-hot-toast";


export function Detail() {
    const { id } = useParams();
    const [product, setProduct] = useState<ProductsProps>();
    const {addItemCart} = useContext(CartContext)

    useEffect(() => {
        async function getProducts() {
            const response = await api.get(`/products/${id}`)

            setProduct(response.data);
        }

        getProducts();
    }, [id]);

    function handleAddCarItem(product:ProductsProps){
        toast.success("Produto Adicionado ao carrinho", {
            style: {
                borderRadius: 10,
                backgroundColor: "#121212",
                color: "#fff"
            }
        })
        addItemCart(product)
    }
    return (
        <div>
            <main className="w-full max-w-7xl px-4 mx-auto my-6">
                {product && (

                    <section className="w-full">
                        <div className="flex flex-col lg:flex-row">
                            <img
                                className="flex-1 w-full max-h-72 object-contain"
                                src={product?.cover}
                                alt={product?.title}
                            />

                            <div className="flex-1">
                                <p className="font-bold text-2xl mt-4 mb-2">{product?.title}</p>
                                <p className="my-4 text-justify">{product?.description}</p>
                                <strong className="float-left">Subtotal:
                                    {product.price.toLocaleString("pt-BR", {
                                        style: "currency",
                                        currency: "BRL"
                                    })}
                                </strong>

                                <button className='bg-zinc-900 p-1 rounded ml-3'
                                   onClick={() => handleAddCarItem(product)} 
                                >
                                    <BsCartPlus size={20} color="#fff" />
                                </button>
                            </div>

                        </div>
                    </section>
                )}
            </main>
        </div>
    )
}