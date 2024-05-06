require('dotenv').config();
require('./config/database');

const Catalog = require('./models/catalog');
const Retreat = require('./models/retreat');
const Review = require('./models/review');

(async function() {
  await Catalog.deleteMany({});
  const catalogs = await Catalog.create([
  {
    name: "LUXURY",
    retreatType: "RESORT AND SPA YOGA RETREATS",
    description: "A delightful collection of luxury yoga retreats that combine the serenity of yoga practice with the indulgence of resort and spa amenities. These retreats promise to leave you feeling pampered, rejuvenated, and deeply connected to your mind, body, and spirit.",
    posterPath:
      "https://images.unsplash.com/photo-1444312645910-ffa973656eba?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHlpbiUyMHlvZ2F8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "EMPOWERMENT",
    retreatType: "INTENSIVE YOGA RETREATS",
    posterPath:
      "https://images.unsplash.com/photo-1574406280735-351fc1a7c5e0?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGludGVuc2UlMjB5b2dhfGVufDB8fDB8fHww",
  },
  {
    name: "EDGE",
    retreatType: "YOGA IMMERSION RETREATS",
    posterPath:
      "https://images.unsplash.com/photo-1567345911782-c2b16ed5f50d?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "STOKE",
    retreatType: "YOGA ADVENTURE RETREATS",
    posterPath:
      "https://plus.unsplash.com/premium_photo-1664442991387-52d844d479e8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "INNER PEACE",
    retreatType: "DETOX YOGA RETREATS",
    posterPath:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1520&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "TIDE & FLOW",
    retreatType: "YOGA & SURF RETREATS",
    posterPath:
      "https://images.unsplash.com/photo-1545389336-cf090694435e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fHw%3D",
  },
  {
    name: "LEVEL UP",
    retreatType: "ADVANCED TRAINING & CERTIFICATION",
    posterPath:
      "https://plus.unsplash.com/premium_photo-1669446008661-6729d2e91b00?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
]);

await Retreat.deleteMany({});
  const retreats = await Retreat.create([
  {
    title: "Laguna Leuisure",
    description: "Experience the ultimate luxury in the heart of Nicaragua. Unwind and rejuvenate in our exclusive lagoon retreat.",
    location: "Nicaragua",
    startDate: "2024-05-20",
    endDate: "2024-05-27",
    price: 2000,
    availableSpots: 8
  },
    {
      title: "Empowerment Escape",
      description: "Join us in Costa Rica for a transformative journey. Empower your mind, body, and spirit in the lush tropical rainforest.",
      location: "Costa Rica",
      startDate: "2024-07-15",
      endDate: "2024-07-22",
      price: 1800,
      availableSpots: 10
    },
    {
      title: "Edge of Adventure",
      description: "Push your boundaries and step into the unknown. Experience the thrill of adventure in the wild landscapes of Costa Rica.",
      location: "Costa Rica",
      startDate: "2024-09-10",
      endDate: "2024-09-17",
      price: 1500,
      availableSpots: 12
  
  },
  {
      title: "Waves of Dharma",
      description: "Ignite your passion and stoke your spirit. Join us for a week of excitement and discovery in Nicaragua.",
      location: "Nicaragua",
      startDate: "2024-11-05",
      endDate: "2024-11-12",
      price: 1700,
      availableSpots: 10
  },
  {
      title: "Mindfulness & Meditation",
      description: "Find your inner peace in the paradise of Costa Rica. A week of relaxation, meditation, and serenity awaits you.",
      location: "Costa Rica",
      startDate: "2025-01-20",
      endDate: "2025-01-27",
      price: 1900,
      availableSpots: 8
  },
  {
      title: "Vitamin Sea and Shavasana",
      description: "Go with the flow and ride the tide. Experience the rhythm of the ocean in our exclusive beach retreat in Nicaragua.",
      location: "Nicaragua",
      startDate: "2025-03-15",
      endDate: "2025-03-22",
      price: 2100,
      availableSpots: 6
  },
  {
      title: "Wisdom over Ego",
      description: "Elevate your experience and level up in luxury. Indulge in the finest amenities in our premium retreat in Costa Rica.",
      location: "Costa Rica",
      startDate: "2025-05-10",
      endDate: "2025-05-17",
      price: 2300,
      availableSpots: 5
  },
  {
    title: "Edge of Adventure",
    description: "Push your boundaries and step into the unknown. Experience the thrill of adventure in the wild landscapes of Costa Rica.",
    location: "Costa Rica",
    startDate: "2024-09-10",
    endDate: "2024-09-17",
    price: 1500,
    availableSpots: 12
  },
  {
    title: "Stoke Your Spirit",
    description: "Ignite your passion and stoke your spirit. Join us for a week of excitement and discovery in Nicaragua.",
    location: "Nicaragua",
    startDate: "2024-11-05",
    endDate: "2024-11-12",
    price: 1700,
    availableSpots: 10
  },
  {
    title: "Inner Peace in Paradise",
    description: "Find your inner peace in the paradise of Costa Rica. A week of relaxation, meditation, and serenity awaits you.",
    location: "Costa Rica",
    startDate: "2025-01-20",
    endDate: "2025-01-27",
    price: 1900,
    availableSpots: 8
  
  },
  {
    title: "Tide & Flow",
    description: "Go with the flow and ride the tide. Experience the rhythm of the ocean in our exclusive beach retreat in Nicaragua.",
    location: "Nicaragua",
    startDate: "2025-03-15",
    endDate: "2025-03-22",
    price: 2100,
    availableSpots: 6
    
  },
  {
    title: "Level Up in Luxury",
    description: "Elevate your experience and level up in luxury. Indulge in the finest amenities in our premium retreat in Costa Rica.",
    location: "Costa Rica",
    startDate: "2025-05-10",
    endDate: "2025-05-17",
    price: 2300,
    availableSpots: 5
  
  },
]);

await Review.deleteMany({});
  const reviews = await Review.create([ 
    { user : '6633c83f5cca6938bf10028a',
      content: "This retreat was exactly what I needed to recharge and reconnect with myself. The location was serene, the instructors were knowledgeable, and the overall atmosphere was incredibly calming.",
      rating: 5},
  ]);

process.exit();

})();

