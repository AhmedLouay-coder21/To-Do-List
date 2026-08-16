export function themeToggle()
{
    const button = document.getElementById('theme-toggle');
    const icon = button.firstElementChild;

    if(currentThemeSetting == 'night')
    {
        icon.classList.toggle('dark-mode-toggle__icon--moon');
    }
    else
    {
        icon.classList.remove('dark-mode-toggle');
    }

    button.addEventListener("click", (e) => {
    const newTheme = currentThemeSetting === "night" ? "dawn" : "night";
    document.body.classList.toggle('night');
    e.currentTarget.firstElementChild.classList.toggle('dark-mode-toggle__icon--moon');

    // update theme attribute on HTML to switch theme in CSS
    document.querySelector("html").setAttribute("data-theme", newTheme);

    // update in local storage
    localStorage.setItem("theme", newTheme);

    // update the currentThemeSetting in memory
    currentThemeSetting = newTheme;
    });
}
const localStorageTheme = localStorage.getItem("theme");

const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

function calculateSettingAsThemeString({ localStorageTheme, systemSettingDark }) {
  if (localStorageTheme !== null) {
    return localStorageTheme;
  }

  if (systemSettingDark.matches) {
    return "night";
  }

  return "dawn";
}
let currentThemeSetting = calculateSettingAsThemeString({ localStorageTheme, systemSettingDark });

document.documentElement.setAttribute("data-theme", currentThemeSetting);