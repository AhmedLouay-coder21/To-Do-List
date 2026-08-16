import { PixelRainGenerate, PixelRainStop } from "./pixelRainEffect";

const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
let currentThemeSetting = calculateSettingAsThemeString({ localStorageTheme, systemSettingDark });
document.documentElement.setAttribute("data-theme", currentThemeSetting);

function applyThemeEffects(theme) {
  if (theme === 'night') {
    PixelRainGenerate();
  } else {
    PixelRainStop();
  }
}

function setIconState(icon, theme) {
  icon.classList.toggle('dark-mode-toggle__icon--moon', theme === 'night');
}

export function themeToggle()
{
    const button = document.getElementById('theme-toggle');
    const icon = button.firstElementChild;

    setIconState(icon, currentThemeSetting);
    applyThemeEffects(currentThemeSetting);

    button.addEventListener("click", (e) => {
    
      const newTheme = currentThemeSetting === "night" ? "dawn" : "night";

      // update theme attribute on HTML to switch theme in CSS
      document.querySelector("html").setAttribute("data-theme", newTheme);
      // update in local storage
      localStorage.setItem("theme", newTheme);

      setIconState(icon, newTheme);
      applyThemeEffects(newTheme);

      // update the currentThemeSetting in memory
      currentThemeSetting = newTheme;
    });
}

function calculateSettingAsThemeString({ localStorageTheme, systemSettingDark }) {
  if (localStorageTheme !== null) {
    return localStorageTheme;
  }

  if (systemSettingDark.matches) {
    return "night";
  }

  return "dawn";
}