// Definir uma classe base Amigo
class Amigo {
    constructor(nome) {
      this.nome = nome;
    }
  
    cumprimentar() {
      console.log(`Oi, eu sou ${this.nome}.`);
    }
  }
  
  // Definir subclasses de amigos que estendem a classe Amigo
  class AmigoEsportivo extends Amigo {
    constructor(nome, esporte) {
      super(nome);
      this.esporte = esporte;
    }
  
    cumprimentar() {
      console.log(`Oi, eu sou ${this.nome} e gosto de jogar ${this.esporte}.`);
    }
  }
  
  class AmigoMusical extends Amigo {
    constructor(nome, instrumento) {
      super(nome);
      this.instrumento = instrumento;
    }
  
    cumprimentar() {
      console.log(`Oi, eu sou ${this.nome} e toco ${this.instrumento}.`);
    }
  }
  
  class AmigoLeitor extends Amigo {
    constructor(nome, livro) {
      super(nome);
      this.livro = livro;
    }
  
    cumprimentar() {
      console.log(`Oi, eu sou ${this.nome} e estou lendo o livro "${this.livro}".`);
    }
  }
  
  // Função que recebe um amigo e faz com que ele cumprimente
  function fazerAmigoCumprimentar(amigo) {
    amigo.cumprimentar();
  }
  
  // Criar instâncias de amigos
  const amigoEsportivo = new AmigoEsportivo("Carlos", "futebol");
  const amigoMusical = new AmigoMusical("Ana", "violão");
  const amigoLeitor = new AmigoLeitor("Maria", "A Guerra dos Tronos");
  
  // Usar polimorfismo para fazer com que diferentes amigos cumprimentem
  fazerAmigoCumprimentar(amigoEsportivo); // Oi, eu sou Carlos e gosto de jogar futebol.
  fazerAmigoCumprimentar(amigoMusical);   // Oi, eu sou Ana e toco violão.
  fazerAmigoCumprimentar(amigoLeitor);    // Oi, eu sou Maria e estou lendo o livro "A Guerra dos Tronos".
  