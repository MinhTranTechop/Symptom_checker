import img from "../public/1.6.jpeg";
export const questionsData = {
  skin: [
    {
      id: 1,
      text_1: "Question 1",
      text: "Which of the following symptoms are you experiencing?",
      options: [
        { text: "Feel nothing", img: img },
        { text: "Itchy", img: img },
        { text: "Irritate", img: img },
        { text: "Sore", img: img },
      ],
    },
    {
      id: 2,
      text_1: "Question 2",
      text: "Which is the most similar to describe your skin symptom?",
      options: [
        {
          idtext: 1,
          text: "Red, scaly round patches with an outer clearing",
          img: img,
        },
        { text: "Red itchy round plaques", img: img },
        { text: "Red or brown patches with scaling", img: img },
        { text: "Wide added, red patches", img: img },
        { text: "Red or brown spots with hair loss", img: img },
        { text: "Red or brown spots with hair loss", img: img },
      ],
    },
    {
      id: 3,
      text_1: "Question 3",
      text: "Do you have close contact with animals/pets (Cat,..) ?",
      options: [{ img: img }, { img: img }],
    },
  ],
  intimate: [
    {
      id: 1,
      text_1: "Question 1",
      text: "Do you have fever?",
      options: [
        { text: "Yes", img: img },
        { text: "No", img: img },
      ],
    },
    {
      id: 2,
      text_1: "Question 2",
      text: "Which of the following symptoms are you experiencing in your intimate area?",
      options: [
        { text: "Feel nothing", img: img },
        { text: "Burning", img: img },
        { text: "Itchy", img: ".img" },
        { text: "Stinging", img: img },
        { text: "Soreness", img: img },
        { text: "Dysuria", img: img },
        { text: "Irritation", img: img },
      ],
    },
  ],
};
