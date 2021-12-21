import { USERS } from "./users";

export const POSTS = [
  {
    imageUrl: "https://img.lovepik.com/element/45000/4100.png_300.png",
    user: USERS[0].user,
    likes: 1000,
    caption: "Train ride to vegan land",
    profile_picture: USERS[0].image,
    comments: [
      {
        user: "theVeganMan",
        comment: "Wow! You are vegan, congrats",
      },
      {
        user: "theVeganMan",
        comment: "Wow! You are vegan, congrats",
      },
    ],
  },

  {
    imageUrl: "http://i.ibb.co.182bP1y/4k.png",
    user: USERS[1].user,
    likes: 1000,
    caption: "Train ride to vegan land",
    profile_picture: USERS[0].image,
    comments: [
      {
        user: "theVeganMan",
        comment: "Wow! You are vegan, congrats",
      },
      {
        user: "theVeganMan",
        comment: "Wow! You are vegan, congrats",
      },
    ],
  },
  {
    imageUrl: "http://i.ibb.co.82vj5cw/Post-Copy.png",
    // link not working
    user: USERS[2].user,
    likes: 1000,
    caption: "Train ride to vegan land",
    profile_picture: USERS[0].image,
    comments: [
      {
        user: "theVeganMan",
        comment: "Wow! You are vegan, congrats",
      },
      {
        user: "theVeganMan",
        comment: "Wow! You are vegan, congrats",
      },
    ],
  },
];
