import { useState } from "react"
import { useOutletContext } from "react-router-dom"
import shop from "./shop.module.css"


function Shop() {
    const [data, setShopingCartCounter, setShoppingCart] = useOutletContext()
    const [values, setValues] = useState({})

    const increment = (id) => {
        setValues((prev) => ({
            ...prev,
            [id]: (Number(prev[id]) || 0) + 1
        }))
    }

    const decrement = (id) => {
        setValues((prev) => ({
            ...prev,
            [id]: Math.max((Number(prev[id]) || 0) - 1, 0)
        }));
    };
    
    const handleInputChange = (id, value) => {
        const number = Number(value);
        setValues((prev) => ({
            ...prev,
            [id]: number > 0 ? number : 0
        }));
        setShopingCartCounter(prev => prev + Number(value))
    };

    const handleFocus = (id) => {
        setValues((prev) => ({
            ...prev,
            [id]: prev[id] === 0 ? "" : prev[id]
        }));
    };

    const handleBlur = (id) => {
        setValues((prev) => ({
            ...prev,
            [id]: prev[id] === "" ? 0 : prev[id]
        }));
    };

    const addToCart = (item) => {
        setShoppingCart((prevCart) => {
            const existing = prevCart.find((prevItem) => prevItem.id === item.id)

            if (existing) {
                return prevCart.map((prevItem) => prevItem.id === item.id ? { ...prevItem, quantity: prevItem.quantity + Number(value)} : prevItem)
            } else {
                return [...prevCart, { id: item.id, title: item.title, price: item.price, quantity: Number(value) }]
            }
        })
    }

    return (
        <div className={shop.container}>
        {
            data.map((item) => {
                return (
                    <div className={shop.itemContainer} id={item.id}>
                <img src={item.image} className={shop.image}/>
                <div className={shop.information}>
                    <p>{item.title}</p>
                    <p>{`${item.category} - $${item.price}`}</p>
                </div>
                <div className={shop.controls}>
                    <button type="submit" onClick={decrement}>-</button>
                    <input type="text" value={values[item.id]} onChange={(e) => {
                        
                        if (Number(e.target.value) > 0) {
                            setValues(e.target.value)
                        }
                        else {
                            setValues(0)
                        }
                        }}
                        onFocus={() => {if (values[id] === 0) setValues("")}}
                        onBlur={() => {if (values[id] === "") setValues(0)}}/>
                    <button type="submit" onClick={increment}>+</button>
                    </div>
                    <button type="button" onClick={() => {
                        addToCart(item)
                        setValues(0)
                        }} className={shop.addToCart}>Add to cart</button>
                </div>
                )
            })
        }
        </div>
    )
}


export default Shop