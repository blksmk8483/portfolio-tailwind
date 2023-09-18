import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-full bg-violet-600 flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/e5b4d423-0a8b-48ca-a80d-013eb5ee7a6f"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8 mt-6">
          <p className="text-4xl font-bold inline border-b-4 border-violet-800 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Submit form below or email - brandonknightwork@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
          required
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          placeholder="Message"
          name="message"
          rows="10"
          required
        />
        <button className="text-white border-2  hover:bg-violet-800 hover:border-violet-800 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
