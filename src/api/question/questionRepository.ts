import { Question } from "./questionModel";

export const questions: Question[] = [
  {
    id: "a246392e-89b0-44a6-9a13-308b6c8ed602",
    question: "Sharks are mammals?",
    answer: false,
  },
  {
    id: "168043e4-1120-443a-8445-042f26d1e30a",
    question: "Mercury is the fist planet from the Sun",
    answer: true,
  },
  {
    id: "286b4899-89ec-4ce3-a7b7-431d7e438c76",
    question: "The longest river in the world is the Amazon River",
    answer: false,
  },
  {
    id: "ffe6944c-37fa-4944-bf59-484ded959b0c",
    question: "Penguins can fly",
    answer: false,
  },
  {
    id: "6426071d-a9ff-4e3e-aa40-b3f9073e8e86",
    question: "Octopuses have three hearts",
    answer: true,
  },
  {
    id: "d5da026b-a575-489f-b6a5-49e8e904b34f",
    question: "Bats are blind",
    answer: false,
  },
  {
    id: "a93a8405-53e1-4d31-8c3a-45820f7d345b",
    question: "Sound travels faster in water than in air",
    answer: true,
  },
  {
    id: "11a87584-0963-4855-b958-d55ff1a941be",
    question: "The Sahara Desert is the largest desert in the world",
    answer: false,
  },
  {
    id: "6732d58c-e59b-4825-972d-16662036b412",
    question: "Mount Everest is the tallest mountain in the world",
    answer: true,
  },
  {
    id: "3d04003f-a2ca-4b13-bb7f-44ab207163ae",
    question: "The human body has 206 bones",
    answer: true,
  },
];

export class QuestionRepository {
  async getAllQuestions(): Promise<Question[]> {
    return questions;
  }
}
