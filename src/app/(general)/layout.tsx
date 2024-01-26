import { Navbar } from "@/components/molecules/Navbar/Navbar";
import { ReactNode } from "react";

export default function layoutGeneral({ children }: { children: ReactNode }) {
  return (
    <div>
      <Navbar />
      <h1>General Layout</h1>
      <div>{children}</div>
    </div>
  );
}
