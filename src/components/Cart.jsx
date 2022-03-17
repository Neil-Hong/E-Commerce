import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { delCart } from '../redux/actions'

export const Cart = () => {

    const dispatch = useDispatch()
    const state = useSelector((state) => state.handleCart)

    const handleClose = (item) => {
        dispatch(delCart(item))
    }

    const cartItems = (item) => {
        return (
            <div className={"px-4 my-5 bg-light rounded-3"} key={item.id}>
                <div className={"container py-4"}>
                    <button onClick={()=>handleClose(item)} className={"btn-close float-end"} aria-label={"Close"}></button>
                    <div className={"row justify-content-center"}>
                        <div className={"col-md-4"}>
                            <img src={item.image} alt={item.title} height={"200px"} width={"180px"} />
                        </div>
                        <div className={"col-md-4"}>
                            <h3>{item.title}</h3>
                            <p className={"lead fw-bold"}>${item.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const emptyCart = () => {
        return(
            <div className={"px-4 my-5 bg-light rounded-3 py-5"}>
                <div className={"container py-4"}>
                    <div className={'row'}>
                        <h3>Your cart is empty</h3>
                    </div>
                </div>
            </div>
        )
    }

    const checkout = () => {
        return(
            <div className={"container"}>
                <div className={"row"}>
                    <NavLink to="/checkout" className={"btn btn-outline-primary mb-5 w-25 mx-auto"}>Proceed to checkout</NavLink>
                </div>
            </div>
        )
    }

    return (
        <>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}
            {state.length !== 0 && checkout()}
        </>
    )
}
