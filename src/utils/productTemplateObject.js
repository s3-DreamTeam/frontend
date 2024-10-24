// File holding the object template used to create product objects

/**
 * # ProductTemplate
 * Class used as the template for the data given to Product Template component cards.
 * Holds everything a product template should have.
 * 
 * ---
 * @class ProductTemplate
 */
class ProductTemplate {
    // Generic Information
    Manufacturer = "UNDEFINED";
    Model = "UNDEFINED";
    Image = null;


    isLoading = false;
    imageIsLoading = false;
    errors = null;
}

export default ProductTemplate;