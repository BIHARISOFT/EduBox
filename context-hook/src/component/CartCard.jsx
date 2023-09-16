import { useContext } from "react";
import { BookList } from "../DbFile/BookList";
import GlobelContext from "../GlobalContext/GlobalContext";
import PopupBox from "./PopupBox";

const CartCard = (props) => {
    const { cartValue, setCartValue, setShowPopupBox } = useContext(GlobelContext);

    const { BookImgSrc, BookName, BookPrice, BookPriceDisCount, BookPublisher, BookId, ItemQnt } = props;

    const DeleteProductFromCard = (Item) => {

        const CartItem = cartValue.filter((bookItem) => { return bookItem.BookId !== Item });

        setCartValue((pre) => (CartItem));
        setShowPopupBox(<PopupBox Message="Item Deleted" RedirectUrl="/Cart" IsSuccess={false} IsWarning={false} IsError={true} />);

    }

    const AddNewItemInCard = (event, Item) => {
        const { value } = event.target;
       
        const CartItem = cartValue.filter((bookItem) => {
            if (bookItem.BookId === Item) {
                return bookItem.ItemQnt = parseInt(value);
            }
            else {
                return bookItem;
            }
        });
       
        setCartValue((pre) => (CartItem));

    }

    return (
        <>
            <div className="CartCard">
                <div className="CartCardLeft">
                    <img className="CartCardImg" src={BookImgSrc} alt={BookPublisher} />
                </div>
                <div className="CartCardRight">
                    <span className="CartTitle">{BookName}</span><br />
                    <span className="BookPubisher">By&nbsp; {BookPublisher}</span><br />

                    <span>₹&nbsp;{BookPrice}&nbsp;</span>
                    <br />
                    <br />
                    <br />
                    <br />
                    <select className="CartValue" value={ItemQnt} onChange={(event) => { AddNewItemInCard(event, BookId) }} >
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                    </select>
                    <button className="DeleteBtn" onClick={() => { DeleteProductFromCard(BookId) }}>Delete</button>
                    <br />
                </div>

            </div>

        </>
    );
}
export default CartCard;