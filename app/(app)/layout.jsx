"use client";

import Sidenav from "@/components/sidenav";

export default function AppLayout({ children }) {

  return (
    <div className="flex flex-col h-screen md:flex-row md:overflow-hidden">
      <div className="flex-none w-full md:w-64">
        {/*<Sidenav user={user}/>*/}
         <Sidenav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
