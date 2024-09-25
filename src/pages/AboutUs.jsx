import React from "react";
import { Briefcase, IceCream, Gift, Leaf } from "lucide-react";
import paper from '../assets/banner89.jpg'

const AboutSection = ({ title, icon: Icon, children }) => (
  <div className="mb-8">
    <div className="flex items-center mb-4">
      <Icon className="w-6 h-6 mr-2 text-blue-600" />
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <p className="text-gray-600">{children}</p>
  </div>
);

const About = () => {
  return (
    <div className="container mx-auto my-12 px-4">
      <div className="relative rounded-xl overflow-hidden">
        <img
          src={paper}
          alt="Banner"
          className="w-full h-[350px] object-cover rounded-xl"
        />
        <div
          className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <h1 className="text-white text-center text-4xl font-bold tracking-wider">
            About Us
          </h1>
        </div>
      </div>
      <h1 className="text-4xl font-bold text-center mb-8 mt-4">About Us</h1>
      <div className="max-w-3xl mx-auto">
        <p className="text-lg text-gray-700 mb-8">
          Mandi Enterprises is a dynamic and innovative business group dedicated
          to enhancing everyday experiences through a diverse portfolio of
          offerings. With a commitment to quality, sustainability, and customer
          satisfaction, we strive to deliver exceptional products and services
          across various industries.
        </p>

        <h2 className="text-2xl font-semibold mb-6">Our Core Ventures</h2>

        <AboutSection title="Ice Cream Business" icon={IceCream}>
          At Mandi Ice Creams, we believe that every scoop tells a story of joy
          and indulgence. Offering a wide range of flavors made from premium
          ingredients, our ice creams cater to all tastes and occasions. From
          classic favorites to unique gourmet selections, we ensure that every
          bite brings a moment of happiness to our customers.
        </AboutSection>

        <AboutSection title="Corporate Gifting Solutions" icon={Gift}>
          Mandi Enterprises provides bespoke corporate gifting services, perfect
          for strengthening business relationships. We offer curated and
          personalized gift solutions tailored to meet the needs of corporate
          clients, helping them express appreciation to their employees,
          partners, and clients. Our range includes high-quality and unique gift
          packages designed to leave a lasting impression.
        </AboutSection>

        <AboutSection title="Green Plant Business" icon={Leaf}>
          Dedicated to promoting sustainability and enhancing indoor and outdoor
          environments, our Green Plant Business offers a selection of
          eco-friendly plants that purify the air and add aesthetic appeal to
          any space. From small indoor plants to larger outdoor greenery, our
          mission is to bring nature closer to homes and workplaces,
          contributing to a healthier and more sustainable future.
        </AboutSection>

        <div className="mt-12 text-center">
          <p className="text-lg font-semibold text-gray-800">
            Mandi Enterprises continues to evolve, expanding its offerings while
            staying true to its core values of quality, sustainability, and
            customer satisfaction. We are dedicated to creating memorable
            experiences across all our businesses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
