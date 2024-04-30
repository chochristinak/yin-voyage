const db = require('../db')
const Retreat = require('../models/retreatSchema')
const retreatSchema = require('../models/retreatSchema');

db.on('error', console.error.bind(console, 'MongoDB connection error'))

const main = async () => {
      const retreats = [
        {
          title: "Laguna Leuisure",
          description: "Experience the ultimate luxury in the heart of Nicaragua. Unwind and rejuvenate in our exclusive lagoon retreat.",
          location: "Nicaragua",
          startDate: new Date("2024-05-20"),
          endDate: new Date("2024-05-27"),
          price: 2000,
          availableSpots: 8,
          retreatType: "Luxury",
        },
        {
          title: "Empowerment Escape",
          description: "Join us in Costa Rica for a transformative journey. Empower your mind, body, and spirit in the lush tropical rainforest.",
          location: "Costa Rica",
          startDate: new Date("2024-07-15"),
          endDate: new Date("2024-07-22"),
          price: 1800,
          availableSpots: 10,
          retreatType: "Empowerment"
        },
        {
          title: "Edge of Adventure",
          description: "Push your boundaries and step into the unknown. Experience the thrill of adventure in the wild landscapes of Costa Rica.",
          location: "Costa Rica",
          startDate: new Date("2024-09-10"),
          endDate: new Date("2024-09-17"),
          price: 1500,
          availableSpots: 12,
          retreatType: "Edge"
      },
      {
          title: "Waves of Dharma",
          description: "Ignite your passion and stoke your spirit. Join us for a week of excitement and discovery in Nicaragua.",
          location: "Nicaragua",
          startDate: new Date("2024-11-05"),
          endDate: new Date("2024-11-12"),
          price: 1700,
          availableSpots: 10,
          retreatType: "Stoke"
      },
      {
          title: "Mindfulness & Meditation",
          description: "Find your inner peace in the paradise of Costa Rica. A week of relaxation, meditation, and serenity awaits you.",
          location: "Costa Rica",
          startDate: new Date("2025-01-20"),
          endDate: new Date("2025-01-27"),
          price: 1900,
          availableSpots: 8,
          retreatType: "Inner Peace"
      },
      {
          title: "Vitamin Sea and Shavasana",
          description: "Go with the flow and ride the tide. Experience the rhythm of the ocean in our exclusive beach retreat in Nicaragua.",
          location: "Nicaragua",
          startDate: new Date("2025-03-15"),
          endDate: new Date("2025-03-22"),
          price: 2100,
          availableSpots: 6,
          retreatType: "Tide & Flow"
      },
      {
          title: "Wisdom over Ego",
          description: "Elevate your experience and level up in luxury. Indulge in the finest amenities in our premium retreat in Costa Rica.",
          location: "Costa Rica",
          startDate: new Date("2025-05-10"),
          endDate: new Date("2025-05-17"),
          price: 2300,
          availableSpots: 5,
          retreatType: "Level Up"
      },
      {
        title: "Edge of Adventure",
        description: "Push your boundaries and step into the unknown. Experience the thrill of adventure in the wild landscapes of Costa Rica.",
        location: "Costa Rica",
        startDate: new Date("2024-09-10"),
        endDate: new Date("2024-09-17"),
        price: 1500,
        availableSpots: 12,
        retreatType: "Edge"
      },
      {
        title: "Stoke Your Spirit",
        description: "Ignite your passion and stoke your spirit. Join us for a week of excitement and discovery in Nicaragua.",
        location: "Nicaragua",
        startDate: new Date("2024-11-05"),
        endDate: new Date("2024-11-12"),
        price: 1700,
        availableSpots: 10,
        retreatType: "Stoke"
      },
      {
        title: "Inner Peace in Paradise",
        description: "Find your inner peace in the paradise of Costa Rica. A week of relaxation, meditation, and serenity awaits you.",
        location: "Costa Rica",
        startDate: new Date("2025-01-20"),
        endDate: new Date("2025-01-27"),
        price: 1900,
        availableSpots: 8,
        retreatType: "Inner Peace",
      },
      {
        title: "Tide & Flow",
        description: "Go with the flow and ride the tide. Experience the rhythm of the ocean in our exclusive beach retreat in Nicaragua.",
        location: "Nicaragua",
        startDate: new Date("2025-03-15"),
        endDate: new Date("2025-03-22"),
        price: 2100,
        availableSpots: 6,
        retreatType: "Tide & Flow"
      },
      {
        title: "Level Up in Luxury",
        description: "Elevate your experience and level up in luxury. Indulge in the finest amenities in our premium retreat in Costa Rica.",
        location: "Costa Rica",
        startDate: new Date("2025-05-10"),
        endDate: new Date("2025-05-17"),
        price: 2300,
        availableSpots: 5,
        retreatType: "Stoke"
      }
    ]
    await Retreat.insertMany(retreats)
    console.log('Created retreats')
 }
 const run = async () => {
    await main()
    db.close()
}

run()