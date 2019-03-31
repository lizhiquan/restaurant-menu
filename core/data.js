let gimbabIngredients = `
    <ul>
        <li>2 bowl of steamed rice</li>
        <li>4 dried seaweed sheets</li>
        <li>1/2 cucumber (vertical cut)</li>
        <li>4 picked radish for Gimbab</li>
        <li>4 ham for Gimbab</li>
        <li>4 crab meat for Gimbab</li>
        <li>100g burdock for Gimbab</li>
        <li>100g carrot</li>
        <li>3 eggs</li>
        <li>small sesame oil, sesame salt</li>
    </ul>
`;

let beefNoodleSaladIngredients = [
    "12 ounces rice vermicelli noodles",
    "2 tablespoons best quality fish sauce, such as Red Boat",
    "1 pound beef skirt steak or sirloin, in thin 1/4-inch slices",
    "1 tablespoon Demerara or granulated light brown sugar",
    "3 garlic cloves, minced",
    "3 tablespoons finely chopped lemon grass, tender centers only",
    "1 head lettuce, such as butter lettuce or Little Gems, tender center leaves separated",
    "2 tablespoons vegetable oil",
    "4 scallions, slivered",
    "1 medium carrot, cut in 3-inch lengths, julienned (about 1 cup)",
    "1 small cucumber, 3-inch lengths, julienned (about 1 cup)",
    "1 3-inch length daikon radish, julienned (about 1 cup)",
    "Mixture of cilantro sprigs, mint leaves, basil leaves and small perilla (shiso) leaves, about 3 cups",
    "4 tablespoons crushed roasted peanuts",
    "4 tablespoons fried shallots, available in Asian groceries (or make your own using this recipe)",
    "Small handful bean sprouts or sunflower sprouts (optional)"
];

module.exports = {
    getGimbabIngredients: function () {
        return gimbabIngredients;
    }, 
    getBeefNoodleSaladIngredients: function () {
        return beefNoodleSaladIngredients;
    }
};