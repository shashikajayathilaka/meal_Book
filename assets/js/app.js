 console.log("js loaded!!")

let apikey = "1";

let txtMeal = document.getElementById("txt_meal");

txtMeal.addEventListener("keypress", e => {
    if (e.key == "Enter") {
        apiCall(txtMeal.value)
    }
})


let apiCall = async (city) => {
    
    await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=chicken`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error:",error));
   
   

}

let setMeal = (data) =>{
    let mealSearch = document.getElementById("meal_Search");
    let Discover_Meal = document.getElementById("Discover_Meal");
    let Category_Search = document.getElementById("Category_Search")
    let Area_Search = document.getElementById("Area_Search");
    let Category_Area = document.getElementById("Category_Area");

    


    
}



