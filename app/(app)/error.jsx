"use client";

import { useEffect } from "react";

export default function UserError({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex flex-col items-center justify-center max-w-4xl p-6 mx-auto">
      <h3 className="text-2xl font-semibold text-center">{error.message}</h3>
      <button
        className="px-4 py-2 mt-4 text-white transition-colors bg-blue-500 rounded-md tex-sm hover:bg-blue-400"
        onClick={() => reset()}
      >
        Try again
      </button>
    </main>
  );
}
