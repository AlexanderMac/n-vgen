declare class VGenerator {
  constructor(charset: string, secretLen: number);
  totalVariants: number;
  currentIndex: number;
  getNext(): string?;
}

export = VGenerator;
