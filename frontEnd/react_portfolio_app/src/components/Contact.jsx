import React from "react";

const Contact = () => {
  return (
    <div
    id="contact"
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
      method="post"
        className="flex flex-col max-w-[600px] w-full"
        action="https://getform.io/f/20bf92f6-5c9b-4cc9-abc0-f6a9cae99334"  // get this action link from getform.io
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            // Submit the form below or write me an email -
            ernestjasaitis@gmail.com
          </p>
        </div>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="bg-[#ccd6f6] p-2"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="my-4 p-2 bg-[#ccd6f6]"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          placeholder="Message"
          name="message"
          rows="10"
        ></textarea>
        <button className="text-white text-xl border-2 hover:bg-pink-600 hover:border-pink-600 px-14 py-3 my-8 mx-auto flex items-center">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
