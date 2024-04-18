
/**
 * @file Adds Overweight Farming Blocks to Create Casing Bases
 * @author Neocky <https://github.com/Neocky>
 */


ServerEvents.recipes(event => {
    //event.recipes.create.item_application(['create:andesite_casing'], ['overweight_farming:overweight_carrot_block', 'create:andesite_alloy'])
    event.recipes.create.item_application(['create:andesite_casing'],
        [Ingredient.of([
            'overweight_farming:overweight_apple_block',
            'overweight_farming:overweight_beetroot_block',
            'overweight_farming:overweight_carrot_block',
            'overweight_farming:overweight_cocoa_block',
            'overweight_farming:overweight_nether_wart_block',
            'overweight_farming:overweight_poisonous_potato_block',
            'overweight_farming:overweight_potato_block'
        ]), 'create:andesite_alloy'])

})
