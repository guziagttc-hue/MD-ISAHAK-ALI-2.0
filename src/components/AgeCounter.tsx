import { useState, useEffect } from 'react';
import { useLanguage } from "../context/LanguageContext";

export const AgeCounter = () => {
  const { language } = useLanguage();
  const [age, setAge] = useState({ years: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const birthDate = new Date('2006-05-03T00:00:00');

    const updateAge = () => {
      const now = new Date();
      const diff = now.getTime() - birthDate.getTime();
      
      const seconds = Math.floor(diff / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);
      
      const years = Math.floor(days / 365.25);
      const remainingDays = Math.floor(days % 365.25);
      const remainingHours = Math.floor(hours % 24);
      const remainingMinutes = Math.floor(minutes % 60);
      const remainingSeconds = Math.floor(seconds % 60);
      
      setAge({ years, days: remainingDays, hours: remainingHours, minutes: remainingMinutes, seconds: remainingSeconds });
    };

    updateAge();
    const interval = setInterval(updateAge, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mb-8 text-center bg-rose-950/50 border border-rose-800 rounded-2xl p-6 backdrop-blur-sm">
      <h3 className="text-xl font-bold text-white mb-4">
        {language === 'bn' ? "আমার বর্তমান বয়স" : "My Current Age"}
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-rose-200">
        <div>
          <div className="text-3xl font-bold text-white">{age.years}</div>
          <div className="text-sm">{language === 'bn' ? "বছর" : "Years"}</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-white">{age.days}</div>
          <div className="text-sm">{language === 'bn' ? "দিন" : "Days"}</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-white">{age.hours}</div>
          <div className="text-sm">{language === 'bn' ? "ঘন্টা" : "Hours"}</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-white">{age.minutes}</div>
          <div className="text-sm">{language === 'bn' ? "মিনিট" : "Minutes"}</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-white">{age.seconds}</div>
          <div className="text-sm">{language === 'bn' ? "সেকেন্ড" : "Seconds"}</div>
        </div>
      </div>
    </div>
  );
};
