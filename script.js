function showSection(sectionId, element) {
    const sections = document.querySelectorAll('.section');
    const tabs = document.querySelectorAll('.tab');

    sections.forEach(section => {
        section.classList.remove('active');
    });

    tabs.forEach(tab => {
        tab.classList.remove('active-tab');
    });

    document.getElementById(sectionId).classList.add('active');
    element.classList.add('active-tab');
}

window.onload = function () {
    document.getElementById("defaultOpen").click();
};