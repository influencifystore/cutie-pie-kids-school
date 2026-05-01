export interface Program {
  id: string;
  title: string;
  ageRange: string;
  description: string;
  features: string[];
  icon: string;
  color: string;
  gradient: string;
}

export interface TeachingApproach {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  childName: string;
  message: string;
  rating: number;
  avatar: string;
  initials: string;
  avatarColor: string;
}

export interface EnrollmentForm {
  parentName: string;
  email: string;
  phone: string;
  childName: string;
  childAge: string;
  program: string;
  startDate: string;
  message: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  caption: string;
  category: string;
}

export interface Stat {
  id: string;
  value: string;
  label: string;
  icon: string;
  color: string;
}

export interface SpecializedService {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  gradient: string;
}

// --- Data Constants ---

export const PROGRAMS: Program[] = [
  {
    id: "little-explorers",
    title: "Little Explorers",
    ageRange: "Ages 2–3",
    description:
      "A nurturing space where toddlers discover the world through play, sensory experiences, and gentle guided activities.",
    features: [
      "Sensory play stations",
      "Story time daily",
      "Music & movement",
      "Outdoor exploration",
    ],
    icon: "🚀",
    color: "#7C3AED",
    gradient: "linear-gradient(135deg, #7C3AED, #EC4899)",
  },
  {
    id: "creative-minds",
    title: "Creative Minds",
    ageRange: "Ages 3–4",
    description:
      "Fostering imagination and creativity through art, music, drama, and hands-on projects that spark curiosity.",
    features: [
      "Art & craft studio",
      "Drama & role-play",
      "Music lessons",
      "STEM experiments",
    ],
    icon: "🎨",
    color: "#0D9488",
    gradient: "linear-gradient(135deg, #0D9488, #EAB308)",
  },
  {
    id: "early-scholars",
    title: "Early Scholars",
    ageRange: "Ages 4–5",
    description:
      "Preparing children for kindergarten with structured learning, literacy foundations, and number concepts.",
    features: [
      "Pre-reading skills",
      "Number concepts",
      "Science discovery",
      "Social skills",
    ],
    icon: "🎓",
    color: "#F97316",
    gradient: "linear-gradient(135deg, #F97316, #EAB308)",
  },
  {
    id: "language-stars",
    title: "Language Stars",
    ageRange: "Ages 3–5",
    description:
      "Bilingual immersion program introducing children to English and Spanish through songs, stories, and play.",
    features: [
      "Bilingual curriculum",
      "Native speakers",
      "Cultural activities",
      "Language games",
    ],
    icon: "⭐",
    color: "#EC4899",
    gradient: "linear-gradient(135deg, #EC4899, #7C3AED)",
  },
  {
    id: "nature-buddies",
    title: "Nature Buddies",
    ageRange: "Ages 2–4",
    description:
      "An outdoor-focused program teaching children about nature, animals, plants, and environmental stewardship.",
    features: [
      "Garden classroom",
      "Animal care",
      "Nature walks",
      "Eco projects",
    ],
    icon: "🌿",
    color: "#0D9488",
    gradient: "linear-gradient(135deg, #0D9488, #7C3AED)",
  },
  {
    id: "tech-tots",
    title: "Tech Tots",
    ageRange: "Ages 4–5",
    description:
      "Age-appropriate introduction to technology, coding basics, and digital literacy through fun interactive games.",
    features: [
      "Kid-safe tablets",
      "Coding basics",
      "Digital art",
      "Problem solving",
    ],
    icon: "💻",
    color: "#7C3AED",
    gradient: "linear-gradient(135deg, #7C3AED, #0D9488)",
  },
];

