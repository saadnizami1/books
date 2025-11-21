import { Book, Author, Testimonial } from './types';

export const GOOGLE_FORM_URL = "https://docs.google.com/forms/u/0/"; // Placeholder for user to fill

export const AUTHOR: Author = {
  name: "Muhammad Saad Nizami",
  bio: [
    "I am an 18-year-old student from Lahore with a profound curiosity for the unseen mechanisms that drive nations.",
    "Balancing A-levels in computer science, politics, and economics, I found myself dissatisfied with surface-level explanations of our history. This curiosity led me to found zaroorat.xyz, a crowdfunding platform, and lead a local NGO, experiences that brought me face-to-face with the raw, untold stories of survival in Pakistan.",
    "I write to explain to my generation why we inherited the complex systems we live in today, bridging the gap between academic history and the gritty reality of the streets."
  ]
};

export const BOOKS: Book[] = [
  {
    id: "informal-republic",
    title: "The Informal Republic of Pakistan",
    subtitle: "How Things Actually Get Done When the State Doesn't Work",
    description: "A deep dive into the shadow systems, gatekeepers, and unwritten rules that govern the daily lives of Pakistanis.",
    longDescription: [
      "We live in two Pakistans simultaneously. There is the Pakistan of the constitution, ministries, and official plans. Then there is the Pakistan where your uncle's friend expedites your passport, where the neighborhood strongman settles disputes, and where cash transactions keep entire industries invisible.",
      "Economists estimate that Pakistan's informal economy represents up to 50% of our total GDP. This book isn't just about statistics; it's a journey through the bazaars of Lahore, the katchi abadis of Karachi, and the drawing rooms of power brokers.",
      "From the 'thekedars' who manage labor to the hawala networks moving billions, discover the architecture of the parallel state that emerged when formal institutions retreated."
    ],
    pricePaperback: 1600,
    priceHardcover: 2500,
    coverColor: "bg-pakistan-green",
    accentColor: "text-pakistan-green",
    tags: ["Economics", "Politics", "Sociology", "Pakistan"]
  },
  {
    id: "oil-sand-power",
    title: "Oil, Sand & Power",
    subtitle: "America's Century in the Middle East",
    description: "A sweeping historical analysis of how US foreign policy, oil interests, and strategic blunders reshaped the Middle East.",
    longDescription: [
      "The story of America in the Middle East is one of entanglement, ambition, and unintended consequences. It begins not with soldiers, but with missionaries in the 1820s, evolving into a complex web of oil concessions, Cold War rivalries, and military interventions.",
      "From the handshake between FDR and Ibn Saud on the USS Quincy to the shock and awe of Desert Storm, and the catastrophic miscalculations of the War on Terror, this book traces the arc of American hegemony.",
      "Explore the hidden history of coups, the rise of petro-states, and the shifting alliances that have defined the modern world order. This is the story of how a superpower reshaped a region, and how the region reshaped the superpower."
    ],
    pricePaperback: 1600,
    priceHardcover: 2500,
    coverColor: "bg-desert-orange",
    accentColor: "text-desert-orange",
    tags: ["History", "Geopolitics", "Foreign Policy", "Middle East"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote: "Nizami peels back the layers of our polite society to reveal the raw, informal mechanisms that actually keep Pakistan running. A necessary awakening.",
    author: "Sarah Ahmed",
    role: "Policy Analyst"
  },
  {
    id: "t2",
    quote: "In 'Oil, Sand & Power', the prose is as sharp as the insights. It bridges the gap between academic history and gripping narrative with remarkable ease.",
    author: "David Miller",
    role: "History Enthusiast"
  },
  {
    id: "t3",
    quote: "Finally, a voice from our generation that isn't afraid to question the inherited narratives. Essential reading for anyone trying to understand modern geopolitics.",
    author: "Omar Farooq",
    role: "Student & Activist"
  }
];