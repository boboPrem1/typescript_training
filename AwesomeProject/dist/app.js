"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _A_e;
const compteur = document.querySelector("#compteur");
let i = 0;
const increment = (e) => {
    e.preventDefault;
    i++;
    const compteurValueContainer = compteur === null || compteur === void 0 ? void 0 : compteur.querySelector("span");
    if (compteurValueContainer) {
        compteurValueContainer.innerText = i.toString();
    }
};
compteur.addEventListener("click", increment);
// Iterdire la modification d'une variable on use readonly ...
function reverse(arr) {
    //  return arr.reverse(); // Des methodes comme reverse ou push etc modifie le tableau alors qu'il est en lecture seul ...
    return [...arr].reverse(); // Là on n'est bon ...
}
// Les class typescript ...
class A {
    constructor(h) {
        this.h = h;
        // La visibilité ...
        // private a = 3;
        this.b = 3;
        this.c = 4;
        this.d = 5;
        // Absolument privée
        _A_e.set(this, 6);
    }
    lucky() {
        console.log(__classPrivateFieldGet(this, _A_e, "f"));
    }
}
_A_e = new WeakMap();
class B extends A {
    log() {
        // this.b est accessible car elle est déclaré en protected dans la classe mère
        // this.a parcontre non car déclaré en private ...
        console.log(this);
    }
}
// On peut créer une collection ...
class Collection {
    constructor(items) {
        this.items = items;
    }
    // this comme type de retour ...
    add(item) {
        this.items.push(item);
        return this;
    }
    // this comme type de paramètre de function
    isEqual(a) {
        return a.items === this.items;
    }
    first() {
        return this.items[0] || null;
    }
}
const collectionA = new Collection([
    1,
    2,
    5,
    8,
    9,
    "2",
]);
const collectionAFirst = collectionA.first();
const collec = collectionA.add(true);
const collectionB = new Collection([
    12,
    1,
    5,
    6,
    "4",
]);
collectionA.isEqual(collectionB);
class subCollection extends Collection {
}
const collectionC = new subCollection([
    12,
    1,
    5,
    6,
    "4",
]);
collectionC.isEqual(collectionB);
class Suscriber {
    on(name, cb) {
        // this.
    }
}
class Point {
    constructor() {
        this.x = 0;
        this.y = 0;
    }
}
class Geometry {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.surface = 0;
    }
}
function getX(p) {
    return p.x;
}
const x = getX(new Geometry);
// Classes abstraites ...
class Geo {
    constructor() {
        this.x = 0;
        this.y = 0;
    }
}
Geo.origin = { x: 0, y: 0 };
const staticResponse = Geo.origin;
class Triangle extends Geo {
    constructor() {
        super(...arguments);
        this.x = 0;
        this.y = 0;
    }
    surface() {
        return 3;
    }
}
function shapeGenerator(shapeType, x, y) {
    return new shapeType(x, y).surface;
}
shapeGenerator(Triangle, 10, 20);
