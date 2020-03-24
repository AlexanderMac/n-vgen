declare class VGenerator {
  constructor(charset: string, secretLen: number);
  getNext(): string?;
  getAll(): string[];
}

export = VGenerator;
