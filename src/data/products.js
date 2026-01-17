import { Product as AssetsProduct } from '../assets/ProductPics';

// Enhance the product data with prices and categories
export const products = AssetsProduct.map((product) => {
    // Generate a random price between $2 and $20 based on id
    const price = 2 + (product.id * 0.5) % 18;

    return {
        ...product,
        price: parseFloat(price.toFixed(2)),
        category: product.type || 'Fresh',
        name: product.name || `Fresh Item ${product.id}`,
        // Ensure image is valid (it should be since it's imported)
    };
});

export const categories = [
    { id: 1, name: 'Fruits', count: 24, image: products[0]?.image },
    { id: 2, name: 'Vegetables', count: 18, image: products[1]?.image },
    { id: 3, name: 'Meat', count: 12, image: products[2]?.image },
    { id: 4, name: 'Dairy', count: 8, image: products[3]?.image },
];

export const featuredProducts = products.slice(0, 8);
