export async function getAllData(endpoint) {
  const baseURL = process.env.APIS;
  const response = await fetch(`${baseURL}${endpoint}`);
  const data = response.json();
  return data;
}

export async function getDataByLimit(endpoint, limit) {
  const baseURL = process.env.APIS;
  const response = await fetch(`${baseURL}${endpoint}?${limit}`);
  const data = response.json();
  return data;
}

export const reproduce = (data, gap) => {
  const first = ~~(Math.random() * (data.length - gap) + 1);
  const last = first + gap;

  const response = {
    data: data.slice(first, last),
  };

  return response;
};
