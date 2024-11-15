"use client";
import React, {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  useState,
} from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
       "service_dnopx1n",
        "template_rgxkfy6",
        {
          from_name: form.name,
          to_name: "Mallikarjuna Reddy Gayam",
          from_email: form.email,
          to_email: "mallikarjunareddygayam77@gmail.com",
          message: form.message,
        },
        "qWDzFPREiUdeMM8hZ"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };
  return (
    <div>
      <div id="contact" className="max-w-5xl flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
        <div className="flex-[0.75] p-8 rounded-2xl">
          <p className="font-medium text-2xl lg:text-3xl">Get in touch</p>
          <h3 className="text-muted-foreground">Contact.</h3>

          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-8">
            <label className="flex flex-col">
              <span className=" font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className="py-4 px-6 rounded-lg border border-blue-600 font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="font-medium mb-4">Your email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
                className="py-4 px-6 rounded-lg border border-blue-600 font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What you want to say?"
                className="py-4 px-6 rounded-lg font-medium border border-blue-600"
              />
            </label>

            <button
              type="submit"
              className="py-3 px-8 rounded-xl w-fit font-bold border border-blue-600"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
