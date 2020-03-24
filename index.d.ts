declare class VGenerator {
  constructor(charset: string, secretLen: number);
  totalVariants: number;
  getNext(): string?;
  getAll(): string[];
}

export = VGenerator;
