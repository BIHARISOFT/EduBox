import React, { useContext } from 'react';
import { calculateSum } from '../CommonService/CommonService';
import CartCard from '../component/CartCard';
import NavBar from '../component/NavBar';
import GlobelContext from '../GlobalContext/GlobalContext';
const MyCart = () => {

    const { cartValue, setCartValue } = useContext(GlobelContext);
    const TotalCartValue = calculateSum(cartValue, "BookPrice", "ItemQnt", "proTwo");
    const TotalCartCount = calculateSum(cartValue, "ItemQnt", "", "proOne");
    return (
        <>
            <NavBar/>
        <h1>Shopping Cart</h1>
            <div className="CartBody">
                <div className="CartBodyLeft" >
                {
                    cartValue.map((item, index) => (

                        <CartCard key={index + "book"} BookId={item.BookId} BookImgSrc={item.BookImgSrc} BookName={item.BookName} BookPrice={item.BookPrice} BookPriceDisCount={item.BookPriceDisCount} BookPublisher={item.BookPublisher} ItemQnt={item.ItemQnt } />
                    ))
                    }
                </div>
                <div className="CartBodyRight">
                    <table className="CartTable">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Mrp</th>
                                <th colSpan="2">Quantity</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartValue.map((item, index) => (
                                    <tr className="TotalCartTxt" key={item.BookName + index}>
                                        <td className="BookPubisher">{item.BookName}</td>
                                        <td>₹&nbsp;{item.BookPrice}</td>
                                        <td>{item.ItemQnt}</td>
                                        <td>{item.BookPrice * item.ItemQnt}</td>
                                    </tr>
                                    
                                ))
                            }
                            
                        
                        </tbody>
                        <tfoot>
                            <tr>
                                <td><h5>Total Item&nbsp;{TotalCartCount}&nbsp;</h5></td>
                                
                                <td colSpan="3" style={{ textAlign: 'right' }}><strong> ₹&nbsp;{TotalCartValue}&nbsp;</strong></td>
                            </tr>
                        </tfoot>
                    </table>
                   
                    <button className="proceedBtn">Proceed to Buy</button>
                </div>
        </div>
       
    </>)
}
export default MyCart;