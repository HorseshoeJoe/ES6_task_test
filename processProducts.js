//Create products array with id, name, price, category as properties
const products = [
    {id: 1, name: 'Steam Deck', price: 650, category: 'Electronics'},
    {id: 2, name: 'Fender American Stratocaster', price: 2200, category: 'Musical Instruments'},
    {id: 3, name: 'Samsung Refridgerator', price: 1600, category: 'Appliances'},
    {id: 4, name: 'Wilson Official Game Ball', price: 300, category: 'Sports/Fitness'},
    {id: 5, name: 'Dyson V15', price: 900, category: 'Appliances'}
];

//Filter with prices > 1000 and category === 'Appliances'
console.log("Filtering")
const filteredProducts = products.filter(product => product.price > 1000 && product.category === 'Appliances');
console.log(filteredProducts);

//Mapping for organization based on category using new Set
//Instructions were kind of confusing to me so I hope this makes sense
console.log("Mapping");
const categories =[...new Set(products.map(product => product.category))];
const mappedProducts = categories.map(category => products.filter(product => product.category === category));
console.log(mappedProducts);

//Reducing so objects show the key as id and value as name, prrice, and category
console.log("Reducing")
const reducedProducts = products.reduce ((acc, product) => {acc[product.id] = 
    {name: product.name, price: product.price, category: product.category} 
    return acc;}, {});
console.log(reducedProducts);

//collect <= 1000, > 1000 then use ... 
console.log("Spread Operator")
const lowPriceProducts = products.filter(product => product.price <= 1000);
const highPriceProducts = products.filter(product => product.price > 1000);
const combinedPrices = [...lowPriceProducts, ...highPriceProducts];
console.log(combinedPrices);

//Modifying using spread operators
console.log("Modify Spread")
const productsWithDiscount = products.map(product => ({...product, hasDiscount: product.price > 2000}));
console.log(productsWithDiscount);


//Promises

//API fetch simulation
async function fetchProducts() {
    return new Promise((resolve, reject) => {
      // Simulate API call with a delay
      setTimeout(() => {
        resolve(products); // Resolve with product data
      }, 1000);
    });
  }

  async function processProducts() {
    try {
      const fetchedProducts = await fetchProducts();

      // ... use fetchedProducts to perform operations using filter, map, reduce, etc.
      const filteredProducts = fetchedProducts.filter(product => product.price > 1000 && product.category === 'Appliances');
        
      const categories = [...new Set(fetchedProducts.map(product => product.category))];
      const mappedProducts = categories.map(category => fetchedProducts.filter(product => product.category === category));

      const reducedProducts = fetchedProducts.reduce ((acc, product) => {acc[product.id] = 
        {name: product.name, price: product.price, category: product.category} 
        return acc;}, {});
        
      const productsWithDiscount = products.map(product => ({...product, hasDiscount: product.price > 2000}));

      // ... handle the results
      console.log("Filtered Products:", filteredProducts);
      console.log("Mapped Products:", mappedProducts);
      console.log("Reduced Products", reducedProducts);
      console.log("Prices with Discount", productsWithDiscount);
      
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }
   
   
  processProducts();