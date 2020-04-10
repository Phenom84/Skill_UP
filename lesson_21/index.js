// ES-5 version
let head = {
  glasses: 1
};

let table = {
  pen: 3
};

let bed = {
  sheet: 1,
  pillow: 2
};

let pockets = {
  money: 2000
}

pockets.__proto__ = bed;
bed.__proto__ = table;
table.__proto__ = head;

// ES-6 version

//   class Head {
//     constructor () {
//       this.glasses = 1;
//     }
//   }

//   class Table extends Head {
//     constructor () {
//       super();
//       this.pen = 3;
//     }
//   }

//   class Bed extends Table {
//     constructor () {
//       super();
//       this.sheet = 1;
//       this.pillow = 2;
//     }
//   }

//   class Pockets extends Bed {
//     constructor () {
//       super();
//       this.money = 2000;
//     }
//   }

//   let head = new Head();
//   let table = new Table();
//   let bed = new Bed();
//   let pockets = new Pockets();

