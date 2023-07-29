import React from "react";
import "./Home.css";
import img5 from "../images/55.png";
import img6 from "../images/66.png";
import img7 from "../images/77.png";
import img8 from "../images/strategy.jpg";
import Footer from "./Footer";
import Steps from "./Steps";

const Home = () => {
  return (
    <div className="home-page">
      <div id="part1">
        <div className="p1-animation">
          <div className="up">
            <img className="img5" src={img5} />
            <img className="img6" src={img6} />
          </div>
          <div className="down">
            <img className="img7" src={img7} />
          </div>
        </div>
      </div>
      <div id="counter">
        <div class="card">
          <i class="fas fa-bolt"></i>
          <span class="num" data-val="8">
            8
          </span>
          <span id="word" class="text">
            CONSCIOUSNESS
          </span>
        </div>
        <div class="card">
          <i class="fas fa-tools"></i>
          <span class="num" data-val="5">
            5
          </span>
          <span class="text">TOOLS</span>
        </div>
        <div class="card">
          <i class="fas fa-seedling"></i>
          <span class="num" data-val="2">
            2
          </span>
          <span class="text">GENERATION</span>
        </div>
      </div>
      <div className="strategy">
        <div className="left">
          <img src={img8} />
        </div>
        <div className="right">
          <h2>استراتيجية جني العسل</h2>
          <p>
            يمر الإنسان بمراحل من الخبرة العميقة وبسبب عامل الزمن لا يستطيع
            اكساب تلك الخبرة لأطراف أخرى ولا يستطيع ان يحولها الى نموذج تنفيذي
            يستطيع العمل من خلاله فيفقد هذا الخبير أمله في ان يحقق النجاح الذي
            يرجوه أو الثمرة التي يتمناها فيتحول الى خبرة خاملة غير فاعلة في
            المجتمع ومن خلال التنقيح بين خبرته الفنية والقوة التنفيذية للأجيال
            القادمة نجعله يجني العسل وتتحول خبرته إلى خبرة تنموية فاعلة.
          </p>
        </div>
      </div>
      <div className="generations">
        <p>
          وتــعتــبــر اسـتـراتـيـجـيـة جـنـي الـعـسـل مــن الاسـتـراتـيجـيـات
          الكبرى الـتـي يـتـم العمل عليها من خلال مجموعة من النظريات الاجتماعية
          , ويبنى عليها مـجـمـوعــة مــن نـمـاذج الـمـحـتـرفـيـن و "نـمـوذج
          بـيـن".
        </p>
        <h1>تـــــنــــــاقـــــــح الأجـــــــيــــــال</h1>
        <p id="consider">
          تواجه التنمية معضلتين : الفجوة العمرية , وما يجب أن يحمله كل عصر ،
          ومزج هاتين المعضلتين يتم من خلال نظام بيئي موحد يعد بدوره جزءًا من
          نظام بيئي اجتماعي أكبر يتغلب على حدود البنية الاجتماعية القائمة ويوفر
          صلة بين الماضي والحاضر والمستقبل من خلال دمج الأجيال الماضية والحالية
          والقادمة من خلال أدوات ديموغرافية مبنية على فجوات عمرية تضمن إعادة
          الجيل حتى حدوث التطور.
        </p>
      </div>
      {/* <Steps /> */}
      <Footer />
    </div>
  );
};

export default Home;
