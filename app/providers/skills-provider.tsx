"use client";
import { api } from "@/api";
import { SkillObject } from "@/api/skills/types";
import { createContext, useContext, useEffect, useState } from "react";

export type SkillsContextType = {
  skills: Array<SkillObject>;
};

const SkillsContext = createContext<SkillsContextType | undefined>(undefined);

export function SkillsProvider({ children }: { children: React.ReactNode }) {
  const [skills, setSkills] = useState<Array<SkillObject>>([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const data = await api.skills.fetch();
        setSkills(data.skills);
      } catch (error) {
        console.error("Failed to fetch skills:", error);
      }
    };

    fetchSkills();
  }, []);

  return (
    <SkillsContext.Provider value={{ skills }}>
      {children}
    </SkillsContext.Provider>
  );
}

export const useSkills = () => {
  const ctx = useContext(SkillsContext);
  if (!ctx) {
    throw new Error("useSkills must be used within a SkillsProvider");
  }
  return ctx;
};
