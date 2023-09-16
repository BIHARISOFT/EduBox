import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import GlobelContext from '../GlobalContext/GlobalContext';
import { ShoppingCart } from '../Icons/Icons';
const NavBar = () => {

    const { cartValue } = useContext(GlobelContext);
    let cartVal = cartValue.length;
    return (<>

        <div className="Navbar">
            <div className="NavbarLogo">
                <Link to="/">
                    <h3>BihariSoft ,The Online Edu Shop</h3>
                </Link>
            </div>
            <div className="NavbarLogo">
                <Link to="/ShowPopup">
                    <h3>ShowPopup page</h3>
                </Link>
            </div>
            <div className="Cart">
                <Link to="/Cart" >
                <ShoppingCart ClassNm="IconCart" IconColor="blue" IconSize={2} />
                 <span className="IconCartVal">{cartVal}</span>                    
                </Link>
                <h6>Cart</h6>
            </div>
        </div>
    </>)
}
export default NavBar;