import { Compass } from "lucide-react";
import { Container } from "@/components/ui/Container";

export interface HighlightsBarProps {
  highlights: string[];
}

export function HighlightsBar({ highlights }: HighlightsBarProps) {
  if (!highlights || highlights.length === 0) return null;

  return (
    <section className="bg-white border-y border-gray-100 py-6 spatial-shadow">
      <Container>
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
          {/* Label */}
          <div className="shrink-0">
            <h3 className="text-xs font-bold tracking-widest text-muted-foreground uppercase">
              Key Highlights
            </h3>
          </div>

          {/* Highlights Scroll Area */}
          <div className="flex items-center gap-3 overflow-x-auto pb-2 md:pb-0 scrollbar-none snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0 select-none">
            {highlights.map((highlight) => (
              <div
                key={highlight}
                className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-full py-2 px-4 shrink-0 snap-align-start hover:border-accent/30 hover:bg-accent/5 transition-all duration-300 transition-lift"
              >
                <Compass className="h-4 w-4 text-accent animate-pulse-slow" />
                <span className="text-sm font-semibold text-primary font-sans">
                  {highlight}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
