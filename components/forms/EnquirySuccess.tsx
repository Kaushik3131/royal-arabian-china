"use client";

import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

export interface EnquirySuccessProps {
  onReset: () => void;
}

export function EnquirySuccess({ onReset }: EnquirySuccessProps) {
  return (
    <div
      id="enquire-now"
      className="w-full max-w-2xl mx-auto bg-white border border-border rounded-2xl p-8 md:p-12 text-center spatial-shadow flex flex-col items-center justify-center space-y-4 animate-fade-in"
    >
      <CheckCircle2 className="w-16 h-16 text-emerald-500 stroke-[1.5]" />
      <h3 className="text-2xl font-bold text-primary font-sans">
        Enquiry Submitted!
      </h3>
      <p className="text-gray-500 font-body max-w-md leading-relaxed text-sm">
        Thank you for reaching out to Royal Arabian. One of our China travel
        experts will review your request and get back to you within 24 hours.
      </p>
      <Button
        variant="outline"
        size="default"
        onClick={onReset}
        className="mt-4 border-accent text-accent hover:bg-accent/5"
      >
        Send Another Enquiry
      </Button>
    </div>
  );
}
