const compteur = document.querySelector("#compteur") as HTMLButtonElement;
let i = 0;

const increment = (e: MouseEvent): void => {
  e.preventDefault;
  i++;
  const compteurValueContainer = compteur?.querySelector(
    "span"
  ) as HTMLSpanElement;

  if (compteurValueContainer) {
    compteurValueContainer.innerText = i.toString();
  }
};

compteur.addEventListener("click", increment);

// Iterdire la modification d'une variable on use readonly ...

function reverse<T>(arr: readonly T[]): T[] {
  //  return arr.reverse(); // Des methodes comme reverse ou push etc modifie le tableau alors qu'il est en lecture seul ...
  return [...arr].reverse(); // Là on n'est bon ...
}

// Les class typescript ...
class A {
  // La visibilité ...
  // private a = 3;
  protected b = 3;
  public c = 4;
  d = 5;
  // Absolument privée
  #e = 6;

  constructor(public h: number) {}

  lucky() {
    console.log(this.#e);
  }
}

class B extends A {
  log() {
    // this.b est accessible car elle est déclaré en protected dans la classe mère
    // this.a parcontre non car déclaré en private ...
    console.log(this);
  }
}

// On peut créer une collection ...
class Collection<T> {
  constructor(private items: T[]) {}

  // this comme type de retour ...
  add(item: T): this {
    this.items.push(item);
    return this;
  }

  // this comme type de paramètre de function
  isEqual(a: this) {
    return a.items === this.items;
  }

  first(): T | null {
    return this.items[0] || null;
  }
}

const collectionA = new Collection<number | string | boolean>([
  1,
  2,
  5,
  8,
  9,
  "2",
]);
const collectionAFirst = collectionA.first();
const collec = collectionA.add(true);
const collectionB = new Collection<number | string | boolean>([
  12,
  1,
  5,
  6,
  "4",
]);
collectionA.isEqual(collectionB);

class subCollection<T> extends Collection<T> {
  // Si subCollection a une valeur propre alors elle ne correspondplus à this ...
  // a = 3;
}
const collectionC = new subCollection<number | string | boolean>([
  12,
  1,
  5,
  6,
  "4",
]);
collectionC.isEqual(collectionB);

class Suscriber {
  on(this: HTMLInputElement, name: string, cb: Function) {
    // this.
  }
}



class Point {
  x = 0;
  y = 0;
}

class Geometry {
  x = 0;
  y = 0;
  surface = 0;
}

function getX(p: Point) {
  return p.x
}

const x = getX(new Geometry);

// Classes abstraites ...
abstract class Geo {
  x = 0;
  y = 0;
  static origin = { x: 0, y: 0 };
  abstract surface (): number
}

const staticResponse = Geo.origin;

class Triangle extends Geo {
  x = 0;
  y = 0;

  surface() {
    return 3;
  }
}


type InstantiableShape = {
  new(x: number, y: number): {
    surface: () => number
  }
}

function shapeGenerator(shapeType: InstantiableShape, x: number, y: number) {
  return new shapeType(x, y).surface
}

shapeGenerator(Triangle, 10, 20)