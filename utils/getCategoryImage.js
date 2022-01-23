// Get random Property Image
const CATEGORIES = {
  normalApartments: [
    {
      thumbnail:
        'https://ik.imagekit.io/txobowsaxlc/normalApartments/normalApartments-01-thumbnail_By-evKaPw.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1642928749632',
      fullImage:
        'https://ik.imagekit.io/txobowsaxlc/normalApartments/normalApartments-01-full-image_ryt-xxbc9C.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1642928749911',
    },
    {
      thumbnail:
        'https://ik.imagekit.io/txobowsaxlc/normalApartments/normalApartments-02-thumbnail_lKQAZsurfnt.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1642928748333',
      fullImage:
        'https://ik.imagekit.io/txobowsaxlc/normalApartments/normalApartments-02-full-image_NXv7k60gsNm.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1642928749481',
    },
    {
      thumbnail:
        'https://ik.imagekit.io/txobowsaxlc/normalApartments/normalApartments-03-thumbnail_iI9lJPLc0.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1642928748058',
      fullImage:
        'https://ik.imagekit.io/txobowsaxlc/normalApartments/normalApartments-03-full-image_4fPPQ7z0AT.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1642928749830',
    },
    {
      thumbnail:
        'https://ik.imagekit.io/txobowsaxlc/normalApartments/normalApartments-04-thumbnail_PKMlvJRJ-tL.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1642928747267',
      fullImage:
        'https://ik.imagekit.io/txobowsaxlc/normalApartments/normalApartments-04-full-image_vcHWSILsQ.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1642928749896',
    },
  ],
  servicedApartments: [
    {
      thumbnail:
        'https://ik.imagekit.io/txobowsaxlc/servicedApartments/servicedApartments-01-thumbnail_w2OkKBBi-k.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1642928138584',
      fullImage:
        'https://ik.imagekit.io/txobowsaxlc/servicedApartments/servicedApartments-01-full-image_Jm7a8HxJRg.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1642928138647',
    },
    {
      thumbnail:
        'https://ik.imagekit.io/txobowsaxlc/servicedApartments/servicedApartments-02-thumbnail_LKvBVvHXJx_.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1642928138499',
      fullImage:
        'https://ik.imagekit.io/txobowsaxlc/servicedApartments/servicedApartments-02-full-image_KX7uyLCfL.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1642928139379',
    },
    {
      thumbnail:
        'https://ik.imagekit.io/txobowsaxlc/servicedApartments/servicedApartments-03-thumbnail_xqHIbChAM.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1642928139327',
      fullImage:
        'https://ik.imagekit.io/txobowsaxlc/servicedApartments/servicedApartments-03-full-image_tBPxZVcQC.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1642928138374',
    },

    {
      thumbnail:
        'https://ik.imagekit.io/txobowsaxlc/servicedApartments/servicedApartments-04-thumbnail_x_cBLwErkQ.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1642928138855',
      fullImage:
        'https://ik.imagekit.io/txobowsaxlc/servicedApartments/servicedApartments-04-full-image_e_dOgpi9J.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1642928138526',
    },
  ],
  singleFamilyHome: [
    {
      thumbnail:
        'https://ik.imagekit.io/txobowsaxlc/singleFamilyHome/singleFamilyHome-01-thumbnail_F_lARmFLfyH.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1642924394129',
      fullImage:
        'https://ik.imagekit.io/txobowsaxlc/singleFamilyHome/singleFamilyHome-01-full-image_NEQmbBshu.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1642924395076',
    },
    {
      thumbnail:
        'https://ik.imagekit.io/txobowsaxlc/singleFamilyHome/singleFamilyHome-02-thumbnail_EjMgjOcl87.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1642924394875',
      fullImage:
        'https://ik.imagekit.io/txobowsaxlc/singleFamilyHome/singleFamilyHome-02-full-image_5AhgBSfI1.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1642924395723',
    },
    {
      thumbnail:
        'https://ik.imagekit.io/txobowsaxlc/singleFamilyHome/singleFamilyHome-03-thumbnail_ltmJGLP0WW9.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1642924395138',
      fullImage:
        'https://ik.imagekit.io/txobowsaxlc/singleFamilyHome/singleFamilyHome-03-full-image_Xlyyygnr3jJ.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1642924395242',
    },
    {
      thumbnail:
        'https://ik.imagekit.io/txobowsaxlc/singleFamilyHome/singleFamilyHome-04-thumbnail_TrwZerino.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1642924394725',
      fullImage:
        'https://ik.imagekit.io/txobowsaxlc/singleFamilyHome/singleFamilyHome-04-full-image_12b6yHYme.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1642924395108',
    },
  ],
  studentHousing: [
    {
      thumbnail:
        'https://ik.imagekit.io/txobowsaxlc/studentHousing/studentHousing-01-thumbnail_OmyueZh7S.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1642928702094',
      fullImage:
        'https://ik.imagekit.io/txobowsaxlc/studentHousing/studentHousing-01-full-image_a1_WIVR3R.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1642928702636',
    },
    {
      thumbnail:
        'https://ik.imagekit.io/txobowsaxlc/studentHousing/studentHousing-02-thumbnail_fU7yZYY3m.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1642928700696',
      fullImage:
        'https://ik.imagekit.io/txobowsaxlc/studentHousing/studentHousing-02-full-image_ecRnzxt7XYi.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1642928701543',
    },
    {
      thumbnail:
        'https://ik.imagekit.io/txobowsaxlc/studentHousing/studentHousing-03-thumbnail_bjyZdWA6b.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1642928699215',
      fullImage:
        'https://ik.imagekit.io/txobowsaxlc/studentHousing/studentHousing-03-full-image_9mig1nKxX.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1642928701150',
    },
    {
      thumbnail:
        'https://ik.imagekit.io/txobowsaxlc/studentHousing/studentHousing-04-thumbnail_uxnpbwqZdDo.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1642928696363',
      fullImage:
        'https://ik.imagekit.io/txobowsaxlc/studentHousing/studentHousing-04-full-image_6DxflwbJ11.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1642928701038',
    },
  ],
};

// This function  selects a random image object from the CATEGORIES object
const getCategoryImage = (category) => {
  // We are using the Square bracket notation here instead of the Dot notation because 'category' the function parameter is dynamic

  // Since each property in the CATEGORIES object is an array of objects we are accessing a random object from that array using the index of the array randomized with Math.floor

  // In this case Math.floor generates a random number from 0-3, based on the length of the array
  const randomImage = CATEGORIES[category][Math.floor(Math.random() * CATEGORIES[category].length)];
  return randomImage;
};

export default getCategoryImage;
