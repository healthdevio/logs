import { Injectable } from "@nestjs/common";
import { BusinessException } from "src/core/exception/business-exception/business-exception";
import { PersonRepository } from "src/core/repositories/person/person.repository";

@Injectable()
export class FindPersonByUserIdUseCase {
  constructor(private readonly personRepository: PersonRepository) {}
  public async execute(userId: string) {
    const person = await this.personRepository.findByUserId(userId);
    if (!person) {
      throw new BusinessException("Usuário inválido");
    }

    return person;
  }
}
