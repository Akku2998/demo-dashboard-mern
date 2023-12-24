export async function fetchData(apiUrl) {
  try {
    const response = await fetch(apiUrl);
    if (response.ok) {
      const { data } = await response.json();
      return data;
    }
    throw new Error("HTTP error!!!");
  } catch (error) {
    console.error("error fetching data");
  }
}
