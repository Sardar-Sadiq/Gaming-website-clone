import { projects } from "./project.js";

console.log("Projects loaded:", projects);

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // ✅ Lenis is global (no import needed)
  const lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

  const workContainer = document.querySelector(".work");

  const createWorkItem = (project) => {
    const workItem = document.createElement("div");
    workItem.className = "work-item";
    workItem.innerHTML = `
      <div class="work-item-img">
        <img src="${project.img}" alt="${project.name}"/>
      </div>
      <div class="work-item-copy">
        <h3>${project.name}</h3>
        <p>${project.description}</p>
      </div>
    `;
    return workItem;
  };

  for (let i = 0; i < projects.length; i += 2) {
    const row = document.createElement("div");
    row.className = "row";

    const leftItemIndex = i % projects.length;
    const rightItemIndex = (i + 1) % projects.length;

    row.appendChild(createWorkItem(projects[leftItemIndex]));

    if (i + 1 < projects.length) {
      row.appendChild(createWorkItem(projects[rightItemIndex]));
    }

    workContainer.appendChild(row);
    console.log("Row added:", row);
  }

  gsap.set(".work-item", { y: 1000 });

  document.querySelectorAll(".row").forEach((row) => {
    const workItems = row.querySelectorAll(".work-item");

    workItems.forEach((item, index) => {
      const isLeft = index === 0;
      gsap.set(item, {
        rotation: isLeft ? -60 : 60,
        transformOrigin: "center center",
      });
    });

    ScrollTrigger.create({
      trigger: row,
      start: "top 60%",
      onEnter: () => {
        gsap.to(workItems, {
          y: 0,
          rotation: 0,
          duration: 1,
          ease: "power4.out",
          stagger: 0.25,
        });
      },
    });
  });
});
