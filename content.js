/* =====================================================================
   YOUR PORTFOLIO CONTENT  —  this is the ONLY file you need to edit.
   =====================================================================

   HOW TO ADD SOMETHING NEW
   1. Find the section (projects, certificates, experience ...).
   2. Copy one whole block from { to }, including the comma after it.
   3. Paste it right below, then change the text inside the quotes.
   4. Save the file. Done. The website updates itself.

   RULES TO AVOID MISTAKES
   - Keep text inside "double quotes".
   - Every block ends with  },  (a comma after the closing bracket).
   - Leave a field as ""  if you have nothing for it yet. It will be hidden.

   VIDEOS
   - Upload your video to YouTube (it can be "Unlisted" if you don't want
     it public on your channel).
   - Click Share on YouTube, copy the link, and paste it in  video: ""
     e.g.  video: "https://youtu.be/abc123XYZ"
   - The video will play directly on your portfolio.

   IMAGES (screenshots, certificates, your photo)
   - Put the image file in the "images" folder.
   - Write its path, e.g.  "images/sales-dashboard.png"
   ===================================================================== */

const PORTFOLIO = {

  /* ---------- ABOUT YOU ---------- */
  name: "Nawfal Khan",
  role: "Data & Business Analyst",
  tagline: "SQL · Power BI · Excel · Python · MSc Data Science, University of Hertfordshire. Based in Watford, UK.",
  openTo: "Open to Data, Business and BI Analyst roles across the UK",
  photo: "",                 // e.g. "images/me.jpg"  (leave "" to show your initials)
  introVideo: "",            // a short YouTube video introducing yourself (optional)
  email: "knawfal17@gmail.com",
  phone: "",                 // optional
  location: "Watford, England · full UK driving licence",
  linkedin: "https://www.linkedin.com/in/nawfal-data/",
  github: "https://github.com/nawfalns",
  resume: "",                // e.g. "images/Nawfal-Khan-CV.pdf"  (put your CV PDF in the images folder)

  about: [
    "I'm a Data & Business Analyst with an MSc in Data Science (Commendation) from the University of Hertfordshire. I help businesses make better decisions by turning data into clear reports, and stakeholder needs into clear requirements.",
    "At ASAP Data Solutions I gather requirements, analyse data with SQL and Excel, and build Power BI dashboards that help stakeholders track KPIs. During my MSc I completed a Business Analyst internship at Cloudy People, mapping processes, cleaning and analysing data, and supporting user acceptance testing.",
    "My MSc gave me a grounding in machine learning and deep learning, and I'm keen to bring that into analytics work as AI becomes part of everyday reporting."
  ],

  /* ---------- SKILLS ---------- */
  keySkills:   ["SQL", "Power BI", "Advanced Excel", "Python", "Requirements gathering", "KPI reporting", "Process mapping", "User stories", "UAT", "Statistics", "Machine learning"],
  toolSkills:  ["Pandas", "NumPy", "scikit-learn", "PyTorch", "TensorFlow", "Matplotlib", "Seaborn", "Jupyter", "MySQL", "Alteryx", "Google Sheets", "PowerPoint"],
  peopleSkills:["Stakeholder management", "Problem solving", "Communication", "Teamwork", "Time management"],

  /* The tool cards at the top count your projects automatically.
     Add a tool here if you start using a new one (e.g. "Tableau"). */
  mainTools: ["Power BI", "SQL", "Excel", "Python"],

  /* ---------- PROJECTS ----------
     tool:       main tool (used for the filter buttons and badge)
     video:      YouTube link (optional)
     dashboard:  Power BI "Publish to web" link (optional, shows a live dashboard)
     code:       GitHub link to the code (optional)
     post:       LinkedIn post link (optional)
     images:     screenshots, e.g. ["images/p1.png","images/p2.png"] (optional)
     results:    key numbers or findings (optional)
     learnings:  what you learned (optional)
     codeSnippet: a short piece of code to show on the page (optional)   */
  projects: [
    {
      tool: "Python",
      title: "Road segmentation on Cityscapes: U-Net vs ResNet U-Net",
      where: "MSc Data Science project · University of Hertfordshire",
      summary: "Compared a standard U-Net with a U-Net using a ResNet backbone for road segmentation in urban street scenes, to find which architecture suits real-world driving conditions better.",
      tags: ["Python", "Deep learning", "U-Net", "ResNet", "Computer vision"],
      video: "",
      dashboard: "",
      code: "https://github.com/nawfalns/Data-Science-Project",
      post: "",
      images: [],
      results: [],
      learnings: [
        "Worked with the Cityscapes dataset of high-resolution urban images with pixel-level labels",
        "Built and trained encoder-decoder segmentation models with skip connections",
        "Evaluated models with IoU (Intersection over Union)"
      ],
      codeSnippet: ""
    },
    {
      tool: "Power BI",
      title: "KPI reporting dashboards",
      where: "ASAP Data Solutions · 2025 to now",
      summary: "Power BI dashboards that report KPIs and trends to stakeholders, built from requirements I gathered in stakeholder interviews and workshops.",
      tags: ["Power BI", "DAX", "SQL", "Stakeholder reviews"],
      video: "", dashboard: "", code: "", post: "", images: [], results: [],
      learnings: [
        "Turned stakeholder questions into clear report requirements",
        "Designed KPI views that people use to track performance"
      ],
      codeSnippet: ""
    },
    {
      tool: "SQL",
      title: "Data discrepancy investigations",
      where: "ASAP Data Solutions · 2025 to now",
      summary: "Using SQL and Excel to trace and explain data discrepancies, and logging defects from UAT through to resolution.",
      tags: ["SQL", "MySQL", "Excel", "UAT"],
      video: "", dashboard: "", code: "", post: "", images: [], results: [],
      learnings: [
        "Wrote SQL queries to reconcile data between sources",
        "Prepared UAT test scenarios and tracked defects to resolution"
      ],
      codeSnippet: ""
    },
    {
      tool: "Excel",
      title: "Process mapping and KPI summaries",
      where: "Cloudy People internship · 2024 to 2025",
      summary: "Mapped current and future business processes to find inefficiencies, and cleaned and analysed business data for management reports.",
      tags: ["Excel", "SQL", "Process mapping", "Use cases"],
      video: "", dashboard: "", code: "", post: "", images: [], results: [],
      learnings: [
        "Documented requirements, process flows and use cases",
        "Prepared KPI summaries and management reports"
      ],
      codeSnippet: ""
    }
    /* TO ADD A PROJECT: put a comma after the } above, then paste a new { ... } block here */
  ],

  /* ---------- EXPERIENCE ---------- */
  experience: [
    {
      role: "Business Analyst", company: "ASAP Data Solutions",
      dates: "Aug 2025 to now", details: "Full-time · London area · Hybrid",
      points: [
        "Gather and document business requirements through stakeholder interviews and workshops",
        "Write functional requirements, user stories and acceptance criteria for delivery teams",
        "Use SQL and Excel to analyse data and investigate discrepancies",
        "Build Power BI dashboards to report KPIs and trends to stakeholders",
        "Prepare UAT test scenarios, log defects and track them to resolution"
      ]
    },
    {
      role: "Business Analyst Intern", company: "Cloudy People",
      dates: "Jun 2024 to Jun 2025", details: "Part-time · London area · Remote",
      points: [
        "Documented business requirements, process flows and use cases for project delivery",
        "Mapped current and future processes to find inefficiencies",
        "Cleaned and analysed business data in Excel and SQL to support decisions",
        "Prepared KPI summaries and management reports",
        "Supported UAT by recording issues and checking agreed changes"
      ]
    }
  ],

  /* ---------- EDUCATION ---------- */
  education: [
    { degree: "MSc Data Science", school: "University of Hertfordshire", dates: "Jan 2024 to Jul 2025", note: "Machine learning, data visualisation, statistics and more.", grade: "Commendation" },
    { degree: "BEng Computer Science and Engineering", school: "Dhanalakshmi Srinivasan University", dates: "May 2019 to Aug 2023", note: "", grade: "Grade: 8" }
  ],

  /* ---------- CERTIFICATES & COURSES ---------- */
  certificates: [
    {
      title: "Microsoft Excel: Excel from Beginner to Advanced",
      issuer: "Udemy · Kyle Pew, Office Newb",
      date: "20 Aug 2025 · 22 hours",
      image: "images/excel-certificate.png",
      link: "https://ude.my/UC-ba2fe1e2-85ec-4311-9825-8791e4b19fad"
    }
    /* TO ADD A CERTIFICATE: put a comma after the } above, then paste a new { ... } block here */
  ]
};
