import notification from "antd/es/notification";

export const toggleFavorite = (favorites, setFavorites, id, image, price, name, brand, setIsFavorite, isFavorite) => {
    setIsFavorite(!isFavorite);
    if (isFavorite) {
        setFavorites(favorites.filter((fav) => fav.id !== id));
    } else {
        setFavorites([...favorites, {id, image, price, name, brand}]);
    }
    console.log(isFavorite)
    notification.success({
        message: 'Круто!',
        description: `"${name}  ${brand}" ${isFavorite ? 'удален из избранного' : 'добавлен в избранное' } `,
        placement: 'topLeft',
    });
};