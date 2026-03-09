export const fetchFilteredData = async (filters) => {

  const response = await fetch("http://localhost:8000/filter", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(filters),
  });

  return await response.json();
};