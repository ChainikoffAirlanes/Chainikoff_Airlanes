function showSection(sectionId) {
    const sections = document.querySelectorAll(".content-section");
    sections.forEach(section => {
        section.classList.remove("active");
    });

    document.getElementById(sectionId).classList.add("active");
}

async function calculateFlightTime() {
    const fromCity = document.getElementById("fromCity").value.trim();
    const toCity = document.getElementById("toCity").value.trim();

    if (!fromCity || !toCity) {
        document.getElementById("flightTime").innerText = "Введите города!";
        return;
    }

    try {
        const flightTime = Math.floor(Math.random() * 5) + 2; 
        const minutes = Math.floor(Math.random() * 60);
        
        document.getElementById("flightTime").innerText = 
            `Примерное время в пути из ${fromCity} в ${toCity} - ${flightTime} ч ${minutes} мин.`;
    } catch (error) {
        document.getElementById("flightTime").innerText = "Ошибка загрузки данных";
    }
}

function changeLanguage(lang) {
    alert(`Язык сменён на: ${lang}`);
}

document.addEventListener("DOMContentLoaded", () => {
    showSection("home");
});
