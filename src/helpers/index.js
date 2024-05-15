export const createImageAlt = (path, name = "item") => {
  const [base, ext] = path.split("/").pop().split(".");
  return `${base.replace(/_/g, ` ${name} `)} side photo`;
};