export const TEACHING_APPROACHES: TeachingApproach[] = [
  {
    id: "play-based",
    title: "Play-Based Learning",
    description:
      "We believe children learn best through play. Every activity is designed to be joyful, engaging, and educational, building cognitive and social skills naturally.",
    icon: "🎮",
    color: "#7C3AED",
  },
  {
    id: "montessori",
    title: "Montessori Inspired",
    description:
      "Child-led exploration with carefully curated materials that encourage independence, concentration, and a love of learning at each child's own pace.",
    icon: "🔬",
    color: "#0D9488",
  },
  {
    id: "social-emotional",
    title: "Social-Emotional Growth",
    description:
      "We prioritize emotional intelligence, empathy, and positive relationships, helping children navigate feelings and build meaningful friendships.",
    icon: "❤️",
    color: "#EC4899",
  },
  {
    id: "stem-arts",
    title: "STEM + Arts Integration",
    description:
      "Combining science, technology, engineering, math, and the arts creates well-rounded thinkers who approach problems creatively and analytically.",
    icon: "🌟",
    color: "#F97316",
  },
  {
    id: "nature-based",
    title: "Nature-Based Education",
    description:
      "Regular outdoor time, garden activities, and nature exploration connect children with the living world and develop curiosity about science.",
    icon: "🌱",
    color: "#EAB308",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Sarah Thompson",
    role: "Parent",
    childName: "Emma (Age 4)",
    message:
      "Cutie Pie Kids has been absolutely transformational for our daughter. She went from being shy to confidently leading activities. The teachers are warm, dedicated, and truly understand child development.",
    rating: 5,
    avatar: "",
    initials: "ST",
    avatarColor: "#7C3AED",
  },
  {
    id: "t2",
    name: "Marcus Johnson",
    role: "Parent",
    childName: "Liam (Age 3)",
    message:
      "We tried two other preschools before finding Cutie Pie Kids. The difference is night and day! Liam actually begs to go to school every morning. The curriculum is creative, engaging, and so age-appropriate.",
    rating: 5,
    avatar: "",
    initials: "MJ",
    avatarColor: "#0D9488",
  },
  {
    id: "t3",
    name: "Priya Patel",
    role: "Parent",
    childName: "Aanya (Age 5)",
    message:
      "As a working mom, I needed a school I could trust completely. The daily updates, open communication, and the obvious care the teachers have for each child gives me complete peace of mind every day.",
    rating: 5,
    avatar: "",
    initials: "PP",
    avatarColor: "#EC4899",
  },
  {
    id: "t4",
    name: "David Chen",
    role: "Parent",
    childName: "Oliver (Age 4)",
    message:
      "Oliver's language skills and social confidence have exploded since joining. The bilingual program especially has been incredible. He's already speaking phrases in Spanish at home!",
    rating: 5,
    avatar: "",
    initials: "DC",
    avatarColor: "#F97316",
  },
  {
    id: "t5",
    name: "Jennifer Williams",
    role: "Parent",
    childName: "Sophia (Age 3)",
    message:
      "The facilities are outstanding — clean, colorful, and stimulating. But what truly sets Cutie Pie Kids apart is the heart. Every single staff member knows and loves your child.",
    rating: 5,
    avatar: "",
    initials: "JW",
    avatarColor: "#EAB308",
  },
  {
    id: "t6",
    name: "Roberto Garcia",
    role: "Parent",
    childName: "Isabella (Age 5)",
    message:
      "Isabella is now reading simple books at 5! The Early Scholars program prepared her so well for kindergarten. She transitioned effortlessly. We owe so much to the incredible teachers here.",
    rating: 5,
    avatar: "",
    initials: "RG",
    avatarColor: "#7C3AED",
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq1",
    question: "What age groups does Cutie Pie Kids accept?",
    answer:
      "We welcome children aged 2 to 5 years old. Our programs are thoughtfully designed for each developmental stage, from our Tiny Tots program for 2-year-olds up to our Early Scholars program preparing 5-year-olds for kindergarten.",
    category: "enrollment",
  },
  {
    id: "faq2",
    question: "What are your operating hours?",
    answer:
      "We are open Monday through Friday, 7:30 AM to 6:00 PM. Our core program hours are 8:00 AM to 3:00 PM, with before-care starting at 7:30 AM and after-care available until 6:00 PM.",
    category: "general",
  },
  {
    id: "faq3",
    question: "What is the student-to-teacher ratio?",
    answer:
      "We maintain excellent ratios: 1:4 for ages 2-3 and 1:6 for ages 4-5. These low ratios ensure every child receives the individual attention and support they need to thrive.",
    category: "programs",
  },
  {
    id: "faq4",
    question: "How do you handle allergies and dietary needs?",
    answer:
      "Safety is our top priority. We are a nut-free facility and work closely with families to accommodate all dietary requirements and allergies. Our kitchen staff are trained in allergy management and we maintain detailed records for every child.",
    category: "safety",
  },
  {
    id: "faq5",
    question: "What does the enrollment process involve?",
    answer:
      "Enrollment is simple! Submit our online application, schedule a tour and meet-and-greet, complete the enrollment forms, and pay the registration fee. We'll then create a personalized transition plan to help your child settle in comfortably.",
    category: "enrollment",
  },
  {
    id: "faq6",
    question: "How do you communicate with parents?",
    answer:
      "We use the Brightwheel app for daily photos, activity updates, and direct messaging with teachers. Parents also receive weekly newsletters, monthly progress reports, and regular parent-teacher conferences.",
    category: "general",
  },
  {
    id: "faq7",
    question: "Are your teachers certified?",
    answer:
      "Absolutely! All lead teachers hold Early Childhood Education degrees or equivalent certifications. Every staff member undergoes extensive background checks, first aid/CPR training, and continuous professional development.",
    category: "staff",
  },
  {
    id: "faq8",
    question: "What safety measures are in place?",
    answer:
      "Security is paramount. We have keypad entry access, security cameras throughout the facility, strict sign-in/sign-out protocols, regular fire drills, and a gated outdoor play area. Only authorized individuals can pick up children.",
    category: "safety",
  },
  {
    id: "faq9",
    question: "Do you offer a curriculum for special needs children?",
    answer:
      "Yes! We are proud to be an inclusive school. We have specialists on staff and work with families and therapists to create individualized support plans. Every child deserves a nurturing, supportive learning environment.",
    category: "programs",
  },
  {
    id: "faq10",
    question: "What is the tuition and are there sibling discounts?",
    answer:
      "Tuition varies by program and hours. We offer a 10% sibling discount, flexible payment plans, and financial assistance for qualifying families. Contact us for a detailed fee schedule tailored to your needs.",
    category: "enrollment",
  },
];

