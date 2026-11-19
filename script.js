const profileButton = document.getElementById("profileButton");
const dropdownMenu = document.getElementById("dropdownMenu");
const status = document.getElementById("status");
const logoutButton = document.getElementById("logoutButton");

function setMenuOpen(open) {
  dropdownMenu.hidden = !open;
  profileButton.setAttribute("aria-expanded", String(open));
}

profileButton.addEventListener("click", () => {
  const open = profileButton.getAttribute("aria-expanded") !== "true";
  setMenuOpen(open);
  status.textContent = open ? "Menu opened. Choose an option." : "Menu closed.";
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".profile-wrap")) {
    setMenuOpen(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenuOpen(false);
    profileButton.focus();
    status.textContent = "Menu closed.";
  }
});

dropdownMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    const label = link.querySelector(".item-txt").textContent;
    status.textContent = `${label} selected (demo).`;
    setMenuOpen(false);
  });
});

logoutButton.addEventListener("click", () => {
  status.textContent = "Log Out selected (demo only).";
  setMenuOpen(false);
});
