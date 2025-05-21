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
  },

  shop: { title: "SHOP BY CATEGORIES" },

  collection: {
    title: "NEW COLLECTION",
    subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
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
