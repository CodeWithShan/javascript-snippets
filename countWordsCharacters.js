const metaDescription = document.querySelector("#meta-description");

const metaDescWords = document.querySelector("#meta-desc-words")

const metaDescCharacters = document.querySelector("#meta-desc-chs")

const countCharacters = (str) => {
    return typeof (str) === "string" && str.trim().length;
}

const countWords = (str) => {
    return typeof (str) === "string" && str.trim().split(/\s+/).filter(st => st != '').length;
}

metaDescription.addEventListener("input", () => {
    metaDescWords.innerHTML = countWords(metaDescription.value);
    metaDescCharacters.innerHTML = countCharacters(metaDescription.value);
})

