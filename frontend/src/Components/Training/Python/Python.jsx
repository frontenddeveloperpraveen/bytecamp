import React from "react";
import Notification from "../../Notification";
import { Slider } from "../../Slider";
import Navbar from "../../Navbar";
import Hero from "./Hero";
import About_python from "./About_python";
import FAQ from "../../FAQ";
import Working from "../../Working";
import Syllabus from "../../Syllabus";
import CustomerReviews from "../../CustomerReviews";
import Footer from "./Footer";
import Helmet from "react-helmet";

const Python = () => {
  const Slider_info = [
    {
      src: "/assets/images/summer-offer-byte-camp-python-course-cheap-price.jpg",
      alt: "Byte Camp Offer 20% Offer",
    },
    {
      src: "/assets/images/bytecamp-offer-offering-2500rs-cheap-python-course-online-recorded-sessions.png",
      alt: "Byte Camp Massive 20% Offer",
    },
    {
      src: "/assets/images/Roadmap-bytecamp-python-cheap-2500rs-online-teaching-easy-study.png",
      alt: "Byte Camp Road Map for Python Programming",
    },
    {
      src: "/assets/images/bytecamp-ways-to-success-offer-python-course-machinelearning-waytosuccess.png",
      alt: "Byte Camp Ways to Success",
    },
  ];

  const WP_Link = {
    custom: "https://wa.link/2oniai",
    default: "https://wa.link/98x0l7",
  };
  const Course_syllabus = [
    {
      title: "Getting Started with Programming",
      topics: "6 Topics",
      items: [
        "How Computer Works",
        "What is Programming",
        "Why Programming is Needed",
        "What is Python",
        "Installation Guidance",
        "Understanding the Development Environment",
      ],
      duration: "3 Classes",
    },
    {
      title: "Python Fundamentals",
      topics: "9 Topics",
      items: [
        "Hello World Program",
        "Variables, Literals, Statements, Syntax",
        "Data Types and Declarative Syntax",
        "Functions of Data Types",
        "Control Flow",
        "Conditional Statements (Types of Conditions)",
        "Input and Output Operations",
        "Type Casting and Conversion",
        "Debugging Basics",
      ],
      duration: "6 Classes",
    },
    {
      title: "Building with Functions and Modules",
      topics: "8 Topics",
      items: [
        "Loops and Control Statements",
        "Functions and its Types",
        "Recursive Programming",
        "Built-in Methods for Ease Programming",
        "Modules and Package Building",
        "Useful Modules",
        "Lambda Functions",
        "Logic Building Strategies",
      ],
      duration: "7 Classes",
    },
    {
      title: "Advanced Functions and File Handling",
      topics: "6 Topics",
      items: [
        "Anonymous Functions",
        "Iterable Super Functions",
        "Decorators",
        "File Handling",
        "Context Managers",
        "Error Handling in File Operations",
      ],
      duration: "4 Classes",
    },
    {
      title: "Mastering Object-Oriented Programming",
      topics: "10 Topics",
      items: [
        "Concept of DRY Rule",
        "Classes and Objects",
        "Object-Oriented Programming Principles",
        "Inheritance",
        "Abstraction",
        "Encapsulation",
        "Polymorphism",
        "Static and Class Methods",
        "Dunder Methods and Operator Overloading",
        "Object Serialization and Deserialization",
      ],
      duration: "8 Classes",
    },
    {
      title: "Advance Python Modules",
      topics: "4 Topics",
      items: [
        "GUI Python Programming",
        "Regular Expression",
        "Networking Socket module",
        "Database Connectivity",
      ],
      duration: "8 Classes",
    },
    {
      title: "Realtime Projects",
      topics: "3 Topics",
      items: ["Realtime Project 1", "Realtime Project 2", "Realtime Project 3"],
      duration: "3 Classes",
    },
    {
      title: "Add-ons",
      topics: "3 Topics",
      items: [
        "Tips to be a successful backend developer",
        "What's next",
        "Certification guidance",
      ],
      duration: "1 Classes",
    },
  ];

  const FAQ_course = [
    {
      question: "Do I need any pre-requisite knowledge for this course?",
      answer: `<p>No Need. This course is designed in a way that could be easily understood by anyone and is very beginner-friendly.</p>`,
    },
    {
      question: "How to pay for the course?",
      answer: `<p>Click the Join Now button and our team will contact you.</p>`,
    },
    {
      question: "Live classes or Recorded classes?",
      answer: `<p>You will be having <strong>LIVE</strong> classes on a daily basis. The recorded session of the respective classes will also be sent to you.</p>`,
    },
    {
      question: "How can I raise my doubts?",
      answer: `<p>You can ask your doubts at the end of each session, or you can send personal messages to the Mentor and clear your doubts.</p>`,
    },
    {
      question: "What if I don’t get a confirmation call after payment?",
      answer: `
      <ul style="list-style:decimal; margin-left:20px">
        <li>Ensure you have sent the payment screenshot with the Transaction ID to the correct <a href="${WP_Link.default}" target="blank" ><b style="color:#0000EE">WhatsApp number</b></a>.</li>
        <li>If you haven’t received a call within 6 hours, please contact us on <a href="mailto:mail.bytecamp@gmail.com" target="blank" ><b style="color:#0000EE">mail.bytecamp@gmail.com</b></a>.</li>
        <li>Our team will prioritize and assist you promptly.</li>
      </ul>
    `,
    },
    {
      question: "What modes of payment are available?",
      answer: `<p>You can make the payment via <strong>UPI</strong> (advised) as it avoids any extra charges.</p>`,
    },
    {
      question: "I don't have UPI, What can I do?",
      answer: `<p>You can contact our Team either through  <a href="${WP_Link.default}" target="blank" ><b style="color:#0000EE">WhatsApp</b></a> or <a href="mailto:mail.bytecamp@gmail.com" target="blank" ><b style="color:#0000EE">Email</b></a>. They will guide you to resolve your problem.</p>`,
    },
  ];

  const reviews = [
    {
      name: "Ajay S",
      image:
        "https://i.pinimg.com/736x/52/44/95/524495ccf8c05ab40f5905d852a358c2.jpg",
      review:
        "It is an excellent platform to learn coding. The platform is well structured and they even provide assignment on regular basis",
    },
    {
      name: "Saravanan S",
      image:
        "https://lh3.googleusercontent.com/-i07CQ3LOPQ0/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmhgRli73IRVC9a1pwVihaw2yv7pA/photo.jpg",
      review:
        "The online Python course exceeded my expectations! It provided a comprehensive curriculum, interactive exercises, and excellent instructor support. Highly recommended for anyone looking to learn Python efficiently.",
    },
    {
      name: "J Pooja",
      image:
        "https://lh3.googleusercontent.com/-skL6n8h6414/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rc4c2KcDsooG3zc7KWsLVL_uzdzLw/mo/photo.jpg",
      review:
        "It really exceeded my expectations. The recordings, assignments, and final assessment helped me well. It is very useful.",
    },

    {
      name: "Nandini S A",
      image:
        "https://lh5.googleusercontent.com/-HUHDOIBRdOI/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rexMlk9Sa711erdbDClucBXz-kLLQ/photo.jpg",
      review:
        "I found it beneficial. However, the mentor should focus on improving pronunciation of words to enhance the overall learning experience. However I enjoyed the complete course.",
    },
    {
      name: "Riya",
      image:
        "https://www.dodgejourneyforum.com/uploads/monthly_2020_12/R.png.f84f027586c0815b943b4892d61266a5.png",
      review:
        "The doubt-clearing session was very helpful and provided additional clarity.",
    },

    {
      name: "V ராஜா",
      image:
        "https://i.pinimg.com/474x/a3/e5/2b/a3e52bf536eef4d9a85bdc0df555c8b3.jpg",
      review:
        "எனக்கு English அவ்வளவா வராது. எனக்கு புரியிற மாதிரி சொல்லிக் கொடுத்தாங்க, Class எனக்கு ரொம்ப நல்லாவே புரிஞ்சது, என் டவுட்ஸ் எல்லாத்தையும் கிளியர் பண்ணாங்க.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Python Programming Training</title>
        <meta
          name="title"
          content="Python Programming Mastery Online Training"
        />
        <meta
          name="description"
          content="Master advanced Python programming skills with our online training course in Tamil. Enroll now for ₹1999 (₹3000 original price). Classes start on 18th Feb 2025. Enjoy 3 days refund policy, recorded classes, certificate, code support, 1:1 doubts clearing, practical sessions, and assignments. Limited offer till 30th Jan 2025."
        />
        <meta
          name="keywords"
          content="Python Programming, Tamil Online Course, Advanced Python, Online Training, Python Certification, Code Support, Practical Sessions, Refund Policy, Doubts Clearing, Programming Course"
        />
        <meta name="author" content="Bytecamp" />
        <meta
          property="og:title"
          content="Python Programming Mastery Online Training"
        />
        <meta
          property="og:description"
          content="Master advanced Python programming skills with ease in Tamil. Enroll now for ₹1999 (₹3000 original price). 3 days refund policy, recorded classes, and more. Offer valid till 30th Jan 2025."
        />
        <meta
          property="og:image"
          content="/assests/images/summer-offer-byte-camp-python-course-cheap-price.png"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://bytecamp.in/training/python-programming"
        />
      </Helmet>
      <Notification />
      <Navbar url={WP_Link} />
      <section className="mx-5">
        <Hero details={Slider_info} link={WP_Link} />
      </section>
      <section>
        <div className="my-4 lg:my-0 lg:py-0 py-12">
          <CustomerReviews reviews={reviews} />
        </div>
      </section>
      <h1 className="text-center lg:text-2xl font-bold tracking-tight text-gray-900 text-5xl pb-0 lg:pb-0  ">
        Certificate
      </h1>
      <section
        className="lg:w-1/2 mt-16 mx-auto lg:mx-auto "
        style={{ boxShadow: "0px 0px 20px 4px rgba(0, 0, 0, 0.22)" }}
      >
        <img
          src="/assets/certificate/Sample Certficate - Python Training - Byte Camp.png"
          alt=""
        />
      </section>
      {/* Why Python */}
      <About_python />
      <h1 className="lg:text-2xl font-semibold tracking-wider text-center my-5 text-5xl mt-20 ">
        How will your training work?
      </h1>
      <Working />
      <Syllabus details={Course_syllabus} />

      <main>
        <main>
          <FAQ faqs={FAQ_course} />
        </main>
      </main>
      <Footer link={WP_Link} />
    </>
  );
};

export default Python;
