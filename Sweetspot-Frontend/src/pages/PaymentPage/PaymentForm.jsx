import { Formik, Form, Field, ErrorMessage } from "formik";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../../store/slices/cartSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import "./PaymentForm.css";

const PaymentValidationSchema = Yup.object().shape({
  cardHolderName: Yup.string()
    .required("Card Holder Name is required")
    .matches(/^[a-zA-Z\s]+$/, "Name should contain only letters")
    .min(2, "Name is too short")
    .max(50, "Name is too long"),

  cardNumber: Yup.string()
    .required("Card Number is required")
    .matches(
      /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/,
      "Card Number must be in format: XXXX XXXX XXXX XXXX"
    )
    .test("luhn-validation", "Invalid Card Number", (value) => {
      if (!value) return false;
      const cleanedValue = value.replace(/\s/g, "");
      return cleanedValue;
    }),

  expiry: Yup.string()
    .required("Expiry Date is required")
    .matches(/^(0[1-9]|1[0-2])\/\d{4}$/, "Expiry must be in MM/YYYY format")
    .test("expiry-validation", "Card has expired", (value) => {
      if (!value) return false;
      const [month, year] = value.split("/");
      const expiryDate = new Date(parseInt(year), parseInt(month) - 1);
      return expiryDate > new Date();
    }),

  cvv: Yup.string()
    .required("CVV is required")
    .matches(/^\d{3}$/, "CVV must be 3 digits"),
});

function PaymentForm() {
  const [payAlert, setPayAlert] = useState("");
  const navigate = useNavigate();
  const cartTotal = useSelector(selectCartTotal);
  const finalAmount = Math.round(cartTotal - cartTotal / 10 + 50);

  const initialValues = {
    cardHolderName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  };

  const handleSubmit = (values, { setSubmitting }) => {
    try {
      setSubmitting(false);
      setPayAlert("Payment Successful");
      setTimeout(() => {
        setPayAlert("");
        navigate("/")
      }, 2000);
    } catch (error) {
      console.error("Payment submission error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  const formatCardNumber = (value) => {
    return value
      .replace(/\s/g, "")
      .replace(/(\d{4})/g, "$1 ")
      .trim()
      .slice(0, 19);
  };

  return (
    <div className="container p-0 mb-5 mt-5">
      <div className="card px-4">
        {payAlert && (
          <div className="alert alert-success mt-4" role="alert">
            {payAlert}
          </div>
        )}
        <p className="h2 fw-bold d-flex justify-content-center py-3">
          Payment Details
        </p>
        <Formik
          initialValues={initialValues}
          validationSchema={PaymentValidationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, setFieldValue }) => (
            <Form>
              <div className="row gx-3">
                <div className="col-12">
                  <div className="d-flex flex-column">
                    <p className="text mb-1">Card Holder Name</p>
                    <Field
                      name="cardHolderName"
                      type="text"
                      placeholder="Name"
                      className="payment-form-control mb-2"
                    />
                    <ErrorMessage
                      name="cardHolderName"
                      component="div"
                      className="text-danger small mb-1"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-flex flex-column">
                    <p className="text mb-1">Card Number</p>
                    <Field
                      name="cardNumber"
                      type="text"
                      placeholder="1234 5678 4356 7823"
                      className="payment-form-control mb-2"
                      onChange={(e) => {
                        const formatted = formatCardNumber(e.target.value);
                        setFieldValue("cardNumber", formatted);
                      }}
                    />
                    <ErrorMessage
                      name="cardNumber"
                      component="div"
                      className="text-danger small mb-1"
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex flex-column">
                    <p className="text mb-1">Expiry</p>
                    <Field
                      name="expiry"
                      type="text"
                      placeholder="MM/YYYY"
                      className="payment-form-control mb-2"
                    />
                    <ErrorMessage
                      name="expiry"
                      component="div"
                      className="text-danger small mb-1"
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex flex-column">
                    <p className="text mb-1">CVV/CVC</p>
                    <Field
                      name="cvv"
                      type="password"
                      placeholder="***"
                      className="payment-form-control mb-2 pt-2"
                    />
                    <ErrorMessage
                      name="cvv"
                      component="div"
                      className="text-danger small mb-1"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <button
                    type="submit"
                    className="btn btn-primary-payment mt-4"
                    disabled={isSubmitting}
                  >
                    <div className="text-white text-decoration-none">
                      <span className="ps-3 text-white">
                        Pay ₹ {finalAmount}
                      </span>
                      <span className="fas fa-arrow-right text-white"></span>
                    </div>
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default PaymentForm;
