import React from "react"
import Banner1C from "../organizational/banner-1column"
import { GITHUB } from '../../links'

const GoToGitHub = () => {

  return (
      <Banner1C 
      title='Would you like to see more?'
      subtitle="Visit the project's repository."
      theme='dark'
      btText='Go to GitHub'
      btRef={GITHUB}
      btColor="white"
      /> 
  )
}

export default GoToGitHub