export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "5b1148f997msh7413fd6159d5414p1d6b41jsn61ecf3645a88",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    {
      headers: headers,
    }
  );

  const result = await response.json();

  return result;
}
