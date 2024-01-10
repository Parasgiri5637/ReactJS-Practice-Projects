import { useReducer } from "react";
import "./App.css";

const initialState = {
  openAccount: false,
  closeAccount: true,
  balance: 0,
  loan: 0,
  isActive: false,
  deposit: 0,
  withdraw: 0,
  requestLoan: 0,
  payLoan: true,
};

function reducer(state, action) {
  switch (action.type) {
    case "openAccount":
      return {
        ...state,
        openAccount: true,
        closeAccount: false,
        isActive: true,
        balance: 500,
      };
    case "deposit":
      return {
        ...state,
        deposit: state.deposit + action.payload,
        balance: state.balance + action.payload,
      };
    case "withdraw":
      let balanceCheck = state.balance === 0;
      return {
        ...state,
        withdraw: state.withdraw + action.payload,
        balance: balanceCheck ? 0 : state.balance - action.payload,
      };
    case "requestLoan":
      return {
        ...state,
        loan: state.loan + action.payload,
        balance: state.balance + action.payload,
        requestLoan: state.requestLoan + action.payload,
      };
    case "payLoan":
      let loans = state.loan === 0;
      return {
        ...state,
        payLoan: false,
        loan: loans ? 0 : state.loan - action.payload,
        balance: loans ? state.balance : state.balance - action.payload,
      };
    case "closeAccount":
      let checkBalance = state.balance === 0 && state.loan === 0;
      return {
        ...state,
        payLoan: checkBalance ? true : false,
        isActive: checkBalance ? false : true,
        openAccount: checkBalance ? false : true,
        closeAccount: checkBalance ? true : false,
      };
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { loan, isActive, requestLoan, balance } = state;

  return (
    <div className="App">
      <h1>useReducer Bank Account</h1>
      <p>Balance: {balance}</p>
      <p>Loan: {loan}</p>

      <p>
        <button
          onClick={() => dispatch({ type: "openAccount" })}
          disabled={isActive}
        >
          Open account
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "deposit", payload: 150 })}
          disabled={!isActive}
        >
          Deposit 150
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "withdraw", payload: 50 })}
          disabled={!isActive}
        >
          Withdraw 50
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "requestLoan", payload: 5000 })}
          disabled={!isActive}
        >
          Request a loan of 5000
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "payLoan", payload: requestLoan })}
          disabled={!isActive}
        >
          Pay loan
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "closeAccount" })}
          disabled={!isActive}
        >
          Close account
        </button>
      </p>
    </div>
  );
}
