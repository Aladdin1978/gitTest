async function getACuteDogPhoto() {
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await res.json();

  let image = data.message;
  return image;
}

async function displayDogPhoto() {
  const imageURL = await getACuteDogPhoto();

  let section = document.querySelector("section");
  // const image = document.createElelemt("img");
  const image = document.createElement("img");

  image.src = imageURL; // Set the src attribute to image URL
  section.appendChild(image);
}

displayDogPhoto();
