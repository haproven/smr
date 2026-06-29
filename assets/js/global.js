// ===========================================================

document.addEventListener("copy", function(e) {
    e.preventDefault();
    alert("Copying is disabled.");
});

document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
});

document.addEventListener("selectstart", function(e) {
    e.preventDefault();
});

// =============================================================