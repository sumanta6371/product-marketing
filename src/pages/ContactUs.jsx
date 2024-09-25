
import React from 'react'
import ContactHeader from '../components/ContactHeader'
import ContactForm from '../components/ContactForm'
import ContactInfo from '../components/ContactInfo'
import Map from '../components/Map'
import SocialLinks from '../components/SocialLinks'

export default function ContactUs() {
  return (
    <div>
      <ContactHeader />
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ContactForm />
          <div>
            <ContactInfo />
            <Map />
          </div>
        </div>
      </div>
      <SocialLinks />
    </div>
  )
}