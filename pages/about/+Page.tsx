import React from "react";
import BlogSection from "/components/BlogSection.tsx";
import BlogPhoto from "/components/BlogPhoto.tsx";
import babyJames from "/assets/images/babyjames.jpg";
import firstday from "/assets/images/firstdayofschool.jpg";
import jamesandnoelle from "/assets/images/jamesandnoelle.jpg";

function Page() {
  return (
    <>
      <section className="bg-bg2 p-4 min-h-[100vh] sm:min-h-[90vh] sm:my-[5vh] md:mx-[10vw] sm:mx-[5vw] ">
        <div className="flex flex-col items-justify items-center">
          <BlogSection
            title="How it all Started"
            text="Back in the 1900's (January 1999)
In a small town, called St. Louis...
A little boy was given to the world...
it was a really weird looking baby.

I grew up in the middle of Illinois, surrounded by amish.
Raised christian and baptised at age 6 by my very own grandpa.
I have 4 sisters and we were all homeschooled. Playing together
next to soybean fields popping tar bubbles in the road.

Then life as I knew it would change forever... 
"
            image={babyJames}
            alt="James as a weird looking baby."
            caption="James as an infant child."
            flip={false}
          />
          <BlogPhoto
            image={firstday}
            alt="James and his four sisters in front of first school."
            caption="First day at school. Left to Right: James, Noelle, AnnaBeth,
              Christine, Kai"
          />
          <BlogSection
            title="Life near the City"
            text="My family moved to the suburbs of chicago.
My father had gotten a job with Google as a software developer,
and so we relocated to the windy city.

Besides the move two big changes came as well,
First, I started taking dance lessons in jazz, hiphop, and ballet.
Secondly, I attended a private christian school starting in 7th grade.
"
            image={jamesandnoelle}
            alt="James and his sister noelle posing in a mirror."
            caption="James and Noelle pose in a mueseum."
            flip={true}
          />
        </div>
        <p className="text-text">More to come...</p>
      </section>
    </>
  );
}

export default Page;
