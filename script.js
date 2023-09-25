<script>
  document.addEventListener("DOMContentLoaded", function () {
    // Get a reference to the image element by its id
    const delayedImage = document.getElementById("delayedImage");

    // Delay in milliseconds (e.g., 3000ms = 3 seconds)
    const delay = 3000;

    // Set the src attribute of the image after the specified delay
    setTimeout(function () {
      delayedImage.src = "Images/BackgroundImageOne.jpg";
    }, delay);
  });
</script>
