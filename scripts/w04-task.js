/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Moses Anthony Azumah",
    photo: "images/mozizotutpic.jpg",
    favoriteFood: ['Bean', 'Fruits','Yam', 'Fish', 'Corn', 'Eggs'],
    hobbies: ["Coding", "Music", "Designing", "Reading"],
    placeLived: []
};

/* Populate Profile Object with placesLive objects */
myProfile.placeLived.push(
    {
        place: "Lagos, Nigeria",
        length: "20 years"
    },
    {
        place: "Port Harcourt, Nigeria",
        length: "2 years",
    },
    {
        place: "Swedrew, Ghana",
        length: "5 years"
    },
    {
        place: "Lome, Togo",
        length: "12 months"
    }
);
/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;
/* Photo with attributes */
document.querySelector("#photo").setAttribute("src", myProfile.photo);
/* Favorite Foods List*/
myProfile.favoriteFood.forEach(food => {
    let bullets =  document.createElement("li");
    bullets.textContent = food;
    document.querySelector("#favorite-foods").appendChild(bullets);   
});
/* Hobbies List */
myProfile.hobbies.forEach(hobby=> {
    let bullets = document.createElement("li");
    bullets.textContent = hobby;
    document.querySelector("#hobbies").appendChild(bullets);
})
/* Places Lived DataList */
myProfile.placeLived.forEach(places=>{
    let place = document.createElement("dt");
    place.textContent = places.place;
    document.querySelector("#places-lived").appendChild(place);
    
    let length = document.createElement("dd");
    length.textContent = places.length;
    document.querySelector("#places-lived").appendChild(length);
})