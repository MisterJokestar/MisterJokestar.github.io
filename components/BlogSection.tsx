import React from "react";

interface BlogSectionProps {
  title: string;
  text: string;
  image?: string;
  caption?: string;
  alt?: string;
  flip?: boolean;
}

export default function BlogSection(props: BlogSectionProps) {
  return (
    <>
      <h1 className="text-2xl text-textalt mb-4 lg:text-4xl">{props.title}</h1>
      <div
        className={
          "flex flex-col mb-4" +
          (props.flip ? " sm:flex-row-reverse" : " sm:flex-row")
        }
      >
        <div
          className={
            "text-text my-auto lg:text-xl" +
            (props.image ? " sm:w-[48%] sm:pl-[2%]" : "") +
            (props.flip ? "" : " lg:text-right")
          }
        >
          <p className="whitespace-pre-wrap">{props.text}</p>
        </div>
        {props.image && (
          <figure
            className={
              "min-h-full max-w-[80%]  sm:max-w-[50%] lg:max-w-[35%]" +
              (props.flip ? " sm:mr-4 lg:ml-auto" : " sm:ml-4 lg:mr-auto")
            }
          >
            <img src={props.image} alt={props.alt} className="max-w-full" />
            {props.caption && (
              <figcaption className="text-xs text-text">
                {props.caption}
              </figcaption>
            )}
          </figure>
        )}
      </div>
    </>
  );
}
