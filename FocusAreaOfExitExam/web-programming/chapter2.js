// ===============================
// FOCUS AREA: WEB PROGRAMMING - CHAPTER 2
// CSS Styling and Responsive Design
// Based on Ministry of Education Blueprint (2 Understand, 1 Apply)
// File Path: FocusAreaOfExitExam/web-programming/chapter2.js
// ===============================
console.log("🚀 Chapter 2 script is executing!");
console.log("Timestamp:", new Date().toISOString());

window.focusAreaWebChapter2 = {
  title: "Chapter 2: CSS Styling and Responsive Design",
  description:
    "Fundamentals of CSS, styling techniques, layouts, and responsive web design principles.",
  blueprint: {
    totalQuestions: 3,
    cognitiveLevels: { understand: 2, apply: 1 },
    topics: [
      "CSS selectors and specificity",
      "Box model and layout",
      "Flexbox and grid",
      "Responsive design techniques",
      "Media queries",
      "CSS preprocessors basics",
      "CSS animation and transitions",
    ],
  },
  learningObjectives: [
    "Understand how CSS selectors and specificity work",
    "Explain the box model and how layouts are constructed",
    "Apply Flexbox and Grid for page layouts",
    "Design responsive pages using media queries",
    "Evaluate different responsive frameworks",
  ],
  sections: [
    {
      title: "2.1 CSS Fundamentals",
      content: `
                <h4>What is CSS?</h4>
                <p>CSS (Cascading Style Sheets) describes the presentation of HTML documents. It allows separation of content and style.</p>
                <h4>Selectors & Specificity</h4>
                <p>Selectors target HTML elements. Specificity determines which rule applies when multiple conflict.</p>
                <pre><code>p { color: red; } /* type selector */
#main p { color: blue; } /* ID selector overrides */
</code></pre>
            `,
      keyPoints: [
        "CSS separates content from presentation",
        "Specificity hierarchy: inline > ID > class > element",
        "The box model includes margin, border, padding, content",
      ],
    },
  ],
  keyPoints: [
    "Use media queries for responsive breakpoints",
    "Flexbox and Grid simplify layout tasks",
    "Keep CSS modular and avoid !important",
  ],
  summary: "<p>Chapter 2 covered CSS basics and responsive design</p>",
  reviewQuestions: [
    {
      question: "What is specificity in CSS?",
      answer:
        "A system that determines which rule applies based on selector types and order.",
    },
  ],
  quickTips: [
    "Start with mobile-first media queries",
    "Use developer tools to inspect styles",
  ],
  commonMistakes: [
    "Forgetting to include meta viewport tag",
    "Overusing ID selectors",
  ],
  examPreparation: `<p>Review CSS properties and responsive techniques.</p>`,
};

console.log("✅ Chapter 2 basic structure loaded");
