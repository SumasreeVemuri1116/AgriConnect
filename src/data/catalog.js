export const categories = [
  {
    name: 'Seeds & hybrids',
    description: 'Hybrid and open-pollinated seeds with seasonal guidance.',
    image:
      'https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Crop nutrition',
    description: 'Fertilizers, micronutrients, and soil conditioners.',
    image:
      'https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Crop protection',
    description: 'Insecticides, fungicides, and pest management kits.',
    image:
      'https://images.unsplash.com/photo-1581363641295-5def8f7e1d2b?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Irrigation & pipes',
    description: 'Drip lines, sprinklers, and water control systems.',
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Farm tools',
    description: 'Everyday tools and field-ready equipment.',
    image:
      'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Organic inputs',
    description: 'Bio fertilizers and natural crop care solutions.',
    image:
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80',
  },
]

export const bundles = [
  {
    name: 'Summer paddy bundle',
    deal: 'Save 18%',
    detail: 'NPK + bio enhancer pack',
    price: 3200,
    stock: 'In stock',
  },
  {
    name: 'Vegetable micro kit',
    deal: 'Save 12%',
    detail: 'Zinc, boron, calcium trio',
    price: 1800,
    stock: 'In stock',
  },
  {
    name: 'Cotton defense combo',
    deal: 'Save 15%',
    detail: 'Pest shield + spray kit',
    price: 2450,
    stock: 'In stock',
  },
]

export const stories = [
  {
    name: 'Ravi, Maharashtra',
    note: 'Cut input costs by 22% using bundled kits.',
    outcome: 'Savings redirected to irrigation upgrades.',
  },
  {
    name: 'Anita, Karnataka',
    note: 'Improved tomato yield with weekly advisory.',
    outcome: 'Consistent harvests and fewer crop losses.',
  },
  {
    name: 'Iqbal, Punjab',
    note: 'Saved 3 days with doorstep delivery.',
    outcome: 'Faster sowing cycle and better input planning.',
  },
]

export const clearanceItems = [
  {
    name: 'Sprayers',
    discount: 'Up to 35% off',
    note: 'Knapsack and motorized sprayers on clearance.',
    price: 2200,
  },
  {
    name: 'Field tools',
    discount: 'Up to 28% off',
    note: 'Durable hand tools and pruning essentials.',
    price: 950,
  },
  {
    name: 'Spare parts',
    discount: 'Up to 40% off',
    note: 'Replacement valves, filters, and fittings.',
    price: 480,
  },
]

export const cartItems = [
  {
    name: 'Summer paddy bundle',
    type: 'bundle',
    price: 3200,
    quantity: 1,
  },
  {
    name: 'Field tools',
    type: 'clearance',
    price: 950,
    quantity: 2,
  },
]

export const searchCatalog = [
  ...bundles.map((item) => ({ name: item.name, type: 'bundle' })),
  ...categories.map((item) => ({ name: item.name, type: 'category' })),
  ...stories.map((item) => ({ name: item.name, type: 'story' })),
  ...clearanceItems.map((item) => ({ name: item.name, type: 'clearance' })),
]
