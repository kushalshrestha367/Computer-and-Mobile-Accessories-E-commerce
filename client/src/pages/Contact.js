import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall} from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact us - AnKu Tech"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contact.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
          Need assistance or have questions about our products? We're here for you 24/7! Don't hesitate to reach out at any time.
          </p>
          <p className="mt-3">
            <BiMailSend /> : Ankutech2024@gmail.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 9823900155, 9823900156
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
