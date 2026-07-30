export const fetchBossByName = async (name: string) => {
  const response = await fetch(`https://eldenring.fanapis.com/api/bosses?name=${name}`);
  if (!response.ok) {
    throw new Error('Failed to fetch boss data');
  }
  const result = await response.json();
  return result.data;
};

export const fetchAllBosses = async () => {
  const response = await fetch(`https://eldenring.fanapis.com/api/bosses`);
  if (!response.ok) {
    throw new Error('Failed to fetch boss data');
  }
  const result = await response.json();
  return result.data;
};
