
/**
 * @file Remove JEI Categories from JEI
 * @author Neocky <https://github.com/Neocky>
 */


JEIEvents.removeCategories(event => {
    //console.log(event.categoryIds) //log a list of all category ids to logs/kubejs/client.txt

    let jei_categories = [
        "productivebees:block_centrifuge",
        "productivebees:bottler",
    ]

    jei_categories.forEach(category => {
        event.remove(category)
    })
})
