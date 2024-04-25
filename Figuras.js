class Circulo {
  constructor(radio) {
    this.radio = radio;
  }

  calcularArea() {
    return Math.PI * Math.pow(this.radio, 2);
  }

  calcularPerimetro() {
    return 2 * Math.PI * this.radio;
  }
}

class Rectangulo {
  constructor(base, altura) {
    this.base = base;
    this.altura = altura;
  }

  calcularArea() {
    return this.base * this.altura;
  }

  calcularPerimetro() {
    return 2 * (this.base + this.altura);
  }
}

class Cuadrado {
  constructor(lado) {
    this.lado = lado;
  }

  calcularArea() {
    return Math.pow(this.lado, 2);
  }

  calcularPerimetro() {
    return 4 * this.lado;
  }
}

class TrianguloRectangulo {
  constructor(base, altura) {
    this.base = base;
    this.altura = altura;
  }

  calcularArea() {
    return (this.base * this.altura) / 2;
  }

  calcularHipotenusa() {
    return Math.sqrt(Math.pow(this.base, 2) + Math.pow(this.altura, 2));
  }

  determinarTipo() {
    if (this.base === this.altura) {
      return "Equilátero";
    } else if (this.base === Math.sqrt(Math.pow(this.altura, 2) + Math.pow(this.altura, 2))) {
      return "Isósceles";
    } else {
      return "Escaleno";
    }
  }
}

// Clase de prueba
class Prueba {
  static main() {
    const circulo = new Circulo(5);
    const rectangulo = new Rectangulo(3, 4);
    const cuadrado = new Cuadrado(5);
    const triangulo = new TrianguloRectangulo(3, 4);

    let mensaje = "";

    mensaje += "Área del círculo: " + circulo.calcularArea() + "\n";
    mensaje += "Perímetro del círculo: " + circulo.calcularPerimetro() + "\n\n";

    mensaje += "Área del rectángulo: " + rectangulo.calcularArea() + "\n";
    mensaje += "Perímetro del rectángulo: " + rectangulo.calcularPerimetro() + "\n\n";

    mensaje += "Área del cuadrado: " + cuadrado.calcularArea() + "\n";
    mensaje += "Perímetro del cuadrado: " + cuadrado.calcularPerimetro() + "\n\n";

    mensaje += "Área del triángulo: " + triangulo.calcularArea() + "\n";
    mensaje += "Hipotenusa del triángulo: " + triangulo.calcularHipotenusa() + "\n";
    mensaje += "Tipo de triángulo: " + triangulo.determinarTipo();

    alert(mensaje);
  }
}

Prueba.main();
