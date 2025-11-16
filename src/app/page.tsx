"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboardCorners from '@/components/sections/hero/HeroBillboardCorners';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardFour from '@/components/sections/feature/FeatureCardFour';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Calendar, Crown, MapPin, Award, Star, Scissors, User, Zap, Sparkles, Camera, TrendingUp, Users, MessageSquare } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="medium"
      sizing="small"
      background="grid"
      cardStyle="layered-gradient"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="solid"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Services", id: "services" },
            { name: "About", id: "about" },
            { name: "Gallery", id: "gallery" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Lorenzo Noya"
          button={{
            text: "Book Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCorners
          title="Lorenzo Noya - Master Italian Barber"
          description="Experience the artistry of traditional Italian barbering with modern sophistication. Where every cut is a masterpiece and every client leaves feeling like royalty."
          tag="Luxury Barbering"
          tagIcon={Scissors}
          mediaItems={[
            {
              imageSrc: "https://webild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763325474058-wr3qtq1u.jpg",
              imageAlt: "Classic haircut service"
            },
            {
              imageSrc: "https://webild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763325474737-q0b0yazy.jpg",
              imageAlt: "Professional beard grooming"
            },
            {
              imageSrc: "https://webild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763325475682-7le4q2cu.jpg",
              imageAlt: "Hair styling with pomade"
            },
            {
              imageSrc: "https://webild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763325476358-r0mxqnjd.jpg",
              imageAlt: "Luxury hot towel treatment"
            }
          ]}
          buttons={[
            {
              text: "Book Appointment",
              href: "contact"
            },
            {
              text: "View Services",
              href: "services"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Master of Italian Barbering Tradition"
          description="With over 15 years of experience, Lorenzo Noya brings the finest Italian barbering traditions to every service, combining time-honored techniques with modern style."
          tag="Maestro Barbiere"
          tagIcon={Crown}
          textboxLayout="default"
          imagePosition="right"
          imageSrc="https://webild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763325476945-galhjvsg.jpg"
          imageAlt="Lorenzo Noya master barber portrait"
          bulletPoints={[
            {
              title: "Italian Heritage",
              description: "Trained in the traditional barbershops of Milano, preserving centuries-old techniques",
              icon: MapPin
            },
            {
              title: "Master Craftsman",
              description: "Over 15 years perfecting the art of classic cuts, beard sculpting, and hot towel treatments",
              icon: Award
            },
            {
              title: "Premium Experience",
              description: "Every appointment is a luxury experience with personalized attention and finest products",
              icon: Star
            }
          ]}
          buttons={[
            {
              text: "Learn More",
              href: "about"
            }
          ]}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardFour
          title="Premium Barbering Services"
          description="Each service is crafted with precision and attention to detail, using only the finest Italian products and traditional techniques."
          tag="Services"
          tagIcon={Scissors}
          textboxLayout="default"
          animationType="slide-up"
          features={[
            {
              title: "Classic Haircut",
              description: "Traditional Italian scissor cuts tailored to your face shape and style preferences, finished with premium pomades and styling products",
              icon: Scissors
            },
            {
              title: "Beard Sculpting",
              description: "Expert beard trimming and shaping using traditional straight razors, with hot towel treatments and luxury beard oils",
              icon: User
            },
            {
              title: "Hot Towel Shave",
              description: "The ultimate luxury experience with steaming hot towels, premium shaving creams, and masterful straight razor technique",
              icon: Zap
            },
            {
              title: "Hair Styling",
              description: "Professional styling using authentic Italian pomades and waxes, creating timeless looks that complement your lifestyle",
              icon: Sparkles
            }
          ]}
        />
      </div>

      <div id="gallery" data-section="gallery">
        <ProductCardOne
          title="Portfolio Gallery"
          description="Witness the artistry and precision of Lorenzo's work through our curated gallery of transformations."
          tag="Our Work"
          tagIcon={Camera}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="scale-rotate"
          products={[
            {
              id: "classic-cut-1",
              name: "Classic Gentleman's Cut",
              price: "Signature Style",
              imageSrc: "https://webild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763325474058-wr3qtq1u.jpg",
              imageAlt: "Classic gentleman's haircut"
            },
            {
              id: "beard-sculpt-1",
              name: "Beard Sculpting",
              price: "Master Craft",
              imageSrc: "https://webild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763325474737-q0b0yazy.jpg",
              imageAlt: "Professional beard sculpting"
            },
            {
              id: "styling-1",
              name: "Italian Styling",
              price: "Premium Finish",
              imageSrc: "https://webild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763325475682-7le4q2cu.jpg",
              imageAlt: "Italian hair styling"
            }
          ]}
        />
      </div>

      <div id="experience" data-section="experience">
        <MetricCardOne
          title="Excellence in Numbers"
          description="Years of dedication to the craft, building trust and delivering exceptional results."
          tag="Achievements"
          tagIcon={TrendingUp}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="blur-reveal"
          metrics={[
            {
              id: "1",
              value: "15+",
              title: "years",
              description: "Years mastering Italian barbering traditions",
              icon: Calendar
            },
            {
              id: "2",
              value: "1000+",
              title: "clients",
              description: "Satisfied gentlemen served with excellence",
              icon: Users
            },
            {
              id: "3",
              value: "100%",
              title: "satisfaction",
              description: "Commitment to perfection in every service",
              icon: Star
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Meet the Master"
          description="Lorenzo Noya brings passion, precision, and Italian heritage to every service."
          tag="Maestro"
          tagIcon={Crown}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="opacity"
          members={[
            {
              id: "lorenzo",
              name: "Lorenzo Noya",
              role: "Master Barber",
              imageSrc: "https://webild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763325476945-galhjvsg.jpg",
              imageAlt: "Lorenzo Noya master barber"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="Client Testimonials"
          description="Hear from our distinguished clientele about their exceptional experiences."
          tag="Reviews"
          tagIcon={MessageSquare}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Marco Rossi",
              role: "CEO",
              company: "Rossi Enterprises",
              rating: 5,
              imageSrc: "https://webild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763325477388-fa0llq2t.jpg",
              imageAlt: "Marco Rossi client testimonial"
            },
            {
              id: "2",
              name: "Alessandro Bianchi",
              role: "Creative Director",
              company: "Design Studio Milano",
              rating: 5,
              imageSrc: "https://webild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763325477903-dymjrf09.jpg",
              imageAlt: "Alessandro Bianchi client testimonial"
            },
            {
              id: "3",
              name: "Giuseppe Ferretti",
              role: "Restaurant Owner",
              company: "Ferretti's Ristorante",
              rating: 5,
              imageSrc: "https://webild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763325478602-p8j1xtwm.jpg",
              imageAlt: "Giuseppe Ferretti client testimonial"
            },
            {
              id: "4",
              name: "Antonio Moretti",
              role: "Fashion Consultant",
              company: "Milano Style House",
              rating: 5,
              imageSrc: "https://webild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763325479111-uf4hrywt.jpg",
              imageAlt: "Antonio Moretti client testimonial"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about our services and booking process"
          textPosition="left"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "How do I book an appointment?",
              content: "You can book directly through our contact form, call us, or visit us in person. We recommend booking in advance to secure your preferred time slot."
            },
            {
              id: "2",
              title: "What services do you offer?",
              content: "We specialize in classic haircuts, beard sculpting, hot towel shaves, and professional hair styling using traditional Italian techniques and premium products."
            },
            {
              id: "3",
              title: "How long does each service take?",
              content: "Haircuts typically take 45-60 minutes, beard services 30-45 minutes, and full hot towel shaves 60-75 minutes. We never rush to ensure perfect results."
            },
            {
              id: "4",
              title: "What products do you use?",
              content: "We exclusively use premium Italian barbering products including traditional pomades, luxury beard oils, and professional-grade shaving creams for the finest experience."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Book Now"
          title="Schedule Your Appointment"
          description="Experience the finest Italian barbering tradition. Book your appointment today and discover why Lorenzo Noya is the choice of discerning gentlemen."
          tagIcon={Calendar}
          inputPlaceholder="Enter your email"
          buttonText="Book Appointment"
          termsText="By booking, you agree to our appointment policies. Cancellations require 24-hour notice."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Lorenzo Noya"
          columns={[
            {
              items: [
                { label: "Services", href: "services" },
                { label: "Gallery", href: "gallery" },
                { label: "About", href: "about" }
              ]
            },
            {
              items: [
                { label: "Book Appointment", href: "contact" },
                { label: "Contact", href: "contact" },
                { label: "Location", href: "contact" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}