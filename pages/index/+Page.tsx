import React from "react";
import jokestarLogo from "/assets/images/logos/JokestarLogoV1LIGHT.png";
import soyjoke from "/assets/images/soyjakjames.png";

function Page() {
  return (
    <>
      <div className="absolute left-0 top-[30vh] bottom-0">
        <img
          src={soyjoke}
          alt="James as SoyJak"
          className="w-[25vw] hidden sm:block lg:w-[20vw]"
        />
      </div>
      <section className="bg-bg2 p-4 min-h-[100vh] sm:min-h-[90vh] sm:my-[5vh] md:mx-[10vw] sm:mx-[5vw] ">
        <div className="flex flex-col items-center justify-center">
          <img
            src={jokestarLogo}
            alt="Mister Jokestar's Logo"
            className="mb-4"
          />
          <p className="text-text"> AKA </p>
          <h1 className="text-text text-2xl sm:text-4xl mb-4">
            -- James Wall --
          </h1>
          <p className="text-text text-center">
            A Wizard in the arts of Software.
          </p>
          <a href="/about" className="text-textalt text-center">
            Learn more about me here.
          </a>
          <a href="/resume" className="text-textalt text-center">
            View my resume here.
          </a>
          <a href="/games" className="text-textalt text-center">
            Or play some of my games here.
          </a>
          <p className="text-text text-center">
            Click any of the above links to look around my website.
          </p>
        </div>
      </section>
    </>
  );
}

export default Page;
