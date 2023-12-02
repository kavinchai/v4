export const scrollTo = (string) => {
    const section = document.querySelector(string);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
};