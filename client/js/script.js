
const category = document.getElementById("category");

async function categories() {
    try {
        const result = await fetch("http://localhost:5000");
        const data = await result.json();
        
        data.forEach(element => {
            category.innerHTML += `
                <option value="${element.id}">${element.category_name}</option>
            `
        });
    }
    catch(error) {
        console.error(error);
    }
}

categories();