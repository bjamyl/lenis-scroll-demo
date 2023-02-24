import React from "react";
import { usePaystackPayment } from "react-paystack";

export default function Pay() {
  const config = {
    reference: new Date().getTime().toString(),
    email: "alhassanjamil0@gmail.com",
    currency: "GHS",
    amount: 10 * 100,
    publicKey: "pk_live_a808ad2909b00a5bde45950a88cf1cd50c3ff1ed",
  };
  const onSuccess = (reference) => {
    alert('Success')
  };

  const onClose = () => {
    alert('Failed')
  };

  const initializePayment = usePaystackPayment(config);

  return (
    <div>
      <section>
        <h1>Do Not Mess With Devs!</h1>
        <button
          onClick={() => {
            initializePayment(onSuccess, onClose);
          }}
        >
          Get my shid back
        </button>
      </section>
    </div>
  );
}
