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
    image: "/images/services/cost-estimation.jpeg",
  },
  {
    id: "7",
    name: "Preparation of Bills of Quantity",
    desc: "Detailed preparation of bills of quantity to streamline project planning and execution.",
    icon: "fas fa-file-invoice-dollar",
    image: "/images/services/bills-of-quantity.jpeg",
  },
  {
    id: "8",
    name: "Industrial Epoxy Floor Application",
    desc: "Durable and high-quality epoxy floor applications for industrial environments.",
    icon: "fas fa-layer-group",
    image: "/images/services/epoxy-floor-application.jpg", // Add a suitable image path
  },
  {
    id: "9",
    name: "Terrazzo Flooring",
    desc: "Elegant and long-lasting terrazzo flooring solutions for modern spaces.",
    icon: "fas fa-border-all",
    image: "/images/services/terrazzo-flooring.jpg", // Add a suitable image path
  },
];

export const projects = [
  {
    id: "1",
    title: "Nairobi Office Complex",
    desc: "A state-of-the-art office complex featuring modern design and sustainable materials.",
    thumbnail: "/images/projects/nairobi-office.jpg",
    portfolioImages: [
      "/images/projects/nairobi-office-1.jpg",
      "/images/projects/nairobi-office-2.jpg",
      "/images/projects/nairobi-office-3.jpg",
    ],
  },
  {
    id: "2",
    title: "Coastal Resort Development",
    desc: "A luxury coastal resort with innovative architectural designs and eco-friendly features.",
    thumbnail: "/images/projects/coastal-resort.jpg",
    portfolioImages: [
      "/images/projects/coastal-resort-1.jpg",
      "/images/projects/coastal-resort-2.jpg",
      "/images/projects/coastal-resort-3.jpg",
    ],
  },
  {
    id: "3",
    title: "Karen Residential Estate",
    desc: "A premium residential estate with elegant, family-friendly homes.",
    thumbnail: "/images/projects/karen-residential.jpg",
    portfolioImages: [
      "/images/projects/karen-residential-1.jpg",
      "/images/projects/karen-residential-2.jpg",
      "/images/projects/karen-residential-3.jpg",
    ],
  },
  {
    id: "4",
    title: "City Center Tower",
    desc: "A high-rise commercial tower located in the heart of Nairobi.",
    thumbnail: "/images/projects/city-center-tower.jpg",
    portfolioImages: [
      "/images/projects/city-center-tower-1.jpg",
      "/images/projects/city-center-tower-2.jpg",
      "/images/projects/city-center-tower-3.jpg",
    ],
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
  {
    image: "/images/projects/karen-residential.jpg", // Local image path
    name: "Grace Wangari",
    message:
      "I was impressed by the attention to detail in the interior designs for my new office space.",
  },
  {
    image: "/images/projects/karen-residential.jpg", // Local image path
    name: "John Kamau",
    message:
      "The cost estimation services helped me plan my construction budget effectively.",
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

export const processSteps = [
  {
    id: "1",
    title: "Consultation",
    desc: "We discuss your project goals and requirements.",
    icon: "fas fa-comments",
  },
  {
    id: "2",
    title: "Planning",
    desc: "We create a detailed project plan and timeline.",
    icon: "fas fa-drafting-compass",
  },
  {
    id: "3",
    title: "Execution",
    desc: "Our team brings your vision to life.",
    icon: "fas fa-tools",
  },
  {
    id: "4",
    title: "Delivery",
    desc: "We ensure a high-quality, on-time completion.",
    icon: "fas fa-check-circle",
  },
];

export const gallery = [
  { src: "/images/gallery/image1.jpg", alt: "Project Image 1" },
  { src: "/images/gallery/image2.jpg", alt: "Project Image 2" },
  { src: "/images/gallery/image3.jpg", alt: "Project Image 3" },
  { src: "/images/gallery/image4.jpg", alt: "Project Image 4" },
  { src: "/images/gallery/image5.jpg", alt: "Project Image 5" },
  { src: "/images/gallery/image6.jpg", alt: "Project Image 6" },
  { src: "/images/gallery/image7.jpg", alt: "Project Image 7" },
  { src: "/images/gallery/image8.jpg", alt: "Project Image 8" },
  { src: "/images/gallery/image9.jpg", alt: "Project Image 9" },
];
