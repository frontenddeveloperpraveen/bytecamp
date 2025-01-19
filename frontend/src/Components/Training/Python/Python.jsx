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

const Python = () => {
  const Slider_info = [
    {
      src: "/assets/images/summer-offer-byte-camp-python-course-cheap-price.png",
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
    custom: "https://wa.link/jozyum",
    default: "https://wa.link/q6lpsz",
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
      question: "Do I need any pre-requisite knowledge for this course ?",
      answer:
        "No Need. This course is designed in the way that could be easily understood by anyone and very beginner friendly.",
    },
    {
      question: "Live classes or Recorded classes?",
      answer:
        "You will be having LIVE classes on daily basis. And the recorded session of the respective classes will be sent to you.",
    },
    {
      question: "How can I raise my doubts?",
      answer:
        "You can ask you doubts at the end of each sessions or else you can send personal messages to the Mentor and clear you doubts.",
    },
    {
      question: "Once I made the Payment what I have to do?",
      answer: `
      1.Send the screenshot of the payment to our Whatsapp number with Transaction ID.
      2.Once we recieved the payment, Our team will contact you over the phone to confirm. (within 6 Hours)
      3.Then you'll be guided by our team members.`,
    },
    {
      question: "How can I do the Payments?",
      answer: `You can do the payment by UPI (advised) as you don't need to pay any extra charges.`,
    },
    {
      question: "I don't have UPI, What can I do?",
      answer:
        "You can contact our Team either by Whatsapp or Email. They will guide you to resolve your problem.",
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
      name: "J Pooja",
      image:
        "https://www.cctvforum.com/uploads/monthly_2018_12/J_member_37994.png",
      review:
        "It really exceeded my expectations. The recordings, assignments, and final assessment helped me well. It is very useful.",
    },
    {
      name: "Ritvik S",
      image:
        "https://www.dodgejourneyforum.com/uploads/monthly_2020_12/R.png.f84f027586c0815b943b4892d61266a5.png",
      review:
        "The doubt-clearing session was very helpful and provided additional clarity.",
    },
    {
      name: "Samantha Devi",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.NOdSDhg2pUNIg-BihWYnawD6D6&rs=1&pid=ImgDetMain",
      review:
        "My experience with online class was excellent. The instructor had good knowledge about the subject. He was very supportive.",
    },
  ];

  return (
    <>
      <Notification />
      <Navbar url={WP_Link} />
      <section className="mx-5">
        <Hero details={Slider_info} />
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
