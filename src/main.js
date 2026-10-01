const navigationToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");
const dialog = document.querySelector(".order-dialog");

navigationToggle.addEventListener("click", () => {
  const isOpen = navigationToggle.getAttribute("aria-expanded") === "true";
  navigationToggle.setAttribute("aria-expanded", String(!isOpen));
  navigation.classList.toggle("open", !isOpen);
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigationToggle.setAttribute("aria-expanded", "false");
    navigation.classList.remove("open");
  });
});

document.querySelectorAll(".order-trigger").forEach((button) => {
  button.addEventListener("click", () => dialog.showModal());
});

document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());

document.querySelectorAll("[role=tab][data-category]").forEach((tab) => {
  tab.addEventListener("click", () => {
    const category = tab.dataset.category;
    document.querySelectorAll("[role=tab]").forEach((item) => {
      const isSelected = item === tab;
      item.classList.toggle("active", isSelected);
      item.setAttribute("aria-selected", String(isSelected));
    });
    document.querySelectorAll(".menu-card").forEach((card) => {
      card.hidden = card.dataset.category !== category;
    });
  });
});

function registerEmailForm(form, message) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    message.textContent = "You’re on the list. See you at the window!";
    form.reset();
  });
}

document.querySelectorAll(".signup-form, .waitlist-form").forEach((form) => {
  registerEmailForm(form, form.querySelector(".form-message"));
});
