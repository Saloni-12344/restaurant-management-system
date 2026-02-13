const restaurantMenu = [
  // STARTERS
  {
    name: "Paneer Tikka",
    description: "Cottage cheese cubes marinated in spices and grilled to perfection.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
    price: 12,
    category: "Starters",
  },
  {
    name: "Veg Samosa",
    description: "Crispy pastry stuffed with spiced potatoes and peas.",
    image: "https://images.unsplash.com/photo-1604908176997-431b6f3d3c9e",
    price: 6,
    category: "Starters",
  },
  {
    name: "Chicken 65",
    description: "Spicy deep-fried chicken tossed with curry leaves.",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
    price: 14,
    category: "Starters",
  },
  {
    name: "Hara Bhara Kabab",
    description: "Spinach and green peas patties shallow fried.",
    image: "https://images.unsplash.com/photo-1625944235655-7a1f3e9c9d36",
    price: 10,
    category: "Starters",
  },
  {
    name: "Tandoori Chicken",
    description: "Chicken marinated in yogurt and spices cooked in clay oven.",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    price: 16,
    category: "Starters",
  },

  // CURRIES
  {
    name: "Butter Chicken",
    description: "Creamy tomato-based curry with tender chicken pieces.",
    image: "https://images.unsplash.com/photo-1605478371310-a9f1e96b4ff4",
    price: 18,
    category: "Curries",
  },
  {
    name: "Paneer Butter Masala",
    description: "Cottage cheese cooked in rich buttery gravy.",
    image: "https://images.unsplash.com/photo-1628294896516-32a0e3e5f0c3",
    price: 17,
    category: "Curries",
  },
  {
    name: "Dal Makhani",
    description: "Slow-cooked black lentils in creamy sauce.",
    image: "https://images.unsplash.com/photo-1625944521938-4e2d95f0d37d",
    price: 15,
    category: "Curries",
  },
  {
    name: "Chicken Curry",
    description: "Traditional Indian chicken curry with aromatic spices.",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0",
    price: 17,
    category: "Curries",
  },
  {
    name: "Chole Bhature",
    description: "Spicy chickpea curry served with fried bread.",
    image: "https://images.unsplash.com/photo-1625944521128-88a6f3d1063f",
    price: 14,
    category: "Curries",
  },

  // INDIAN CHINESE
  {
    name: "Veg Hakka Noodles",
    description: "Stir-fried noodles with vegetables and Indo-Chinese sauces.",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246",
    price: 13,
    category: "Indian Chinese",
  },
  {
    name: "Chicken Manchurian",
    description: "Fried chicken balls in spicy soy sauce gravy.",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b",
    price: 15,
    category: "Indian Chinese",
  },
  {
    name: "Chilli Paneer",
    description: "Cottage cheese tossed with bell peppers in spicy sauce.",
    image: "https://images.unsplash.com/photo-1604908554007-0b4fcd18e5c1",
    price: 14,
    category: "Indian Chinese",
  },
  {
    name: "Fried Rice",
    description: "Indo-Chinese style rice stir fried with vegetables.",
    image: "https://images.unsplash.com/photo-1512058564366-c9e3e046b43b",
    price: 12,
    category: "Indian Chinese",
  },
  {
    name: "Gobi Manchurian",
    description: "Crispy cauliflower in spicy manchurian sauce.",
    image: "https://images.unsplash.com/photo-1604908177089-b6e8b4d5900c",
    price: 13,
    category: "Indian Chinese",
  },

  // DESSERTS
  {
    name: "Gulab Jamun",
    description: "Soft fried milk balls soaked in sugar syrup.",
    image: "https://images.unsplash.com/photo-1617196039892-5a47c21c4a63",
    price: 6,
    category: "Desserts",
  },
  {
    name: "Rasgulla",
    description: "Spongy cottage cheese balls in light syrup.",
    image: "https://images.unsplash.com/photo-1628294897037-7a2c4fbbd9e5",
    price: 6,
    category: "Desserts",
  },
  {
    name: "Kheer",
    description: "Creamy rice pudding flavored with cardamom.",
    image: "https://images.unsplash.com/photo-1625944521382-3d0f559ebbd1",
    price: 7,
    category: "Desserts",
  },
  {
    name: "Jalebi",
    description: "Crispy spirals soaked in saffron sugar syrup.",
    image: "https://images.unsplash.com/photo-1601050690891-0f75f1ef1a10",
    price: 5,
    category: "Desserts",
  },
  {
    name: "Ice Cream",
    description: "Vanilla or mango flavored ice cream.",
    image: "https://images.unsplash.com/photo-1497032205916-ac775f0649ae",
    price: 5,
    category: "Desserts",
  },

  // DRINKS
  {
    name: "Mango Lassi",
    description: "Refreshing yogurt drink blended with mango pulp.",
    image: "https://images.unsplash.com/photo-1625944521573-4e1b0a1c12d4",
    price: 6,
    category: "Drinks",
  },
  {
    name: "Masala Chai",
    description: "Traditional Indian tea brewed with spices.",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3",
    price: 4,
    category: "Drinks",
  },
  {
    name: "Sweet Lassi",
    description: "Chilled yogurt drink lightly sweetened.",
    image: "https://images.unsplash.com/photo-1625944521566-5a0b66e6b079",
    price: 5,
    category: "Drinks",
  },
  {
    name: "Cold Coffee",
    description: "Blended chilled coffee topped with cream.",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    price: 6,
    category: "Drinks",
  },
  {
    name: "Fresh Lime Soda",
    description: "Refreshing lime drink with soda.",
    image: "https://images.unsplash.com/photo-1582571352032-448f01eaa22c",
    price: 5,
    category: "Drinks",
  },

  // RICE
  {
    name: "Jeera Rice",
    description: "Basmati rice tempered with cumin seeds.",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc",
    price: 8,
    category: "Rice",
  },
  {
    name: "Veg Biryani",
    description: "Fragrant rice cooked with vegetables and spices.",
    image: "https://images.unsplash.com/photo-1601050690591-9dbf68f5c2a8",
    price: 15,
    category: "Rice",
  },

  // BREAD / NAAN
  {
    name: "Butter Naan",
    description: "Soft Indian flatbread brushed with butter.",
    image: "https://images.unsplash.com/photo-1605478371371-95a5d3f1e946",
    price: 4,
    category: "Bread",
  },
  {
    name: "Garlic Naan",
    description: "Naan topped with garlic and butter.",
    image: "https://images.unsplash.com/photo-1617196039895-b3d93a9f5a42",
    price: 5,
    category: "Bread",
  },

  // RAITA
  {
    name: "Boondi Raita",
    description: "Yogurt mixed with crispy gram flour pearls.",
    image: "https://images.unsplash.com/photo-1625944521342-9a2c2c70f2a3",
    price: 5,
    category: "Raita",
  },
];

module.exports = { data: restaurantMenu };
