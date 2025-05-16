function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    let viewStr;
    if (views < 1000) {
        viewStr = views;
    }
    else if (views < 1000000) {
        viewStr = views / 1000 + "k";
    }

    else if (views >= 1000000) {
        viewStr = views / 1000000 + "M";
    }
    else {
        viewStr = views / 1000 + "k";
    }
    let html = `<div class="card">
            <div class="image">
                <img src="${thumbnail}" alt="image.png">
                <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h2>${title}</h2>
                <p>${cName} . ${viewStr} Views . ${monthsOld} months ago</p>
                
            </div>
        </div>`

    document.querySelector(".container").innerHTML += html;
}


createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
createCard("Introduction to Node js | Sigma Web Dev video #3", "CodeWithHarry", 1060000, 4, "56:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
createCard("Introduction to Express js | Sigma Web Dev video #4", "CodeWithHarry", 600, 1, "96:45", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")



// we have to create a function call createCard have the following parameters like cname,views,monthsOld,duration,thumbnail