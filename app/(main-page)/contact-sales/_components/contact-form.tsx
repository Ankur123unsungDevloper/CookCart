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
  no_of_families: z.enum([
    "1-2",
    "3-5",
    "6-8",
    "9-10",
    "11-12",
    "12+"
  ]),
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
    <div className="flex justify-start items-start py-20 px-6">
      <div className="max-w-5xl w-full flex flex-col items-start gap-10">
        {/* Left side - Heading & Subtext */}
        <div className="text-white max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold leading-snug">
            Connect your <span className="text-yellow-200">Society</span> with
            CookCart 🚀
          </h2>
          <p className="mt-4 text-lg opacity-90">
            Fill out the details below and let’s bring freshly cooked,
            home-style food to every family in your society.  
          </p>
        </div>

        {/* Left side - Form */}
        <Form {...form}>
          {!submitted ? (
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="bg-white rounded-2xl shadow-lg p-8 space-y-6 w-full md:w-3/4"
            >
              {/* Society Name */}
              <FormField
                control={form.control}
                name="society_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Society / Apartment Name <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        required
                        className="border-gray-300 focus:border-[#ff0157] focus:ring-[#ff0157]"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* Location */}
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Location / City <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        required
                        className="border-gray-300 focus:border-[#ff0157] focus:ring-[#ff0157]"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* Contact Person */}
              <FormField
                control={form.control}
                name="representative_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Contact Person <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        required
                        className="border-gray-300 focus:border-[#ff0157] focus:ring-[#ff0157]"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* Phone & Email */}
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
                        <Input
                          {...field}
                          type="tel"
                          required
                          className="border-gray-300 focus:border-[#ff0157] focus:ring-[#ff0157]"
                        />
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
                        <Input
                          {...field}
                          type="email"
                          required
                          className="border-gray-300 focus:border-[#ff0157] focus:ring-[#ff0157]"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              {/* No of Moms */}
              <FormField
                control={form.control}
                name="no_of_families"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      No. of Families in Society
                    </FormLabel>
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
                        <SelectItem value="10-12">10-12</SelectItem>
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
            <div className="bg-white p-8 rounded-xl shadow-lg text-center text-green-600 font-semibold text-lg w-full md:w-3/4">
              ✅ Thank you!  
              <br /> We’ll get in touch with your society shortly.
            </div>
          )}
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;
