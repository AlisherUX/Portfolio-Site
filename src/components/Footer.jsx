"use client"
import { Button } from "@mui/material";
import { useTheme } from "next-themes";

export default function Footer() {
  const { theme, setTheme } = useTheme()

  return <>
    <Button onClick={() => setTheme('dark')}>Dark Mode</Button>
    <Button onClick={() => setTheme('light')}>Light Mode</Button>
  </>;
}
