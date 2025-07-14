export class Game {
  constructor(
    id,
    title,
    category,
    platform,
    short_description,
    thumbnail,
    game_url,
    publisher,
    developer,
    release_date
  ) {
    this.id = id;
    this.title = title;
    this.category = category;
    this.platform = platform;
    this.short_description = short_description;
    this.thumbnail = thumbnail;
    this.game_url = game_url;
    this.publisher = publisher;
    this.developer = developer;
    this.release_date = release_date;
  }
}
