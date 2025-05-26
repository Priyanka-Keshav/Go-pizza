const Pizza = require("../Models/Pizza");
const pizzaData = [
  {
    name: "Margherita",
    category: "Vegetarian",
    price: 300,
    description:
      "Classic pizza with tomato sauce, mozzarella cheese, and fresh basil.",
    img: "https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco,w_1460/https://storage.googleapis.com/gen-atmedia/3/2012/07/f2203c0e403286947dcf80815b656236fec71e88.jpeg",
  },
  {
    name: "Pepperoni",
    category: "Non-Vegetarian",
    price: 350,
    description:
      "Popular pizza topped with spicy pepperoni slices and mozzarella cheese.",
    img: "https://just-eat-prod-sg-res.cloudinary.com/image/upload/c_fill,d_au:cuisines:pizza-2.jpg,f_auto,q_auto,w_500/v1/au/restaurants/2455682.jpg",
  },
  {
    name: "Veggie Supreme",
    category: "Vegetarian",
    price: 320,
    description:
      "Loaded with a variety of vegetables like bell peppers, olives, and onions.",
    img: "https://i.pinimg.com/originals/48/b5/d2/48b5d236bac9c2d3415a7ba3159280e5.jpg",
  },
  {
    name: "BBQ Chicken",
    category: "Non-Vegetarian",
    price: 380,
    description:
      "Grilled chicken pieces with BBQ sauce, onions, and mozzarella cheese.",
    img: "https://www.tastingtable.com/img/gallery/the-absolute-best-wines-to-pair-with-different-types-of-pizza/bbq-chicken-pizza-grenache-1664811915.jpg",
  },
  {
    name: "Hawaiian",
    category: "Non-Vegetarian",
    price: 360,
    description: "Ham and pineapple chunks on a cheese and tomato base.",
    img: "https://sparkpeo.hs.llnwd.net/e1/resize/630m620/e2/guid/Hawaiian-Pizza-SparkRecipes-Un-Chained-Contest-Finalist-/788bdd98-898c-4900-ad38-9fa6ad1fe0dd.jpg",
  },
  {
    name: "Four Cheese",
    category: "Vegetarian",
    price: 340,
    description: "A blend of mozzarella, cheddar, parmesan, and gouda cheeses.",
    img: "https://thumbs.dreamstime.com/b/four-cheese-pizza-close-up-generative-ai-high-quality-illustration-276400410.jpg",
  },
  {
    name: "Mushroom Delight",
    category: "Vegetarian",
    price: 310,
    description: "Mushrooms, garlic, and parsley on a creamy base.",
    img: "https://d33wubrfki0l68.cloudfront.net/60af2791b365f53f84388df2001b53afebbd06ec/b682d/images/uploads/2022_10_24_white_mushroom_pizza_2.jpg",
  },
  {
    name: "Sausage Feast",
    category: "Non-Vegetarian",
    price: 370,
    description: "Italian sausage, bell peppers, and onions.",
    img: "https://i.pinimg.com/originals/5a/7a/93/5a7a93f0dd1f512d59e018b1f766ec41.jpg",
  },
  {
    name: "Spinach and Feta",
    category: "Vegetarian",
    price: 330,
    description: "Spinach, feta cheese, and sun-dried tomatoes.",
    img: "https://thumbs.dreamstime.com/b/spinach-feta-pizza-stone-rustic-pub-generative-ai-277375775.jpg",
  },
  {
    name: "Buffalo Chicken",
    category: "Non-Vegetarian",
    price: 390,
    description: "Spicy buffalo sauce, chicken, and blue cheese.",
    img: "https://bbmozzarella.com/wp-content/uploads/2023/01/6H9A7133-Edit1-960x1024.jpg",
  },
  {
    name: "Pesto Veggie",
    category: "Vegetarian",
    price: 325,
    description: "Pesto sauce, cherry tomatoes, and arugula.",
    img: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Easy-Pesto-Pizza_EXPS_TOHAM21_18813_B12_01_4b.jpg",
  },
  {
    name: "Tandoori Paneer",
    category: "Vegetarian",
    price: 350,
    description: "Tandoori-spiced paneer, onions, and capsicum.",
    img: "https://thumbs.dreamstime.com/b/tandoori-paneer-pizza-257163421.jpg",
  },
  {
    name: "Meat Lovers",
    category: "Non-Vegetarian",
    price: 400,
    description: "Pepperoni, sausage, ham, and bacon.",
    img: "https://www.thespruceeats.com/thmb/P35kji9UfT9JndhurFbPRb1Tuyw=/2998x1999/filters:fill(auto,1)/aqIMG_4568fhor-0b89dc5c8c494ee9828ed29805791c5a.jpg",
  },
  {
    name: "Capricciosa",
    category: "Non-Vegetarian",
    price: 370,
    description: "Ham, mushrooms, artichokes, and olives.",
    img: "https://i2.wp.com/www.ilove-italy.cz/wp-content/uploads/2016/06/pizza6.jpg",
  },
  {
    name: "Seafood Special",
    category: "Non-Vegetarian",
    price: 420,
    description: "Shrimps, calamari, and mussels.",
    img: "https://www.letizza.com.au/wp-content/uploads/2019/10/Letizza-Chilli-Seafood-Pizza.jpg",
  },
  {
    name: "Mexican Fiesta",
    category: "Non-Vegetarian",
    price: 375,
    description: "Spicy minced meat, jalapenos, and corn.",
    img: "https://www.homepizzaovens.co.uk/wp-content/uploads/2021/09/RSZ-Category-Mexican-Pizza-Image.jpg",
  },
  {
    name: "Greek Salad",
    category: "Vegetarian",
    price: 330,
    description: "Feta cheese, olives, cucumbers, and tomatoes.",
    img: "https://www.heinens.com/wp-content/uploads/2022/12/Greek-Salad-Pizza-800x550-2.jpg",
  },
  {
    name: "Chicken Alfredo",
    category: "Non-Vegetarian",
    price: 385,
    description: "Creamy Alfredo sauce, chicken, and mushrooms.",
    img: "https://easyweeknightrecipes.com/wp-content/uploads/2021/01/chicken-alfredo-pizza-6.jpg",
  },
  {
    name: "Paneer Tikka",
    category: "Vegetarian",
    price: 345,
    description: "Marinated paneer cubes with Indian spices.",
    img: "https://i.pinimg.com/originals/1e/33/61/1e336162c6172fdb30da0449f1bfd71d.jpg",
  },
  {
    name: "Truffle Mushroom",
    category: "Vegetarian",
    price: 400,
    description: "Truffle oil, wild mushrooms, and mozzarella.",
    img: "https://img.freepik.com/premium-photo/delicious-truffle-mushroom-pizza-this-decadent-pizza-is-made-with-mushroom-cream-cheese_1101743-117.jpg",
  },
  {
    name: "Cheesy Garlic",
    category: "Vegetarian",
    price: 310,
    description: "Mozzarella, cheddar, and roasted garlic on a golden crust.",
    img: "https://www.ilovemytongue.com/wp-content/uploads/2017/02/easy-cheese-garlic-pizza-700x395.jpg",
  },
  {
    name: "Classic Marinara",
    category: "Vegetarian",
    price: 280,
    description: "Tomato sauce, garlic, oregano, and olive oil.",
    img: "https://i.pinimg.com/originals/e5/45/6f/e5456fc5c02cb613ca3ae8dc54c68573.jpg",
  },
  {
    name: "Farmhouse Special",
    category: "Vegetarian",
    price: 340,
    description: "Capsicum, onions, tomatoes, and mushrooms.",
    img: "https://image.shutterstock.com/image-photo/farmhouse-pizza-fresh-toppings-260nw-1966057306.jpg",
  },
  {
    name: "Chicken Tikka",
    category: "Non-Vegetarian",
    price: 380,
    description: "Spicy chicken tikka, onions, and green chilies.",
    img: "https://static.vecteezy.com/system/resources/previews/024/905/277/non_2x/freshly-baked-homemade-pizza-on-rustic-wood-table-generated-by-ai-free-photo.jpg",
  },
  {
    name: "Mediterranean Veggie",
    category: "Vegetarian",
    price: 350,
    description: "Olives, artichokes, cherry tomatoes, and feta cheese.",
    img: "https://oreganos.ca/oreganos.ca/uploads/2018/03/28468670_1687554787975453_3429092694966104148_n-960x675.jpg",
  },
  {
    name: "Shrimp Scampi",
    category: "Non-Vegetarian",
    price: 410,
    description: "Garlic butter sauce, shrimp, and parsley.",
    img: "https://cookwhatyoulove.com/wp-content/uploads/2021/05/shrimp-scampi-small.jpg",
  },
  {
    name: "Cheeseburger Pizza",
    category: "Non-Vegetarian",
    price: 370,
    description: "Ground beef, cheddar cheese, and pickles.",
    img: "https://s3-media0.fl.yelpcdn.com/bphoto/B4_Ju0VzilEoyhPSPdd7uw/l.jpg",
  },
  {
    name: "Marinara Delight",
    category: "Vegetarian",
    price: 290,
    description: "Tomato sauce, oregano, garlic, and fresh herbs.",
    img: "https://cdn.tasteatlas.com/images/recipes/bd0c496ebc474610b7481ef7f12f7159.jpg?w=600",
  },
  {
    name: "Loaded Veggie",
    category: "Vegetarian",
    price: 345,
    description: "Zucchini, mushrooms, bell peppers, and olives.",
    img: "https://th.bing.com/th/id/OIP.btkcqAFU9vcg08weHVITgAHaH0?rs=1&pid=ImgDetMain",
  },
  {
    name: "Pulled Pork BBQ",
    category: "Non-Vegetarian",
    price: 400,
    description: "Pulled pork, BBQ sauce, and red onions.",
    img: "https://i.redd.it/7ag8izsebuk31.jpg",
  },
  {
    name: "Creamy Alfredo Veggie",
    category: "Vegetarian",
    price: 335,
    description: "Alfredo sauce, spinach, and mushrooms.",
    img: "https://www.cicis.com/media/tlwfofny/spinach-alfredo-pizza.png",
  },
  {
    name: "Pepperoni Supreme",
    category: "Non-Vegetarian",
    price: 365,
    description: "Pepperoni, mushrooms, onions, and olives.",
    img: "https://static.vecteezy.com/system/resources/previews/000/726/896/non_2x/supreme-italian-pizza-with-pepperoni-and-toppings-photo.jpg",
  },
  {
    name: "Basil Pesto",
    category: "Vegetarian",
    price: 320,
    description: "Pesto sauce, fresh basil, and mozzarella.",
    img: "https://www.cookclickndevour.com/wp-content/uploads/2016/03/basil-pesto-pizza-recipe-c-768x1152.jpg",
  },
  {
    name: "Tropical Delight",
    category: "Vegetarian",
    price: 315,
    description: "Pineapple, bell peppers, and jalapeños.",
    img: "https://th.bing.com/th/id/R.48a759c46548d835da4e1262663e6820?rik=oHBRhRjuRUw34A&riu=http%3a%2f%2ffarm5.staticflickr.com%2f4047%2f4537642403_173eed1cf0_z.jpg&ehk=mGR8U2o3nPJ7Rf8wEr0atu%2b6oqrw81zsK2tA8sYtzUE%3d&risl=&pid=ImgRaw&r=0",
  },

  {
    name: "Herb Garden",
    category: "Vegetarian",
    price: 300,
    description: "Fresh herbs, cherry tomatoes, and ricotta cheese.",
    img: "https://www.yourlittleblackbook.me/wp-content/uploads/2014/04/the-herb-kitchen-newcastle-3-uk.jpg",
  },
  {
    name: "Prosciutto Arugula",
    category: "Non-Vegetarian",
    price: 415,
    description: "Prosciutto, arugula, and parmesan.",
    img: "https://travellingfoodie.net/wp-content/uploads/2020/06/Prosciutto-Arugula-Pizza-Recipe-Travelling-Foodie-7-278x347.jpg",
  },
  {
    name: "Paneer Makhani",
    category: "Vegetarian",
    price: 360,
    description: "Indian paneer makhani gravy, onions, and capsicum.",
    img: "https://image.freepik.com/foto-gratis/pizzapaneer-makhani-deliciosa-pizza-casera_527904-942.jpg",
  },
  {
    name: "Meaty BBQ",
    category: "Non-Vegetarian",
    price: 420,
    description: "BBQ chicken, bacon, and sausage.",
    img: "https://fillmore13brewery.com/wp-content/uploads/2017/01/bbq-pizza.jpg",
  },
  {
    name: "Garlic Spinach",
    category: "Vegetarian",
    price: 315,
    description: "Garlic-infused spinach and mozzarella.",
    img: "https://media.30seconds.com/tip/lg/How-to-Make-Spinach-Artichoke-Pizza-13219-120184221c-1482871350.jpg",
  },
  {
    name: "Italian Meatball",
    category: "Non-Vegetarian",
    price: 375,
    description: "Italian meatballs, marinara sauce, and mozzarella.",
    img: "https://www.easyhomemeals.com/wp-content/uploads/2021/03/Rosina-Italian-Meatball-Pizza-1024x683.jpg",
  },
  {
    name: "Cheddar Blast",
    category: "Vegetarian",
    price: 320,
    description: "A mix of cheddar, mozzarella, and crispy onions.",
    img: "https://thumbs.dreamstime.com/b/huge-pizza-cheddar-cheese-minced-beef-top-view-274623067.jpg",
  },
  {
    name: "Fiery Jalapeno",
    category: "Vegetarian",
    price: 325,
    description: "Spicy jalapeños, chili flakes, and onions.",
    img: "https://pizza-stop.co.uk/wp-content/uploads/2022/03/jalopeno-scaled.jpg",
  },
  {
    name: "Salmon Dill",
    category: "Non-Vegetarian",
    price: 450,
    description: "Smoked salmon, dill, and cream cheese.",
    img: "https://ultrathinpizzacrust.com/wp-content/uploads/2016/05/Smoked-Salmon-and-Dill-Pizza-scaled.jpg",
  },
  {
    name: "Mediterranean Chicken",
    category: "Non-Vegetarian",
    price: 390,
    description: "Grilled chicken, olives, feta, and tzatziki.",
    img: "https://smartcdn.gprod.postmedia.digital/nexus/wp-content/uploads/2020/06/IMG_1926e.jpg",
  },
];

