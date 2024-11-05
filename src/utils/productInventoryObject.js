// File holding the object template used to create product objects

/**
 * # Product
 * Class used to define data in a product.
 * For the data given to Product component cards.
 * Holds everything a product should have.
 * 
 * ---
 * @class Product
 */
class Product {
    // Generic Information
    Manufacturer = "UNDEFINED";
    Model = "UNDEFINED";
    Image = null;


    templateID = null;
    inStock = 0;
    inMachines = 0;

    isLoading = false;
    imageIsLoading = false;
    errors = null;
}

export default Product;