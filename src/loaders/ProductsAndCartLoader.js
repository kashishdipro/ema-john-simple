import { getStoredCart } from "../utilities/fakedb";

export const ProductsAndCartLoader = async() =>{
    // Get Products
    const productsData = await fetch('http://localhost:5000/products');
    const {products} = await productsData.json();

    // Get Cart
    const storedCart = getStoredCart();
    // console.log(storedCart);
    const savedCart = [];
    for(const id in storedCart){
        const addedProduct = products.find(product => product._id === id);
        if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            // console.log(addedProduct);
            savedCart.push(addedProduct);
        }
    }

    return {products, savedCart};
}