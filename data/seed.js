const iceCream = [
    {
        id: 1,
        flavor: 'Vanilla Bean',
        img_url: 'assets/vanilla-bean.jpg',
        type: 4,
        vegan: false,
        will_licks: 5,
        logan_licks: 7
    },
    {
        id: 2,
        flavor: 'Belgian Chocolate',
        img_url: 'assets/belgian-chocolate.jpg',
        type: 1,
        vegan: false,
        will_licks: 6,
        logan_licks: 8
    },
    {
        id: 3,
        flavor: 'Coconut Caramel',
        img_url: 'assets/coconut-caramel.jpg',
        type: 5,
        vegan: true,
        will_licks: 8,
        logan_licks: 5
    },
    {
        id: 4,
        flavor: 'Mint Chip',
        img_url: 'assets/mint-chip.jpg',
        type: 4,
        vegan: false,
        will_licks: 8,
        logan_licks: 8
    },
    {
        id: 5,
        flavor: 'Strawberry',
        img_url: 'assets/strawberry.jpg',
        type: 6,
        vegan: false,
        will_licks: 9,
        logan_licks: 5
    },
    {
        id: 6,
        flavor: 'Mocha Almond Fudge',
        img_url: 'assets/mocha-almond-fudge.jpg',
        type: 3,
        vegan: false,
        will_licks: 3,
        logan_licks: 3
    },
    {
        id: 7,
        flavor: 'Salted Caramel Chocolate',
        img_url: 'assets/salted-caramel-chocolate.jpg',
        type: 5,
        vegan: false,
        will_licks: 6,
        logan_licks: 9
    },
    {
        id: 8,
        flavor: 'Mango Sorbet',
        img_url: 'assets/mango-sorbet.jpg',
        type: 6,
        vegan: true,
        will_licks: 3,
        logan_licks: 8
    },
    {
        id: 9,
        flavor: 'Dulce De Leche',
        img_url: 'assets/dulce-de-leche.jpg',
        type: 2,
        vegan: false,
        will_licks: 7,
        logan_licks: 6
    },
    {
        id: 10,
        flavor: 'Chocolate Chip Cookie Dough',
        img_url: 'assets/chocolate-chip-cookie-dough.jpg',
        type: 1,
        vegan: false,
        will_licks: 2,
        logan_licks: 9
    },
    {
        id: 11,
        flavor: 'Cookies \'n\' Cream',
        img_url: 'assets/cookies-n-cream.jpg',
        type: 4,
        vegan: false,
        will_licks: 10,
        logan_licks: 8
    },
    {
        id: 12,
        flavor: 'Butter Pecan',
        img_url: 'assets/butter-pecan.jpg',
        type: 3,
        vegan: false,
        will_licks: 3,
        logan_licks: 6
    },
    {
        id: 13,
        flavor: 'Amaretto Black Cherry Almond',
        img_url: 'assets/amaretto-black-cherry-almond.jpg',
        type: 2,
        vegan: false,
        will_licks: 9,
        logan_licks: 5
    },
    {
        id: 14,
        flavor: 'Mocha Chocolate Cookie',
        img_url: 'assets/mocha-chocolate-cookie.jpg',
        type: 1,
        vegan: true,
        will_licks: 5,
        logan_licks: 7
    },
    {
        id: 15,
        flavor: 'Cherry',
        img_url: 'assets/cherry.jpg',
        type: 6,
        vegan: true,
        will_licks: 5,
        logan_licks: 8
    },
    {
        id: 16,
        flavor: 'Espresso',
        img_url: 'assets/espresso.jpg',
        type: 4,
        vegan: false,
        will_licks: 5,
        logan_licks: 5
    },
    {
        id: 17,
        flavor: 'Green Tea',
        img_url: 'assets/green-tea.jpg',
        type: 2,
        vegan: true,
        will_licks: 2,
        logan_licks: 8
    },
    {
        id: 18,
        flavor: 'Rocky Road',
        img_url: 'assets/rocky-road.jpg',
        type: 4,
        vegan: false,
        will_licks: 2,
        logan_licks: 4
    },
    {
        id: 19,
        flavor: 'Chocolate Peanut Butter',
        img_url: 'assets/chocolate-peanut-butter.jpg',
        type: 1,
        vegan: false,
        will_licks: 6,
        logan_licks: 5
    },
    {
        id: 20,
        flavor: 'Pistachio',
        img_url: 'assets/pistachio.jpg',
        type: 3,
        vegan: false,
        will_licks: 2,
        logan_licks: 2
    },
    {
        id: 21,
        flavor: 'Lemon Sorbet',
        img_url: 'assets/lemon-sorbet.jpg',
        type: 6,
        vegan: true,
        will_licks: 2,
        logan_licks: 7
    },
    {
        id: 22,
        flavor: 'Original Tart',
        img_url: 'assets/original-tart.jpg',
        type: 4,
        vegan: false,
        will_licks: 7,
        logan_licks: 9
    }
];

const types = [
    { name: 'Chocolate' },
    { name: 'Exotic' },
    { name: 'Nutty' },
    { name: 'Classic' },
    { name: 'Caramel' },
    { name: 'Fruit' }
];

module.exports = {
    iceCream: iceCream,
    types: types
};