export const STATS: Stat[] = [
  {
    id: "s1",
    value: "500+",
    label: "Happy Kids Enrolled",
    icon: "😊",
    color: "#7C3AED",
  },
  {
    id: "s2",
    value: "25+",
    label: "Certified Teachers",
    icon: "👩‍🏫",
    color: "#EC4899",
  },
  {
    id: "s3",
    value: "4.9",
    label: "Star Rating",
    icon: "⭐",
    color: "#EAB308",
  },
  {
    id: "s4",
    value: "15+",
    label: "Years of Excellence",
    icon: "🏆",
    color: "#0D9488",
  },
];

export const SPECIALIZED_SERVICES: SpecializedService[] = [
  {
    id: "ss1",
    title: "Aftercare Program",
    description:
      "Safe, structured, and fun aftercare until 6 PM with supervised homework help, snacks, and enrichment activities.",
    icon: "🌙",
    color: "#7C3AED",
    gradient: "linear-gradient(135deg, #7C3AED, #EC4899)",
  },
  {
    id: "ss2",
    title: "Summer Camp",
    description:
      "Action-packed summer camp with themed weeks, field trips, water play, arts and crafts, and so much more!",
    icon: "☀️",
    color: "#F97316",
    gradient: "linear-gradient(135deg, #F97316, #EAB308)",
  },
  {
    id: "ss3",
    title: "Inclusive Learning",
    description:
      "Specialized support for children with diverse learning needs, working alongside families and therapists.",
    icon: "🌈",
    color: "#0D9488",
    gradient: "linear-gradient(135deg, #0D9488, #7C3AED)",
  },
  {
    id: "ss4",
    title: "Music & Dance",
    description:
      "Weekly music and movement classes with instruments, songs, rhythm activities, and seasonal performances.",
    icon: "🎵",
    color: "#EC4899",
    gradient: "linear-gradient(135deg, #EC4899, #F97316)",
  },
];
