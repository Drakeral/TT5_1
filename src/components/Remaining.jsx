import React from "react";

const Remaining = () => {
  const [remaining, setRemaining] = useState("");

  return (
    <div>
      <span>Remaining: {remaining}</span>
    </div>
  );
};

export default Remaining;
