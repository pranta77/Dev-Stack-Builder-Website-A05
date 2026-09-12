import hero from "./banner-stack.png";
export default function Hero() {
  return (
    <>
      <div className="hero  container mx-auto">
        <div className="hero-content flex-col lg:flex-row-reverse lg:gap-40">
          <div className="-mt-15">
            <img className="w-200" alt="Tailwind CSS hero component" src={hero} />
          </div>
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold  ">
              Build Your Ideal <br />{" "}
              <span className="brand-gradient-text">Development Stack</span>
            </h1>
            <p className="py-6 ">
              Explore frontend, backend, database, and tooling options, compare
              them side by side, and put together the stack that fits your next
              project.
            </p>
            <div className="space-x-4 mb-10">
              <button className="btn btn-secondary brand-gradient ">
                Explore Technologies
              </button>
              <button className="btn btn-outline px-10 ">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
