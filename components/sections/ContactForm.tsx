"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import MagneticButton from "@/components/ui/MagneticButton";

const schema = z.object({
  name: z.string().min(2, "Tell me your name"),
  email: z.string().email("Valid email please"),
  message: z.string().min(10, "Tell me a bit more"),
});

type FormValues = z.infer<typeof schema>;

export default function ContactForm() {
  const [state, setState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    setState("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("failed");
      setState("success");
      reset();
    } catch {
      setState("error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <label htmlFor="contact-name" className="text-caption font-mono uppercase tracking-widest text-[var(--smoke)]">
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          placeholder="Your name"
          {...register("name")}
          className="w-full px-5 py-4 rounded-2xl bg-[var(--paper)] border border-[var(--mist)]/40 text-body text-[var(--ink)] placeholder:text-[var(--smoke)] focus:outline-none focus:border-[var(--lime-deep)] transition-colors"
        />
        {errors.name && <p className="text-caption text-[var(--coral)]">{errors.name.message}</p>}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-email" className="text-caption font-mono uppercase tracking-widest text-[var(--smoke)]">
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          placeholder="you@business.com"
          {...register("email")}
          className="w-full px-5 py-4 rounded-2xl bg-[var(--paper)] border border-[var(--mist)]/40 text-body text-[var(--ink)] placeholder:text-[var(--smoke)] focus:outline-none focus:border-[var(--lime-deep)] transition-colors"
        />
        {errors.email && <p className="text-caption text-[var(--coral)]">{errors.email.message}</p>}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-message" className="text-caption font-mono uppercase tracking-widest text-[var(--smoke)]">
          What&rsquo;s going on?
        </label>
        <textarea
          id="contact-message"
          rows={5}
          placeholder="A few sentences on your situation."
          {...register("message")}
          className="w-full px-5 py-4 rounded-2xl bg-[var(--paper)] border border-[var(--mist)]/40 text-body text-[var(--ink)] placeholder:text-[var(--smoke)] focus:outline-none focus:border-[var(--lime-deep)] transition-colors resize-none"
        />
        {errors.message && <p className="text-caption text-[var(--coral)]">{errors.message.message}</p>}
      </div>

      <MagneticButton
        type="submit"
        disabled={state === "submitting"}
        className="inline-flex items-center justify-center px-7 py-4 rounded-full bg-[var(--lime-acid)] text-[var(--ink)] font-semibold text-body shadow-md self-start disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {state === "submitting"
          ? "Sending..."
          : state === "success"
          ? "Got it ✓"
          : "Send message →"}
      </MagneticButton>

      {state === "error" && (
        <p className="text-caption text-[var(--coral)]">
          Something went wrong. Email ethan@freshlimemedia.com directly.
        </p>
      )}
      {state === "success" && (
        <p className="text-caption text-[var(--lime-deep)]">
          Thanks. I&rsquo;ll reply within 4 business hours.
        </p>
      )}
    </form>
  );
}
