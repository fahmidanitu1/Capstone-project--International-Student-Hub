// COUNTRY DATA
const countries = [
    {
        name: "New Zealand",
        flag: "https://flagcdn.com/w320/nz.png",
        tips: [
            "Get an AT HOP card for easy transport in Auckland.",
            "Countdown and Pak'nSave are the cheapest supermarkets.",
            "Always check flatting agreements carefully."
        ]
    },
    {
        name: "Australia",
        flag: "https://flagcdn.com/w320/au.png",
        tips: [
            "Use Opal card for NSW transport.",
            "Universities have many part-time job boards.",
            "Stay hydrated during summer."
        ]
    },
    {
        name: "Canada",
        flag: "https://flagcdn.com/w320/ca.png",
        tips: [
            "Buy winter clothing locally.",
            "Use Presto card for transport in Ontario.",
            "Public libraries offer excellent study spaces."
        ]
    }
];

// LOAD COUNTRY CARDS
if (document.getElementById("countryList")) {
    const container = document.getElementById("countryList");

    countries.forEach(country => {
        container.innerHTML += `
        <div class="col-md-4 mb-4">
            <div class="card p-3">
                <img src="${country.flag}" class="card-img-top">
                <h5 class="mt-3">${country.name}</h5>
                <button class="btn btn-primary mt-2" onclick='showCountry("${country.name}")'>
                    View Guide
                </button>
            </div>
        </div>`;
    });
}

// POP-UP FOR COUNTRY INFO
function showCountry(name) {
    const c = countries.find(x => x.name === name);
    alert("Guide for " + c.name + ":\n\n" + c.tips.join("\n"));
}

// LOCAL STORAGE FOR STUDENT TIPS
if (document.getElementById("tipForm")) {
    const form = document.getElementById("tipForm");
    const input = document.getElementById("tipInput");
    const list = document.getElementById("tipsList");

    const savedTips = JSON.parse(localStorage.getItem("studentTips")) || [];

    function loadTips() {
        list.innerHTML = "";
        savedTips.forEach(t => {
            list.innerHTML += `<li class="list-group-item">${t}</li>`;
        });
    }

    form.addEventListener("submit", e => {
        e.preventDefault();
        const text = input.value.trim();
        if (!text) return;
        savedTips.push(text);
        localStorage.setItem("studentTips", JSON.stringify(savedTips));
        input.value = "";
        loadTips();
    });

    loadTips();
}
