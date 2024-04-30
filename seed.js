require('dotenv').config();
require('./config/database');

const Catalog = require('./models/catalog');
// const Retreat = require('./models/retreat')


(async function () {
  await Catalog.deleteMany({});
  const catalogs = await Catalog.create([
    { name: "LUXURY", retreatType: "RESORT AND SPA YOGA RETREAT", posterPath: "https://plus.unsplash.com/premium_photo-1661598599843-8d98b0691372?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "EMPOWERMENT", retreatType: "INTENSIVE YOGA RETREAT", posterPath: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "EDGE", retreatType: "YOGA IMMERSION RETREAT", posterPath: "https://images.unsplash.com/photo-1593810451137-5dc55105dace?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "STOKE", retreatType: "YOGA ADVENTURE RETREAT", posterPath: "https://plus.unsplash.com/premium_photo-1664442991387-52d844d479e8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "INNER PEACE", retreatType: "DETOX YOGA RETREAT", posterPath: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1520&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "TIDE & FLOW", retreatType: "YOGA & SURF RETREAT", posterPath: "https://images.unsplash.com/photo-1508050249562-b28a87434496?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "LEVEL UP", retreatType: "ADVANCED TRAINING & CERTIFICATION", posterPath: "https://plus.unsplash.com/premium_photo-1669446008661-6729d2e91b00?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  ]);
  console.log(catalogs)

  process.exit();

})();

