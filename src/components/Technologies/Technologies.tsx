import { use, useState } from "react";
import type TechnologyType from "../../Type/Type";
import TechnologeCard from "./TechnologeCard";
import Stack from "../StackCard/Stack";
import { toast } from "react-toastify";

export interface TechnologiesProps {
  handleTechnology: Promise<TechnologyType[]>;
}

export default function Technologies({ handleTechnology }: TechnologiesProps) {
  const technologys = use(handleTechnology);
  //   console.log(users);

  const [stack, setStack] = useState<TechnologyType[]>([]);

  // Add & Added Cart
  const handleAddStack = (technology: TechnologyType) => {
    const alreadyExists = stack.some((item) => item.id === technology.id);
    if (alreadyExists) {
      // return alert;
      return toast.warning(`${technology.name} is already in your stack`);
    } else {
      setStack([...stack, technology]);
      toast.success(`${technology.name} added to your stack!`);
    }
  };
  // Remove one
  const handleRemove = (id: string) => {
    setStack(stack.filter((item) => item.id !== id));
    const technology = technologys.find((info) => info.id === id);
    if (technology) {
      toast.info(`${technology.name} Remove from your stack`);
    }
  };
  // Remove All
  const handleRemoveAll = () => {
    setStack([]);
    toast.dark("All technologies removed from your stack");
  };

  return (
    <>
      <div className="container mx-auto space-y-2 px-4 pb-6">
        <h1 className="lg:text-3xl text-2xl font-bold">
          Explore the <span className="brand-gradient-text">Technologies</span>
        </h1>
        <p className="text-sm  ">Pick one technology per category to build your ideal stack.</p>
      </div>

      {/* --------------------- */}

      <div className="lg:container lg:mx-auto flex flex-col gap-8 lg:flex-row lg:gap-6">
        <div className="lg:grid grid-cols-3 gap-3 px-4 lg:px-0 space-y-4 ">
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
        <Stack
          stack={stack}
          handleRemove={handleRemove}
          handleRemoveAll={handleRemoveAll}
        />
      </div>
    </>
  );
}
