export const IMAGES = {
  interior: "/src/assets/hero.png",
  manti: "/src/assets/images/shosh_manti_1780652187359.png",
  bread: "/src/assets/bread.jpg",
  chef: "/src/assets/chef.jpg",

  shashlik:
    "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800",

  plov:
    "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=800",

  desert:
    "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=800",

  cocktail:
    "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800",
};

export const MENU_CATEGORIES = [
  {
    id: "mezza",
    name: "Cold Mezza & Beginnings",
    description:
      "Cold botanical preparations, cured mountain lamb, and custom micro-salads of Sogdia.",
  },

  {
    id: "mains",
    name: "Royal Mains",
    description:
      "Centuries-old recipes reimagined through slow pit-roasting, woodfire embers, and modern culinary composition.",
  },

  {
    id: "grills",
    name: "White Charcoal Kebabs",
    description:
      "Prime cuts skewers suspended over hot white hazelnut wood charcoal, served on dynamic metal plates.",
  },

  {
    id: "patisserie",
    name: "Modern Delicacies",
    description:
      "Delicate honeycombs, wild pistachio pastes, state patisserie, and cold desert botanical mocktails.",
  },
];

export const MENU_ITEMS = [
  // MEZZA
  {
    id: "item-1",
    name: "Caviar & Pistachio Silk Hummus",

    description:
      "Stoneground golden organic chickpeas emulsified with cold-pressed pistachio tahini, premium wild chive extract, topped with Siberian royal sturgeon caviar.",

    price: "$34",

    image: IMAGES.bread,

    category: "mezza",

    isSignature: false,

    premiumDetail:
      "Served with hand-painted ceramic plates and signature warm buttered clay-oven flatbread.",

    allergens: ["Nuts", "Gluten"],
  },

  {
    id: "item-2",
    name: "Dry-Aged Veal Carpaccio & Kashk",

    description:
      "Paper-thin slices of 45-day dry-aged young veal, salted sour kashk whey cream, wild wild dill blossoms, cold-pressed hazelnut oil.",

    price: "$29",

    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600",

    category: "mezza",

    isSignature: false,

    premiumDetail:
      "Cured using Pamir mountain salt stones for an exceptionally subtle salt finish.",
  },

  {
    id: "item-3",
    name: "Tashkent Heirloom Tomato & Basil",

    description:
      "Heirloom crimson garden tomatoes directly flown from Tashkent, compressed with wild purple basil vinegar, raw walnut slivers, cold-pressed mountain olive oil.",

    price: "$26",

    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600",

    category: "mezza",

    isSignature: false,

    premiumDetail:
      "Selected daily at sunrise by our local produce curator.",

    allergens: ["Nuts"],
  },

  // MAINS
  {
    id: "item-4",
    name: "24k Gold Wagyu Truffle Manti",

    description:
      "Delicately pleated silk-manti hand-filled with wagyu ribeye, slowly simmered and infused with premium black summer truffle oil, crowned with 24-karat gold leaf.",

    price: "$48",

    image: IMAGES.manti,

    category: "mains",

    isSignature: true,

    premiumDetail:
      "A culinary tribute to the ancient Silk Road royal court delicacies.",

    allergens: ["Gluten"],
  },

  {
    id: "item-5",
    name: "Saffron Sirdaryo Sea Bass",

    description:
      "Fillet of wild sea-bass wood-steamed inside fresh grape leaves, infused with raw Samarkand saffron nectar, wild wild celery butter, and pickled green coriander seed.",

    price: "$64",

    image: IMAGES.plov,

    category: "mains",

    isSignature: false,

    premiumDetail:
      "Slowly baked on hot volcanic salt blocks to retain immaculate moisture.",
  },

  {
    id: "item-6",
    name: "Pamir Heritage Plov (De-De)",

    description:
      "Select Devzira red rice aged for three harvests, copper-kettle sweet slow yellow carrots, tender organic quail eggs, saffron-braised leg of Pamir highland lamb.",

    price: "$58",

    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=600",

    category: "mains",

    isSignature: true,

    premiumDetail:
      "Cooked in historical hand-forged copper kazan pots following a 17th-century Samarkand decree.",
  },

  // GRILLS
  {
    id: "item-7",
    name: "Smoked Ribeye Shashlik with Rowanberry",

    description:
      "Skewered dry-aged black angus ribeye fat-laced with coriander crust, roasted over burning grapevine embers, brushed with forest rowanberry glacé.",

    price: "$72",

    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600",

    category: "grills",

    isSignature: true,

    premiumDetail:
      "Served suspended over an antique table brazier filled with glowing almond hearth blocks.",
  },

  {
    id: "item-8",
    name: "Sogdian Spiced Lamb Loin Chop",

    description:
      "Double rib lamb chops rubbed with mountain cumin, dry-roasted garlic oil, wild sumac dust, and aged pomegranate vinegar reduction.",

    price: "$68",

    image: IMAGES.shashlik,

    category: "grills",

    isSignature: false,

    premiumDetail:
      "Sourced exclusively from sustainable heritage highland pastures.",
  },

  // PATISSERIE
  {
    id: "item-9",
    name: "Wild Saffron Honey Cake",

    description:
      "Ten micro-thin honeyed layers layered with organic kaimak heavy cream, infused with liquid yellow wild Samarkand lavender honey, raw honey comb.",

    price: "$24",

    image: IMAGES.desert,

    category: "patisserie",

    isSignature: true,

    premiumDetail:
      "Accompanied by a traditional hand-brewed cup of highland mint emerald tea.",

    allergens: ["Gluten", "Dairy"],
  },

  {
    id: "item-10",
    name: "Sultan's Pistachio Apricot Mousse",

    description:
      "Creamy white chocolate and wild apricot foam, velvet green pistachio shortbread crumble, golden leaf flakes, rosewater drops.",

    price: "$22",

    image: IMAGES.cocktail,

    category: "patisserie",

    isSignature: false,

    premiumDetail:
      "Adorned with edible dehydrated Bukhara rose petals and delicate lavender mist.",
  },
];

