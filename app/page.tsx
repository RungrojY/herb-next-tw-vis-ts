"use client";
import Graph from "@/components/Graph";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [sidebarData, setSidebarData] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleSidebarData = (txt:string) => {
    setSidebarData(txt);
  };
  const handleToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <main className="border border-red-500">
      <button className="border border-blue-500" onClick={handleToggle}>{isSidebarOpen ? "Close" : "Open"}</button>
      <Graph setData={handleSidebarData}/>
      <Sidebar isOpen={isSidebarOpen} toggle={handleToggle}>
        <h2>Sidebar Content</h2>
        <p>{sidebarData}</p>
      </Sidebar>
    </main>
  );
}
