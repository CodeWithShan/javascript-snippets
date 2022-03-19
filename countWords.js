const metaDescription = document.querySelector("#meta-description");
const metaDescWords = document.querySelector("#meta-desc-words")

const countWords = (str) => {
    return typeof (str) === "string" && str.trim().split(/\s+/).length;
}


metaDescription.addEventListener("input", () => {
    metaDescWords.innerHTML = countWords(metaDescription.value);
})

