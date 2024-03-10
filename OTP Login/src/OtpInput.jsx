import { useEffect, useRef, useState } from "react";

export default function OtpInput({ length = 4, onOtpSubmit = () => {} }) {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);

  function handleChange(e, index) {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    //* allow only one number
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    //* Submit Trigger
    const combinedOtp = newOtp.join("");
    if (combinedOtp.length === length) {
      onOtpSubmit(combinedOtp);
    }
    //* Move to Next input
    if (value && index < length - 1 && inputRefs.current[index + 1]) {
      //    console.log(inputRefs.current[index + 1]);
      inputRefs.current[index + 1].focus();
    }
  }
  function handleClick(index) {
    inputRefs.current[index].setSelectionRange(1,1);

    if(index > 0 && !otp[index - 1]){
        inputRefs.current[otp.indexOf("")].focus()
    }
  }

  function handleKeyDown(e, index) {
  
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      inputRefs.current[index - 1].focus();
    }
  }

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  return (
    <div>
      {Array.isArray(otp) &&
        otp.map((value, index) => (
          <input
            ref={(input) => (inputRefs.current[index] = input)}
            key={index}
            type="text"
            value={value}
            onChange={(e) => handleChange(e, index)}
            onClick={() => handleClick(index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className="otpInput"
          />
        ))}
    </div>
  );
}
