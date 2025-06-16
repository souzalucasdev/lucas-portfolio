const ContactForm = () => (
  <section id='contact' className='py-20 bg-gray-900 text-white'>
    <div className='max-w-7xl mx-auto px-6 text-center'>
      <h2 className='text-4xl font-semibold'>Contact Me</h2>
      <form className='mt-8 space-y-4'>
        <input
          type='text'
          placeholder='Your Name'
          className='w-full px-4 py-2 rounded-md'
        />
        <input
          type='email'
          placeholder='Your Email'
          className='w-full px-4 py-2 rounded-md'
        />
        <textarea
          placeholder='Your Message'
          className='w-full px-4 py-2 rounded-md h-32'
        ></textarea>
        <button
          type='submit'
          className='px-6 py-3 bg-indigo-500 text-white rounded-md hover:bg-indigo-700 transition-colors'
        >
          Send Message
        </button>
      </form>
    </div>
  </section>
);

export default ContactForm;
