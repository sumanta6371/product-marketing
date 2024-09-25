import React from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function ContactInfo() {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg mx-auto">
        <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl mb-6">Contact Information</h2>
        <div className="space-y-4">
          <div className="flex items-center">
            <Mail className="h-6 w-6 text-indigo-600 mr-2" />
            <span>info@yourcompany.com</span>
          </div>
          <div className="flex items-center">
            <Phone className="h-6 w-6 text-indigo-600 mr-2" />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-6 w-6 text-indigo-600 mr-2" />
            <span>123 Main St, Anytown, USA 12345</span>
          </div>
        </div>
      </div>
    </div>
  )
}