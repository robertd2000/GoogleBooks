export class Service {
  static async getBook(book, page = 1) {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${book}?page=${page}`
    );
    return await response.json();
  }
}
