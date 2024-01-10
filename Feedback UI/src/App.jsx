import { useState, useEffect, useReducer } from "react";

import "./App.scss";

const emoji = [
  {
    id: 1,
    emoji: `https://cdn-icons-png.flaticon.com/512/166/166527.png`,
    name: "Unhappy",
  },
  {
    id: 2,
    emoji: `https://cdn-icons-png.flaticon.com/512/1791/1791308.png`,
    name: "Neutral",
  },
  {
    id: 3,
    emoji: `https://cdn-icons-png.flaticon.com/512/2351/2351491.png`,
    name: "Satisfied",
  },
];

const initialState = { selectRating: null, feedBack: false, totalFeedback: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "handleRating":
      return { ...state, selectRating: action.payload };
    case "handleSendReview":
      return { ...state, feedBack: action.payload };
    case "handleBackFeedBack":
      return { ...state, feedBack: action.payload };
    case "handleBackSelectRating":
      return { ...state, selectRating: action.payload };
    default:
      throw new Error("something went wrong");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [selectRating, setselectRating] = useState(null);
  // const [feedBack, setFeedback] = useState(false);
  const [totalFeedback, setTotalFeedback] = useState(() => {
    return JSON.parse(localStorage.getItem("feedback")) || 0;
  });

  const { selectRating, feedBack } = state;

  //* useEffect to count the total feedback
  useEffect(() => {
    if (feedBack) {
      setTotalFeedback((total) => total + 1);
    }
  }, [feedBack]);

  //* store totalFeedback in local Storage
  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(totalFeedback));
  }, [totalFeedback]);
  //* we store selected user rating then leter compare current with (emoji)object's data
  function handleRating(rate) {
    // setselectRating(rate);
    dispatch({ type: "handleRating", payload: rate });
  }

  //* here we set feedBack's value true so then display feedback component or message
  function handleSendReview() {
    if (!selectRating) return;
    // setFeedback(true);
    dispatch({ type: "handleSendReview", payload: true });
  }

  //* this function will return or back main UI when we change value if feedback true to false then selectRating null so all are normal again
  function handleBack() {
    // setFeedback(false);
    dispatch({ type: "handleBackFeedBack", payload: false });

    // setselectRating(null);
    dispatch({ type: "handleBackSelectRating", payload: null });
  }

  return (
    <div className="container">
      {feedBack && <FeedBack selectRating={selectRating} onBack={handleBack} />}
      {!feedBack && (
        <>
          <TotalFeedBack current={totalFeedback} />
          <Heading />
          <RatingImages selectRating={selectRating} onRating={handleRating} />
          <Button onSendReview={handleSendReview} />
        </>
      )}
    </div>
  );
}

function TotalFeedBack({ current }) {
  return <p className="totalFeedBack">Total FeedBack : {current}</p>;
}

function Heading() {
  return <div className="heading">Feedback UI</div>;
}

function RatingImages({ selectRating, onRating }) {
  return (
    //* we use map to get data from (emoji)object's data map will loop over each one then display
    <div className="rating-container">
      {emoji.map((emojiItem) => (
        <div
          className={`rating ${
            selectRating === emojiItem.name ? "active" : ""
          }`}
          onClick={() => onRating(emojiItem.name)}
          key={emojiItem.id}
        >
          <img src={emojiItem.emoji} alt={emojiItem.name} />
          <span className="small">{emojiItem.name}</span>
        </div>
      ))}
    </div>
  );
}

function Button({ onSendReview }) {
  return (
    <button className="btn" onClick={onSendReview}>
      Send Review
    </button>
  );
}

function FeedBack({ selectRating, onBack }) {
  return (
    <>
      <button className="back" onClick={onBack}>
        &#8592;
      </button>
      <strong style={{ fontSize: "2rem" }}>Thank You!</strong>
      <br></br>
      <br></br>
      <strong style={{ fontSize: "2rem" }}>Feedback:{selectRating}</strong>
      <br></br>
      <br></br>
      <p style={{ fontSize: "2rem" }}>
        We'll use your feedback to improve<br></br> our customer support.
      </p>
      `;
    </>
  );
}

export default App;
