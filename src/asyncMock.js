const products = [
    {
        id: 1,
        title: "T900Ultra",
        price: "25000",
        category: "Smartwatchs",
        Description: "Colores: Red, White, Black",
        image: "/assets/images/T900.png",
    },
    {
        id: 2,
        title: "Airpods",
        price: "35000",
        category: "Auriculares",
        Description: "Colores: Red, White, Black",
        image: "/assets/images/Airpods.png",
    },
    {
        id: 3,
        title: "Buds Pro",
        price: "34000",
        category: "Auriculares",
        Description: "Colores: White, Bora Purple, Phantom Black",
        image: "/assets/images/Budspro.png",
    },
    {
        id: 4,
        title: "Buds2 Pro",
        price: "33000",
        category: "Auriculares",
        Description: "Colores: White, Bora Purple, Phantom Black",
        image: "/assets/images/Buds2pro.png",
    },
];

export const getProducts = new Promise((resolve) => {
    setTimeout(() => {
        resolve(products);
    }, 2000);
});

export const getProduct = (id) => {
    return products.find((prod) => prod.id == id);
};