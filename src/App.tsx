function App() {
  return (
    <div className="container  mx-auto min-h-screen px-6 py-8 bg-gray-100">
      <section id="header">
        <div className="text-center">
          <h1>
            Tom Gonzales home training <br /> I'll get you in shape!
          </h1>
          <h2>Muscle building • Functional training • Nutritional advice</h2>
        </div>
      </section>

      <section id="image_services" className="mt-8 grid grid-cols-2 gap-4">
        <div id="image">
          <img src="img/tom.jpg" alt="Tom Gonzales Online Training" />
        </div>
        <div id="services">
          <h3>I offer you:</h3>
          <ul>
            <li>
              Lessons via Skype and you can record all sessions and watch them again later.{' '}
            </li>
            <li>Holistic full body training</li>
            <li>Training without equipment</li>
            <li>Pain reduction</li>
            <li>Tailored nutrition plans</li>
          </ul>
          <h3>My qualifications:</h3>
          <ul>
            <li>Certified nutritionist</li>
            <li>Certified fitness trainer</li>
            <li>5 years of experience in 1: 1 training</li>
          </ul>
        </div>
      </section>

      <section id="price_payment" className="mt-8">
        <div className="w-8/12 mx-auto">
          <h2>Prices and payment</h2>
          <p>My most important goal is that you get ahead with your goals.</p>
          <p>
            In a free opening session we will discuss what you want to achieve and how much you
            can or want to spend. Then we are guaranteed to find a solution that suits you.
          </p>
        </div>
      </section>

      <section id="contact" className="mt-8">
        <div className="grid grid-cols-2 gap-4 w-8/12 mx-auto">
          <div id="email">
            <p>Your message:</p>
            <a href="mailto:markusgonzales@gmail.com">Send an Email</a>
          </div>
          <div id="whatsApp_telefon">
            <p>WhatsApp:</p>1 222 555 44 33
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
