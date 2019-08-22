exports.home = async (req, res) => {
  res.render('home', { card: {
    title: "Maximize Your Potential: Motivational study skills for schools",
    slug: "",
    desc: "High-impact study skills seminars for students in Years 7 – 13",
    img: "19blog/19blog2.jpg",
  }});
};

exports.about = async (req, res) => {
  res.render('year/about', {title: "About", card: {
    title: "Maximize Your Potential: About",
    slug: "about",
    desc: "High-impact study skills seminars for students in Years 7 – 13",
    img: "abou.jpg",
  }});
};

exports.year7 = async (req, res) => {
  res.render('year/year7&8', {title: "Year 7 & 8", card: {
    title: "Year 7 & 8 Study Skills",
    slug: "year7&8",
    desc: "Our Year 7&8 program equips students with the best study practice for secondary education and encourages independent learning",
    img: "year/year7&8.jpg",
  }});
};

exports.year9 = async (req, res) => {
  res.render('year/year9', {title: "Year 9", card: {
    title: "Year 9 Study Skills",
    slug: "year9",
    desc: "Our Year 9 program encourages students to value their learning, and to stay ‘on track’ ",
    img: "year/year9.jpg",
  }});
};

exports.year10 = async (req, res) => {
  res.render('year/year10', {title: "Year 10", card: {
    title: "Year 10 Study Skills",
    slug: "year10",
    desc: "Our Year 10 program encourages understanding of the benefits of good study practice and of taking ownership of their learning",
    img: "year/year10.jpg",
  }});
};

exports.year11 = async (req, res) => {
  res.render('year/year11', {title: "Year 11", card: {
    title: "Year 11 Study Skills",
    slug: "year11",
    desc: "Our Year 11 program equips students with revisions skills that deliver measurable results and exam ‘know-how’",
    img: "year/year11.jpg",
  }});
};

exports.sixthform = async (req, res) => {
  res.render('year/sixth-form', {title: "Sixth Form", card: {
    title: "Sixth Form Study Skills",
    slug: "sixth-form",
    desc: "Our Sixth Form program equips students with the skills to cope with the demands of A Level and IB study",
    img: "year/sixthform.jpg",
  }});
};

exports.testimonials = async (req, res) => {
  res.render('testimonials', {card: {
    title: "Maximize Your Potential Testimonials",
    slug: "testimonials",
    desc: "A collection of testimonials from schools who have experienced Maximize Your Potential sessions",
    img: "Schools/MaxImg2.jpg",
  }});
};

exports.blog = async (req, res) => {
  res.render('blog', {card: {
    title: "How to live the focused life",
    slug: "blog/how-to-live-the-focused-life",
    desc: "Study skills tips and advice from undergraduates and leading educationalists",
    img: "19blog/19blog1.jpg",
  }});
};

exports.blog1 = async (req, res) => {
  res.render('blog/how-to-live-the-focused-life', {card: {
    title: "How to live the focused life",
    slug: "blog/how-to-live-the-focused-life",
    desc: "Motivational Study skills for Year 7 & 8",
    img: "19blog/19blog1.jpg",
  }});
};

exports.blog2 = async (req, res) => {
  res.render('blog/how-to-nail-your-personal-statement', {card: {
    title: "How to nail your personal statement",
    slug: "blog/how-to-nail-your-personal-statement",
    desc: "Motivational Study skills for Year 7 & 8",
    img: "19blog/19blog2.jpg",
  }});
};

exports.blog3 = async (req, res) => {
  res.render('blog/stress-is-your-best-friend', {card: {
    title: "Stress - Your Best Friend and Worst Enemy",
    slug: "blog/stress-is-your-best-friend",
    desc: "Motivational Study skills for Year 7 & 8",
    img: "19blog/19blog4.jpg",
  }});
};

exports.blog4 = async (req, res) => {
  res.render('blog/read-the-exam-specification', {card: {
    title: "The Revision Tip that Only the Best Students Have Heard of",
    slug: "blog/read-the-exam-specification",
    desc: "Motivational Study skills for Year 7 & 8",
    img: "19blog/19blog3.jpg",
  }});
};