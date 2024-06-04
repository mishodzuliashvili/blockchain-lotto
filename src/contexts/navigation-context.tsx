"use client";
import { createContext } from "react";

const NavigationContext = createContext({
  push: (url: string, afterPageAnimationOut?: () => void) => {},
  almightyPush: (url: string) => {},
});

export default NavigationContext;
