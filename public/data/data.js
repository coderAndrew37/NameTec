export const services = [
  {
    id: "1",
    name: "Building Design",
    desc: "Create modern, functional, and visually stunning building designs tailored to your needs.",
    icon: "fas fa-drafting-compass",
    image: "/images/services/building-design.jpg", // Local image path
  },

  {
    id: "2",
    name: "Structural Engineering",
    desc: "Ensure safety and durability with our expert structural analysis and solutions.",
    icon: "fas fa-tools",
    image: "/images/services/structural-engineering.jpg", // Local image path
  },

  {
    id: "3",
    name: "Project Management",
    desc: "Seamlessly manage your construction project from planning to completion.",
    icon: "fas fa-project-diagram",
    image: "/images/services/project-management.jpg", // Local image path
  },
  {
    id: "4",
    name: "Interior Designs",
    desc: "Transform your spaces with modern, elegant, and customized interior designs.",
    icon: "fas fa-paint-brush",
    image: "/images/services/interior-designs.jpg",
  },
  {
    id: "5",
    name: "Road Works",
    desc: "Expertly engineered road construction and maintenance solutions.",
    icon: "fas fa-road",
    image: "/images/services/road-works.jpg",
  },
  {
    id: "6",
    name: "Cost Estimation",
    desc: "Accurate project cost estimates to help you plan your construction budget effectively.",
    icon: "fas fa-calculator",
    image: "/images/services/cost-estimation.jpg",
  },
  {
    id: "7",
    name: "Preparation of Bills of Quantity",
    desc: "Detailed preparation of bills of quantity to streamline project planning and execution.",
    icon: "fas fa-file-invoice-dollar",
    image: "/images/services/bills-of-quantity.jpg",
  },
];

export const projects = [
  {
    id: "1",
    title: "Nairobi Office Complex",
    desc: "A state-of-the-art office complex featuring modern design and sustainable materials.",
    image: "/images/projects/nairobi-office.jpg", // Local image path
  },
  {
    id: "2",
    title: "Coastal Resort Development",
    desc: "A luxury coastal resort with innovative architectural designs and eco-friendly features.",
    image: "/images/projects/nairobi-office.jpg", // Local image path
  },
  {
    id: "3",
    title: "Karen Residential Estate",
    desc: "A premium residential estate with elegant, family-friendly homes.",
    image: "/images/projects/karen-residential.jpg", // Local image path
  },

  {
    id: "4",
    title: "City Center Tower",
    desc: "A high-rise commercial tower located in the heart of Nairobi.",
    image: "/images/projects/nairobi-office.jpg", // Local image path
  },
];

export const testimonials = [
  {
    image: "/images/projects/karen-residential.jpg", // Local image pathimage: "/images/projects/karen-residential.jpg", // Local image pathimage: "/images/testimonials/client2.jpg", // Local image path
    name: "Mary Njoroge",
    message:
      "Their project management services made building my family home a seamless experience.",
  },
  {
    image: "/images/projects/karen-residential.jpg", // Local image path
    name: "Peter Kiplagat",
    message:
      "The structural engineering services provided by Kenya Builders are top-notch. Highly recommended!",
  },
];

export const faqs = [
  {
    question: "What types of projects do you handle?",
    answer:
      "We handle residential, commercial, and industrial construction projects of all sizes.",
  },
  {
    question: "Do you provide services outside Nairobi?",
    answer:
      "Yes, we serve clients across Kenya, including coastal and upcountry regions.",
  },
  {
    question: "Can you help with building permits?",
    answer:
      "Absolutely! We assist clients in obtaining all necessary permits and approvals.",
  },
  {
    question: "What is your approach to sustainability?",
    answer:
      "We prioritize eco-friendly construction methods and materials to minimize environmental impact.",
  },
  {
    question: "How do you ensure project deadlines are met?",
    answer:
      "We use advanced project management tools and methodologies to deliver projects on time and within budget.",
  },
];

export const blogs = [
  {
    id: "1",
    title: "5 Key Trends in Modern Building Design",
    image: "/images/blogs/building-design-trends.jpg", // Local image path
    description:
      "Explore the latest trends in architecture and building design.",
    date: "2024-11-01",
    content: `
      <p><i class="fas fa-drafting-compass"></i> Modern building design is evolving rapidly. Here are the key trends to watch:</p>
      <ul>
        <li><i class="fas fa-check"></i> Sustainable and eco-friendly materials.</li>
        <li><i class="fas fa-check"></i> Smart building technologies.</li>
        <li><i class="fas fa-check"></i> Open and flexible floor plans.</li>
        <li><i class="fas fa-check"></i> Use of natural light for energy efficiency.</li>
        <li><i class="fas fa-check"></i> Biophilic design that integrates natural elements.</li>
      </ul>
      <p>These trends are reshaping the construction industry and setting new standards for innovation.</p>
    `,
    comments: [
      {
        user: "David Kimani",
        icon: "fas fa-smile",
        comment:
          "Great insights! These trends are very relevant to the Kenyan market.",
      },
    ],
    metadata: {
      title: "5 Key Trends in Modern Building Design",
      description:
        "Discover the latest trends shaping the future of architecture and construction.",
      keywords: [
        "building design",
        "architecture trends",
        "sustainable construction",
      ],
    },
  },
  {
    id: "2",
    title: "The Importance of Project Management in Construction",
    image: "/images/blogs/project-management.jpg", // Local image path
    description:
      "Learn how effective project management ensures successful construction projects.",
    date: "2024-11-10",
    content: `
      <p><i class="fas fa-project-diagram"></i> Construction projects require careful planning and execution. Here’s why project management is critical:</p>
      <ul>
        <li><i class="fas fa-check"></i> It ensures projects are completed on time and within budget.</li>
        <li><i class="fas fa-check"></i> Minimizes risks through proactive planning.</li>
        <li><i class="fas fa-check"></i> Improves communication among all stakeholders.</li>
        <li><i class="fas fa-check"></i> Guarantees quality control and adherence to standards.</li>
      </ul>
      <p>Investing in professional project management services can make all the difference in achieving your construction goals.</p>
    `,
    comments: [
      {
        user: "Jane Mwangi",
        icon: "fas fa-star",
        comment: "Project management is a game-changer. Thanks for sharing!",
      },
    ],
    metadata: {
      title: "The Importance of Project Management in Construction",
      description:
        "Learn why project management is essential for successful construction projects.",
      keywords: [
        "project management",
        "construction planning",
        "Kenyan construction",
      ],
    },
  },
];
