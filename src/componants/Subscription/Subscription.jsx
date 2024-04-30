const Subscription = () => {
  return (
    <div className="container mx-auto md:flex md:items-center md:gap-6 py-6 px-3">
      <div className="w-full md:max-w-[600px] mx-auto rounded-xl p-6 bg-gradient-to-r from-[#ff4b2b] to-[#ff416c]">
        <h2 className="text-4xl font-bold"> Subscribe to our Newsletter</h2>
        <p className="text-center">
          Stay connected with the latest updates, exclusive offers, and creative
          inspiration by subscribing to our newsletter
        </p>
        <input
          type="text"
          placeholder="abc@def.com"
          className="input w-full rounded-full bg-gray-800/50 text-white border-white"
        />
      </div>
    </div>
  );
};

export default Subscription;
