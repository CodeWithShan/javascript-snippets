const metaDescription = document.querySelector("#meta-description");
// const metaDescription = "There are many people";
const metaDescCharacters = document.querySelector("#meta-desc-chs")

//without whitespaces
// const countCharacters = (str) => {
//     return typeof (str) === "string" && str.trim().split(/\s+/).reduce((total, st) => total + st.length);
// }

//With Whitespaces
const countCharacters = (str) => {
    return typeof (str) === "string" && str.trim().length;
}


console.log(countCharacters(metaDescription.value))

metaDescription.addEventListener("input", () => {
    metaDescCharacters.innerHTML = countCharacters(metaDescription.value);
})

