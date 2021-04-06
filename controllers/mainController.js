exports.home = async (req, res) => {
  res.render("home", {
    card: {
      title: "Maximize Your Potential: Motivational study skills for schools",
      slug: "",
      desc: "High-impact study skills seminars for students in Years 7 – 13",
      img: "Schools/MaxImg2.jpg"
    }
  });
};

exports.thankyou = async (req, res) => {
  res.render("thank-you", {
    card: {
      title: "Thanks for your enquiry",
      slug: "thank-you",
      desc: "Thanks for enquiring",
      img: "Schools/MaxImg2.jpg"
    }
  });
};

exports.parents = async (req, res) => {
  res.render("parents", {
    card: {
      title: "High-Impact study skills webinars — Maximize Your Potential",
      slug: "online",
      desc:
        "We have developed a series of five 30 minute webinars for each of the secondary school year groups. The content mirrors that of the highly-acclaimed workshops we've been delivering in schools for years.",
      img: "Schools/maxWebinars.jpg"
    }
  });
};

exports.about = async (req, res) => {
  res.render("year/about", {
    title: "About",
    card: {
      title: "Maximize Your Potential: About",
      slug: "about",
      desc:
        "Over the years, Maximize has developed a range of high-impact study skills programmes for each of the secondary school years, with each one focusing on the most relevant topics for a specific year.",
      img: "about.jpg"
    }
  });
};

exports.year7 = async (req, res) => {
  res.render("year/year7&8", {
    title: "Year 7 & 8",
    card: {
      title: "Maximize Your Potential: Year 7 & 8 Study Skills",
      slug: "year7&8",
      desc:
        "Our Year 7&8 program equips students with the best study practice for secondary education and encourages independent learning",
      img: "year/year7&8.jpg"
    }
  });
};

exports.year9 = async (req, res) => {
  res.render("year/year9", {
    title: "Year 9",
    card: {
      title: "Maximize Your Potential: Year 9 Study Skills",
      slug: "year9",
      desc:
        "Our Year 9 program encourages students to value their learning, and to stay ‘on track’ ",
      img: "year/year9.jpg"
    }
  });
};

exports.year10 = async (req, res) => {
  res.render("year/year10", {
    title: "Year 10",
    card: {
      title: "Maximize Your Potential: Year 10 Study Skills",
      slug: "year10",
      desc:
        "Our Year 10 program encourages understanding of the benefits of good study practice and of taking ownership of their learning",
      img: "year/year10.jpg"
    }
  });
};

exports.year11 = async (req, res) => {
  res.render("year/year11", {
    title: "Year 11",
    card: {
      title: "Maximize Your Potential: Year 11 Study Skills",
      slug: "year11",
      desc:
        "Our Year 11 program equips students with revisions skills that deliver measurable results and exam ‘know-how’",
      img: "year/year11.jpg"
    }
  });
};

exports.sixthform = async (req, res) => {
  res.render("year/sixth-form", {
    title: "Sixth Form",
    card: {
      title: "Maximize Your Potential: Sixth Form Study Skills",
      slug: "sixth-form",
      desc:
        "Our Sixth Form program equips students with the skills to cope with the demands of A Level and IB study",
      img: "year/sixthform.jpg"
    }
  });
};

exports.testimonials = async (req, res) => {
  res.render("testimonials", {
    card: {
      title: "Maximize Your Potential: Testimonials",
      slug: "testimonials",
      desc:
        "A collection of testimonials from schools who have experienced Maximize Your Potential sessions",
      img: "Schools/MaxImg2.jpg"
    }
  });
};

exports.blog = async (req, res) => {
  res.render("blog", {
    card: {
      title: "Maximize Your Potential: Blog",
      slug: "blog",
      desc:
        "Study skills tips and advice from undergraduates and leading educationalists",
      img: "19blog/19blog1.jpg"
    }
  });
};

exports.blog1 = async (req, res) => {
  res.render("blog/how-to-live-the-focused-life", {
    card: {
      title: "How to live the focused life",
      slug: "blog/how-to-live-the-focused-life",
      desc:
        "Practical advice from an undergraduate student to protect yourself from time-wasting distractions",
      img: "19blog/19blog3.jpg"
    }
  });
};

exports.blog2 = async (req, res) => {
  res.render("blog/how-to-nail-your-personal-statement", {
    card: {
      title: "How to nail your personal statement",
      slug: "blog/how-to-nail-your-personal-statement",
      desc:
        "How to write an honest and original personal statement that really stand outs.  It’s a long game.",
      img: "19blog/19blog2.jpg"
    }
  });
};

exports.blog3 = async (req, res) => {
  res.render("blog/stress-is-your-best-friend", {
    card: {
      title: "Stress - Your best friend and worst enemy",
      slug: "blog/stress-is-your-best-friend",
      desc:
        "How to distinguish ‘good’ stress from ‘bad’ stress, and advice on how to manage the latter.",
      img: "19blog/19blog4.jpg"
    }
  });
};

exports.blog4 = async (req, res) => {
  res.render("blog/read-the-exam-specification", {
    card: {
      title: "The revision tip that only the best students know",
      slug: "blog/read-the-exam-specification",
      desc:
        "What one single thing to all high-achieving students do? The answer is simple. They all use the exam specification",
      img: "19blog/19blog3.jpg"
    }
  });
};
