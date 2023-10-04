import { Component } from '@angular/core';
import { Animal } from './animal';
import { AnimalService } from './animal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  titulo = 'Animais';
  novoAnimal: Animal = new Animal();
  animais: Animal[] = [];
  animalEmEdicao: Animal | null = null;

  constructor(private animalService: AnimalService) {}

  inserirAnimal(): void {
    this.novoAnimal.id = this.animalService.getProximoId();
    this.animalService.adicionarAnimal(this.novoAnimal);
    this.animais.push(this.novoAnimal);
    this.novoAnimal = new Animal();
  }

  iniciarEdicao(animal: Animal): void {
    this.animalEmEdicao = { ...animal }; // Clonar o animal para edição
  }

  concluirEdicao(animalEditado: Animal): void {
    if (animalEditado) {
      const index = this.animais.findIndex((a) => a.id === animalEditado.id);
      if (index !== -1) {
        this.animais[index] = { ...animalEditado };
        this.animalEmEdicao = null;
      }
    }
  }

  cancelarEdicao(): void {
    this.animalEmEdicao = null;
  }

  removerAnimal(animal: Animal): void {
    this.animalService.removerAnimal(animal.id);
    this.animais = this.animais.filter((a) => a.id !== animal.id);
  }
}
