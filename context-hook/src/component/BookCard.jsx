import { useContext } from "react";
import { BookList } from "../DbFile/BookList";
import GlobelContext from "../GlobalContext/GlobalContext";
import PopupBox from "./PopupBox";

const BookCard = (props) =>
{
    const { cartValue, setCartValue, setShowPopupBox } = useContext(GlobelContext);

    const { BookImgSrc, BookName, BookPrice, BookPriceDisCount, BookPublisher, BookId } = props;

    const AddProductInCard = (Item) => {
        const isAvailabe = cartValue.some(obj => obj.BookId === Item);
        if (!isAvailabe) {
            const CartItem = BookList.find((bookItem) => { return bookItem.BookId === Item });

            setCartValue((pre) => ([...pre, CartItem]));
            setShowPopupBox(<PopupBox Message="Item Successfully Added In Your Cart,Go Cart to Buy" RedirectUrl="/Cart" IsSuccess={true} IsWarning={false} IsError={false} />);
        }
        else
        {
            setShowPopupBox(<PopupBox Message="Allready In Cart,Go To Cart to See" RedirectUrl="/Cart" IsSuccess={false} IsWarning={true} IsError={false} />);
        }

       
        
    }
    return (
        <>
            <div className="BookCard">
                <img className="BookCardImg" src={BookImgSrc} alt={BookPublisher} />
                <div>
                    <span className="BookTitle">{BookName}</span><br/>
                    <span className="BookPubisher">{BookPublisher}</span><br/>
                </div>
                <div className="BookPriceText">
                    <span>₹&nbsp;{BookPrice}&nbsp;</span>
                    <span className="BookPrice">₹&nbsp;{BookPriceDisCount}&nbsp;&nbsp;</span>
                    <button className="CartBtn" onClick={() => { AddProductInCard(BookId)} }>Add Cart</button>
                    <br />
                </div>
            </div>
            
        </>
    );
}
export default BookCard;