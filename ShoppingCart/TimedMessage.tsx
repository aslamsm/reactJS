import React, { useEffect, useState } from "react";

// Define props type
interface TimedMessageProps {
  message: string;
  type?: "success" | "danger" | "warning" | "info"; // Bootstrap alert types
  duration?: number; // in milliseconds
}

const TimedMessage: React.FC<TimedMessageProps> = ({
  message,
  type = "info",
  duration = 5000,
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timer); // Clean up
  }, [duration]);

  if (!visible) return null;

  return (
    <div className={`alert alert-${type}`} role="alert">
      {message}
    </div>
  );
};

export default TimedMessage;
