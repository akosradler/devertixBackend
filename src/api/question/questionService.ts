import { Question } from "./questionModel";
import { QuestionRepository } from "./questionRepository";

export class QuestionService {
  private questionRepository: QuestionRepository;

  constructor(repository: QuestionRepository = new QuestionRepository()) {
    this.questionRepository = repository;
  }

  // Retrieves all users from the database
  async getAllQuestions(): Promise<Question[] | null> {
    return await this.questionRepository.getAllQuestions();
  }
}

export const questionService = new QuestionService();
