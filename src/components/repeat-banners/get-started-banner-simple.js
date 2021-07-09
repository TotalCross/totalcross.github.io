import React from "react"
import Banner1C from "../organizational/banner-1column"
import { GET_STARTED } from '../../links'

const GetStartedBannerSimple = () => {

  return (
      <Banner1C 
      title='Create a low footprint application with TotalCross'
      theme='dark'
      btText='Get started'
      btRef={GET_STARTED}
      btColor="white"
      /> 
  )
}

export default GetStartedBannerSimple