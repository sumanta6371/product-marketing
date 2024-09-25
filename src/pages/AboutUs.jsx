import React from 'react'
import AboutHeader from '../components/AboutHeader'
import CompanyStory from '../components/CompanyStory'
import TeamSection from '../components/TeamSection'
import VisionFuture from '../components/VisionFuture'
import CallToAction from '../components/CallToAction'

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