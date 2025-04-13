"use client";

import { useState } from "react";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import ProtectedRouteAdmin from "@/shared/helpers/ProtectedRouteAdmin";

export default function Manager() {
  const [activeTab, setActiveTab] = useState("overview");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <ProtectedRouteAdmin>
      <div className="flex bg-white text-black min-h-full">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <main className="flex-1 p-6 overflow-auto">
          <MainContent activeTab={activeTab} />
        </main>
      </div>
    </ProtectedRouteAdmin>
  );
}
