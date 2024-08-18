let estaChovendo: boolean = false;
estaChovendo = true;

let idade: number = 66;
let altura: number = 1.77;

let nacionalidade: string = "Brasileira";

//Arrays - Não pode ter vários tipos dentro de um array
const array: number[] = [1, 2, 4];
const array2: Array<string> = ["lucas", "a", "b"];
const array3: ReadonlyArray<string> = ["o", "d"];

//Tupla -- Permite tipos diversos dentro do array;
const lista: [string, boolean, number] = ["lucas", true, 22];

//Union Type -- une dois tipos;
let idadeDeAlguem: number | string = 11;
idadeDeAlguem = "11 anos";

//Any -- Aceita qualquer tipo de dado (usar com cautela!)
let any: any;
any = 11;
any = [];
any = true;
any = "string";
