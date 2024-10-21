import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy - AnKu Tech"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/policy.jpg"
            alt="policy"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-5 p-5">
        <h2>Privacy Policy</h2>
          <p>
            At ankutech, your privacy is important to us. We collect information
            like your name, email, and payment details to process orders and
            improve your experience.
          </p>
          <p>
            We use cookies to enhance your visit. Your data is kept secure, and
            we don’t share it with third parties unless necessary for business
            operations.
          </p>
          <p>
            By using our site, you agree to our privacy practices. For any
            questions, contact us at support@ankutech.com.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
