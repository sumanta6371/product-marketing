import React from 'react'
import AboutHeader from '../components/about/AboutHeader'
import CompanyStory from '../components/about/CompanyStory'
import TeamSection from '../components/about/TeamSection'
import CallToAction from '../components/about/CallToAction'
import VisionFuture from '../components/about/VisionFuture'

export default function AboutUs() {
  return (
    <div>
      <AboutHeader />
      <CompanyStory />
      <TeamSection />
      <VisionFuture />
      <CallToAction />
    </div>
  )
}