"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, Loader2, Send } from "lucide-react";
import { useEffect, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/Button";
import { submitEnquiry } from "@/lib/actions/enquiry";
import { type EnquiryInput, enquirySchema } from "@/lib/validation/enquiry";
import { EnquirySuccess } from "./EnquirySuccess";

export interface EnquiryFormProps {
  packages: string[];
  defaultPackageName?: string;
}

export function EnquiryForm({
  packages,
  defaultPackageName = "",
}: EnquiryFormProps) {
  const [isPending, startTransition] = useTransition();
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<EnquiryInput>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      package_name: defaultPackageName,
      message: "",
    },
  });

  // Listen to select-package custom events for dynamic pre-filling
  useEffect(() => {
    const handleSelectPackage = (event: Event) => {
      const customEvent = event as CustomEvent<{ packageName: string }>;
      if (customEvent.detail?.packageName) {
        setValue("package_name", customEvent.detail.packageName);
      }
    };

    window.addEventListener("select-package", handleSelectPackage);
    return () => {
      window.removeEventListener("select-package", handleSelectPackage);
    };
  }, [setValue]);

  const onSubmit = (data: EnquiryInput) => {
    setSubmitError(null);
    startTransition(async () => {
      const response = await submitEnquiry(data);
      if (response.success) {
        setIsSuccess(true);
        reset();
      } else {
        setSubmitError(response.error || "Something went wrong.");
      }
    });
  };

  if (isSuccess) {
    return <EnquirySuccess onReset={() => setIsSuccess(false)} />;
  }

  return (
    <div
      id="enquire-now"
      className="w-full max-w-2xl mx-auto bg-white border border-border rounded-2xl p-6 md:p-10 spatial-shadow scroll-mt-24"
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-primary font-sans mb-2">
          Plan Your Dream Journey
        </h2>
        <p className="text-sm text-gray-500 font-body max-w-md mx-auto leading-relaxed">
          Ready to explore China? Fill out the form below, and our destination
          specialists will curate the perfect itinerary for you.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {submitError && (
          <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm font-body">
            <AlertCircle className="w-5 h-5 shrink-0 text-red-500" />
            <p>{submitError}</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2 font-sans"
            >
              Full Name *
            </label>
            <input
              id="name"
              type="text"
              disabled={isPending}
              {...register("name")}
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-lg border border-border bg-gray-50 focus:bg-white focus:border-accent focus:ring-1 focus:ring-accent transition-all outline-none text-sm font-body"
            />
            {errors.name && (
              <p className="text-xs text-red-500 mt-1 font-body font-medium">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2 font-sans"
            >
              Email Address *
            </label>
            <input
              id="email"
              type="email"
              disabled={isPending}
              {...register("email")}
              placeholder="john@example.com"
              className="w-full px-4 py-3 rounded-lg border border-border bg-gray-50 focus:bg-white focus:border-accent focus:ring-1 focus:ring-accent transition-all outline-none text-sm font-body"
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1 font-body font-medium">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Phone Field */}
          <div>
            <label
              htmlFor="phone"
              className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2 font-sans"
            >
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              disabled={isPending}
              {...register("phone")}
              placeholder="+971 50 123 4567"
              className="w-full px-4 py-3 rounded-lg border border-border bg-gray-50 focus:bg-white focus:border-accent focus:ring-1 focus:ring-accent transition-all outline-none text-sm font-body"
            />
            {errors.phone && (
              <p className="text-xs text-red-500 mt-1 font-body font-medium">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Package Selection */}
          <div>
            <label
              htmlFor="package_name"
              className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2 font-sans"
            >
              Select Package *
            </label>
            <select
              id="package_name"
              disabled={isPending}
              {...register("package_name")}
              className="w-full px-4 py-3 rounded-lg border border-border bg-gray-50 focus:bg-white focus:border-accent focus:ring-1 focus:ring-accent transition-all outline-none text-sm font-body appearance-none cursor-pointer"
            >
              <option value="">-- Choose a package --</option>
              {packages.map((pkg) => (
                <option key={pkg} value={pkg}>
                  {pkg}
                </option>
              ))}
            </select>
            {errors.package_name && (
              <p className="text-xs text-red-500 mt-1 font-body font-medium">
                {errors.package_name.message}
              </p>
            )}
          </div>
        </div>

        {/* Message Field */}
        <div>
          <label
            htmlFor="message"
            className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2 font-sans"
          >
            Your Message
          </label>
          <textarea
            id="message"
            rows={4}
            disabled={isPending}
            {...register("message")}
            placeholder="Tell us about your travel plans, number of guests, or preferred travel dates..."
            className="w-full px-4 py-3 rounded-lg border border-border bg-gray-50 focus:bg-white focus:border-accent focus:ring-1 focus:ring-accent transition-all outline-none text-sm font-body resize-none"
          />
          {errors.message && (
            <p className="text-xs text-red-500 mt-1 font-body font-medium">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isPending}
          className="w-full py-3 h-12 flex items-center justify-center gap-2"
        >
          {isPending ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Submitting Enquiry...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Send Enquiry
            </>
          )}
        </Button>
      </form>
    </div>
  );
}
