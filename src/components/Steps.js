import React from "react";
import Img1 from "../images/str-1.jpg";
import Img2 from "../images/str-2.jpg";
import Img3 from "../images/str-3.jpg";
import Img4 from "../images/str-4.png";
import Img5 from "../images/str-5.jpg";
import Img6 from "../images/str-6.jpg";
import "./Steps.css";
import Footer from "./Footer";

const Steps = () => {
  return (
    <div className="container" id="steps">
      <div className="step">
        <div className="steps-left">
          <img src={Img1} />
        </div>
        <div className="steps-right">
          <div className="title">
            <h1>مــراحـــل جــنــي الــعــســـل</h1>
          </div>
          <h2>1-إعادة التعريف</h2>
          <p>
            إعادة تشكيل نمط الخبرة السابقة الغير مدرك لدى الخبير في نموذج عمل
            مبني على علامة تجارية تجمع بين العلامة التجارية الطبيعية والعلامة
            التجارية الاعتبارية.
          </p>
        </div>
      </div>
      <div className="step" id="step2">
        <div className="steps-right">
          <h2>2-التكامل الكلي في السلاسل</h2>
          <p>
            اﻻﻧﺪﻣﺎج اﻟﺘﻨﻈﻴﻤﻲ واﻟﻬﻴﻜﻠﻲ ﻣﻦ ﺧﻼل ﻣﺠﺎﻟﺲ إدارة ﻳﺪﻣﺞ ﺑﻴﻦ ﻣﺠﻤﻮﻋﺔ أﺟﻴﺎل.
          </p>
        </div>
        <div className="steps-left">
          <img src={Img2} />
        </div>
      </div>
      <div className="step">
        <div className="steps-left">
          <img src={Img3} />
        </div>
        <div className="steps-right">
          <h2>3-منطقة التجميع</h2>
          <p>
            اﻟﻤﻨﻄﻘﺔ اﻟﺘﻲ ﻳﺘﺤﻮل ﻓﻴﻬﺎ اﻷﺻﻞ ﻣﻦ أﺻﻞ ﻣﻌﺮﻓﻲ إﱃ أﺻﻞ ﻣﺎدي ﻳﺨﻀﻊ ﻟﻠﺘﻘﻴﻴﻢ
            اﻟﻤﺎﻟﻲ.
          </p>
        </div>
      </div>
      <div className="step" id="step4">
        <div className="steps-right">
          <h2>4-تــكــويــن الأصـــول</h2>
          <p>وهـــي مـــرحــلــة الــتــحـــول إلـى نــمــوذج أصـــول.</p>
        </div>
        <div className="steps-left">
          <img src={Img4} />
        </div>
      </div>
      <div className="step">
        <div className="steps-left">
          <img src={Img5} />
        </div>
        <div className="steps-right">
          <h2>5-العملية الديمغرافية</h2>
          <p>
            تنشأ العملية الديمغرافية من خلال الدمج بين العلاقات والعلامات
            التجارية من خلال صيغة + 8 أي أن الفرق بين الجيل والجيل + 8 سنوات
            وتتكون العلامة التجارية من جيلين الأول مستوى الخبير ومستوى الجيل
            اللاحق في مدة + 16 سنة.
          </p>
        </div>
      </div>
      <div className="step" id="step6">
        <div className="steps-right" data-aos="fade-up">
          <h2>6-تشكيل القيمة</h2>
          <p>
            خلق وبناء القيمة الغارقة وإعادة تكوين القيم الأخرى مثل القيمة
            الاقتصادية والاحتكارية والسوقية ..الخ من خلال أدوات إيجاد القيمة في
            المجتمع.
          </p>
        </div>
        <div className="steps-left">
          <img src={Img6} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Steps;
