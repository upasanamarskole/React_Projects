const BASE_URL = "https://www.googleapis.com/books/v1";

async function fetchBooks(query, controller) {
  try {
    const response = await fetch(`${BASE_URL}/volumes?q=${query}`, {
      signal: controller.signal,
    });
    if (!response.ok) {
      throw new Error(`API call Failed : ${response.status} `);
    }
    const data = await response.json();
    return data.items || [];
  } catch (error) {
    if (error.name === "AbortError") {
      console.log("Fetch Aborted");
    } else {
      console.error("Error Fetching books", error.message);
      throw error;
    }
  }
}
export default fetchBooks;
