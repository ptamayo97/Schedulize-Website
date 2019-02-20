import React from "react";

class Contact extends React.Component {
  state = {};
  render() {
    return (
      <section class="section section-light-grey is-medium">
        <div class="container">
          <div class="title-wrapper has-text-centered">
            <h2 class="title is-2 is-spaced">Drop us a line or two </h2>
            <h3 class="subtitle is-5 is-muted">We'd love to hear from You</h3>
            <div class="divider is-centered" />
          </div>

          <div class="content-wrapper">
            <div class="columns">
              <div class="column is-6 is-offset-3">
                <form>
                  <div class="columns is-multiline">
                    <div class="column is-6">
                      <input
                        class="input is-medium"
                        type="text"
                        placeholder="Enter your Name"
                      />
                    </div>
                    <div class="column is-6">
                      <input
                        class="input is-medium"
                        type="email"
                        placeholder="Enter your Email"
                      />
                    </div>
                    <div class="column is-12">
                      <textarea
                        class="textarea"
                        rows="10"
                        placeholder="Write someting ..."
                      />
                    </div>
                    <div class="form-footer has-text-centered mt-10">
                      <button class="button cta is-large primary-btn raised is-clear">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
