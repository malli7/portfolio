import React from "react";

const Experience = () => {
  const experienceData = [
    {
      title: "Software Engineer",
      company: "Cognizant",
      timePeriod: "Feb 2023 - Aug 2023",
      description: [
        "Implemented Agile development methodologies to streamline the software development process for the 'Viacom MSO Steady State' project, leading to a 25% reduction in project timeline and increased overall project efficiency.",
        "Developed and executed a comprehensive training program for internal teams to ensure seamless adoption of customized software solutions, resulting in a 40% increase in user proficiency and productivity.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company: "Cognizant",
      timePeriod: "Feb 2022 - Aug 2022",
      description: [
        "Developed and implemented a student management system using React for the front end and Spring Boot for the back end, resulting in a 30% increase in system efficiency compared to previous systems.",
        "Collaborated with cross-functional teams to integrate new features and functionalities into the final product, improving user experience metrics by 15% and driving increased customer satisfaction.",
      ],
    },
  ];
  return (
    <div className="py-5 ">
      <h1 className="font-medium text-2xl lg:text-3xl">Work Experience</h1>
      <p className="text-muted-foreground">What I have done so far</p>
      <div className="w-full flex  flex-col items-center justify-center gap-4 my-5">
        {experienceData.map((item, index) => (
          <div
            className="w-full lg:w-[50%] md:w-[75%] flex items-center justify-center border border-blue-700 p-5 rounded-xl"
            key={index}
          >
            <div>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h1 className="font-medium text-xl lg:text-2xl">
                    {item.title}
                  </h1>
                  <p className="text-muted-foreground">{item.company}</p>
                </div>
                <p className="font-medium">{item.timePeriod}</p>
              </div>
              <ul className="space-y-1 text-gray-500 list-inside dark:text-gray-400">
                {item.description.map((a, index) => (
                  <li className="flex items-center my-2" key={index}>
                    <svg
                      className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
