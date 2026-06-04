"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";

// 1. Define Zod schema
const connectionSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  projectType: z.string().min(1, { message: "Please select a project type." }),
  budget: z.string().min(1, { message: "Please select an estimated budget." }),
});

type ConnectionFormValues = z.infer<typeof connectionSchema>;

export default function ConnectionTab() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ConnectionFormValues>({
    resolver: zodResolver(connectionSchema),
    defaultValues: {
      name: "",
      email: "",
      projectType: "",
      budget: "",
    },
  });

  const onSubmit = async (data: ConnectionFormValues) => {
    setIsSubmitting(true);

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Form submitted:", data);

    setIsSubmitting(false);
    setIsSuccess(true);
    reset();

    // Reset success state after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section id="contact" className="py-28 md:py-40 px-6 md:px-12 bg-white">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">

        {/* Left Column: Heading & Info */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#7C3AED]">
              Get In Touch
            </span>
            <h2 className="mt-4 font-monumental text-[clamp(2.4rem,5vw,4.5rem)] font-bold leading-[1.05] tracking-tighter text-[#0A0A0A]">
              Let&apos;s Build <br />
              <span className="text-[#7C3AED]">Together.</span>
            </h2>
            <p className="mt-6 text-[#6B7280] leading-relaxed max-w-md">
              Whether you need a scalable enterprise system or a category-defining product, our team is ready to engineer your vision.
            </p>
          </div>

          <div className="mt-12 lg:mt-0 space-y-6">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EDE9FE] border border-[#E5E7EB]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4 text-[#7C3AED]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
              </div>
              <span className="text-sm tracking-wider text-[#0A0A0A]">hello@wyfflo.agency</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EDE9FE] border border-[#E5E7EB]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4 text-[#7C3AED]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </div>
              <span className="text-sm tracking-wider text-[#0A0A0A]">San Francisco, CA</span>
            </div>
          </div>
        </div>

        {/* Right Column: The Form */}
        <div className="flex-1 max-w-xl w-full">
          <div className="rounded-3xl border border-[#E5E7EB] bg-[#F5F5F7] p-8 md:p-12 overflow-hidden shadow-sm">
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center h-full min-h-[400px] text-center"
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#EDE9FE] border border-[#7C3AED]/30 mb-6 text-[#7C3AED]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="font-monumental text-2xl font-bold text-[#0A0A0A] mb-2">Transmission Received</h3>
                  <p className="text-[#6B7280] text-sm max-w-[280px]">
                    We&apos;ve received your query. One of our lead architects will contact you shortly.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-6 relative z-10"
                >
                  {/* Name Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs uppercase tracking-widest text-[#6B7280] font-medium">
                      Full Name
                    </label>
                    <input
                      id="name"
                      {...register("name")}
                      className={`w-full bg-white border ${errors.name ? 'border-red-400' : 'border-[#E5E7EB]'} rounded-xl px-4 py-3.5 text-[#0A0A0A] placeholder-[#9CA3AF] focus:outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED] transition-all`}
                      placeholder="Jane Doe"
                    />
                    {errors.name && (
                      <span className="text-[10px] text-red-400 uppercase tracking-wider font-semibold mt-1">
                        {errors.name.message}
                      </span>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs uppercase tracking-widest text-[#6B7280] font-medium">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      {...register("email")}
                      className={`w-full bg-white border ${errors.email ? 'border-red-400' : 'border-[#E5E7EB]'} rounded-xl px-4 py-3.5 text-[#0A0A0A] placeholder-[#9CA3AF] focus:outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED] transition-all`}
                      placeholder="jane@company.com"
                    />
                    {errors.email && (
                      <span className="text-[10px] text-red-400 uppercase tracking-wider font-semibold mt-1">
                        {errors.email.message}
                      </span>
                    )}
                  </div>

                  {/* Project Type Select */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="projectType" className="text-xs uppercase tracking-widest text-[#6B7280] font-medium">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      {...register("projectType")}
                      className={`w-full bg-white border ${errors.projectType ? 'border-red-400' : 'border-[#E5E7EB]'} rounded-xl px-4 py-3.5 text-[#0A0A0A] appearance-none focus:outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED] transition-all cursor-pointer`}
                    >
                      <option value="" disabled hidden>Select an option...</option>
                      <option value="software">Software Development</option>
                      <option value="ai_ml">AI / ML Integration</option>
                      <option value="design">App Design / UIUX</option>
                      <option value="erp">ERP Solution</option>
                    </select>
                    {errors.projectType && (
                      <span className="text-[10px] text-red-400 uppercase tracking-wider font-semibold mt-1">
                        {errors.projectType.message}
                      </span>
                    )}
                  </div>

                  {/* Budget Select */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="budget" className="text-xs uppercase tracking-widest text-[#6B7280] font-medium">
                      Estimated Budget
                    </label>
                    <select
                      id="budget"
                      {...register("budget")}
                      className={`w-full bg-white border ${errors.budget ? 'border-red-400' : 'border-[#E5E7EB]'} rounded-xl px-4 py-3.5 text-[#0A0A0A] appearance-none focus:outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED] transition-all cursor-pointer`}
                    >
                      <option value="" disabled hidden>Select a range...</option>
                      <option value="10k-25k">$10k - $25k</option>
                      <option value="25k-50k">$25k - $50k</option>
                      <option value="50k-100k">$50k - $100k</option>
                      <option value="100k+">$100k+</option>
                    </select>
                    {errors.budget && (
                      <span className="text-[10px] text-red-400 uppercase tracking-wider font-semibold mt-1">
                        {errors.budget.message}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-4 flex items-center justify-center w-full rounded-xl bg-[#7C3AED] px-6 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-[#6D28D9] disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Transmitting...
                      </span>
                    ) : (
                      <span>Send Request</span>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
