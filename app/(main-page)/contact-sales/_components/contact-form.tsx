/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

const FormSchema = z.object({
  society_name: z.string().min(1, "Society/Apartment name is required"),
  location: z.string().min(1, "Location is required"),
  representative_name: z.string().min(1, "Contact person is required"),
  phone: z.string().min(10, "Phone number is required"),
  email: z.string().email("Invalid email"),
  no_of_families: z.enum(["1-2", "3-5", "6-8", "9-10", "11-12", "12+"]),
  need: z.enum([
    "Start a Society Kitchen",
    "Evaluate CookCart services",
    "Bulk Meals for Events",
    "Daily Meals Subscription",
    "Other",
  ]),
  message: z.string().optional(),
  terms: z.boolean().refine((val) => val === true, {
    message: "You must agree before submitting",
  }),
});

type FormValues = z.infer<typeof FormSchema>;

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      society_name: "",
      location: "",
      representative_name: "",
      phone: "",
      email: "",
      no_of_families: "1-2",
      need: "Start a Society Kitchen",
      message: "",
      terms: false,
    },
  });

  async function onSubmit(data: FormValues) {
    try {
      setLoading(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Something went wrong");

      setSubmitted(true);
      toast.success("Submitted successfully! We'll contact you soon.");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="w-full py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* LEFT SIDE */}
        <div className="flex flex-col items-start gap-10">
          <div className="text-white max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold leading-snug">
              Connect your <span className="text-yellow-200">Society</span> with CookCart
            </h2>
            <p className="mt-4 text-lg opacity-90">
              Fill out the details below and let’s bring freshly cooked,
              home-style food to every family in your society.
            </p>
          </div>

          {/* FORM */}
          <Form {...form}>
            {!submitted ? (
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="bg-white rounded-2xl shadow-lg p-8 space-y-6 w-full"
              >
                <FormField
                  control={form.control}
                  name="society_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Society / Apartment Name <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input {...field} required className="border-gray-300 focus:border-[#ff0157] focus:ring-[#ff0157]" />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Location / City <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input {...field} required className="border-gray-300 focus:border-[#ff0157] focus:ring-[#ff0157]" />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="representative_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Contact Person <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input {...field} required className="border-gray-300 focus:border-[#ff0157] focus:ring-[#ff0157]" />
                      </FormControl>
                    </FormItem>
                  )}
                />

                {/* Phone + Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Phone Number <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input {...field} required type="tel" className="border-gray-300 focus:border-[#ff0157] focus:ring-[#ff0157]" />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Email <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input {...field} required type="email" className="border-gray-300 focus:border-[#ff0157] focus:ring-[#ff0157]" />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>

                {/* No of Families */}
                <FormField
                  control={form.control}
                  name="no_of_families"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>No. of Families in Society</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="border-gray-300 focus:border-[#ff0157] focus:ring-[#ff0157]">
                            <SelectValue placeholder="Select size" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="1-2">1-2</SelectItem>
                          <SelectItem value="3-5">3-5</SelectItem>
                          <SelectItem value="6-8">6-8</SelectItem>
                          <SelectItem value="9-10">9-10</SelectItem>
                          <SelectItem value="11-12">11-12</SelectItem>
                          <SelectItem value="12+">12+</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />

                {/* Terms */}
                <FormField
                  control={form.control}
                  name="terms"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center gap-3">
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          required
                          className="border-gray-400 data-[state=checked]:bg-[#ff0157] data-[state=checked]:border-[#ff0157]"
                        />
                        <span className="text-sm text-gray-600">
                          I agree to the{" "}
                          <a href="/terms" className="text-[#ff0157] hover:underline">
                            terms & conditions
                          </a>
                        </span>
                      </div>
                    </FormItem>
                  )}
                />

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#ff0157] text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition"
                >
                  {loading ? "Submitting..." : "Register Society"}
                </button>
              </form>
            ) : (
              <div className="bg-white p-8 rounded-xl shadow-lg text-center text-green-600 font-semibold text-lg w-full">
                ✅ Thank you! <br /> We’ll get in touch with your society shortly.
              </div>
            )}
          </Form>
        </div>

        {/* RIGHT SIDE — RULES CARD */}
        <div className="relative flex items-center justify-center top-35">

          {/* Background Image 1 */}
          <img
            src="/contact-form/indian-sazi-dal.png"
            alt="Decorative background"
            className="absolute -top-20 -right-10 w-150 rotate-[10deg] opacity-90 hidden md:block"
          />

          {/* White Rules Card */}
          <div className="relative bg-white rounded-xl shadow-2xl p-8 z-10 max-w-md w-full">
            <h2 className="text-4xl text-center font-bold text-gray-800 mb-5">
              Society Registration Guidelines
            </h2>

            <ul className="space-y-3 text-gray-700 font-semibold leading-relaxed">
              <li>• Society must provide an authentic address and authorized representative.</li>
              <li>• Only Secretary / President / Treasurer can initiate registration.</li>
              <li>• A verification email will be sent within 24 hours.</li>
              <li>• Required documents include registration certificate & ID proof.</li>
              <li>• After verification, our team will arrange a discussion call.</li>
              <li>• Dashboard access is granted after onboarding.</li>
              <li>• All nesseary item will send to the socity.</li>
              <li>• All Terms and Condition will be explaied to you.</li>
              <li>• Priority support will be available 24/7.</li>
            </ul>
          </div>
          
          {/* Background Image 2 */}
          <img
            src="/contact-form/roti-dal.png"
            alt="Decorative background"
            className="absolute -bottom-20 -left-20 w-120 -rotate-[10deg] opacity-90 hidden md:block"
          />

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
