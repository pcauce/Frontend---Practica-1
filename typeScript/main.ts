const section: HTMLDivElement = document.querySelector(".section") as HTMLDivElement;

(async (): Promise<void> => {
    section.innerHTML = await (await fetch("html/FrontEnd.html")).text();
})();

document.body.addEventListener("click", async (event) => {
    const link = (event.target as HTMLElement).closest("[data-url]") as HTMLElement;
    if (link) {
        section.innerHTML = await (await fetch(`${link.dataset.url}`)).text();
    }
});