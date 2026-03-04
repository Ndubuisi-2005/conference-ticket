const form = document.getElementById("ticketForm");
const formSection = document.getElementById("formSection");
const ticketSection = document.getElementById("ticketSection");

const avatarInput = document.getElementById("avatarInput");
const avatarPreview = document.getElementById("avatarPreview");

const displayName = document.getElementById("displayName");
const ticketName = document.getElementById("ticketName");
const ticketGithub = document.getElementById("ticketGithub");
const ticketAvatar = document.getElementById("ticketAvatar");

avatarInput.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function () {
      avatarPreview.src = reader.result;
      ticketAvatar.src = reader.result;
    };
    reader.readAsDataURL(file);
  }
});

// Form Submission
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const fullName = document.getElementById("fullName").value;
  const github = document.getElementById("github").value;

  displayName.innerText = fullName;
  ticketName.innerText = fullName;
  ticketGithub.innerText = "@" + github;

  formSection.classList.add("hidden");
  ticketSection.classList.remove("hidden");
});