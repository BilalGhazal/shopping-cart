import navbar from "./navbar.module.css"
import { Link, NavLink } from "react-router-dom"

function Navbar({shoppingCartCounter}) {
    return (
        <nav className={navbar.container}>
            <div>
                <Link to="/" className={navbar.storeName}>STORE</Link>
            </div>
            
            <ul className={navbar.list}>
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? `${navbar.navItem} ${navbar.active}` : `${navbar.navItem}`}>Home</NavLink>
                </li>
                <li >
                    <NavLink to="/shop" className={({ isActive }) => isActive ? `${navbar.navItem} ${navbar.active}` : `${navbar.navItem}`}>Shop</NavLink>
                </li>
            </ul>

            <button type="button" className={navbar.bttn} aria-label="Open shopping cart">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                {shoppingCartCounter > 0 && <span className={navbar.shoppingCartCounter}>{shoppingCartCounter}</span>}
            </button>
        </nav>
    )
}

export default Navbar