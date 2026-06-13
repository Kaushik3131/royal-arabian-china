import {
  Calendar,
  Clock,
  Coins,
  Info,
  Languages,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import type { GoodToKnowItem } from "@/sanity/types";

export interface GoodToKnowProps {
  items: GoodToKnowItem[];
}

// Map key titles to relevant Lucide icons
function getIconForTitle(title: string) {
  const t = title.toLowerCase();
  if (t.includes("visa")) return ShieldCheck;
  if (t.includes("currency") || t.includes("money") || t.includes("cny"))
    return Coins;
  if (
    t.includes("time") ||
    t.includes("visit") ||
    t.includes("season") ||
    t.includes("weather") ||
    t.includes("best")
  )
    return Calendar;
  if (t.includes("language") || t.includes("speak")) return Languages;
  if (t.includes("zone") || t.includes("clock") || t.includes("difference"))
    return Clock;
  return Info;
}

export function GoodToKnow({ items }: GoodToKnowProps) {
  if (!items || items.length === 0) return null;

  return (
    <section className="py-16 md:py-24 bg-gray-50 border-t border-gray-100">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-accent">
            Travel Essentials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-sans text-primary tracking-tight">
            Good to Know
          </h2>
          <p className="text-sm md:text-base text-gray-500 font-body">
            Important travel tips and practical information to plan your journey
            to perfection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => {
            const IconComponent = getIconForTitle(item.title);
            return (
              <div
                key={item._key || item.title}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 transition-lift flex items-start gap-4"
              >
                {/* Icon wrapper */}
                <div className="bg-primary/5 rounded-xl p-3 text-primary shrink-0">
                  <IconComponent className="h-6 w-6 text-accent" />
                </div>

                {/* Text Content */}
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg text-primary font-sans">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-body">
                    {item.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