export const REEL_ITEMS = [
  {
    id: "reel-1",
    image: IMAGES.interior,
    title: "Symphony of Embers & Silk",
    duration: "0:15",
    views: "18.2K",
    category: "atmosphere",
  },

  {
    id: "reel-2",
    image: IMAGES.manti,
    title: "Hand-Crafting The Wagyu Manti",
    duration: "0:24",
    views: "34.5K",
    category: "culinary",
  },

  {
    id: "reel-3",
    image: IMAGES.bread,
    title: "The Fire Ascent: Tandoor Secrets",
    duration: "0:18",
    views: "29.1K",
    category: "culinary",
  },

  {
    id: "reel-4",
    image: IMAGES.chef,
    title: "Chef Timur’s Golden Tweezers Philosophy",
    duration: "0:30",
    views: "42.0K",
    category: "atmosphere",
  },

  {
    id: "reel-5",
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=600",

    title: "Pouring the Saffron-Infused Elixir",

    duration: "0:12",

    views: "15.7K",

    category: "beverage",
  },
];

export const CHEF_STORY = [
  {
    id: "story-1",

    year: "2012",

    title: "Sogdia Roots Exploration",

    description:
      "Chef Timur left Tashkent's high courts to travel rural Fergana and Bukhara villages, cataloging forgotten ancestral fermentation methods.",
  },

  {
    id: "story-2",

    year: "2016",

    title: "Ascent of Walnut Hearth",

    description:
      "Pioneered the woodfire clay tandoor and high-end iron brazier systems in top global luxury venues, refining charcoal temperature parameters.",
  },

  {
    id: "story-3",

    year: "2021",

    title: "Crowning of SHOSH",

    description:
      "Inaugurated SHOSH in custom partnership with master ceramicists, stone sculptors, and heritage spice gatherers, creating a complete culinary theater.",
  },
];

export const CUISINE_PHILOSOPHY = {
  quote:
    "At Bazar, every detail is crafted to create a memorable dining experience — from the warm lighting and elegant interiors to the carefully prepared dishes served at every table.",

  philosophyText:
    "Inspired by the rich atmosphere of Central Asian hospitality, our space blends tradition with modern elegance. The menu brings together bold flavors, fresh ingredients, and beautifully presented dishes designed for sharing meaningful moments. Whether you are joining us for a quiet evening, a gathering with friends, or a special celebration, Bazar invites you to experience comfort, atmosphere, and refined dining in the heart of Tashkent",
};