import React, { useState, useEffect } from "react";

type StatusProps = {
  status: "loading" | "success" | "error";
};

export const Status = (props: StatusProps) => {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    if (props.status === "loading") {
      setMessage("Loading");
      return;
    }

    if (props.status === "success") {
      setMessage("Data fetched successfully!");
      return;
    }

    if (props.status === "error") {
      setMessage("Error fetching data");
      return;
    }
  }, [props.status]);

  return (
    <div>
      <h2>Status: {message}</h2>
    </div>
  );
};
