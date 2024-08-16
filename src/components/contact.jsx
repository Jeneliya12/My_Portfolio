const Contact = () => (
  <section id="contact" className="py-8 bg-gray-100">
    <h2 className="text-3xl font-bold mb-4">Contact</h2>
    <form action="#" method="POST" className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        className="w-full p-2 border border-gray-300 rounded"
        rows="4"
        required
      ></textarea>
      <button type="submit" className="bg-blue-600 text-white p-2 rounded">
        Send
      </button>
    </form>
  </section>
);

export default Contact;
