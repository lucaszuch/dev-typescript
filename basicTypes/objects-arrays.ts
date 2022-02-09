// const product: {
//   id: number;
//   SKU: string;
//   variations: string[];
//   details: [number, string]; // creates a tupple
//   inStock: boolean;
// } = {
//   id: 1010,
//   SKU: '10000E',
//   variations: ['a', 'nero'],
//   details: [1, 'description'], // limits the values to the specific description desired
//   inStock: true
// };

// or simply initialize the object

/* enum assigns numbers to labels */
enum Type {SALE, SPECIAL, UNIQUE};

const product = {
  id: 1010,
  SKU: '10000E',
  variations: ['rosso', 'nero'],
  details: [1, 'description'],
  inStock: true,
  type: Type.SALE
};

for(let variation of product.variations) {
  console.log(variation.toUpperCase());
}

console.log(product.type === Type.SALE);