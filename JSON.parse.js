const roles = `
    [{ "id": 1, "title": "Front-End Developer" },
    { "id": 2, "title": "Back-End Developer" },
    { "id": 3, "title": "Designer" },
    { "id": 4, "title": "Writer"}]`;


console.log(typeof JSON.parse(roles), JSON.parse(roles));