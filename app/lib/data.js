

// export const getAllProducts = async () => {
//     try {
//         const data = await sql`SELECT * FROM products`;
//         return data.rows;
//     } catch (error) {
//         console.error('Database Error Details:', error.message, error.stack);
//         throw new Error('Failed to fetch products.');
//     }
// };

export const getAllProducts = async () => {
    try {
        const response = await fetch('http://localhost:8000/api/products');
        if (!response.ok) {
            new Error('Failed to fetch products.');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching products:', error.message);
        new Error('Failed to fetch products.');
    }
};
