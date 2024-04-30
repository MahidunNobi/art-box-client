const About = () => {
  return (
    <div className="container mx-auto md:flex md:items-center md:gap-6 px-3 pt-16 pb-6">
      <div className=" rounded-md overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1461344577544-4e5dc9487184?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className=" mt-4">
        <h3 className="text-4xl font-medium mb-3"> About Us</h3>
        <p className="">
          At ArtBox, we believe in the power of art to inspire, uplift, and
          transform. Whether you&apos;re an experienced artist, a budding
          creative, or simply someone who appreciates the beauty of handmade
          crafts, we&apos;re here to fuel your passion and help you bring your
          artistic visions to life.
        </p>
        <p className="">
          So come on in, explore our aisles of possibility, and let your
          imagination run wild. Whether you&apos;re here to browse, shop, or
          simply soak up the creative atmosphere, we&apos;re thrilled to have
          you as part of our artistic community.
          <br />
          <br />
          Let&apos;s create something extraordinary together!
        </p>
      </div>
    </div>
  );
};

export default About;
