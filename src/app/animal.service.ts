import { Injectable } from '@angular/core';
import { Animal } from './animal';

@Injectable({
  providedIn: 'root',
})
export class AnimalService {
  private animais: Animal[] = [];
  private proximoId = 1;

  constructor() {}

  getProximoId(): number {
    return this.proximoId++;
  }

  getAnimais(): Animal[] {
    return this.animais;
  }

  adicionarAnimal(animal: Animal): void {
    this.animais.push(animal);
  }

  atualizarAnimal(animal: Animal): void {
    const index = this.animais.findIndex((a) => a.id === animal.id);
    if (index !== -1) {
      this.animais[index] = animal;
    }
  }

  removerAnimal(id: number): void {
    this.animais = this.animais.filter((animal) => animal.id !== id);
  }
}
