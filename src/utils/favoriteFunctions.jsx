import notification from "antd/es/notification";

export const toggleFavorite = (favorites, setFavorites, id, image, price, name, brand, setIsFavorite, isFavorite) => {
    const newFavorites = [...favorites];
    const index = newFavorites.findIndex((favorite) => favorite.id === id);
    if (index === -1) {
        newFavorites.push({ id, image, price, name, brand });
    } else {
        newFavorites.splice(index, 1);
    }
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    setIsFavorite(!isFavorite);
    notification.success({
        message: 'Круто!',
        description: `"${name}  ${brand}" ${isFavorite ? 'удален из избранного' : 'добавлен в избранное' } `,
        placement: 'topLeft',
    });
};


export const addToCart = (items, setItems, product) => {
    const existingProduct = items.find((item) => item.id === product.id);
    if (existingProduct) {
        setItems((prevItems) => prevItems.map((item) => {
            if (item.id === product.id) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        }));
    } else {
        setItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
    }
    notification.success({
        message: 'Круто!',
        description: `"${product.name}  ${product.brand}"  'добавлен в корзину!' `,
        placement: 'topLeft',
    });
};
