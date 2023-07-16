import { Button } from "@mui/material";
import { useState } from "react";

export default function Footer() {
  const [data, setData] = useState(false);

  return (
    <>
      <Button onClick={() => setData(!data)}>Click</Button>
      <div className={data ? " text-white" : "text-red-600"}>Footer</div>;
    </>
  );
}
