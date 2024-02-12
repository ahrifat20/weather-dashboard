const getImageUrl = (name) => {
    return new URL(`../assets/climateIcons/${name}`,import.meta.url).href
};

export { getImageUrl };

