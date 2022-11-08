import { useState, useEffect } from "react";
import { PaystackButton } from "react-paystack";
import { useParams } from "react-router-dom";
import "./App.css";

const Payment = () => {
  const { id } = useParams();
  const publicKey = "pk_live_ce4ed9774696173f1a4fedec341f0e5d702c0d63";
  const [amount, setAmount] = useState(0);
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [course, setCourse] = useState("");
  const [phone, setPhone] = useState("");

  const fetchCourse = async (id) => {
    const res = await fetch(
      process.env.REACT_APP_ENOVATE_API + `/course/view/${id}`
    );
    const data = await res.json();
    console.log(data);
    setCourse(data.course_name);
    setAmount(data.course_price * 100);
  };
  useEffect(() => {
    fetchCourse(id);
  }, []);

  const componentProps = {
    email,
    amount,
    metadata: {
      firstname,
      lastname,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () => {
      const action = process.env.REACT_APP_ENOVATE_API + "/payment/";
      const info = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        coursename: course,
        number: phone,
      };
      console.log(JSON.stringify(info));
      fetch(action, {
        method: "POST",
        body: JSON.stringify(info),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
      alert("Thanks for doing business with us! Come back soon!!");
    },
    onClose: () => {
      alert("Are you sure you want to quit payment?");
    },
  };

  return (
    <div className='App'>
      <div className='container'>
        <div className='checkout'>
          <div className='checkout-form'>
            <form>
              <div className='checkout-field'>
                <label>Firstname</label>
                <input
                  type='text'
                  id='firstname'
                  required
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </div>
              <div className='checkout-field'>
                <label>Lastname</label>
                <input
                  type='text'
                  id='lastname'
                  required
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
              <div className='checkout-field'>
                <label>Email</label>
                <input
                  type='text'
                  id='email'
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='checkout-field'>
                <label>Phone</label>
                <input
                  type='tel'
                  id='phone'
                  required
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className='checkout-field'>
                <label>Course</label>
                <input type='text' id='course' value={course} disabled />
              </div>
            </form>
            <PaystackButton {...componentProps} className='paystack-button' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
