"use client";

import { useState, useEffect } from "react";

const MILLISECONDS_IN_YEAR = 365.25 * 24 * 60 * 60 * 1000;

export function useLiveAge(birthDate:string) {
  const [age, setAge] = useState(0);

  useEffect(() => {
    const birth = new Date(birthDate).getTime();

    const update = () => {
      const now = Date.now();
      const ageInYears = (now - birth) / MILLISECONDS_IN_YEAR;
      setAge(ageInYears);
    };

    update(); 
    const interval = setInterval(update, 50)

    return () => clearInterval(interval);
  }, [birthDate]);

  return age;
}