// Get random Property Image
const CATEGORIES = {
  normalApartments: [
    'https://ik.imagekit.io/txobowsaxlc/apartment-03_7H6vnnhKQ.png?updatedAt=1642061453168',
    'https://ik.imagekit.io/txobowsaxlc/apartment-04_bdxyReZtOfM.png?updatedAt=1642061452605',
    'https://ik.imagekit.io/txobowsaxlc/apartment-04_bdxyReZtOfM.png?updatedAt=1642061452605',
    'https://ik.imagekit.io/txobowsaxlc/apartment-04_bdxyReZtOfM.png?updatedAt=1642061452605',
  ],
  servicedApartments: [
    'https://ik.imagekit.io/txobowsaxlc/apartment-03_7H6vnnhKQ.png?updatedAt=1642061453168',
    'https://ik.imagekit.io/txobowsaxlc/apartment-04_bdxyReZtOfM.png?updatedAt=1642061452605',
    'https://ik.imagekit.io/txobowsaxlc/apartment-04_bdxyReZtOfM.png?updatedAt=1642061452605',
    'https://ik.imagekit.io/txobowsaxlc/apartment-04_bdxyReZtOfM.png?updatedAt=1642061452605',
  ],
  singleFamilyHome: [
    'https://ik.imagekit.io/txobowsaxlc/apartment-03_7H6vnnhKQ.png?updatedAt=1642061453168',
    'https://ik.imagekit.io/txobowsaxlc/apartment-04_bdxyReZtOfM.png?updatedAt=1642061452605',
    'https://ik.imagekit.io/txobowsaxlc/apartment-04_bdxyReZtOfM.png?updatedAt=1642061452605',
    'https://ik.imagekit.io/txobowsaxlc/apartment-04_bdxyReZtOfM.png?updatedAt=1642061452605',
  ],
  studentHousing: [
    'https://ik.imagekit.io/txobowsaxlc/apartment-03_7H6vnnhKQ.png?updatedAt=1642061453168',
    'https://ik.imagekit.io/txobowsaxlc/apartment-04_bdxyReZtOfM.png?updatedAt=1642061452605',
    'https://ik.imagekit.io/txobowsaxlc/apartment-04_bdxyReZtOfM.png?updatedAt=1642061452605',
    'https://ik.imagekit.io/txobowsaxlc/apartment-04_bdxyReZtOfM.png?updatedAt=1642061452605',
  ],
};

const getCategoryImage = (category) => {
  const randomImage = CATEGORIES[category][Math.floor(Math.random() * CATEGORIES[category].length)];
  return randomImage;
};

export default getCategoryImage;
