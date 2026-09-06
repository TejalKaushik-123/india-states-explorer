// Dataset for States and UTs (All 36 Entities)
const indiaData = [
    // 28 States
    { name: "Andhra Pradesh", type: "State", population: "49.5 Million", literacy: "67.0%", formed: "1 Nov 1956", area: "162,968 km²" },
    { name: "Arunachal Pradesh", type: "State", population: "1.4 Million", literacy: "65.4%", formed: "20 Feb 1987", area: "83,743 km²" },
    { name: "Assam", type: "State", population: "31.2 Million", literacy: "72.2%", formed: "26 Jan 1950", area: "78,438 km²" },
    { name: "Bihar", type: "State", population: "104.1 Million", literacy: "61.8%", formed: "22 Mar 1912", area: "94,163 km²" },
    { name: "Chhattisgarh", type: "State", population: "25.5 Million", literacy: "70.3%", formed: "1 Nov 2000", area: "135,192 km²" },
    { name: "Goa", type: "State", population: "1.5 Million", literacy: "88.7%", formed: "30 May 1987", area: "3,702 km²" },
    { name: "Gujarat", type: "State", population: "60.4 Million", literacy: "78.0%", formed: "1 May 1960", area: "196,024 km²" },
    { name: "Haryana", type: "State", population: "25.4 Million", literacy: "75.6%", formed: "1 Nov 1966", area: "44,212 km²" },
    { name: "Himachal Pradesh", type: "State", population: "6.9 Million", literacy: "82.8%", formed: "25 Jan 1971", area: "55,673 km²" },
    { name: "Jharkhand", type: "State", population: "33.0 Million", literacy: "66.4%", formed: "15 Nov 2000", area: "79,716 km²" },
    { name: "Karnataka", type: "State", population: "61.1 Million", literacy: "75.4%", formed: "1 Nov 1956", area: "191,791 km²" },
    { name: "Kerala", type: "State", population: "33.4 Million", literacy: "94.0%", formed: "1 Nov 1956", area: "38,863 km²" },
    { name: "Madhya Pradesh", type: "State", population: "72.6 Million", literacy: "69.3%", formed: "1 Nov 1956", area: "308,245 km²" },
    { name: "Maharashtra", type: "State", population: "112.4 Million", literacy: "82.3%", formed: "1 May 1960", area: "307,713 km²" },
    { name: "Manipur", type: "State", population: "2.9 Million", literacy: "76.9%", formed: "21 Jan 1972", area: "22,327 km²" },
    { name: "Meghalaya", type: "State", population: "3.0 Million", literacy: "74.4%", formed: "21 Jan 1972", area: "22,429 km²" },
    { name: "Mizoram", type: "State", population: "1.1 Million", literacy: "91.3%", formed: "20 Feb 1987", area: "21,081 km²" },
    { name: "Nagaland", type: "State", population: "2.0 Million", literacy: "79.6%", formed: "1 Dec 1963", area: "16,579 km²" },
    { name: "Odisha", type: "State", population: "42.0 Million", literacy: "72.9%", formed: "1 Apr 1936", area: "155,707 km²" },
    { name: "Punjab", type: "State", population: "27.7 Million", literacy: "75.8%", formed: "1 Nov 1966", area: "50,362 km²" },
    { name: "Rajasthan", type: "State", population: "68.5 Million", literacy: "66.1%", formed: "30 Mar 1949", area: "342,239 km²" },
    { name: "Sikkim", type: "State", population: "610,000", literacy: "81.4%", formed: "16 May 1975", area: "7,096 km²" },
    { name: "Tamil Nadu", type: "State", population: "72.1 Million", literacy: "80.1%", formed: "1 Nov 1956", area: "130,058 km²" },
    { name: "Telangana", type: "State", population: "35.0 Million", literacy: "66.5%", formed: "2 Jun 2014", area: "112,077 km²" },
    { name: "Tripura", type: "State", population: "3.7 Million", literacy: "87.2%", formed: "21 Jan 1972", area: "10,491 km²" },
    { name: "Uttar Pradesh", type: "State", population: "199.8 Million", literacy: "67.7%", formed: "24 Jan 1950", area: "240,928 km²" },
    { name: "Uttarakhand", type: "State", population: "10.1 Million", literacy: "78.8%", formed: "9 Nov 2000", area: "53,483 km²" },
    { name: "West Bengal", type: "State", population: "91.3 Million", literacy: "76.3%", formed: "26 Jan 1950", area: "88,752 km²" },

    // 8 Union Territories
    { name: "Andaman and Nicobar Islands", type: "UT", population: "380,000", literacy: "86.6%", formed: "1 Nov 1956", area: "8,249 km²" },
    { name: "Chandigarh", type: "UT", population: "1.1 Million", literacy: "86.1%", formed: "1 Nov 1966", area: "114 km²" },
    { name: "Dadra and Nagar Haveli and Daman and Diu", type: "UT", population: "587,000", literacy: "81.0%", formed: "26 Jan 2020", area: "603 km²" },
    { name: "Delhi", type: "UT", population: "16.8 Million", literacy: "86.2%", formed: "1 Nov 1956", area: "1,484 km²" },
    { name: "Jammu and Kashmir", type: "UT", population: "12.3 Million", literacy: "67.2%", formed: "31 Oct 2019", area: "42,241 km²" },
    { name: "Ladakh", type: "UT", population: "274,000", literacy: "77.5%", formed: "31 Oct 2019", area: "59,146 km²" },
    { name: "Lakshadweep", type: "UT", population: "64,000", literacy: "91.8%", formed: "1 Nov 1956", area: "32 km²" },
    { name: "Puducherry", type: "UT", population: "1.2 Million", literacy: "85.8%", formed: "16 Aug 1962", area: "490 km²" }
];

const statesGrid = document.getElementById('statesGrid');
const modal = document.getElementById('detailModal');
const modalBody = document.getElementById('modalBody');

// Function to initialize and render cards
function init() {
    renderCards(indiaData);
}

function renderCards(data) {
    statesGrid.innerHTML = '';
    data.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.style.animationDelay = `${index * 0.05}s`; // Staggered animation
        card.onclick = () => showDetails(item);
        
        card.innerHTML = `
            <h3>${item.name}</h3>
            <p><strong>${item.type === 'State' ? 'State' : 'Union Territory'}</strong></p>
            <p>Area: ${item.area}</p>
        `;
        statesGrid.appendChild(card);
    });
}

// Filter search logic
function filterStates() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filteredData = indiaData.filter(item => 
        item.name.toLowerCase().includes(query)
    );
    renderCards(filteredData);
}

// Modal Logic
function showDetails(item) {
    modalBody.innerHTML = `
        <h2>${item.name}</h2>
        <div class="info-row"><span>Type</span><span>${item.type === 'State' ? 'State' : 'Union Territory'}</span></div>
        <div class="info-row"><span>Population</span><span>${item.population}</span></div>
        <div class="info-row"><span>Literacy Rate</span><span>${item.literacy}</span></div>
        <div class="info-row"><span>Formed On</span><span>${item.formed}</span></div>
        <div class="info-row"><span>Total Area</span><span>${item.area}</span></div>
    `;
    modal.style.display = 'flex';
}

function closeModal() {
    modal.style.display = 'none';
}

// Close modal when clicking outside the content
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

init();