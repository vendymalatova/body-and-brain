import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect } from "react";

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <Header />
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-9">
            <h1 className="mb-4">Terms of Service</h1>

            <p className="text-muted">Last updated: October 12, 2026</p>

            <p>
              Welcome to Body and Brain. These Terms of Service govern your
              access to and use of our website, including all articles, content,
              features, and services available through the website.
            </p>

            <p>
              By accessing or using this website, you agree to these Terms of
              Service. If you do not agree with these terms, please discontinue
              using the website.
            </p>

            <section className="mb-4">
              <h2 className="h4 mb-3">1. Use of the Website</h2>
              <p>
                You may use this website for lawful purposes and in accordance
                with these Terms of Service.
              </p>
              <p>You agree not to:</p>
              <ul>
                <li>Use the website for unlawful or fraudulent purposes.</li>
                <li>
                  Attempt to gain unauthorized access to the website, its
                  servers, or related systems.
                </li>
                <li>
                  Distribute viruses, malware, spam, or other harmful content.
                </li>
                <li>
                  Interfere with the website's operation, security, or
                  availability.
                </li>
                <li>
                  Copy or redistribute content in violation of applicable
                  intellectual property laws.
                </li>
              </ul>
            </section>

            <section className="mb-4">
              <h2 className="h4 mb-3">2. Intellectual Property</h2>
              <p>
                Unless otherwise stated, all original content on this website,
                including articles, text, graphics, logos, photographs, and
                other materials, is owned by or licensed to Body and Brain and
                is protected by applicable intellectual property laws.
              </p>
              <p>
                You may read and share links to our content for personal and
                lawful purposes. You may not reproduce, republish, modify,
                distribute, or commercially exploit our content without prior
                written permission, except where permitted by law.
              </p>
            </section>

            <section className="mb-4">
              <h2 className="h4 mb-3">3. User Comments and Submissions</h2>
              <p>
                If this website allows comments or other submissions, you are
                responsible for the content you post.
              </p>
              <p>
                You must not submit illegal, abusive, defamatory,
                discriminatory, misleading, or infringing content. You must also
                not use comments to distribute spam or engage in fraudulent
                activity.
              </p>
              <p>
                Where appropriate and permitted by law, we reserve the right to
                moderate, remove, or restrict access to user submissions that
                violate these terms.
              </p>
              <p>
                By submitting content, you grant us a non-exclusive, worldwide,
                royalty-free license to display and use that content as
                reasonably necessary to operate and promote the website, subject
                to applicable law.
              </p>
            </section>

            <section className="mb-4">
              <h2 className="h4 mb-3">4. Accuracy of Information</h2>
              <p>
                We aim to provide useful, accurate, and up-to-date information.
                However, we do not guarantee that all content on this website is
                complete, accurate, current, or free from errors.
              </p>
              <p>
                Content may be updated, changed, or removed at any time without
                prior notice. You should independently verify information before
                relying on it.
              </p>
            </section>

            <section className="mb-4">
              <h2 className="h4 mb-3">5. No Professional Advice</h2>
              <p>
                Unless expressly stated otherwise, the information published on
                this website is provided for general informational and
                educational purposes only. It does not constitute legal,
                financial, medical, or other professional advice.
              </p>
              <p>
                You should consult a qualified professional when appropriate.
                Decisions made based on information from this website are your
                responsibility.
              </p>
            </section>

            <section className="mb-4">
              <h2 className="h4 mb-3">6. External Links</h2>
              <p>
                This website may contain links to third-party websites,
                products, or services for your convenience.
              </p>
              <p>
                We do not control or necessarily endorse third-party websites
                and are not responsible for their content, availability, privacy
                practices, or terms. Visiting external websites is at your own
                discretion.
              </p>
            </section>

            <section className="mb-4">
              <h2 className="h4 mb-3">7. Advertising and Affiliate Links</h2>
              <p>
                This website may display advertisements or contain affiliate
                links. We may earn a commission if you purchase a product or
                service through certain links, at no additional cost to you.
              </p>
              <p>
                Where required by law, we will disclose sponsored content,
                affiliate relationships, and other relevant commercial
                connections.
              </p>
            </section>

            <section className="mb-4">
              <h2 className="h4 mb-3">8. Privacy</h2>
              <p>
                Your use of this website may involve the processing of personal
                information, depending on the features you use, such as contact
                forms, comments, or analytics.
              </p>
              <p>
                Please review our <a href="/privacy-policy">Privacy Policy</a>{" "}
                to learn how we collect, use, store, and protect personal
                information.
              </p>
              <p>
                Where required by applicable law, we will provide appropriate
                notices and obtain consent before using cookies or similar
                technologies.
              </p>
            </section>

            <section className="mb-4">
              <h2 className="h4 mb-3">9. Website Availability</h2>
              <p>
                We aim to keep this website available and functioning properly.
                However, we do not guarantee uninterrupted, secure, or
                error-free access at all times.
              </p>
              <p>
                We may update, suspend, or discontinue any part of the website,
                subject to applicable law.
              </p>
            </section>

            <section className="mb-4">
              <h2 className="h4 mb-3">10. Limitation of Liability</h2>
              <p>
                To the extent permitted by applicable law, [Your Blog Name] and
                its operators will not be liable for indirect, incidental,
                special, or consequential losses arising from your use of, or
                inability to use, this website.
              </p>
              <p>
                Nothing in these terms excludes or limits liability where such
                exclusion or limitation is prohibited by law, including
                mandatory consumer rights that apply.
              </p>
            </section>

            <section className="mb-4">
              <h2 className="h4 mb-3">11. Indemnification</h2>
              <p>
                To the extent permitted by applicable law, you may be
                responsible for losses, claims, or reasonable expenses arising
                from your unlawful use of the website or your material violation
                of these terms.
              </p>
            </section>

            <section className="mb-4">
              <h2 className="h4 mb-3">12. Changes to These Terms</h2>
              <p>
                We may update these Terms of Service from time to time to
                reflect changes to the website, our practices, or applicable
                legal requirements.
              </p>
              <p>
                Updated terms will be published on this page with a revised
                "Last updated" date. Where required by law, we will provide
                additional notice or obtain consent.
              </p>
            </section>

            <section className="mb-4">
              <h2 className="h4 mb-3">13. Governing Law</h2>
              <p>
                These Terms of Service are governed by the laws of Czech
                Republic, except where applicable law provides otherwise.
              </p>
              <p>
                Any disputes will be handled by the competent courts or through
                other procedures required by applicable law.
              </p>
            </section>

            <section className="mb-4">
              <h2 className="h4 mb-3">14. Contact Information</h2>
              <p>
                If you have questions about these Terms of Service, please
                contact us:
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
              By using this website, you acknowledge that you have read and
              understood these Terms of Service.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsOfService;
