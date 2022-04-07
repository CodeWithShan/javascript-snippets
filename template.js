const posts = [
    {id: 1, title: "First Post", description: "Example of template in HTML with JavaScript"},
    {id: 2, title: "Second Post", description: "Example of template in HTML with JavaScript"},
]

const showContent = () => {
    

    posts.forEach((post) => {
        const card = document.querySelector("[data-card]");
        const cardContent = card.content.cloneNode(true);
        const cardTitle = cardContent.querySelector("[data-title]")
        const cardDescription = cardContent.querySelector("[data-description]")
        
        cardTitle.textContent = post.title;
        cardDescription.textContent = post.description;
        document.body.append(cardContent)
    })
}

document.addEventListener("click", showContent);
