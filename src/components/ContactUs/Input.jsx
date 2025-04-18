const Input = () => {
  return (
    <div className="w-10/12 mx-auto mt-20">
      <h2 className="text-center text-4xl max-sm:text-2xl">
        Send Us a Message
      </h2>

      <form
        method="get"
        className="grid gap-10 mt-10 grid-cols-2 max-md:grid-cols-1"
      >
        <input
          type="text"
          placeholder="First Name"
          className="border border-gray-500 py-3 px-8 rounded-xl outline-none"
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          className="border border-gray-500 py-3 px-8 rounded-xl outline-none"
          required
        />
        <input
          type="number"
          placeholder="Phone Number"
          className="border border-gray-500 py-3 px-8 rounded-xl outline-none"
          required
        />
        <input
          type="email"
          placeholder="Email Adress"
          className="border border-gray-500 py-3 px-8 rounded-xl outline-none"
          required
        />
        <textarea
          name=""
          className="border max-md:col-span-1 border-gray-500 pt-8 pb-32 px-8 rounded-xl outline-none col-span-2"
          placeholder="Your Massage"
          id=""
        ></textarea>

        <div className="col-span-2 max-md:col-span-1 flex items-center justify-center">
          <button className="bg-red-500 rounded-md cursor-pointer px-8 py-2">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Input;
