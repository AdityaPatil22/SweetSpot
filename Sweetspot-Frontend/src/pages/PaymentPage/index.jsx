import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import "./style.css"
import PageTitle from "../../components/PageTitle/PageTitle"
import PaymentForm from "./PaymentForm"

function PaymentPage(){
    return (    
        <div className="payment-page">
            <Header/>
            <PageTitle title="Payment"/>
            <PaymentForm/>
            <Footer/>
        </div>
    )
}

export default PaymentPage