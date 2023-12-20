// Function to open the modal for images
function openImageModal(imageSrc, altText) {
  var modalImg = document.getElementById("img01");
  //var captionText = document.getElementById("caption");

  modalImg.src = imageSrc;
  //captionText.innerHTML = altText;
  imageModal.style.display = "block";
}

// Function to open the modal for videos
function openVideoModal(videoSrc, altText) {
  var videoModal = document.getElementById("videoModal");
  var modalVideo = videoModal.querySelector(".modal-content");
  //var videoCaption = videoModal.querySelector("#videoCaption");

  modalVideo.innerHTML = `<video width="100%" height="100%" controls><source src="${videoSrc}" type="video/mp4">Your browser does not support the video tag.</video>`;
  //videoCaption.innerHTML = altText;
  videoModal.style.display = "flex";
}


// Assign click event listeners to images and videos
document.querySelectorAll(".work-tile img, .work-tile video").forEach(function (media) {
  media.addEventListener("click", function () {
    if (media.tagName === 'IMG') {
      openImageModal(this.src, this.alt);
    } else { // it's a video
      openVideoModal(this.src, this.alt);
    }
  });
});

// Close the modals when the close button is clicked
document.querySelectorAll(".close").forEach(function (closeBtn) {
  closeBtn.addEventListener("click", function () {
    imageModal.style.display = "none";
    videoModal.style.display = "none";
  });
});

// Close the modal when clicked outside the modal content
window.addEventListener("click", function (event) {
  if (event.target == imageModal || event.target == videoModal) {
    imageModal.style.display = "none";
    videoModal.style.display = "none";
  }
});
