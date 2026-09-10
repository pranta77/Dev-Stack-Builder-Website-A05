import hero from "./banner-stack.png";
export default function Hero() {
  return (
    <>
      <div className="hero min-h-screen container mx-auto  ">
        <div className="hero-content flex-col lg:flex-row-reverse gap-60">
          <img alt="Tailwind CSS hero component" src={hero} />
          <div>
            <h1 className="text-5xl font-bold">
              Build Your Ideal <br />{" "}
              <span className="brand-gradient-text">Development Stack</span>
            </h1>
            <p className="py-6">
              Explore frontend, backend, database, and tooling options,
              <br /> compare them side by side, and put together the stack that
              fits your <br /> next project.
            </p>
            <div className="space-x-4">
              <button className="btn btn-secondary brand-gradient ">
                Explore Technologies
              </button>
              <button className="btn px-10 ">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
