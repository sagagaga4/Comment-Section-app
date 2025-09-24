// Storing html elements inside variables
let addComment = document.querySelector(".btn");
const message = document.querySelector(".inputbox");
const commentSection = document.querySelector(".comment-section");

// Create cancel button (hidden by default)
const cancelBtn = document.createElement("button");
cancelBtn.textContent = "Cancel";
cancelBtn.classList.add("cancelBtn");
cancelBtn.style.display = "none";
message.insertAdjacentElement("afterend", cancelBtn);

let commentBeingEdited = null; // Track the comment currently being edited

// Add event listener to the button
addComment.addEventListener("click", function () {
  if (message.value.trim() !== "") {
    if (commentBeingEdited) {
      // Update the existing comment
      commentBeingEdited.textContent = message.value;
      commentBeingEdited.parentElement.classList.remove("editing"); // remove highlight
      commentBeingEdited = null; // Reset edit mode
      cancelBtn.style.display = "none"; // Hide cancel button
    } else {
      // Create wrapper div for comment + delete button
      const commentWrapper = document.createElement("div");
      commentWrapper.classList.add("commentWrapper");

      // Create the comment text
      const newComment = document.createElement("span");
      newComment.textContent = message.value;
     
      // Create check button
      const fireBtn = document.createElement("button");
      fireBtn.textContent = "🔥";
      fireBtn.classList.add("cbtn");
      
      // Create edit button
      const editBtn = document.createElement("button");
      editBtn.textContent = "✏️";
      editBtn.classList.add("ebtn");
      
      // Create delete button
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "🗑️";
      deleteBtn.classList.add("xbtn");

      // Append text + buttons inside wrapper
      commentWrapper.appendChild(newComment);
      commentWrapper.appendChild(fireBtn);
      commentWrapper.appendChild(editBtn);
      commentWrapper.appendChild(deleteBtn);

      // Add wrapper to top of comment section
      commentSection.insertBefore(commentWrapper, commentSection.firstChild);

      
      //Fire functionality with confetti
      fireBtn.addEventListener("click", function () {
        commentWrapper.classList.toggle("checked"); 
        if (commentWrapper.classList.contains("checked")) {
          // Launch confetti 🎉
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.9 }
          });
        }
      });
      
      // ✏️ Edit functionality
      editBtn.addEventListener("click", function () {
        message.value = newComment.textContent; // Load comment into input
        commentBeingEdited = newComment;       // Track this span for editing
        cancelBtn.style.display = "inline-block"; // Show cancel button
        commentWrapper.classList.add("editing"); // highlight the comment
      });
      
      // 🗑️ Delete functionality
      deleteBtn.addEventListener("click", function () {
        commentSection.removeChild(commentWrapper);
      });
    }

    // Clear the input
    message.value = "";
  }
});

// Cancel button functionality
cancelBtn.addEventListener("click", function () {
  if (commentBeingEdited) {
    commentBeingEdited.parentElement.classList.remove("editing");
  }
  commentBeingEdited = null; // Exit edit mode
  message.value = "";
  cancelBtn.style.display = "none";
});

// Esc key cancels editing
message.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    if (commentBeingEdited) {
      commentBeingEdited.parentElement.classList.remove("editing");
    }
    commentBeingEdited = null;
    message.value = "";
    cancelBtn.style.display = "none";
  }
});

// Allow Enter key to also trigger adding
message.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addComment.click();
  }
});
