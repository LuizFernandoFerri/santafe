// document.addEventListener("DOMContentLoaded", function () {
//   const gameListContainer = document.getElementById("gameList");
//   const carouselWrapper = document.querySelector(".carousel-wrapper");
//   const prevBtn = document.getElementById("prevBtn");
//   const nextBtn = document.getElementById("nextBtn");

//   // Dados simulados de jogos
//   const upcomingGames = [
//     {
//       title: "Game 1",
//       date: "2024-02-01",
//       platform: "PS5",
//     },
//     {
//       title: "Game 2",
//       date: "2024-02-15",
//       platform: "Xbox Series X",
//     },
//     {
//       title: "Game 3",
//       date: "2024-03-05",
//       platform: "PC",
//     },
//   ];

//   // Função para adicionar jogos à lista
//   function renderGameList() {
//     upcomingGames.forEach((game) => {
//       const gameItem = document.createElement("div");
//       gameItem.classList.add("gameItem");

//       gameItem.innerHTML = `
//         <h3>${game.title}</h3>
//         <p><strong>Data:</strong> ${game.date}</p>
//         <p><strong>Plataforma:</strong> ${game.platform}</p>
//       `;

//       gameListContainer.appendChild(gameItem);
//     });
//   }

//   // Função para mover o carrossel para a direita
//   function nextSlide() {
//     carouselWrapper.style.transform = "translateX(-410px)";
//   }

//   // Função para mover o carrossel para a esquerda
//   function prevSlide() {
//     carouselWrapper.style.transform = "translateX(0)";
//   }

//   // Chama a função para renderizar a lista de jogos
//   renderGameList();

//   // Adiciona os ouvintes de eventos aos botões do carrossel
//   nextBtn.addEventListener("click", nextSlide);
//   prevBtn.addEventListener("click", prevSlide);
// });
// document.addEventListener("DOMContentLoaded", function () {
//   const gameListContainer = document.getElementById("gameList");
//   const carouselWrapper = document.querySelector(".carousel-wrapper");
//   const prevBtn = document.getElementById("prevBtn");
//   const nextBtn = document.getElementById("nextBtn");

//   // Dados simulados de jogos
//   const upcomingGames = [
//     {
//       title: "Game 1",
//       date: "2024-02-01",
//       platform: "PS5",
//     },
//     {
//       title: "Game 2",
//       date: "2024-02-15",
//       platform: "Xbox Series X",
//     },
//     {
//       title: "Game 3",
//       date: "2024-03-05",
//       platform: "PC",
//     },
//   ];

//   // Função para adicionar jogos à lista
//   function renderGameList() {
//     upcomingGames.forEach((game) => {
//       const gameItem = document.createElement("div");
//       gameItem.classList.add("gameItem");

//       gameItem.innerHTML = `
//         <h3>${game.title}</h3>
//         <p><strong>Data:</strong> ${game.date}</p>
//         <p><strong>Plataforma:</strong> ${game.platform}</p>
//       `;

//       gameListContainer.appendChild(gameItem);
//     });
//   }

//   // Função para mover o carrossel para a direita
//   function nextSlide() {
//     carouselWrapper.style.transform = "translateX(-410px)";
//   }

//   // Função para mover o carrossel para a esquerda
//   function prevSlide() {
//     carouselWrapper.style.transform = "translateX(0)";
//   }

//   // Chama a função para renderizar a lista de jogos
//   renderGameList();

//   // Adiciona os ouvintes de eventos aos botões do carrossel
//   nextBtn.addEventListener("click", nextSlide);
//   prevBtn.addEventListener("click", prevSlide);
// });
