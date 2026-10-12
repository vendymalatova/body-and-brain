import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect } from "react";

const CookieTerms = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <Header />

      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-9">
            <h1 className="mb-4">Cookie Policy</h1>

            <p className="text-muted">Last updated: October 10, 2026</p>

            <p>
              This Cookie Policy explains how our website uses cookies and
              similar technologies, what they are used for, and how you can
              manage your preferences.
            </p>

            <section className="mb-4">
              <h2 className="h4 mb-3">1. What Are Cookies?</h2>
              <p>
                Cookies are small text files stored on your device when you
                visit a website. They help ensure that the website functions
                properly, remember your preferences, and, where applicable,
                analyze website traffic.
              </p>
            </section>

            <section className="mb-4">
              <h2 className="h4 mb-3">2. What Types of Cookies Do We Use?</h2>

              <h3 className="h6">Strictly Necessary Cookies</h3>
              <p>
                These cookies are required for the basic operation of the
                website, for example, to maintain security or remember your
                consent preferences. They cannot be disabled through our
                preference settings when they are genuinely necessary.
              </p>

              <h3 className="h6">Analytics Cookies</h3>
              <p>
                These cookies help us understand how visitors use our website,
                which pages they visit, and where we can improve its
                functionality. We use them only in accordance with applicable
                consent requirements.
              </p>

              <h3 className="h6">Marketing Cookies</h3>
              <p>
                These cookies may be used to measure advertising performance and
                display relevant content. They are used only when the applicable
                consent requirements have been met.
              </p>

              <h3 className="h6">Functional Cookies</h3>
              <p>
                These cookies allow us to remember your choices and provide
                enhanced features on our website.
              </p>
            </section>

            <section className="mb-4">
              <h2 className="h4 mb-3">3. How Long Do We Store Cookies?</h2>
              <p>
                Session cookies are generally deleted when you close your
                browser. Persistent cookies remain on your device for a
                specified period or until you delete them manually. The
                retention period depends on the individual cookie.
              </p>
            </section>

            <section className="mb-4">
              <h2 className="h4 mb-3">4. How Can You Manage Cookies?</h2>
              <p>
                You can adjust your preferences through our cookie banner or the
                cookie settings available on our website. You can also withdraw
                your consent to non-essential cookies at any time. Withdrawing
                consent does not affect the lawfulness of processing carried out
                before the withdrawal.
              </p>
              <p>
                You can also manage cookies through your browser settings.
                However, blocking certain cookies may affect the functionality
                of the website.
              </p>
            </section>

            <section className="mb-4">
              <h2 className="h4 mb-3">5. Third-Party Services</h2>
              <p>
                Our website may use third-party services, such as analytics
                tools, embedded videos, or advertising platforms. These services
                may use their own cookies in accordance with their terms and
                privacy policies.
              </p>
              <p>
                The specific services and cookies used must be listed according
                to the actual operation of the website.
              </p>
            </section>

            <section className="mb-4">
              <h2 className="h4 mb-3">6. Personal Data Protection</h2>
              <p>
                Information associated with cookies may, in some cases,
                constitute personal data. Further information about how we
                process personal data can be found in our Privacy Policy.
              </p>
            </section>

            <section className="mb-4">
              <h2 className="h4 mb-3">7. Contact</h2>
              <p>
                If you have any questions about our use of cookies, please
                contact us:
              </p>

              <ul className="list-unstyled">
                <li>
                  <strong>Website operator:</strong> Vendula Malátová
                </li>
                <li>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:vendymalatova@gmail.com">
                    vendymalatova@gmail.com
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CookieTerms;
