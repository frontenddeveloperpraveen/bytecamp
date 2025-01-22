import { X } from "lucide-react";
import React, { useState, useEffect } from "react";
import Modal from "react-modal";

const Footer = ({ link }) => {
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  const openTermsModal = () => setIsTermsModalOpen(true);
  const closeTermsModal = () => setIsTermsModalOpen(false);

  const openPrivacyModal = () => setIsPrivacyModalOpen(true);
  const closePrivacyModal = () => setIsPrivacyModalOpen(false);

  useEffect(() => {
    if (isTermsModalOpen || isPrivacyModalOpen) {
      // Disable scrolling when any modal is open
      document.body.style.overflow = "hidden";
    } else {
      // Enable scrolling when modals are closed
      document.body.style.overflow = "auto";
    }

    return () => {
      // Reset the body style when the component is unmounted
      document.body.style.overflow = "auto";
    };
  }, [isTermsModalOpen, isPrivacyModalOpen]);

  return (
    <footer className="flex flex-col space-y-10 justify-center m-10">
      <nav className="flex justify-center flex-wrap gap-6 text-gray-500 font-medium lg:text-base text-3xl">
        <a className="hover:text-gray-900" href="#">
          Home
        </a>
        <a
          className="hover:text-gray-900"
          onClick={(e) => {
            e.preventDefault();
            openTermsModal();
          }}
        >
          Terms and Conditions
        </a>
        <a
          className="hover:text-gray-900"
          onClick={(e) => {
            e.preventDefault();
            openPrivacyModal();
          }}
        >
          Privacy Policy
        </a>
        <a
          className="hover:text-gray-900"
          href="/certificate_verify"
          target="blank"
        >
          Verify Certificate
        </a>
        <a className="hover:text-gray-900" href={link.custom} target="blank">
          Enroll Course
        </a>
        <a className="hover:text-gray-900" href={link.default} target="blank">
          Contact
        </a>
      </nav>

      <div className=" justify-center space-x-5 lg:flex hidden">
        <a
          href="https://www.linkedin.com/company/bytecamp-in"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
        </a>
        <a
          href="https://instagram.com/bytecamp.in"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
        </a>
        <a href={link.default} target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/?size=32&id=16713&format=png" />
        </a>
      </div>

      <p className="text-center text-gray-700 font-medium lg:text-base text-3xl">
        &copy; 2025 Bytecamp. All rights reserved.
      </p>

      {/* Terms and Conditions Modal */}
      <Modal
        isOpen={isTermsModalOpen}
        onRequestClose={closeTermsModal}
        contentLabel="Terms and Conditions"
        preventScroll
      >
        <h2 className="text-2xl font-semibold relative">
          Terms and Conditions
        </h2>
        <div>
          <p className="my-4">
            Welcome to <strong>Bytecamp</strong>, an online learning platform
            offering courses and certifications. By accessing or using the
            services provided on this website (the “Site”), you agree to comply
            with and be bound by the following Terms and Conditions (“Terms”).
            If you do not agree with these Terms, please do not use the Site.
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            1. Acceptance of Terms
          </h2>
          <p className="mb-4">
            By using this Site, you agree to comply with and be bound by these
            Terms, along with our Privacy Policy. These Terms govern your access
            to and use of the Site, including all content, services, and
            features offered by Bytecamp.
          </p>

          <h2 className="text-2xl font-semibold mt-6">2. Eligibility</h2>
          <p className="mb-4">
            Bytecamp courses are available to all individuals, with no specific
            age restrictions. Users are required to comply with the laws of
            their respective countries.
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            3. Account Registration
          </h2>
          <p className="mb-4">
            No account creation is required to access the courses on Bytecamp.
            You can browse and participate in courses without registering.
          </p>

          <h2 className="text-2xl font-semibold mt-6">4. Refund Policy</h2>
          <p className="mb-4">
            We offer a <strong>3-day full money refund</strong> policy. To
            qualify for a refund:
            <ul className="list-disc ml-5 mb-4">
              <li>
                You must have 100% attendance during the first 3 days of the
                course.
              </li>
              <li>A valid reason must be provided for requesting a refund.</li>
            </ul>
            Refunds will be processed within 7 days if the reason is valid.
            Refunds will not be granted if the conditions above are not met.
          </p>

          <h2 className="text-2xl font-semibold mt-6">5. Payment Terms</h2>
          <p className="mb-4">
            Payments for courses are accepted through UPI. For card payments or
            other methods such as net banking, additional charges may apply, as
            per the respective card or payment provider.
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            6. Geographic Limitation
          </h2>
          <p className="mb-4">
            Currently, the courses are designed primarily for{" "}
            <strong>Tamil-speaking individuals</strong>.
          </p>

          <h2 className="text-2xl font-semibold mt-6">7. Certification</h2>
          <p className="mb-4">
            Bytecamp provides certifications upon course completion. However, we
            do not guarantee that obtaining our certification will lead to job
            placements or internships. Success in the job market is influenced
            by many factors beyond the certification.
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            8. Final Assessment Exam
          </h2>
          <p className="mb-4">
            If a user fails the Final Assessment Exam of the course, they may
            retake the exam by paying a fee of Rs.100.
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            9. User-Generated Content
          </h2>
          <p className="mb-4">
            We do not allow users to upload or share any content beyond
            course-related materials.
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            10. Prohibited Conduct
          </h2>
          <p className="mb-4">
            You agree not to engage in any conduct that:
            <ul className="list-disc ml-5 mb-4">
              <li>Violates any laws or regulations.</li>
              <li>
                Harms, disables, overburdens, or interferes with the operation
                of the Site.
              </li>
              <li>
                Attempts to gain unauthorized access to any system or network
                associated with Bytecamp.
              </li>
            </ul>
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            11. Modification of Terms
          </h2>
          <p className="mb-4">
            Bytecamp reserves the right to modify these Terms at any time. You
            will be notified of any changes and your continued use of the Site
            constitutes acceptance of the updated Terms.
          </p>
        </div>
        <button
          className="mt-4 px-4 py-2 absolute top-0 right-3"
          onClick={closeTermsModal}
        >
          <X />
        </button>
      </Modal>

      {/* Privacy Policy Modal */}
      <Modal
        isOpen={isPrivacyModalOpen}
        onRequestClose={closePrivacyModal}
        contentLabel="Privacy Policy"
        preventScroll
      >
        <h2 className="text-2xl font-semibold relative">Privacy Policy</h2>
        <div>
          <p className="my-4">
            Welcome to <strong>Bytecamp</strong>, an online learning platform
            offering courses and certifications. By accessing or using the
            services provided on this website (the “Site”), you agree to comply
            with and be bound by the following Privacy Policy. If you do not
            agree with this Privacy Policy, please do not use the Site.
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            1. Information We Collect
          </h2>
          <p className="mb-4">
            We collect personal information such as your name, email address,
            and payment details when you enroll in a course. We also collect
            usage data to analyze and improve our services, including
            information about the pages you visit on the Site.
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            2. How We Use Your Information
          </h2>
          <p className="mb-4">
            We use your personal information to:
            <ul className="list-disc ml-5 mb-4">
              <li>Provide and manage our services and courses.</li>
              <li>Process payments and transactions.</li>
              <li>
                Communicate with you about your account and course updates.
              </li>
              <li>Improve the functionality and performance of our website.</li>
            </ul>
          </p>

          <h2 className="text-2xl font-semibold mt-6">3. Data Security</h2>
          <p className="mb-4">
            We implement appropriate security measures to protect your personal
            information. However, no method of electronic transmission or
            storage is 100% secure, and we cannot guarantee its absolute
            security.
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            4. Sharing Your Information
          </h2>
          <p className="mb-4">
            We do not sell your personal information to third parties. We may
            share your information with service providers to help process
            payments or manage our services. We may also share information to
            comply with legal obligations or protect the rights and safety of
            Bytecamp.
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            5. Cookies and Tracking Technologies
          </h2>
          <p className="mb-4">
            We use cookies to enhance user experience and analyze site usage.
            You can manage your cookie preferences through your browser
            settings.
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            6. Changes to This Privacy Policy
          </h2>
          <p className="mb-4">
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page, and the date of the last update will be
            reflected in the “Effective Date.”
          </p>

          <h2 className="text-2xl font-semibold mt-6">7. Contact Us</h2>
          <p className="mb-4">
            If you have any questions or concerns about this Privacy Policy,
            please contact us at:
            <br />
            Email: {"  "}
            <a href="support@bytecamp.in" className="font-semibold">
              support@bytecamp.in
            </a>
            <br />
          </p>
        </div>
        <button
          className="mt-4 px-4 py-2 absolute top-0 right-3"
          onClick={closePrivacyModal}
        >
          <X />
        </button>
      </Modal>
    </footer>
  );
};

export default Footer;
