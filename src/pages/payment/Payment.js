import { useState, useEffect } from "react";
import { PaystackButton } from "react-paystack";
import { SingleCourse } from "../../config/courseApi";
import { useParams } from "react-router-dom";
import "./App.css";

const Payment = () => {
  const { id } = useParams();
  const publicKey = "pk_live_ce4ed9774696173f1a4fedec341f0e5d702c0d63";
  const [amount, setAmount] = useState(0);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const fetchCourse = async (id) => {
    const res = await fetch(SingleCourse(id));
    const data = await res.json();
    setAmount(data.course_price * 100);
  };
  useEffect(() => {
    fetchCourse(id);
  }, []);

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! Don't leave :("),
  };

  return (
    <div className="App">
      <div className="container">
        <div className="checkout">
          <div className="checkout-form">
            <form>
              <div className="checkout-field">
                <label>Name</label>
                <input
                  type="text"
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="checkout-field">
                <label>Email</label>
                <input
                  type="text"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="checkout-field">
                <label>Phone</label>
                <input
                  type="text"
                  id="phone"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </form>
            <PaystackButton {...componentProps} className="paystack-button" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
