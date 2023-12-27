
const Contact = () => {
  return (
    <section id="contact"
    className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center"
    >
      <p className="text-textGreen text-lg items-center font-titleFont font-semibold flex tracking-wide">Whats Next</p>
      <h2 className="font-tileFont text-5xl font-semibold">Get In Touch</h2>
      <p className="max-w-[556px] text-center text-textDark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate voluptatem reprehenderit architecto dolorem error impedit commodi hic fugit, eligendi, eos nihil. Saepe optio alias dolorem quis illo fugiat unde commodi!</p>
      <a href="mailto:er.ibrahimsarder@gmail.com" target="-blank"><button
      className="w-36 h-12 text-textGreen rounded-md hover:bg-hoverColor border border-textGreen text-[13px] duration-300"
      >
      Say Hello
        </button></a>
    </section>
  );
};

export default Contact;