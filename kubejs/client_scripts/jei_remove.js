
// Remove JEI Categories from JEI

let jei_categories = [
    "productivebees:block_centrifuge",
    "productivebees:bottler",
]


JEIEvents.removeCategories(event => {
    //console.log(event.categoryIds) //log a list of all category ids to logs/kubejs/client.txt
    jei_categories.forEach(category => {
        event.remove(category)
    })
})
