import React from "react";
import { Input } from "../ui/input-field";
import { Button } from "../ui/button";

const ContactUs = () => {
  return (
    <div>
      <div className="my-20 max-w-[1200px] mx-auto w-[95%] md:w-[90%] flex flex-col md:flex-row gap-5 items-center">
        <div className="md:w-[45%] text-center md:text-left mb-6 md:mb-0">
          <h2 className="font-extrabold text-3xl mb-3">TALK TO US TODAY</h2>
          <p className="text-[#444]">
            Reach Out to Us Today and Join the Mission to Serve and Uplift
            Communities in Need
          </p>
          <p className="font-bold mt-4"> info@helpus.com</p>
          <p className="font-bold ">+234 123 456 7890</p>
        </div>
        <div className="md:w-[45%]">
          <form action="">
            <Input placeholder="Full Name" label="Full Name" required />
            <Input placeholder="Email" label="Email" required />
            <label className="font-light">
              <p className="mb-2">Message</p>
              <textarea
                placeholder="Message"
                className="border rounded-md p-3 w-full row-span-7 bg-grey"
              />
            </label>
            <Button variant={"rect"} className="mt-8 w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
