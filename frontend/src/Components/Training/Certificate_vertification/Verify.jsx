import React, { useState } from "react";
import axios from "axios";
import Navbar from "../../Navbar";
import Footer from "../Python/Footer";
import Helmet from "react-helmet";

const Verify = () => {
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());

  gtag("config", "G-R3BH2K650Y");
  const WP_Link = {
    custom: "https://wa.link/2oniai",
    default: "https://wa.link/98x0l7",
  };

  const [certificateId, setCertificateId] = useState("");
  const [responseMessage, setResponseMessage] = useState(null);
  const [certificateInfo, setCertificateInfo] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form reload

    try {
      document.getElementById("submit-btn").innerHTML = "Loading...";
      const response = await axios.post(
        "https://bytecamp-teal.vercel.app/api/certificate/verify",
        {
          certificateId,
        }
      );

      setResponseMessage(response.data.message);
      document.getElementById("submit-btn").innerHTML = "Submit";

      if (response.data.message === "Certificate is valid") {
        setCertificateInfo(response.data); // Store the certificate info
      } else {
        setCertificateInfo(null); // Clear the certificate info if invalid
      }
    } catch (error) {
      console.error(error);
      document.getElementById("submit-btn").innerHTML = "Submit";
      setResponseMessage(
        "Error verifying certificate. Please try again later."
      );
      setCertificateInfo(null); // Clear any previous certificate info
    }
  };

  // Define styles based on the validity of the certificate
  const messageStyle =
    responseMessage === "Certificate is valid"
      ? "text-green-500" // Green color for valid certificate
      : "text-red-500"; // Red color for invalid certificate or error

  return (
    <>
      <Helmet>
        <title>Bytecamp Certificate Verification</title>
        <meta
          name="description"
          content="Verify your Bytecamp certificate. Enter your certificate ID to check the status."
        />
        <meta
          name="keywords"
          content="Bytecamp, certificate verification, online courses, verify certificate"
        />
        <meta property="og:title" content="Bytecamp Certificate Verification" />
        <meta
          property="og:description"
          content="Verify the your Bytecamp certificate. Enter your certificate ID to check the status."
        />
        <meta
          property="og:url"
          content="https://bytecamp.in/certificate_verify"
        />
        <meta property="og:type" content="website" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-R3BH2K650Y"
        ></script>
      </Helmet>
      <Navbar url={WP_Link} />
      <h1 className="lg:text-xl text-5xl font-semibold text-center my-10">
        Certificate Verification
      </h1>
      <main className="lg:w-[30%] w-full py-3 mx-auto flex flex-col justify-center items-center border border-1 border-black rounded-md ">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center"
        >
          <input
            autoCapitalize="on"
            type="text"
            className="outline-0 border-1 border-black border px-4 py-1 h-20 lg:h-auto lg:text-base text-4xl rounded-sm"
            value={certificateId.toUpperCase()}
            onChange={(e) => setCertificateId(e.target.value.toUpperCase())}
            placeholder="Enter Certificate ID"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 lg:my-3 text-white lg:px-3 lg:py-1 lg:rounded-sm text-4xl lg:text-base px-12 py-3 my-10 rounded-lg"
            id="submit-btn"
          >
            Submit
          </button>
        </form>
        {/* Displaying the response message with dynamic color */}
        <h1
          className={`${messageStyle}  text-4xl lg:text-base my-7 lg:my-0 lg:mt-4`}
        >
          {responseMessage}
        </h1>
        {certificateInfo && (
          <div className="mt-4 w-[80%] mx-auto text-4xl lg:text-base my-7 lg:my-0 lg:mt-4">
            <div className="flex justify-center items-center">
              <div className="w-full">
                <ul>
                  <li className="flex justify-between lg:mb-2 mb-4">
                    <p className="font-semibold">Student Name:</p>
                    <p>{certificateInfo.info.username}</p>
                  </li>
                  <li className="flex justify-between lg:mb-2 mb-4">
                    <p className="font-semibold">Course Name:</p>
                    <p>{certificateInfo.info.course}</p>
                  </li>
                  <li className="flex justify-between lg:mb-2 mb-4">
                    <p className="font-semibold">Final Assessment Score:</p>
                    <p>{certificateInfo.info.mark}</p>
                  </li>
                  <li className="flex justify-between lg:mb-2 mb-4">
                    <p className="font-semibold">Date of Certification:</p>
                    <p>{certificateInfo.info.doc}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer link={WP_Link} />
    </>
  );
};

export default Verify;
