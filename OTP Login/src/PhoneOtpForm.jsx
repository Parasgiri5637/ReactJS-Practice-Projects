import { useState } from "react";
import OtpInput from "./OtpInput";

export default function PhoneOtpForm() {
  const [phoneNumber, setPhoneNumber] = useState();
  const [showOTPInput, setShowOTPInput] = useState(false);

  function handlePhoneNumber(e) {
    const value = e.target.value;
    setPhoneNumber(value);
  }
  function handlePhoneSubmit(e) {
    e.preventDefault();

    // Phone Validations
    const regex = /[^0-9]/g;
    if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
      alert("Please enter a valid phone number");
      return;
    }

    // call the api
    // Show OTP Input
    setShowOTPInput(true);
  }

  function onOtpSubmit(otp){
    console.log("logIn Successfully",otp);
  }

  return (
    <div>
      {!showOTPInput && (
        <form onSubmit={handlePhoneSubmit}>
          <input
            type="text"
            value={phoneNumber}
            placeholder="Enter Phone Number"
            onChange={handlePhoneNumber}
          />
          <button>Submit</button>
        </form>
      )}
      {showOTPInput && (
        <div>
          <h3>Enter OTP Sent to {phoneNumber}</h3>
          <OtpInput length={4} onOtpSubmit={onOtpSubmit}/>
        </div>
      )}
    </div>
  );
}
