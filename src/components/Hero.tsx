function Hero() {
  return (
    <>
      <div
        id="hero-content"
        className="absolute top-[274px] z-10 w-[calc(1/2*100%-3.5rem)] space-y-10 pr-14"
      >
        <div id="hero-heading" className="space-y-6">
          <h1 id="heading-title" className="title text-[64px] leading-20">
            A new model for open collaboration
          </h1>
          <p id="heading-description" className="description text-2xl">
            Run an organization where members get rewarded for their
            contributions with fractional ownership.
          </p>
        </div>
        <button id="btn" className="bg-green rounded-lg px-6 py-5 text-white">
          Request early access
        </button>
      </div>
      <div
        id="hero-image"
        className="absolute top-0 right-0 -z-1 h-screen w-1/2"
      >
        <img
          src="/assets/vector.svg"
          alt="vector image"
          className="fill-light-gold absolute top-[142px] right-[12px]"
        />
        <img
          src="/assets/hero_illustration.png"
          alt="hero illustration"
          id="hero-illustration"
          className="absolute top-[165px] -right-[146px] h-auto w-auto max-w-none"
        />
      </div>
    </>
  );
}

export default Hero;
