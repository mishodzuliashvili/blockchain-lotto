"use client";
import { createContext } from "react";

const NavigationContext = createContext({
  push: (url: string, afterPageAnimationOut?: () => Promise<void>) => {},
  almightyPush: (url: string) => {},
});

export default NavigationContext;
