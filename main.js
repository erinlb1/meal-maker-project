let menu = {
  courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },

  addDishToCourse: function(courseName, dishName, dishPrice) {
    let dish = {
      name: dishName,
      price: dishPrice
    };
    menu[courseName] = dish;
  },

  getRandomDishFromCourse: function(courseName) {
    let dishes = [courseName];
    let randomDish = Math.floor(Math.random() * dishes.length);
    return dishes[randomDish];
  },

  // getRandomDishFromCourse: function(courseName) {
  //   let dishes = courseName;
  //   let randomDish = Math.floor(Math.random() * dishes.length);
  //   return dishes[randomDish];
  // },

  generateRandomMeal: function() {
    let appetizer = menu.getRandomDishFromCourse('appetizers');
    let main = menu.getRandomDishFromCourse('mains');
    let dessert = menu.getRandomDishFromCourse('desserts');
    return `Your meal is ${appetizer}, ${main}, and ${dessert}.`
  }

};

menu.addDishToCourse('appetizers', 'soup', 4.25);
menu.addDishToCourse('appetizers', 'salad', 6.00 );
menu.addDishToCourse('appetizers', 'spinach dip', 5.75);

menu.addDishToCourse('mains', 'tacos', 12.00);
menu.addDishToCourse('mains', 'chicken tenders', 10.75);
menu.addDishToCourse('mains', 'burger', 13.25);

menu.addDishToCourse('desserts', 'cake', 4.50);
menu.addDishToCourse('desserts', 'pie', 5);
menu.addDishToCourse('desserts', 'milkshake', 4);

let meal = menu.generateRandomMeal();
console.log(meal);
