import { use, useState } from "react";
import type TechnologyType from "../../Type/Type";
import TechnologeCard from "./TechnologeCard";
import Stack from "../StackCard/Stack";

export interface TechnologiesProps {
  handleTechnology: Promise<TechnologyType[]>;
}

export default function Technologies({ handleTechnology }: TechnologiesProps) {
  const technologys = use(handleTechnology);
  //   console.log(users);
  const [stack, setStack] = useState<TechnologyType[]>([]);

  const handleAddStack = (technology: TechnologyType) => {
    const alreadyExists = stack.some((item) => item.id === technology.id);
    if (alreadyExists) {
      return alert(`${technology.name} is already in your stack`);
    } else {
      setStack([...stack, technology]);
    }
  };
  // Remove one
  

  return (
    <>
      <div className="container mx-auto space-y-2 mb-5">
        <h1 className="text-3xl font-bold">
          Explore the <span className="brand-gradient-text">Technologies</span>
        </h1>
        <p>Pick one technology per category to build your ideal stack.</p>
      </div>

      {/* --------------------- */}

      <div className="flex justify-between container mx-auto gap-2">
        <div className="grid grid-cols-3 gap-3 ">
          {technologys.map((technology) => (
            <TechnologeCard
              key={technology.id}
              technology={technology}
              handleAddStack={handleAddStack}
              isAdded={stack.some((item) => item.id === technology.id)}
            ></TechnologeCard>
          ))}
        </div>
        {/* ------------------------- */}
        <Stack />
      </div>
    </>
  );
}
