import { useState } from "react";

import "./App.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

function App() {
  return (
    <>
      <Accordion data={faqs} />
    </>
  );
}

function Accordion({ data }) {
  const [currOpen, setCurrOpen] = useState(false);

  return (
    <div className="accordion">
      {data.map((item, i) => (
        <AccordionItems
          currOpen={currOpen}
          setCurrOpen={setCurrOpen}
          title={item.title}
          num={i + 1}
        >
          {item.text}
        </AccordionItems>
      ))}
    </div>
  );
}

function AccordionItems({ title, text, num, currOpen, setCurrOpen, children }) {
  const isOpen = num === currOpen;

  function handleToggle() {
    setCurrOpen(isOpen ? null : num);
  }

  return (
    <div
      className={`item ${isOpen ? "open" : ""}`}
      onClick={() => handleToggle()}
    >
      <p className="number">{num}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}

export default App;

// var scrollDown = function () {
//   window.scrollTo(0, window.document.body.scrollHeight);
// };

// setInterval(scrollDown, 1000);
