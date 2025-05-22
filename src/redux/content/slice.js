import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  logo: {
    nameLogo: "ALTANSCHOOL WEB COURSES",
  },

  navItems: ["Home", "About", "Shop", "Blog", "Contact"],

  hero: {
    title: "ORGANIC FASHION",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    btnText: "Shop Now",
    image: {
      alt: "Hero Image",
      sources: {
        mobile: {
          x1: "/images/mobile/hero-mobile.png",
          x2: "/images/mobile/hero-mobile@2x.png",
        },
        tablet: {
          x1: "/images/tablet/hero-tablet.png",
          x2: "/images/tablet/hero-tablet@2x.png",
        },
        desktop: {
          x1: "/images/hero.png",
          x2: "/images/hero@2x.png",
        },
      },
    },
  },

  shop: {
    title: "SHOP BY CATEGORIES",
    images: [
      {
        alt: "Shop image 1",
        sources: {
          mobile: {
            x1: "/images/mobile/shop1-mobile.png",
            x2: "/images/mobile/shop1-mobile@2x.png",
          },
          tablet: {
            x1: "/images/tablet/shop1-tablet.png",
            x2: "/images/tablet/shop1-tablet@2x.png",
          },
          desktop: {
            x1: "/images/shop1.png",
            x2: "/images/shop1@2x.png",
          },
        },
      },
      {
        alt: "Shop image 2",
        sources: {
          mobile: {
            x1: "/images/mobile/shop2-mobile.png",
            x2: "/images/mobile/shop2-mobile@2x.png",
          },
          tablet: {
            x1: "/images/tablet/shop2-tablet.png",
            x2: "/images/tablet/shop2-tablet@2x.png",
          },
          desktop: {
            x1: "/images/shop2.png",
            x2: "/images/shop2@2x.png",
          },
        },
      },
      {
        alt: "Shop image 3",
        sources: {
          mobile: {
            x1: "/images/mobile/shop3-mobile.png",
            x2: "/images/mobile/shop3-mobile@2x.png",
          },
          tablet: {
            x1: "/images/tablet/shop3-tablet.png",
            x2: "/images/tablet/shop3-tablet@2x.png",
          },
          desktop: {
            x1: "/images/shop3.png",
            x2: "/images/shop3@2x.png",
          },
        },
      },
      {
        alt: "Shop image 4",
        sources: {
          mobile: {
            x1: "/images/mobile/shop4-mobile.png",
            x2: "/images/mobile/shop4-mobile@2x.png",
          },
          tablet: {
            x1: "/images/tablet/shop4-tablet.png",
            x2: "/images/tablet/shop4-tablet@2x.png",
          },
          desktop: {
            x1: "/images/shop4.png",
            x2: "/images/shop4@2x.png",
          },
        },
      },
      {
        alt: "Shop image 5",
        sources: {
          mobile: {
            x1: "/images/mobile/shop5-mobile.png",
            x2: "/images/mobile/shop5-mobile@2x.png",
          },
          tablet: {
            x1: "/images/tablet/shop5-tablet.png",
            x2: "/images/tablet/shop5-tablet@2x.png",
          },
          desktop: {
            x1: "/images/shop5.png",
            x2: "/images/shop5@2x.png",
          },
        },
      },
    ],
  },

  collection: {
    title: "NEW COLLECTION",
    subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    images: [
      {
        alt: "Collection image 1",
        sources: {
          mobile: {
            x1: "/images/mobile/collection1-mobile.png",
            x2: "/images/mobile/collection1-mobile@2x.png",
          },
          tablet: {
            x1: "/images/tablet/collection1-tablet.png",
            x2: "/images/tablet/collection1-tablet@2x.png",
          },
          desktop: {
            x1: "/images/collection1.png",
            x2: "/images/collection1@2x.png",
          },
        },
      },
      {
        alt: "Collection image 2",
        sources: {
          mobile: {
            x1: "/images/mobile/collection2-mobile.png",
            x2: "/images/mobile/collection2-mobile@2x.png",
          },
          tablet: {
            x1: "/images/tablet/collection2-tablet.png",
            x2: "/images/tablet/collection2-tablet@2x.png",
          },
          desktop: {
            x1: "/images/collection2.png",
            x2: "/images/collection2@2x.png",
          },
        },
      },
      {
        alt: "Collection image 3",
        sources: {
          mobile: {
            x1: "/images/mobile/collection3-mobile.png",
            x2: "/images/mobile/collection3-mobile@2x.png",
          },
          tablet: {
            x1: "/images/tablet/collection3-tablet.png",
            x2: "/images/tablet/collection3-tablet@2x.png",
          },
          desktop: {
            x1: "/images/collection3.png",
            x2: "/images/collection3@2x.png",
          },
        },
      },
    ],
  },

  about: {
    title: "ABOUT US",
    description: {
      firstRaragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      secondParagraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    btnText: "LEARN MORE",
    image: {
      alt: "About Image",
      sources: {
        mobile: {
          x1: "/images/mobile/about-mobile.png",
          x2: "/images/mobile/about-mobile@2x.png",
        },
        tablet: {
          x1: "/images/tablet/about-tablet.png",
          x2: "/images/tablet/about-tablet@2x.png",
        },
        desktop: {
          x1: "/images/about.png",
          x2: "/images/about@2x.png",
        },
      },
    },
  },

  follow: {
    title: "FOLLOW US",
    inputNamePlaceholder: "Enter your name",
    inputEmailPlaceholder: "Enter a valid email address",
    textAreaMessagePlaceholder: "Enter your message",
    btnText: "SUBMIT",
  },
};

const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {},
});

export const contentReduser = contentSlice.reducer;
