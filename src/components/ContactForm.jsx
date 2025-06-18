export default function Contact() {
  return (
    <section className="py-5 bg-light" id="contact">
      <div className="container">
        <h2 className="mb-4 text-center">📬 Contact Us</h2>
        <p className="text-center mb-5">
          Have a question, want to book a party, or just wanna talk games and
          coffee? Drop us a message!
        </p>
        <div className="row justify-content-center">
          <div className="col-md-8">
            /
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Your Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="player1@pressstart.com"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                  placeholder="Let’s plan a Pokémon trivia night!"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
