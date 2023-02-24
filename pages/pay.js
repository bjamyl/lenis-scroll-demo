import React from "react";
import Head from "next/head";
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
    alert("Success");
  };

  const onClose = () => {
    alert("Failed");
  };

  const initializePayment = usePaystackPayment(config);

  return (
    <div>
      <Head>
        <title>Payment Page</title>
        <meta name="description" content="Confirm Payment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
