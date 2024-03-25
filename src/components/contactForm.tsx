import "@/styles/styles.css";
import { Mail, MapPin, Phone } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  fullName: z.string().min(5, {
    message: "Username must be at least 2 characters.",
  }),

  email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),

  message: z.string().min(10, {
    message: "Username must be at least 2 characters.",
  }),
});

function ContactForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        fullName: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className="grid grid-cols-2 max-w-3xl mx-auto mt-10">
      <div className="flex justify-star items-star flex-col space-y-5 ">
        <h1 className="text-gray-800 text-2xl font-medium">
          Contact Astroship
        </h1>
        <p className="text-lg text-slate-500">
          Have something to say? We are here to help. Fill up the form or send
          email or call phone.
        </p>
        <div className="space-y-3">
          <p className="text-gray-600 flex gap-3 items-center">
            <MapPin className="text-gray-400" size={15} />
            1734 Sanfransico, CA 93063
          </p>
          <p className="text-gray-600 flex gap-3 items-center">
            <Mail className="text-gray-400" size={15} />
            hello@astroshipstarter.com
          </p>
          <p className="text-gray-600 flex gap-3 items-center">
            <Phone className="text-gray-400" size={15} />
            +1 (987) 4587 899
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <Form {...form}>
          <form  onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem >
                  <FormControl>
                    <Input className="w-full border-2 placeholder:text-gray-800 h-14" placeholder="Full Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input className="w-full border-2 placeholder:text-gray-800 h-14" placeholder="Email Address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea className="w-full border-2 placeholder:text-gray-800" placeholder="Your Message" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full h-14 text-base" type="submit">Send Message</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default ContactForm;
