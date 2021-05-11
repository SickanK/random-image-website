async function changeImage() {
  let button = document.querySelector(".button");
  try {
    button.disabled = true;
    let image = await fetch("https://source.unsplash.com/random");
    document.querySelector(".image").src = image.url;
  } catch (error) {
    console.error(error);
  } finally {
    button.disabled = false;
  }
}
