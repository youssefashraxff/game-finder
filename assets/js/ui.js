// ui.js
export class GameCard {
  constructor(game) {
    this.game = game;
  }

  render() {
    const col = document.createElement("div");
    col.className = "col-md-4 game-card";

    col.innerHTML = `
      <div class="w-100">
        <div class="img w-100 rounded-3 overflow-hidden position-relative">
          <img src="${this.game.thumbnail}" alt="${this.game.title}" width="100%" />
          <p class="game-price position-absolute start-0 end-0 bottom-0 text-center py-1">
            Free
          </p>
        </div>
        <div class="card-content w-100 px-1">
          <div class="d-flex justify-content-between my-2">
            <p class="game-sub">${this.game.category}</p>
            <p class="game-sub">${this.game.platform}</p>
          </div>
          <p class="game-title mb-2">${this.game.title}</p>
          <p class="game-desc">${this.game.short_description}</p>
        </div>
      </div>
    `;
    return col;
  }
}
// ui.js
export class GameCard {
  constructor(game) {
    this.game = game;
  }

  render() {
    const col = document.createElement("div");
    col.className = "row mt-5";

    col.innerHTML = `
      <div class="w-100">
        <div class="img w-100 rounded-3 overflow-hidden position-relative">
          <img src="${this.game.thumbnail}" alt="${this.game.title}" width="100%" />
          <p class="game-price position-absolute start-0 end-0 bottom-0 text-center py-1">
            Free
          </p>
        </div>
        <div class="card-content w-100 px-1">
          <div class="d-flex justify-content-between my-2">
            <p class="game-sub">${this.game.category}</p>
            <p class="game-sub">${this.game.platform}</p>
          </div>
          <p class="game-title mb-2">${this.game.title}</p>
          <p class="game-desc">${this.game.short_description}</p>
        </div>
      </div>
    `;
    return col;
  }
}
