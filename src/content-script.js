import { get, set, remove } from "./storage";

const FOCUS_COLOR = "darkblue";
const FOCUS_STYLES = [
  { key: "border-color", value: `${FOCUS_COLOR}` },
  { key: "box-shadow", value: `0 0 10px ${FOCUS_COLOR}` }
];

function doShit(elem, pathname) {
  const elemId = elem.id;

  FOCUS_STYLES.forEach(({ key, value }) => {
    elem.style.setProperty(key, value, "important");
    elem.nextElementSibling.style.setProperty(key, value, "important")
  });
  const draft = elem.value;
  if (!draft) {
    elem.value = get(`drafts:${pathname}:${elemId}`);
  }

  elem.addEventListener("blur", function() {
    FOCUS_STYLES.forEach(({ key, value }) => {
      elem.style.setProperty(key, "");
      elem.nextElementSibling.style.setProperty(key, "")
    })
  });

  elem.addEventListener("input", function(e) {
    const draft = e.target.value;
    if (!draft) return;
    set(`drafts:${pathname}:${elemId}`, draft);
  });

  elem.closest("form").addEventListener("submit", function() {
    remove(`drafts:${pathname}:${elemId}`);
  });
}

function onFocusAny(e) {
  if (e.target.tagName !== "TEXTAREA") return;
  const pathname = location.pathname;
  doShit(e.target, pathname);
}

// seems like the easiest certain way to cover all we want
document.addEventListener("focus", onFocusAny, true);
