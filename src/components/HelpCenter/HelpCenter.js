import React, { useState } from 'react';
import './HelpCenter.css';

const HelpCenter = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      id: 1,
      question: "Jinsi gani nitaweza kufanya DEPOSIT kama natumia Mobile Application? ",
      answer: (
        <ul>
          <li>Fungua Application halafu Click "MENU"</li>
          <li>Kwa juu kulia utaona neno "Deposit"</li>
          <li>Click hapo halafu chagua mtandao uliojisajilia(Kama ni Voda chagua Vodacom, Kama ni Tigo chagua Tigo, kama ni Airtel chagua Airtel etc)</li>
          <li>Ingiza kiasi unachotaka kuweka halafu kuna ujumbe utatokea ukikutaka kuingiza namba ya siri, malizia kwa kuingiza namba ya siri ili kukamilisha kuweka pesa</li>
        </ul>
      )
    },
    {
      id: 2,
      question: "Nawezaje kutumia CODE YA MIKEKA inayotumwa kama natumia Application?",
      answer: (
        <>
          <p>JINSI YA KUWEKA CODE YA MKEKA KWENYE APP</p>
          <ol>
            <li>Fungua App yako</li>
            <li>Bonyeza hicho kiduara cha katikati hapo chini kimeandikwa Bet Slip</li>
            <li>Then Click "Download Bet Slip"</li>
            <li>Then paste Code hafu click Upload</li>
          </ol>
        </>
      )
    },
    {
      id: 3,
      question: "Jinsi gani nitatumia CODE YA MIKEKA inayotumwa kwenye magroup kama natumia WEBSITE?",
      answer: (
        <>
          <p>JINSI YA KUWEKA CODE YA MKEKA KAMA UNATUMIA WEBSITE</p>
          <ol>
            <li>Gusa kitufe kimeandikwa "Betslip" hapo chini katikati</li>
            <li>Hafu utaona neno limeandikwa "Go to betslip", bonyeza hapo</li>
            <li>Kisha bonyeza vidoti vitatu vipo pembeni kulia mwa neno " My betslip"</li>
            <li>Hafu utaona neno "Load Betslip" bonyeza hapo, weka code ya mkeka wako hafu malizia kwa kubonyeza "load"</li>
          </ol>
        </>
      )
    },
    {
      id: 4,
      question: "Nawezaje kuwasiliana na HUDUMA KWA WATEJA?",
      answer: (
        <ul>
          <li>Kwenye App click "Menu" then "Customer Support" hafu click "Chat" hafu elezea hyo changamoto then wakikupa robot click Call Operator pale juu ili uhudumiwe na binadamu</li>
          <li>Unaweza kuandika hata kwa kiswahili mana wana wahudumu wa kiswahili pia</li>
        </ul>
      )
    },
    {
      id: 5,
      question: "DOCUMENT NUMBER ni nini nataka kutoa Pesa naambiwa nijaze hyo",
      answer: (
        <ul>
          <li>Sehemu ya document type chagua IDENTITY CARD</li>
          <li>Sehemu ya document number weka namba ya NIDA au Namba ya Kitambulisho cha Mpiga Kura</li>
        </ul>
      )
    },
    {
      id: 6,
      question: "Natoaje Pesa kupitia Application?",
      answer: (
        <ol>
          <li>Fungua App hafu Click "MENU"</li>
          <li>Juu kulia utaona icon ya settings</li>
          <li>Bonyeza hapo</li>
          <li>Then chagua "withdraw"</li>
          <li>Then chagua mtandao uliojisajilia kuweza kutoa pesa</li>
          <li>Ingiza kiasi unachotoa halafu malizia kutoa pesa</li>
        </ol>
      )
    }
  ];

  return (
    <div className="help-center-page">
      <div className="container py-5">
        <div className="glass-container mx-auto text-center">
          <div className="floating-logo">
            <img src="/logo.png" alt="Logo" />
          </div>

          <h1 className="mb-5">Maswali na Majibu</h1>

          <div className="accordion-container">
            {faqs.map((faq, index) => (
              <div className="accordion-card" key={faq.id}>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button ${activeIndex !== index ? 'collapsed' : ''}`}
                      type="button"
                      onClick={() => toggleAccordion(index)}
                      aria-expanded={activeIndex === index}
                    >
                      <i className="fas fa-question-circle me-2"></i>
                      {faq.question}
                    </button>
                  </h2>
                  <div
                    className={`accordion-collapse ${activeIndex === index ? 'show' : ''}`}
                  >
                    <div className="accordion-body">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="back-home-btn">
            <a href="/" className="vl-btn1">
              <i className="fas fa-home"></i> Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
