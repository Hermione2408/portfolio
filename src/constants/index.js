// import {roostLogo,keployLogo,gsocLogo} from "../assets/imgs" 
import roostLogo from "../assets/imgs/roost.png" 
import keployLogo from "../assets/imgs/keploy.png" 
import gsocLogo from "../assets/imgs/gsoc.png" 
export const experiences = [
    {
      title: "Software Trainee",
      company_name: "Zettabytes Inc.(Roost.ai)",
      icon: roostLogo,
      iconBg: "#383E56",
      date: "July 2022 - March 2023",
      points: [
        "Worked on roost.io web app , Worked with react components.",
        "Write Unit and E2E test cases for roost.io web application using cypress.",
        "Worked on designing and implementing dark/light theme in web app.",   
      ],
    },
    {
      title: "Google Summer of Code Intern",
      company_name: "Keploy",
      icon: gsocLogo,
      iconBg: "#383E56",
      date: "May 2023 - August 2023",
      points: [
        "Working on developing language agnostic proxy for My SQL,Redis.",
        "Developed a MySQL App using Go lang",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "SDE Intern",
      company_name: "Keploy",
      icon: keployLogo,
      iconBg: "#383E56",
      date: "October 2023 - Present",
      points: [
        "Developing the enterprise console for Keploy users using GraphQL and designing and developing the UI on NEXT.js.",
        "Developed the test-report visualizer where people can upload there test-case folder and view them in a proper yaml format.",
        "Developing mysql parser for various integration including Golang, Java,Javascript,dotnet",
      ],
    },
  ];