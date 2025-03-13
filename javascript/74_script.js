// let button = document.getElementById("btn");
// let button2 = document.getElementById("btn2");
// button.addEventListener("click", () => {
//     document.querySelector(".box").innerHTML = "<b>yayy you were clicked.</b>";
// })
// button2.addEventListener("click", () => {
//     document.querySelector(".box").innerHTML = "<b>you clicked back to original.</b>";
// })


// button.addEventListener("contextmenu", () => {
//     alert("Dont hack us by Right click Please")
// })

// document.addEventListener("keydown", (e => {
//     console.log(e.key, e.keyCode);
// }))


document.addEventListener("DOMContentLoaded", () => {
    let button = document.getElementById("btn");
    let button2 = document.getElementById("btn2");
    let box = document.querySelector(".box");

    button.addEventListener("click", () => {
        box.innerHTML = "<b>Yayy! You were clicked.</b>";
    });

    button2.addEventListener("click", () => {
        box.innerHTML = "<b>You clicked back to original.</b>";
    });

    button.addEventListener("contextmenu", (event) => {
        event.preventDefault(); // Prevents the default right-click menu
        alert("Don't hack us by right-clicking, please!");
    });

    document.addEventListener("keydown", (e) => {
        console.log("Key Pressed:", e.key, "KeyCode:", e.keyCode);
    });
});
