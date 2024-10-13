import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import PageTitle from "../../components/PageTitle/PageTitle"
import BillingDetails from "./BillingDetails"
import "./style.css"

function CheckoutPage(){
    return (
        <div className="checkout">
            <Header/>
                <PageTitle title="Checkout"/>
                <BillingDetails/>
            <Footer/>
        </div>
    )
}

export default CheckoutPage