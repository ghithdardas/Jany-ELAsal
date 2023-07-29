import React from "react";
import styled from "styled-components";
import IImg from "../images/beee.jpg";
import "./contact.css";
import { FiMail } from "react-icons/fi";
import { ImLocation } from "react-icons/im";
import { FiPhone } from "react-icons/fi";
import Footer from "./Footer";

const Main = styled.div`
  background-image: url(${IImg});
  background-size: cover;
  height: 100%;
`;
const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 100px;
  @media screen and (max-width: 795px) {
    flex-direction: column;
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 40px;
  width: 90%;
`;
const RightTittle = styled.h3`
  display: flex;
  float: right;
  direction: rtl;
  color: #cd986f;
  margin: 20px;
  font-size: 25px;
  border-bottom: solid 2px;
  opacity: 0;
  animation: slide_right 0.5s linear forwards;
  animation-delay: 0.7s;
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 18px;
  direction: rtl;
  animation: slide_right 0.5s linear forwards;
  animation-delay: 1s;
  @media screen and (max-width: 640px) {
    margin: 20px 5px;
  }
  @media screen and (max-width: 395px) {
    font-size: 20px;
  }
`;
const Left = styled.div`
  margin: 40px 50px 50px 0px;
  flex: 1;
  @media screen and (max-width: 395px) {
    margin: 40px 25px 30px 20px;
  }
`;

const Location = styled.div`
  display: flex;
`;

const ContactWithUs = () => {
  return (
    <Main>
      <Container>
        <Left>
          <form action="" method="POST">
            <input
              type="text"
              placeholder="الاســـم"
              name="user_name"
              required
            />
            <span className="star">*</span>
            <br />
            <input
              type="text"
              placeholder="رقــم الــمــوبـــايـــل"
              name="user_phone"
              required
            />
            <span className="star">*</span>
            <br />
            <input
              type="email"
              placeholder="الــبـريـد الإلـــكــتــرونــي"
              name="user_email"
            />
            <br />
            <textarea
              rows="5"
              placeholder="أرســـــل لــنــا اســتــفســارك"
              name="message"
            ></textarea>
            <button>
              <h3>Send</h3>
            </button>
          </form>
        </Left>
        <Right>
          <RightTittle>ابــــقَ عـــلــــى تــواصــل</RightTittle>
          <ContactItem
            style={{
              fontSize: "21px",
            }}
          >
            <ImLocation
              style={{ margin: "10px", color: "#cd986f", fontSize: "30px" }}
            />
            المملكة العربية السعودية.
          </ContactItem>
          <ContactItem
            className="ci"
            style={{
              fontSize: "24px",
              fontFamily: "Lucida Sans",
              marginTop: "40px",
            }}
          >
            <FiMail
              style={{ margin: "10px", color: "#cd986f", fontSize: "30px" }}
            />
            info@jany-al-asal.net
          </ContactItem>
          <ContactItem
            style={{
              marginTop: "40px",
              fontFamily: "Lucida Sans",
              fontWeight: "600",
              fontSize: "22px",
            }}
          >
            <FiPhone
              style={{ margin: "10px", color: "#cd986f", fontSize: "30px" }}
            />
            009660000000000
          </ContactItem>
        </Right>
      </Container>
      <Location>
        <iframe
          width="1220"
          height="350"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=Digital%20growth%20%D8%B4%D8%B1%D9%83%D8%A9%20%D8%AF%D9%8A%D8%AC%D9%8A%D8%AA%D8%A7%D9%84%20%D8%AC%D8%B1%D9%88%D8%AB%D8%8C%2039%20%D8%B9%D8%A8%D8%AF%20%D8%A7%D9%84%D8%AD%D9%85%D9%8A%D8%AF%20%D8%B9%D9%88%D8%B6%D8%8C%20%D8%A7%D9%84%D9%85%D9%86%D8%B7%D9%82%D8%A9%20%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%D8%A9%D8%8C%20%D9%85%D8%AF%D9%8A%D9%86%D8%A9%20%D9%86%D8%B5%D8%B1%D8%8C%20%D9%85%D8%AD%D8%A7%D9%81%D8%B8%D8%A9%20%D8%A7%D9%84%D9%82%D8%A7%D9%87%D8%B1%D8%A9%E2%80%AC%204450401%E2%80%AD&t=&z=15&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
      </Location>
      <Footer />
    </Main>
  );
};

export default ContactWithUs;
