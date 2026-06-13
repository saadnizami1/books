import { Book, Author, Testimonial } from './types';

export const GOOGLE_FORM_URL = "https://forms.gle/i3AhmQHGuE37dp2M7";

export const AUTHOR: Author = {
  name: "Saad Nizami",
  bio: [
    "I'm Saad Nizami, from Lahore. By 17 I'd somehow finished writing two books, mostly squeezed in around A levels I was barely keeping up with.",
    "It started because none of my textbooks ever answered the questions I actually had. Why did the US invade Iraq? Why does my cousin need to know a guy who knows a guy just to get basic paperwork sorted? Why do politicians talk about Pakistan like it's one country when anyone who lives here knows it's basically two, the one on paper and the one that actually runs things?",
    "So I just started asking people directly. I built a crowdfunding platform called zaroorat.xyz, started an NGO, and ended up talking to everyone from traders in Karachi to factory owners in Faisalabad to policy analysts in the US. The more people I talked to, the more I realized the real explanations for how things work don't look anything like what gets repeated in the news.",
    "These books are basically everything I wish someone had explained to me back when I first got curious about how power actually works."
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
    tags: ["Economics", "Politics", "Sociology", "Pakistan"],
    coverImage: "/images/book1.png",
    amazonLink: "https://www.amazon.com/INFORMAL-REPUBLIC-PAKISTAN-Things-Actually/dp/B0FGDVYY36/ref=sr_1_3?dib=eyJ2IjoiMSJ9.yYFFCZaSsCV66cyYIKhrdiCfeBiImZaec9IkoublFgg.fZ9U9Kho9ZqxdyWbnjPA7XE1mD_O9gGXS83X23PKdK4&dib_tag=se&qid=1763768063&refinements=p_27%3ASaad+Nizami&s=books&sr=1-3&text=Saad+Nizami"
  },
  {
    id: "oil-sand-power",
    title: "Oil, Sand & Power",
    subtitle: "America's Century in the Middle East",
    description: "A sweeping historical analysis of how US foreign policy, oil interests, and strategic blunders reshaped the Middle East.",
    longDescription: [
  "America's been involved in the Middle East for over a century now, and honestly, it's been messy. This book walks through how it all started, missionaries and oil geologists in the 1920s and how it evolved into the complex web of military bases, regime changes, and proxy wars we see today.",
  "The thing is, most of these interventions made sense at the time. Overthrowing Iran's government in 1953? Seemed necessary to stop Soviet influence. Arming Afghan fighters against the USSR? Brilliant Cold War strategy. Invading Iraq in 2003? Sold as spreading democracy. But each move created new problems that required new interventions.",
  "I wrote this because most books on the topic are either written by American policymakers defending their decisions or critics with clear agendas. This is just an honest look at what happened, why it happened, and what it actually accomplished. Take from it what you will."
],
    pricePaperback: 1600,
    priceHardcover: 2500,
    coverColor: "bg-desert-orange",
    accentColor: "text-desert-orange",
    tags: ["History", "Geopolitics", "Foreign Policy", "Middle East"],
    coverImage: "/images/book2.png",
    amazonLink: "https://www.amazon.com/Oil-Sand-Power-Americas-centry/dp/B0FL6DBH4V/ref=sr_1_1?crid=1GX85OS5J8UKN&dib=eyJ2IjoiMSJ9.ck6yQIYT39R65I3GVVP_iJXkRT2lOeFByYnhUUWp8-2p7atv30Xfb-XYVhuRwWJmX11KG4xVkRnllUnnYMi8vflii870uP7_Jn4GVfUsq0ctEmHOMk-5HeIeHtjYe4ucm9taZ9L10I__i34oEy8h3wRy_k9dK3zxQefI8KIzSGvlmYxISU5FpBKDRkuaro-FzRTd2msu6NEOhNnoz5UOsrULiKuBBSrMP4bEWRvJm1e8GfoHZkX1CLANfR8xNLy-Hrp23o5GkIfVtuaavmWQgC7iYr6CnXE3CJNGkAxZOUc.CqPrhBRN6qu8R5MZpKj3zu1KxQMZNg8KT1YAGr6ELUs&dib_tag=se&keywords=oil+sand+and+power&qid=1763767988&sprefix=oil+sand+and+pow%2Caps%2C386&sr=8-1&tag=wkss20-20"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote: "Clear analysis without the usual agenda. Gets to the point.",
    author: "Ahmad Adnan",
    role: "Policy Analyst"
  },
  {
    id: "t2",
    quote: "Actually explains the patterns instead of just listing events.",
    author: "Hamza Muller",
    role: "History Enthusiast"
  },
  {
    id: "t3",
    quote: "An honest, easy-to-understand explanation of how Pakistan functions behind the scenes.",
    author: "Azan Khurram",
    role: "Student & Activist"
  }
];