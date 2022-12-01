const iconsClass = ['bitrix', 'yandex', 'mail', 'seo', 'redirect', 'legal', 'cert']

const correctClass = (arr) => {
    const iconClass = 'bha-shop-services-card__icon';
    const cardsWithIcons = ['bitrix', 'yandex', 'mail', 'seo', 'redirect'];
    const test = `bha-shop-services-card__icon_type_${this.iconClass}`;

    const result = arr.filter(item => cardsWithIcons.includes(item));
    return !!result
}

console.log(correctClass(['bitrix']));