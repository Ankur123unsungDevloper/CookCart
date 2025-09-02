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
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

// Use Sonner for toast notifications
import { toast } from "sonner";

const FormSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  email: z.string().email(),
  job_title: z.string(),
  company_name: z.string(),
  help: z.enum([
    "Evaluate CookCart for my society",
    "Learn More",
    "Get a Quote",
    "How to use CookCart",
    "Other",
  ]),
  company_size: z.enum([
    "1-10",
    "11-50",
    "51-200",
    "201-500",
    "501-1000",
    "1000+",
  ]),
  info: z.string(),
});
type FormValues = {
  first_name: string;
  last_name: string;
  email: string;
  job_title: string;
  company_name: string;
  help:
    | "Evaluate CookCart for my society"
    | "Learn More"
    | "Get a Quote"
    | "How to use CookCart"
    | "Other";
  company_size: "1-10" | "11-50" | "51-200" | "201-500" | "501-1000" | "1000+";
  info: string;
  terms: boolean;
};

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      job_title: "",
      company_name: "",
      help: "Learn More",
      company_size: "1-10",
      info: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      setLoading(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Something went wrong");
      }

      setSubmitted(true);
      toast.success("Submitted successfully! We'll contact you soon.");
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        position: "relative",
        overflow: "hidden",
      }}
      className="md:flex justify-center pt-20 px-8"
    >
      <div>
        <div className="text-6xl font-bold w-2/3 pr-10 text-white">
          Talk to our Team to get your Society kitchen started
        </div>
        <div className="py-4 text-white">
          Fill out the form and we will get in touch with you shortly.
        </div>
        <Form {...form}>
          {!submitted ? (
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="md:flex flex flex-col gap-6">
                <div className="md:flex flex flex-row gap-10 items-start">
                  <FormField
                    control={form.control}
                    name="first_name"
                    render={({ field }) => (
                      <FormItem className="items-center justify-center w-full">
                        <FormLabel>
                          First name
                          <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="last_name"
                    render={({ field }) => (
                      <FormItem className="items-center justify-center w-full">
                        <FormLabel>
                          Last name
                          <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="items-center justify-center w-full">
                      <FormLabel>
                        Email
                        <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="job_title"
                  render={({ field }) => (
                    <FormItem className="items-center justify-center w-full">
                      <FormLabel>Job title</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="company_name"
                  render={({ field }) => (
                    <FormItem className="items-center justify-center w-full">
                      <FormLabel>
                        Society name
                        <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="company_size"
                  render={({ field }) => (
                    <FormItem className="items-center justify-center w-full">
                      <FormLabel>
                        Society size
                        <span className="text-red-500">*</span>
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="1-10">1-10</SelectItem>
                          <SelectItem value="11-50">11-50</SelectItem>
                          <SelectItem value="51-200">51-200</SelectItem>
                          <SelectItem value="201-500">201-500</SelectItem>
                          <SelectItem value="501-1000">501-1000</SelectItem>
                          <SelectItem value="1000+">1000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="help"
                  render={({ field }) => (
                    <FormItem className="items-center justify-center w-full">
                      <FormLabel>How can we help?</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Evaluate CookCart for my society">
                            Evaluate CookCart for my society
                          </SelectItem>
                          <SelectItem value="Learn More">Learn More</SelectItem>
                          <SelectItem value="Get a Quote">Get a Quote</SelectItem>
                          <SelectItem value="How to use CookCart">
                            How to use CookCart
                          </SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="info"
                  render={({ field }) => (
                    <FormItem className="items-center justify-center w-full">
                      <FormLabel className="w-60 text-sm">
                        Anything else?
                      </FormLabel>
                      <FormControl>
                        <Textarea style={{ height: "100px" }} {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <div className="flex gap-4 items-center">
                  <Checkbox className="text-[#6c6684]" />
                  <span className="text-gray-500 text-sm">
                    I agree to the terms and conditions
                  </span>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-red-500 text-white px-6 py-2 rounded font-semibold hover:bg-red-600 transition"
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          ) : (
            <div className="text-green-600 font-semibold text-lg">
              Thank you for contacting us! We will get back to you shortly.
            </div>
          )}
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;