import React from 'react';
import { useState, useEffect } from "react";
import ContactInput from "./ContactInput";
import { useNavigate } from "react-router-dom";
import inputData from "./inputData.json";

import "./../../styles/main/main.css";
import "./contact.css";
import './../../components/hero/hero.css';

import Box from "../../components/hero/Box";
import { BsTelephoneInbound } from 'react-icons/Bs';
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineBusiness } from "react-icons/md";
import { makeRequest } from "../../makeRequest";

const contactData = [
  {
    id: 1,
    icon: <BsTelephoneInbound className="icon"/>,
    title: "Phone",
    para: "548-583-9723",
  },
  {
    id: 2,
    icon: <MdOutlineEmail className="icon"/>,
    title: "Email",
    para: "info@legendarygemstone.com",
  },
  {
    id: 3,
    icon: <MdOutlineBusiness className="icon"/>,
    title: "Address",
    para: "Queens, NY",
  }    
]

export default function Contact() {
  const navigate = useNavigate();
  const [inputApi, setInputApi] = useState(inputData);
  const [message, setMessage] = useState("");
  const [formResponses, setFormResponses] = useState({
    website: "",
    fullname: "",
    cname: "",
    email: "",
    services: "",
    features: [],
  });

  const {
    website,
    fullname,
    cname,
    email,
    services,
    features,
  } = formResponses;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormResponses({
      ...formResponses,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (website) {
      setMessage("Something is wrong...");
      navigate("/");
      return false;

      setFormResponses({
        website: "",
        fullname: "",
        cname: "",
        email: "",
      });
    }

    try {
      const res = await makeRequest.post("/contact", {
        //2. BE connects to api & sends form responses
        fullname,
        cname,
        email,
      });

      setMessage(`${fullname}, your request was successfully submitted.`);

      setTimeout(() => {
        navigate("/");
      }, 2000);

      return await res.data;
    } catch (error) {
      setMessage("Please try again.");
      return error.message;

      setFormResponses({
        website: "",
        fullname: "",
        cname: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <section className="margin70">
      <h2 className="center darkfont">Contact Form</h2>

      <div className="hero left-hero contact responsive">

        <div className="googlemap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.944068093808!2d-73.85479771610443!3d40.719247763424846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25e23c2af73c5%3A0xa674d16f0ab9faec!2sForest%20Hills%20Stadium!5e0!3m2!1sen!2sus!4v1699669843438!5m2!1sen!2sus"
            width="400"
            height="500"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="contact-form center nobkg">
          <div className="request-above-div">
            <h1 className="request-above-div-title">
              Contact Information
            </h1>

            <form
              className="request-above-div-form"
              name="request"
              id="registration"
              method="post"
              onSubmit={handleSubmit}
            >
              <div className="left-form">
                <fieldset>

                  {inputApi.data.map((e, index) => (
                    <ContactInput
                      e={e}
                      index={index}
                      value={formResponses[e.fullname]} //gets the value that was saved to name on form submit
                      handleChange={handleChange}
                    />
                  ))}
                </fieldset>

                <button
                  type="submit"
                  name="formsubmit"
                  id="formsubmit"
                  value="submit"
                  accessKey="n"
                  tabIndex="19"
                  className="formBtn contactbtn" 
                >
                  Submit
                </button>
                <span className="form-error-msg message">{message}</span>
              </div>
            </form>
          </div>
        </div>        
      </div>

      <div className="hero multi-box-row contact responsive">
        {contactData.map(item =>
          <Box data={item} />
        )}
      </div>
    </section>
  );
}