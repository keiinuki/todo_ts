export const KEYS = {
  SAMPLE_TEXT: "SAMPLE_TEXT",
} as const;
type KEYS = typeof KEYS[keyof typeof KEYS];

export const getItem = (key:KEYS) =>  {
  const value = localStorage.getItem(KEYS.SAMPLE_TEXT);
  if(value !== null){
    return value;
  };
  return "";
};

export const removeItem = (key:KEYS) => {
  localStorage.removeItem(key);
};

export const setItem = (key:KEYS, value:string) => {
  localStorage.setItem(key, value);
};