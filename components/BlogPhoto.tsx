import React from "react";

interface BlogPhotoProps {
  image: string;
  caption?: string;
  alt?: string;
}

export default function BlogPhoto(props: BlogPhotoProps) {
  return (
    <>
      <figure className="my-4">
        <img
          src={props.image}
          alt={props.alt}
          className="max-w-full mx-auto lg:max-w-[80%]"
        />
        {props.caption && (
          <figcaption className="text-xs text-text lg:ml-[10%]">
            {props.caption}
          </figcaption>
        )}
      </figure>
    </>
  );
}
