/* Intersection types
 * Basically create inheritance between types
 * Pretty similar to interfaces */
type Admin = {
  name: string;
  access: string[];
}

type User = {
  name: string;
  startDate: Date;
}

type itUser = Admin & User;

// We can also intersect different types, not only objects
type Combiner = string | number;
type Verifier = number | boolean;
type Checker = Combiner & Verifier;

/* Inferface would be
interface Admin {
  name: string;
  access: string[];
}

type User = {
  name: string;
  startDate: Date;
}

interface itUser extends Admin, User {};
*/

