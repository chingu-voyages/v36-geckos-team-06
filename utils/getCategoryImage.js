// Get random Property Image
const CATEGORIES = {
  normalApartments: [
    {
      thumbnail:
        'https://ik.imagekit.io/txobowsaxlc/normalApartments--thumbnail_f4SaOe-D5.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642268566773',
      fullImage:
        'https://ik.imagekit.io/txobowsaxlc/normalApartments--fullImage_8O5-PmrbROm.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642268567627',
    },
  ],
  servicedApartments: [
    {
      thumbnail:
        'https://ik.imagekit.io/txobowsaxlc/servicedApartments--thumbnail_hxYi0yIhk.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642268566435',
      fullImage:
        'https://ik.imagekit.io/txobowsaxlc/servicedApartments--fullImage_fbbkJOcek.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642268567284',
    },
  ],
  singleFamilyHome: [
    {
      thumbnail:
        'https://ik.imagekit.io/txobowsaxlc/singleFamilyHome--thumbnail_F1j1NbPc_.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1642268565369',
      fullImage:
        'https://ik.imagekit.io/txobowsaxlc/singleFamilyHome--fullimage_pbk3O3h_X.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1642268566351',
    },
  ],
  studentHousing: [
    {
      thumbnail:
        'https://ik.imagekit.io/txobowsaxlc/studentHousing--thumbnail_VzB2Yr3to.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642268566797',
      fullImage:
        'https://ik.imagekit.io/txobowsaxlc/studentHousing--fullImage_1AVCdhJD0.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642268567568',
    },
  ],
};

const getCategoryImage = (category) => {
  const randomImage = CATEGORIES[category][Math.floor(Math.random() * CATEGORIES[category].length)];
  return randomImage;
};

export default getCategoryImage;
