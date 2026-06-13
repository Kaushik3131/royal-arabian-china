import { Container } from "@/components/ui/Container";

export interface DestinationAboutProps {
  name: string;
  description: string;
}

export function DestinationAbout({ name, description }: DestinationAboutProps) {
  // Split description by newlines to form clean paragraphs
  const paragraphs = description
    ? description.split(/\n\n+/).filter((p) => p.trim() !== "")
    : [];

  return (
    <section className="py-16 md:py-24 bg-background">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column: Heading and Accent */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-accent">
              Welcome to the Journey
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-sans text-primary tracking-tight leading-tight">
              Discover {name}
            </h2>
            <div className="h-1.5 w-16 bg-accent rounded-full" />
          </div>

          {/* Right Column: Description Text */}
          <div className="lg:col-span-7 space-y-6">
            {paragraphs.length > 0 ? (
              paragraphs.map((para) => (
                <p
                  key={para}
                  className="text-base md:text-lg text-gray-600 font-body leading-relaxed font-light"
                >
                  {para}
                </p>
              ))
            ) : (
              <p className="text-base md:text-lg text-gray-600 font-body leading-relaxed font-light">
                {description}
              </p>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
