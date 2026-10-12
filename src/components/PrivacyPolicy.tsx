import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <>
      <Header />
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-9">
            <h1 className="mb-4">Privacy Policy</h1>

            <p className="text-muted">Last updated: October 12, 2026</p>

            <p>
              At Body and Brain, we respect your privacy and are committed to
              protecting your personal information. This Privacy Policy explains
              how we collect, use, disclose, and protect information when you
              visit our website.
            </p>

            <p>
              By using our website, you acknowledge the practices described in
              this Privacy Policy. Where applicable law requires consent, we
              will obtain it separately.
            </p>

            <section className="mb-4">
              <h2 className="h4 mb-3">1. Information We Collect</h2>

              <p>
                Depending on how you use our website, we may collect the
                following types of information:
              </p>

              <ul>
                <li>
                  <strong>Personal information:</strong> Information you
                  voluntarily provide, such as your name and email address when
                  contacting us.
                </li>
                <li>
                  <strong>Comments and submissions:</strong> Content you submit
                  through comments, contact forms, or other interactive
                  features, if available.
                </li>
                <li>
                  <strong>Technical information:</strong> Information such as
                  your IP address, browser type, device information, operating
                  system, and access times, where collected.
                </li>
                <li>
                  <strong>Usage information:</strong> Information about how you
                  interact with our website, such as pages visited and links
                  clicked, where analytics tools are used.
                </li>
                <li>
                  <strong>Cookie information:</strong> Information collected
                  through cookies and similar technologies, subject to
                  applicable consent requirements.
                </li>
              </ul>

              <p>
                We collect only the information that is reasonably necessary for
                the purposes described in this policy and as permitted by
                applicable law.
              </p>
            </section>

            <section className="mb-4">
              <h2 className="h4 mb-3">2. How We Use Your Information</h2>

              <p>We may use personal information to:</p>

              <ul>
                <li>Operate, maintain, and improve our website.</li>
                <li>Respond to questions, messages, and requests.</li>
                <li>
                  Manage comments and other user submissions, where these
                  features are available.
                </li>
                <li>
                  Understand website traffic and improve our content, where
                  analytics are used.
                </li>
                <li>
                  Protect our website against spam, fraud, abuse, and security
                  threats.
                </li>
                <li>
                  Comply with legal obligations and establish, exercise, or
                  defend legal claims where necessary.
                </li>
                <li>
                  Send newsletters or other communications when you have
                  subscribed and the applicable legal requirements are
                  satisfied.
                </li>
              </ul>

              <p>
                We will not use your personal information for incompatible
                purposes without an appropriate legal basis.
              </p>
            </section>

            <section className="mb-4">
              <h2 className="h4 mb-3">3. Legal Basis for Processing</h2>

              <p>
                Where the General Data Protection Regulation (GDPR) applies, we
                process personal data on one or more of the following legal
                bases, as appropriate:
              </p>

              <ul>
                <li>
                  <strong>Consent:</strong> When you have given consent for a
                  specific purpose.
                </li>
                <li>
                  <strong>Contract:</strong> When processing is necessary to
                  provide a service you requested or perform a contract with
                  you.
                </li>
                <li>
                  <strong>Legal obligation:</strong> When processing is
                  necessary to comply with applicable law.
                </li>
                <li>
                  <strong>Legitimate interests:</strong> When processing is
                  necessary for legitimate interests, provided those interests
                  are not overridden by your rights and freedoms.
                </li>
              </ul>

              <p>
                The applicable legal basis depends on the specific processing
                activity. Where we rely on consent, you may withdraw it at any
                time.
              </p>
            </section>

            <section className="mb-4">
              <h2 className="h4 mb-3">4. Cookies and Similar Technologies</h2>

              <p>
                Our website may use cookies and similar technologies to support
                essential website functions, remember preferences, analyze
                traffic, or provide advertising, depending on the tools we use.
              </p>

              <p>
                Where required by law, we will request your consent before using
                non-essential cookies or similar technologies. You can manage
                your preferences through our cookie settings, where available.
              </p>

              <p>
                For more information about the technologies used and how to
                manage your preferences, please read our{" "}
                <a href="/cookie-policy">Cookie Policy</a>.
              </p>
            </section>

            <section className="mb-4">
              <h2 className="h4 mb-3">5. Sharing Your Information</h2>

              <p>
                We do not sell your personal information as part of our ordinary
                website operations. We may share information where necessary
                with:
              </p>

              <ul>
                <li>
                  <strong>Service providers:</strong> Companies that provide
                  website hosting, security, email, analytics, or other
                  technical services.
                </li>
                <li>
                  <strong>Advertising and analytics providers:</strong>
                  Third parties whose tools we use, subject to applicable
                  privacy and consent requirements.
                </li>
                <li>
                  <strong>Authorities and legal parties:</strong>
                  Where disclosure is required by law or is necessary to protect
                  legal rights and safety.
                </li>
                <li>
                  <strong>Business successors:</strong> In connection with a
                  merger, restructuring, or transfer of website assets, where
                  legally permitted.
                </li>
              </ul>

              <p>
                We aim to ensure that third-party service providers handle
                personal data appropriately and only for authorized purposes.
              </p>
            </section>

            <section className="mb-4">
              <h2 className="h4 mb-3">6. Third-Party Services and Links</h2>

              <p>
                Our website may contain links to external websites or use
                third-party services. These services may collect information
                according to their own privacy policies.
              </p>

              <p>
                We are not responsible for the privacy practices of websites
                that we do not operate. We encourage you to review their privacy
                policies before providing personal information.
              </p>
            </section>

            <section className="mb-4">
              <h2 className="h4 mb-3">7. Data Retention</h2>

              <p>
                We retain personal information only for as long as reasonably
                necessary to fulfill the purposes for which it was collected,
                including legal, accounting, security, and reporting
                requirements.
              </p>

              <p>
                Retention periods vary depending on the type of information, the
                purpose of processing, and applicable legal obligations. When
                information is no longer required, we will delete it or
                anonymize it where appropriate.
              </p>
            </section>

            <section className="mb-4">
              <h2 className="h4 mb-3">8. Data Security</h2>

              <p>
                We take reasonable technical and organizational measures
                designed to protect personal information against unauthorized
                access, loss, misuse, alteration, or disclosure.
              </p>

              <p>
                However, no method of electronic storage or transmission over
                the internet is completely secure. We cannot guarantee absolute
                security.
              </p>
            </section>

            <section className="mb-4">
              <h2 className="h4 mb-3">9. International Data Transfers</h2>

              <p>
                Some of our service providers may process personal information
                in countries outside your country of residence, including
                countries outside the European Economic Area.
              </p>

              <p>
                Where applicable data protection law requires safeguards for
                international transfers, we will use an appropriate transfer
                mechanism and applicable safeguards.
              </p>
            </section>

            <section className="mb-4">
              <h2 className="h4 mb-3">10. Your Privacy Rights</h2>

              <p>
                Depending on your location and applicable law, you may have the
                right to:
              </p>

              <ul>
                <li>Request access to your personal information.</li>
                <li>Request correction of inaccurate information.</li>
                <li>
                  Request deletion of your personal information in applicable
                  circumstances.
                </li>
                <li>Request restriction of certain processing activities.</li>
                <li>
                  Object to certain processing activities, including processing
                  based on legitimate interests where applicable.
                </li>
                <li>
                  Request a copy of certain information in a portable format
                  where the law provides this right.
                </li>
                <li>Withdraw consent where processing is based on consent.</li>
                <li>
                  Lodge a complaint with your relevant data protection
                  authority.
                </li>
              </ul>

              <p>
                To exercise an applicable right, contact us using the details
                below. We may need to verify your identity before responding.
                Some requests may be subject to legal exceptions.
              </p>
            </section>

            <section className="mb-4">
              <h2 className="h4 mb-3">11. Children's Privacy</h2>

              <p>
                Our website is not intended to collect personal information from
                children in violation of applicable law. We do not knowingly
                collect children's personal information where doing so would be
                unlawful.
              </p>

              <p>
                If you believe a child has provided personal information to us
                unlawfully, please contact us so that we can review the matter
                and take appropriate action.
              </p>
            </section>

            <section className="mb-4">
              <h2 className="h4 mb-3">12. Changes to This Privacy Policy</h2>

              <p>
                We may update this Privacy Policy to reflect changes to our
                website, data processing practices, services, or legal
                requirements.
              </p>

              <p>
                Any updates will be published on this page, together with a
                revised "Last updated" date. Where required by law, we will
                provide additional notice or obtain consent.
              </p>
            </section>

            <section className="mb-4">
              <h2 className="h4 mb-3">13. Contact Information</h2>

              <p>
                If you have questions about this Privacy Policy or wish to
                exercise your privacy rights, please contact us:
              </p>

              <ul className="list-unstyled">
                <li>
                  <strong>Blog Name:</strong> Body and Brain
                </li>
                <li>
                  <strong>Website:</strong>{" "}
                  <a href="https://example.com">[Your Blog URL]</a>
                </li>
                <li>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:vendymalatova@gmail.com">
                    vendymalatova@gmail.com
                  </a>
                </li>
                <li>
                  <strong>Owner:</strong> Vendula Malátová
                </li>
              </ul>
            </section>

            <p className="text-muted small mt-5">
              This Privacy Policy describes our intended privacy practices and
              should be updated to reflect the information we actually collect
              and the services we use.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
