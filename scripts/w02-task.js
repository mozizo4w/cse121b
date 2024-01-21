/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Moses Anthony Azumah";
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const profilePicture = "images/mozizotutpic.jpg";
const imageName = "Mozizotutpic Image";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.getElementById("profilePicture");
const altText = `Profile image of ${imageName}`;

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture); // Fixed the typo here
imageElement.setAttribute('alt', altText);

/* Step 5 - Array */
const favoriteFoods = ['Bean', 'Fruits', 'Vegetables', 'Yam', 'Fish', 'Corn', 'Eggs'];
foodElement.textContent = `My Favorite Foods: ${favoriteFoods.join(', ')}`;
const favoriteFood = "Rice";
favoriteFoods.push(favoriteFood);
foodElement.innerHTML += `<br>${favoriteFoods.join("<br>")}`;
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods.join("<br>")}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods.join("<br>")}`;

