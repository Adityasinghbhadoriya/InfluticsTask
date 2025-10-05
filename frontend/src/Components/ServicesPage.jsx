import React from "react";

const ServicesPage = () => {
  // --- Services Data ---
  const services = [
    {
      imageUrl: "https://c.animaapp.com/mgcizh9sa7oWOK/assets/jo-article-1.jpg",
      title: "High-Quality Product Photography",
      description:
        "The perfect set of skills for your next project. Work with the world's best freelancing talent.",
      serviceUrl: "#",
    },
    {
      imageUrl: "https://c.animaapp.com/mgcizh9sa7oWOK/assets/jo-article-2.jpg",
      title: "Stunning Visuals for Your Products",
      description:
        "The perfect set of skills for your next project. Work with the world's best freelancing talent.",
      serviceUrl: "#",
    },
    {
      imageUrl: "https://c.animaapp.com/mgcizh9sa7oWOK/assets/jo-article-3.jpg",
      title: "Dance Your Way to Brand Awareness",
      description:
        "The perfect set of skills for your next project. Work with the world's best freelancing talent.",
      serviceUrl: "#",
    },
    {
      imageUrl: "https://c.animaapp.com/mgcizh9sa7oWOK/assets/service-1.jpg",
      title: "Co-create Engaging Video Content",
      description:
        "The perfect set of skills for your next project. Work with the world's best freelancing talent.",
      serviceUrl: "#",
    },
    {
      imageUrl: "https://c.animaapp.com/mgcizh9sa7oWOK/assets/service-2.jpg",
      title: "Trending Challenges with Your Brand",
      description:
        "The perfect set of skills for your next project. Work with the world's best freelancing talent.",
      serviceUrl: "#",
    },
    {
      imageUrl: "https://c.animaapp.com/mgcizh9sa7oWOK/assets/service-3.jpg",
      title: "Feature Your Product in My Videos",
      description:
        "The perfect set of skills for your next project. Work with the world's best freelancing talent.",
      serviceUrl: "#",
    },
  ];

  // --- Services Card Component ---
  const ServiceCard = ({ imageUrl, title, description, serviceUrl }) => {
    return (
      <div className="w-full md:w-1/3 px-3 mt-6">
        <div className="bg-rose-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-56 object-cover rounded-t-2xl"
          />
          <div className="p-5">
            <h4 className="text-lg font-bold mb-2 hover:text-red-600">
              <a href={serviceUrl}>{title}</a>
            </h4>
            <p className="text-sm mb-4">{description}</p>
            <a
              href={serviceUrl}
              className="inline-block px-5 py-2 bg-gradient-to-r from-pink-500 to-orange-400 text-white rounded-md hover:opacity-90 transition"
            >
              View Details
            </a>
          </div>
        </div>
      </div>
    );
  };

  // --- Features Data ---
  const features = [
    { title: "Product Promotions" },
    { title: "Influencer Discovery" },
    { title: "Content Creation" },
    { title: "Campaign Management" },
  ];

  // --- Feature Item Component ---
  const FeatureItem = ({ title }) => {
    return (
      <div className="w-6/12 md:w-3/12 px-3 mt-6 text-center">
        <div className="aspect-square w-[65px] md:w-20 mx-auto mb-2 flex justify-center items-center rounded-full border border-white/30 bg-clip-text bg-gradient-to-br from-red-500 to-orange-400 text-[45px] md:text-[67px]">
          <i className="italic before:font-flaticon_jio___influencer"></i>
        </div>
        <h2 className="text-white text-[17px] md:text-sm font-bold">{title}</h2>
      </div>
    );
  };

  // --- FAQ Data ---
  const faqItems = [
    {
      number: "01",
      question: "What is an OTT platform?",
      answer:
        "Nullam faucibus eleifend mi eu varius. Integer vel tincidunt massa, quis semper odio. Mauris et mollis quam. Nullam fringilla erat id ante commodo sodales. In maximus ultrices euismod. Vivamus porta justo ex.",
      containerVariant: "bg-zinc-100 mb-5",
      numberVariant: "text-red-600",
      questionVariant: "text-black",
      iconVariant: "text-black",
      contentVariant: "grid-rows-[0fr]",
      answerVariant: "text-white",
    },
    {
      number: "02",
      question: "How do I sign up for an account?",
      answer:
        "Nullam faucibus eleifend mi eu varius. Integer vel tincidunt massa, quis semper odio. Mauris et mollis quam. Nullam fringilla erat id ante commodo sodales. In maximus ultrices euismod. Vivamus porta justo ex.",
      containerVariant: "bg-zinc-100 mb-5",
      numberVariant: "text-red-600",
      questionVariant: "text-black",
      iconVariant: "text-black",
      contentVariant: "grid-rows-[0fr]",
      answerVariant: "text-white",
    },
    {
      number: "03",
      question: "What devices can I use to watch content?",
      answer:
        "Nullam faucibus eleifend mi eu varius. Integer vel tincidunt massa, quis semper odio. Mauris et mollis quam. Nullam fringilla erat id ante commodo sodales. In maximus ultrices euismod. Vivamus porta justo ex.",
      containerVariant: "bg-zinc-100 mb-5",
      numberVariant: "text-red-600",
      questionVariant: "text-black",
      iconVariant: "text-black",
      contentVariant: "grid-rows-[0fr]",
      answerVariant: "text-white",
    },
    {
      number: "04",
      question: "How many devices can I stream on simultaneously?",
      answer:
        "Nullam faucibus eleifend mi eu varius. Integer vel tincidunt massa, quis semper odio. Mauris et mollis quam. Nullam fringilla erat id ante commodo sodales. In maximus ultrices euismod. Vivamus porta justo ex.",
      containerVariant: "text-white bg-red-600 mb-5",
      numberVariant: "",
      questionVariant: "",
      iconVariant: "rotate-90 before:text-white",
      contentVariant: "grid-rows-[1fr] pt-5",
      answerVariant: "",
    },
    {
      number: "05",
      question: "How do I download content for offline viewing?",
      answer:
        "Nullam faucibus eleifend mi eu varius. Integer vel tincidunt massa, quis semper odio. Mauris et mollis quam. Nullam fringilla erat id ante commodo sodales. In maximus ultrices euismod. Vivamus porta justo ex.",
      containerVariant: "bg-zinc-100 mb-5",
      numberVariant: "text-red-600",
      questionVariant: "text-black",
      iconVariant: "text-black",
      contentVariant: "grid-rows-[0fr]",
      answerVariant: "text-white",
    },
    {
      number: "06",
      question: "What are the subscription plans available?",
      answer:
        "Nullam faucibus eleifend mi eu varius. Integer vel tincidunt massa, quis semper odio. Mauris et mollis quam. Nullam fringilla erat id ante commodo sodales. In maximus ultrices euismod. Vivamus porta justo ex.",
      containerVariant: "bg-zinc-100",
      numberVariant: "text-red-600",
      questionVariant: "text-black",
      iconVariant: "text-black",
      contentVariant: "grid-rows-[0fr]",
      answerVariant: "text-white",
    },
  ];

  // --- FAQ Item Component ---
  const FAQItem = ({
    number,
    question,
    answer,
    containerVariant,
    numberVariant,
    questionVariant,
    iconVariant,
    contentVariant,
    answerVariant,
  }) => {
    return (
      <div className={`px-5 py-8 rounded-lg ${containerVariant}`}>
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-5">
            <h5 className={`text-lg font-bold ${numberVariant}`}>{number}</h5>
            <h5 className={`text-lg font-bold ${questionVariant}`}>{question}</h5>
          </div>
          <span>
            <i className={`italic before:font-flaticon_jio___influencer ${iconVariant}`}></i>
          </span>
        </div>
        <div className={`grid overflow-hidden pl-10 ${contentVariant}`}>
          <p className={`font-semibold ${answerVariant}`}>{answer}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white">
      {/* --- Services Section --- */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Our Services
          </h2>
          <div className="flex flex-wrap -mx-3">
            {services.map((service, idx) => (
              <ServiceCard
                key={idx}
                imageUrl={service.imageUrl}
                title={service.title}
                description={service.description}
                serviceUrl={service.serviceUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* --- Features Section --- */}
      <section className="bg-[url('https://influtics.temptics.com/assets/img/features-bg.jpg')] bg-no-repeat bg-cover bg-center py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-wrap -mx-3 -mt-6">
            {features.map((feature, idx) => (
              <FeatureItem key={idx} title={feature.title} />
            ))}
          </div>
        </div>
      </section>

      {/* --- FAQ Section --- */}
      <section className="pt-10 pb-12 md:pt-14 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-black text-2xl md:text-3xl font-bold text-center mb-6">
            Frequently Asked Questions
          </h2>
          <div className="mx-0 md:mx-40 space-y-4">
            {faqItems.map((item, idx) => (
              <FAQItem key={idx} {...item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
