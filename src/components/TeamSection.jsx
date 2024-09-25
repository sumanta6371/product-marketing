import React from 'react'

const team = [
  {
    name: 'Jane Doe',
    role: 'CEO & Founder',
    image: '/team-member-1.jpg',
    bio: 'Jane has been leading the company since its inception, bringing over 15 years of industry experience.'
  },
  {
    name: 'John Smith',
    role: 'CTO',
    image: '/team-member-2.jpg',
    bio: 'John oversees all technical aspects of the company, ensuring we stay at the forefront of innovation.'
  },
  {
    name: 'Emily Brown',
    role: 'Head of Design',
    image: '/team-member-3.jpg',
    bio: 'Emily leads our design team, creating beautiful and functional products that our customers love.'
  },
  {
    name: 'Michael Lee',
    role: 'Head of Marketing',
    image: '/team-member-4.jpg',
    bio: 'Michael drives our marketing strategies, helping us connect with customers around the globe.'
  }
]

export default function TeamSection() {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Team</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Meet the passionate individuals behind our success
          </p>
        </div>
        <div className="mt-12 grid gap-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-12">
          {team.map((member) => (
            <div key={member.name}>
              <div className="space-y-4">
                <img className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56" src={member.image} alt={member.name} />
                <div className="space-y-2">
                  <div className="text-lg leading-6 font-medium space-y-1">
                    <h3>{member.name}</h3>
                    <p className="text-indigo-600">{member.role}</p>
                  </div>
                  <p className="text-gray-500">{member.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}