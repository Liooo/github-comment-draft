const PREFIX = "github-comment-draft:";

export const set = (key, value) => {
  localStorage.setItem(`${PREFIX}${key}`, value);
  return value;
};

export const get = key => localStorage.getItem(`${PREFIX}${key}`);

export const remove = key => localStorage.removeItem(`${PREFIX}${key}`);
