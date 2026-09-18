import { MapPin, Compass, GraduationCap, CircleDot } from "lucide-react";
import { siteConfig } from "../../data/config.js";
import { SectionHeading } from "../ui/SectionHeading.jsx";
import { RevealOnScroll } from "../ui/RevealOnScroll.jsx";
import { InfoCard } from "../ui/InfoCard.jsx";

const infoItems = [
  { icon: MapPin, label: "Location", value: siteConfig.location },
  { icon: Compass, label: "Focus", value: siteConfig.focusArea },
  {
    icon: GraduationCap,
    label: "Currently learning",
    value: siteConfig.currentlyLearning,
  },
  { icon: CircleDot, label: "Availability", value: siteConfig.availability },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-24 sm:py-32">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="About me" />

        <div className="grid lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] gap-12 lg:gap-16 items-start">
          <RevealOnScroll
            delay={0.05}
            className="mx-auto w-full max-w-xs lg:max-w-none"
          >
            <div className="relative aspect-square rounded-3xl p-[2px] overflow-hidden">
              {/* Animated border */}
              <div
                className="absolute inset-[-60%] animate-[spin_9s_linear_infinite]"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 0%, rgb(var(--color-accent)) 20%, transparent 40%)",
                }}
              />

              {/* Image container */}
              <div className="relative w-full h-full rounded-[1.4rem] bg-surface overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-20 z-10 pointer-events-none" />

                <img
                  src="/profile.jpg"
                  alt="Akshat"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </RevealOnScroll>

          <div className="flex flex-col gap-8">
            <RevealOnScroll delay={0.1} className="flex flex-col gap-4">
              {siteConfig.aboutParagraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-muted leading-relaxed text-base sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </RevealOnScroll>

            <RevealOnScroll delay={0.15} className="grid sm:grid-cols-2 gap-3">
              {infoItems.map((item) => (
                <InfoCard key={item.label} {...item} />
              ))}
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
