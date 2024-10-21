import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - AnKu Tech"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="aboutus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-center mt-2">
           Welcome to ankutech, your premier destination for high-quality computer and mobile accessories. We are passionate about technology and committed to providing our customers with the best products and services. At ankutech, we believe that technology should enhance your life, making it more convenient, efficient, and enjoyable.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
