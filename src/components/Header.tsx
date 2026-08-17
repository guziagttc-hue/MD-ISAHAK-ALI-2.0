
import { useState, useEffect } from "react";

export const Header = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-rose-800 bg-rose-950/80 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="rounded-md bg-rose-950 px-3 py-1 text-xl font-bold text-rose-400">MD. ISAHAK ALI</div>
        <div className="text-sm text-rose-200">
          {dateTime.toLocaleDateString()} {dateTime.toLocaleTimeString()}
        </div>
      </div>
    </header>
  );
};
