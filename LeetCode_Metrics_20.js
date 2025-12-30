document.addEventListener("DOMContentLoaded", function(){

    const searchButton = document.getElementById("search-button");
    const userNameInput = document.getElementById("inputTag");

    const statsContainer = document.getElementById("stats-container");

    const easyProgressCircle = document.querySelector(".easy-item");
    const mediumProgressCircle = document.querySelector(".medium-item");
    const hardProgressCircle = document.querySelector(".hard-item");

    const easyLabel = document.getElementById("easy-Label");
    const mediumLabel = document.getElementById("medium-Label");
    const hardLabel = document.getElementById("hard-Label");

    const cardStatsContainer = document.getElementById("card-container");

    function validateUserName(userName){

        if (userName.trim() === ""){

            alert("Username can't be empty.");
            return false;
        }

        const regex = /^[a-zA-Z0-9_-]{1,15}$/;
        const isMatching = regex.test(userName);

        if (!isMatching)
            alert("Invalid username.");
        
        return isMatching;
    }

    function updateProgress(solved, total, label, circle){

        const progressDegree = total > 0 ? (solved / total) * 100 : 0;
        circle.style.setProperty("--progressDegree", `${progressDegree}%`);
        label.textContent = `${solved} / ${total}`;
    }

    function displayUserData(data){

        const { 

            totalQuestions, totalEasy, totalMedium, totalHard,
            totalSolved, easySolved, mediumSolved, hardSolved,
            ranking, contributionPoint
        } = data;

        updateProgress(easySolved, totalEasy, easyLabel, easyProgressCircle);
        updateProgress(mediumSolved, totalMedium, mediumLabel, mediumProgressCircle);
        updateProgress(hardSolved, totalHard, hardLabel, hardProgressCircle);

        const cardsData = [
            {label: 'Overall Submissions:', value: totalSolved}, 
            {label: 'Easy Submission:', value: easySolved},
            {label: 'Medium Submission:', value: mediumSolved},
            {label: 'Hard Submission:', value: hardSolved},
            { label: 'Contribution Points:', value: contributionPoint },
            { label: 'Global Ranking:', value: ranking }
        ];

        console.log("Card data: ", cardsData);

        cardStatsContainer.innerHTML = "";

        cardsData.forEach(item => {
            
            const card = document.createElement("div");
            card.classList.add("cards");

            const title = document.createElement("h1");
            title.textContent = item.label;

            const value = document.createElement("p");
            value.textContent = item.value;

            card.appendChild(title);
            card.appendChild(value);

            cardStatsContainer.appendChild(card);
        });
    }

    async function fetchUserDetails(userName){

        try {

            searchButton.textContent = "Searching...";
            searchButton.disabled = true;

            const url = `https://leetcode-api-faisalshohag.vercel.app/${encodeURIComponent(userName)}`;

            const response = await fetch(url);

            if (!response.ok)
                throw new Error("Unable to fetch the user details.");

            const data = await response.json();
            console.log("User data: ", data);

            if (data.status === "error") {

                statsContainer.innerHTML = `<p>${data.message || "No data found."}</p>`;
                return;
            }

            displayUserData(data);

        } catch (error) {

            statsContainer.innerHTML = `<p>Error: ${error.message}</p>`;
        } finally {

            searchButton.textContent = "Search";
            searchButton.disabled = false;
        }
    }

    searchButton.addEventListener('click', function(){

        const userName = userNameInput.value;
        console.log("Logging username: ", userName);

        if (validateUserName(userName))
            fetchUserDetails(userName);
    });

});