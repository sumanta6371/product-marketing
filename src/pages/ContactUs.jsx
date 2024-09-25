
import React from 'react'
import ContactHeader from '../components/contact/ContactHeader'
import ContactForm from '../components/contact/ContactForm'
import ContactInfo from '../components/contact/ContactInfo'
import Map from '../components/contact/Map'
import SocialLinks from '../components/contact/SocialLinks'

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