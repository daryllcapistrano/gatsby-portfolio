import React from "react"
import { FaBootstrap, FaReact } from "react-icons/fa"

export const ProjectList = {
  first: {
    stack: [<FaBootstrap />, <FaReact />, <FaReact />],
    title: "Skate Spot App",
    description:
      "A convenient way to save skatespots on the go and serves as a directory that you can share with friends.",
    detailLink: "https://github.com/daryllcapistrano/skatespot-client",
  },
  second: {
    stack: [<FaBootstrap />, <FaReact />, <FaReact />],
    title: "Photography and Video Portfolio",
    description:
      "Website created for a friend that showcases his work with photography and video.",
    detailLink:
      "https://github.com/daryllcapistrano/keaton-portfolio-gatsby-v2",
  },
  third: {
    stack: [<FaBootstrap />, <FaReact />, <FaReact />],
    title: "Game of S.K.A.T.E.",
    description:
      "A S.K.A.T.E. game score tracker using React hooks to extract stateful logic from components",
    detailLink: "https://github.com/daryllcapistrano/Game-of-SKATE",
  },
}
