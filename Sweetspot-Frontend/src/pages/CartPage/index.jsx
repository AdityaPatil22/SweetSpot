import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import PageTitle from "../../components/PageTitle/PageTitle"
import Cart from "./Cart"

function CartPage(){
    return (
        <div className="cart">
            <Header/>
                <PageTitle title="Cart"/>
                <Cart/>
            <Footer/>
        </div>
    )
}

export default CartPage