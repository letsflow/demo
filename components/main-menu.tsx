"use client";

import { Menubar } from "primereact/menubar";
import { useRouter } from "next/navigation";

export function MainMenu() {
  const router = useRouter();

  const items = [
    {
      label: "Dashboard",
      icon: "pi pi-home",
      command: () => router.push("/"),
    },
    {
      label: "Scenarios",
      icon: "pi pi-sitemap",
      command: () => router.push("/scenarios"),
    },
    {
      label: "Schemas",
      icon: "pi pi-database",
      command: () => router.push("/schemas"),
    },
  ];

  return <Menubar model={items} className="shadow-md" />;
}
