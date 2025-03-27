import React from "react";
import "../css/about.css";
import certificate from "../images/certificate.jpg";

const About = () => {
  return (
    <div className="about">
      <h2>Our Mission</h2>
      <p>To deliver efficient, compassionate, and respectful cremation services, ensuring the highest standards of hygiene, safety, and environmental sustainability. We aim to support grieving families with empathy and care, offering a serene and harmonious environment for the final journey of their loved ones.</p>
      <h2>Our Vision</h2>
      <p>To provide a peaceful and dignified space for the last rites, honoring the departed with respect, compassion, and a commitment to the well-being of the community, fostering an environment of tranquility and spiritual solace.
      </p>
      <div className="objective">
        <h2>Objective</h2>
        <ol>
          <li>मनोहरपुरा मोक्षधाम की सम्पूर्ण देखभाल करना एवं आवश्यकतानुसार जनोपयोगी नियम बनाना।</li>
          <li>साफ-सफाई एवं विद्युत लाईट (रोशनी) की उचित व्यवस्था कराना।</li>
          <li>महानुभावों एवं आगुन्तकों के लिए बैठने की उचित व्यवस्था करना।</li>
          <li>टीन शेडों की उचित व्यवस्था करना एवं सुरक्षा हेतु सी.सी.टी.वी. कैमरें लगवाना।</li>
          <li>नहाने, धोने एवं कपड़े बदलने की व्यवस्था करना एवं शौचालय का निर्माण कराना।</li>
          <li>पानी की निकासी के लिए उचित व्यवस्था करना।</li>
          <li>पानी हेतु बोरिंग/बोरवेल की व्यवस्था करना एवं पीने के शुद्ध पानी (वाटर कूलर मय आर.ओ.) की व्यवस्था करना।</li>
          <li>सत्संग कक्ष, कार्यालय, मंदिर और अन्य धार्मिक/सामाजिक आदि कार्यो हेतु भवन का निर्माण कराना।</li>
          <li>गरीब/निराश्रित/असहाय/लावारिस आदि के शवों हेतु मोक्षधाम में निःशुल्क दाह संस्कार कराना और अस्थि विसर्जन की व्यवस्था कराना।</li>
          <li>मंदिर में पूजन एवं अन्य धार्मिक कार्यो के लिए अस्थायी पुजारियों की व्यवस्था कराना।</li>
          <li>उचित या लागत मूल्य पर दाह संस्कार सामग्री की व्यवस्था कराना।</li>
          <li>सरकार द्वारा श्मशान एवं पार्क आदि हेतु दी गयी रियायतों एवं सुविधाओं का लाभ लेना और तदानुसार मोक्षधाम में व्यवस्था करना।</li>
          <li>मोक्षधाम को अतिक्रमण मुक्त कराना और अतिक्रमण से रोकना।</li>
          <li>सांसद/विधायक/पार्षद/नगर निगम/जयपुर विकास प्राधिकरण/ भामाशाह/सीएसआर कोष वाली संस्थाओं/एन.जी.ओ. आदि के सहयोग से विकास एवं जीर्णोद्धार कार्य कराना।</li>
          <li>वैतनिक कर्मचारियों एवं गार्ड की नियुक्ति करना।</li>
          <li>संस्था के सदस्य या स्थानीय ग्रामवासी से प्राप्त सुझावों पर विचार।</li>
        </ol>
      </div>
      <h2>Certificate</h2>
      <div className="certificate">
        <img src={certificate} alt="certificate" />
      </div>
    </div>
  );
};

export default About;
