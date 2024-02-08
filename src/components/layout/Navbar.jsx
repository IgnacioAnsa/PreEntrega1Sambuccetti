import { BsCart2 } from "react-icons/bs";
import CartWidget from "../common/CartWidget";

export const Navbar = ()=>{
    return <div>
        <h3>logo</h3>
        <ul>
            <li>remeras</li>
            <li>buzos</li>
            <li>pantalones</li>
        </ul>
        <h4>carrito</h4>
        <CartWidget/>
    </div>
}