// Insert the data
const insertPizzaData = async () => {
  try {
    const docs = await Pizza.insertMany(pizzaData);
    console.log("Pizzas inserted:", docs);
  } catch (err) {
    console.error("Error inserting pizzas:", err);
  }
};
const get_pizza = async (req, res) => {
  try {
    const data = await Pizza.find({});

    return res.status(201).json(data);
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
};
const get_veg = async (req, res) => {
  try {
    const data = await Pizza.find({ category: "Vegetarian" });
    return res.status(201).json(data);
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
};
const get_nonveg = async (req, res) => {
  try {
    const data = await Pizza.find({ category: "Non-Vegetarian" });
    return res.status(201).json(data);
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
};
const sort_low = async (req, res) => {
  try {
    const data = await Pizza.find().sort({ price: 1 });
    return res.status(201).json(data);
  } catch (err) {
    return res.status(401).json({ message: "Error occured" });
  }
};
const sort_low_veg = async (req, res) => {
  try {
    const data = await Pizza.find({ category: "Vegetarian" }).sort({
      price: 1,
    });
    return res.status(201).json(data);
  } catch (err) {
    return res.status(401).json({ message: "Error occured" });
  }
};
const sort_high_veg = async (req, res) => {
  try {
    const data = await Pizza.find({ category: "Vegetarian" }).sort({
      price: -1,
    });
    return res.status(201).json(data);
  } catch (err) {
    return res.status(401).json({ message: "Error occured" });
  }
};
const sort_high = async (req, res) => {
  try {
    const data = await Pizza.find().sort({ price: -1 });
    return res.status(201).json(data);
  } catch (err) {
    return res.status(401).json({ message: "Error occured" });
  }
};
const sort_low_non_veg = async (req, res) => {
  try {
    const data = await Pizza.find({ category: "Non-Vegetarian" }).sort({
      price: 1,
    });
    return res.status(201).json(data);
  } catch (err) {
    return res.status(401).json({ message: "Error occured" });
  }
};
const sort_high_non_veg = async (req, res) => {
  try {
    const data = await Pizza.find({ category: "Non-Vegetarian" }).sort({
      price: -1,
    });
    return res.status(201).json(data);
  } catch (err) {
    return res.status(401).json({ message: "Error occured" });
  }
};
const get_pizza_id = async (req, res) => {
  try {
    const data = await Pizza.findById(req.params.id);
    return res.status(201).json(data);
  } catch (err) {
    return res.status(401).json({ message: "Error occured" });
  }
};
module.exports = {
  insertPizzaData,
  get_pizza,
  get_veg,
  get_nonveg,
  sort_low,
  sort_high,
  sort_low_veg,
  sort_high_veg,
  sort_low_non_veg,
  sort_high_non_veg,
  get_pizza_id,
};
