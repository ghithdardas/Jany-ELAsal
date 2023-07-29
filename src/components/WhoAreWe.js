import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import IImg from "../images/beee.jpg";
const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-image: url(${IImg});
  background-size: cover;
  object-fit: contain;
  /* position:relative ;
  isolation:isolate;
  ::after{
    content:'' ;
    position:absolute ;
    background:#fff ;
    z-index:-1 ;
    inset:0;
    opacity:0.1 ;
  }  */
`;

const MainTittle = styled.h1`
  direction: rtl;
  color: #e78239;
  /* border-bottom: solid 2px; */
  margin-bottom: 20px;
`;
const Text = styled.p`
  direction: rtl;
  font-size: 20px;
  /* width: 1300px; */
  color: #fff;
  margin: auto;
  line-height: 40px;
  @font-face {
    font-family: "FairouzArabic";
    src: url(font/Fairuz-Normal.otf);
  }
  opacity: 0;
  animation: slide_top 0.3s linear forwards;
  animation-delay: 1s;
`;
const ServDesc = styled.ul`
  color: #fff;
  font-size: 1.3rem;
  text-align: right;
  @media screen and (max-width: 480px) {
    width: 100%;
    direction: ltr;
  }
`;
const ServDescItem = styled.li`
  text-align: right;
  direction: rtl;
  margin-bottom: 20px;
  margin-right: 15px;
`;
const Service = styled.div`
  margin-bottom: 50px;
`;
const Main = styled.div`
  margin: auto;
  width: 90%;
  @media screen and (max-width: 1000px) {
    width: 80%;
    font-size: 15px;
  }
`;

const WhoAreWe = () => {
  return (
    <Container>
      <Main>
        <MainTittle style={{ marginTop: "40px" }}>
          Honey Harvesting <span style={{ color: "#fff" }}> | </span>جــنــي
          العــســل
        </MainTittle>
        <Text>
          وكـالـة إعـلانـيـة وتـسـويـقـيـة مـتـكـامـلـة الــخـدمـات مـتـخـصـصـة
          فــي مــجـال الـتـسـويـق الالــكـتـرونـى والـحـلـول الـتـسـويـقـيـة
          الـرقـمـيـة مـن خـلال إدارة حـسـابـات ومـنـصـات الـتـواصـل
          الاجـتـمـاعــي، وبـرمـجـة وتـصـمـيـم الـمـواقــع الالـكـتـرونـيـة ، و
          خـدمـات الـتـصـمـيـم الـجـرافـيـك والـخـدمـات الإنـتـاجـيـة
          الـمـرئـيـة الـمـخـتـلـفـة. لـتـعـزيـز ظـهـور الـعـلامـة الـتـجـاريـة
          عـبـر الإنـتـرنـت و خـلـق عـلاقـة قـويـة بـيـن الـعـمـلاء والـجـمـهـور
          الـمـستـهـدف مـن خـلال إنـشـاء اسـتـراتـيـجـيـات تـسـويـق رقـمـيـة
          مـخـصـصـة تـتـوافـق مــع مـتـطـلـبـات عـمـل الـعـمـيـل.
          <br />
          <br />
          <MainTittle>رؤيـتـنـا</MainTittle>
          تــعــزيــز وعـــي الــعــمــلاء تــجــاه الـــعــلامــات
          الــتــجــاريــة، وتــحســـيـن مــبـيــعــاتــهــا، وزيــادة
          نــمــوهـــا مــن خــلال تــقــديــم حــمــلات تــســويــق
          إبــداعــيــة ذات نــتــائــج مــلــمــوســـة.
          <br />
          <br />
          <br />
          <MainTittle>مـهـمـتـنـا</MainTittle>
          نــصــنــع أفــكــارًا إبــداعــيــة ونــقــدم خــدمـــات
          مــصــمــمــة خــصــيــصًــا لــمــصــلــحــة عــمــلائــنــا.
          <br />
          <br />
          <br />
          <MainTittle>مـــاذا يـميـيزنا؟</MainTittle>
          <Service>
            <ServDesc>
              <ServDescItem>
                الدقة والمهارة في كتابة المحتوي وإعداد الإعلانات .
              </ServDescItem>

              <ServDescItem>
                الابتكار المستمر و التطوير الدائم في الافكار .
              </ServDescItem>
              <ServDescItem>
                المحافظة التامة علي سرية البيانات الخاصة بالعملاء.
              </ServDescItem>
              <ServDescItem>
                سرعة الرد و التواصل مع العميل من بداية طلب الخدمة إلى تنفيذها
                بالكامل بأقل وقت ممكن.
              </ServDescItem>
              <ServDescItem>جدولة مرنة توفّر عليك الوقت.</ServDescItem>
              <ServDescItem>أفضل التحليلات للتواصل الاجتماعي.</ServDescItem>
              <ServDescItem>
                فريق متكامل من التقنيين والمطورين مجهز بكل الأدوات لدعم عملائنا
                .
              </ServDescItem>
              <ServDescItem>
                متخصصون فى خدمات التصميم، التصوير ، الانتاج ، البرمجة .
              </ServDescItem>
            </ServDesc>
          </Service>
        </Text>
      </Main>
      <Footer />
    </Container>
  );
};

export default WhoAreWe;
