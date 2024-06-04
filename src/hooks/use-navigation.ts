"use client";
import { useContext } from "react";
import NavigationContext from "@/contexts/navigation-context";

export default function useNavigation() {
  return useContext(NavigationContext);
}
