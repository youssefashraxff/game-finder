export class GameCard {
  constructor(game) {
    this.game = game;
  }

  render() {
    const col = document.createElement("div");
    col.className = "col-md-4 game-card";
    col.setAttribute("data-id", this.game.id);

    col.innerHTML = `
      <div class="w-100">
        <div class="image w-100 rounded-3 overflow-hidden position-relative ">
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
export class GameDetailPage {
  constructor(game) {
    this.game = game;
  }

  render() {
    let platform = "";
    if (this.game.platform === "Web Browser") {
      platform = `<i class="fa-brands fa-chrome"></i>`;
    } else {
      platform = `<i class="fa-brands fa-windows"></i>`;
    }
    const container = document.createElement("div");
    container.className = "row mt-5";

    container.innerHTML = `
      
        <!-- Game Image -->
        <div class="col-xl-8 col-lg-12 order-0 h-100">
          <div class="img w-100 rounded-3 overflow-hidden position-relative">
            <img src="${this.game.thumbnail}" alt="${this.game.title}" width="100%" />
            <p class="game-price position-absolute start-0 end-0 bottom-0 text-center py-1">Free</p>
          </div>
        </div>

        <!-- Game Details -->
        <div class="col-xl-4 col-lg-12 order-1 h-100">
          <div class="card-content d-flex flex-column flex-nowrap w-100 px-1">
            <p class="game-title-spes mb-2 mt-3">${this.game.title}</p>
            <div class="details d-flex justify-content-start align-items-center gap-3">
              <div class="category d-flex flex-column my-2">
                <p class="game-sub-spes text-white fw-lighter mb-2">Category</p>
                <a href="#"><span class="badge-spec">${this.game.category}</span></a>
              </div>
              <div class="platform d-flex flex-column my-2">
                <p class="game-sub-spes text-white fw-lighter mb-2">Status</p>
                <a href="#"><span class="badge-spec">Live</span></a>
              </div>
            </div>

            <a class="mt-4" href="${this.game.game_url}" target="_blank">
              <button class="btn btn-yellow mb-auto text-decoration-none text-black">Get Game</button>
            </a>

            <div class="tech-details mt-3">
              <div class="d-flex justify-content-between align-items-center border-bottom-grey text-white fw-light py-2 mt-2">
                <p class="text-grey">Developer</p><p>${this.game.developer}</p>
              </div>
              <div class="d-flex justify-content-between align-items-center border-bottom-grey text-white fw-light py-2 mt-2">
                <p class="text-grey">Publisher</p><p>${this.game.publisher}</p>
              </div>
              <div class="d-flex justify-content-between align-items-center border-bottom-grey text-white fw-light py-2 mt-2">
                <p class="text-grey">Release Date</p><p>${this.game.release_date}</p>
              </div>
              <div class="d-flex justify-content-between align-items-center border-bottom-grey text-white fw-light py-2 mt-2">
                <p class="text-grey">Platform</p><p>${platform}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Game Description -->

        <div class="description-sec col-xl-8 col-lg-12 order-2">
          <p class="game-desc-spes mt-3">${this.game.description}</p>
        </div>

        <!-- Carousel -->
    <div
      class="carousel slide carousel-fade col-xl-4 col-lg-12 order-3 mt-3"
      id="carouselExampleFade"
    >
      <div class="carousel-inner rounded-4">
        <div class="carousel-item active">
          <img
            src="${this.game.screenshots[0].image}"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="${this.game.screenshots[1].image}"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="${this.game.screenshots[2].image}"
            class="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    
    `;

    return container;
  }
}
