import React from "react";
import resume from "/assets/resume/resume_26.pdf";

function Page() {
  return (
    <>
      <object
        data={resume}
        type="application/pdf"
        className="w-[100vw] h-[100vh]"
      >
        <p>
          Unable to display PDF. <a href="your-file.pdf">Download it instead</a>
          .
        </p>
      </object>
    </>
  );
}

export default Page;
