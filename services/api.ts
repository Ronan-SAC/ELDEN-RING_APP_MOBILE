// ==================== BOSSES ====================
export const fetchBossByName = async (name: string) => {
  const response = await fetch(`https://eldenring.fanapis.com/api/bosses?name=${name}`);
  if (!response.ok) throw new Error('Failed to fetch boss data');
  const result = await response.json();
  return result.data;
};

export const fetchAllBosses = async () => {
  const response = await fetch(`https://eldenring.fanapis.com/api/bosses?limit=100`);
  if (!response.ok) throw new Error('Failed to fetch boss data');
  const result = await response.json();
  return result.data;
};

// ==================== ITEMS ====================
export const fetchItemByName = async (name: string) => {
  const response = await fetch(`https://eldenring.fanapis.com/api/items?name=${name}`);
  if (!response.ok) throw new Error('Failed to fetch item data');
  const result = await response.json();
  return result.data;
};

export const fetchAllItems = async () => {
  const response = await fetch(`https://eldenring.fanapis.com/api/items?limit=100`);
  if (!response.ok) throw new Error('Failed to fetch item data');
  const result = await response.json();
  return result.data;
};

// ==================== AMMOS ====================
export const fetchAmmoByName = async (name: string) => {
  const response = await fetch(`https://eldenring.fanapis.com/api/ammos?name=${name}`);
  if (!response.ok) throw new Error('Failed to fetch ammo data');
  const result = await response.json();
  return result.data;
};

export const fetchAllAmmos = async () => {
  const response = await fetch(`https://eldenring.fanapis.com/api/ammos?limit=100`);
  if (!response.ok) throw new Error('Failed to fetch ammo data');
  const result = await response.json();
  return result.data;
};

// ==================== ARMORS ====================
export const fetchArmorByName = async (name: string) => {
  const response = await fetch(`https://eldenring.fanapis.com/api/armors?name=${name}`);
  if (!response.ok) throw new Error('Failed to fetch armor data');
  const result = await response.json();
  return result.data;
};

export const fetchAllArmors = async () => {
  const response = await fetch(`https://eldenring.fanapis.com/api/armors?limit=100`);
  if (!response.ok) throw new Error('Failed to fetch armor data');
  const result = await response.json();
  return result.data;
};

// ==================== ASHES OF WAR ====================
export const fetchAshOfWarByName = async (name: string) => {
  const response = await fetch(`https://eldenring.fanapis.com/api/ashes?name=${name}`);
  if (!response.ok) throw new Error('Failed to fetch ash of war data');
  const result = await response.json();
  return result.data;
};

export const fetchAllAshesOfWar = async () => {
  const response = await fetch(`https://eldenring.fanapis.com/api/ashes?limit=100`);
  if (!response.ok) throw new Error('Failed to fetch ashes of war data');
  const result = await response.json();
  return result.data;
};

// ==================== CLASSES ====================
export const fetchClassByName = async (name: string) => {
  const response = await fetch(`https://eldenring.fanapis.com/api/classes?name=${name}`);
  if (!response.ok) throw new Error('Failed to fetch class data');
  const result = await response.json();
  return result.data;
};

export const fetchAllClasses = async () => {
  const response = await fetch(`https://eldenring.fanapis.com/api/classes?limit=100`);
  if (!response.ok) throw new Error('Failed to fetch class data');
  const result = await response.json();
  return result.data;
};

// ==================== CREATURES ====================
export const fetchCreatureByName = async (name: string) => {
  const response = await fetch(`https://eldenring.fanapis.com/api/creatures?name=${name}`);
  if (!response.ok) throw new Error('Failed to fetch creature data');
  const result = await response.json();
  return result.data;
};

export const fetchAllCreatures = async () => {
  const response = await fetch(`https://eldenring.fanapis.com/api/creatures?limit=100`);
  if (!response.ok) throw new Error('Failed to fetch creature data');
  const result = await response.json();
  return result.data;
};

// ==================== INCANTATIONS ====================
export const fetchIncantationByName = async (name: string) => {
  const response = await fetch(`https://eldenring.fanapis.com/api/incantations?name=${name}`);
  if (!response.ok) throw new Error('Failed to fetch incantation data');
  const result = await response.json();
  return result.data;
};

export const fetchAllIncantations = async () => {
  const response = await fetch(`https://eldenring.fanapis.com/api/incantations?limit=100`);
  if (!response.ok) throw new Error('Failed to fetch incantation data');
  const result = await response.json();
  return result.data;
};

// ==================== LOCATIONS ====================
export const fetchLocationByName = async (name: string) => {
  const response = await fetch(`https://eldenring.fanapis.com/api/locations?name=${name}`);
  if (!response.ok) throw new Error('Failed to fetch location data');
  const result = await response.json();
  return result.data;
};

export const fetchAllLocations = async () => {
  const response = await fetch(`https://eldenring.fanapis.com/api/locations?limit=100`);
  if (!response.ok) throw new Error('Failed to fetch location data');
  const result = await response.json();
  return result.data;
};

// ==================== NPCS ====================
export const fetchNpcByName = async (name: string) => {
  const response = await fetch(`https://eldenring.fanapis.com/api/npcs?name=${name}`);
  if (!response.ok) throw new Error('Failed to fetch NPC data');
  const result = await response.json();
  return result.data;
};

export const fetchAllNpcs = async () => {
  const response = await fetch(`https://eldenring.fanapis.com/api/npcs?limit=100`);
  if (!response.ok) throw new Error('Failed to fetch NPC data');
  const result = await response.json();
  return result.data;
};

// ==================== SHIELDS ====================
export const fetchShieldByName = async (name: string) => {
  const response = await fetch(`https://eldenring.fanapis.com/api/shields?name=${name}`);
  if (!response.ok) throw new Error('Failed to fetch shield data');
  const result = await response.json();
  return result.data;
};

export const fetchAllShields = async () => {
  const response = await fetch(`https://eldenring.fanapis.com/api/shields?limit=100`);
  if (!response.ok) throw new Error('Failed to fetch shield data');
  const result = await response.json();
  return result.data;
};

// ==================== SORCERIES ====================
export const fetchSorceryByName = async (name: string) => {
  const response = await fetch(`https://eldenring.fanapis.com/api/sorceries?name=${name}`);
  if (!response.ok) throw new Error('Failed to fetch sorcery data');
  const result = await response.json();
  return result.data;
};

export const fetchAllSorceries = async () => {
  const response = await fetch(`https://eldenring.fanapis.com/api/sorceries?limit=100`);
  if (!response.ok) throw new Error('Failed to fetch sorcery data');
  const result = await response.json();
  return result.data;
};

// ==================== SPIRITS ====================
export const fetchSpiritByName = async (name: string) => {
  const response = await fetch(`https://eldenring.fanapis.com/api/spirits?name=${name}`);
  if (!response.ok) throw new Error('Failed to fetch spirit data');
  const result = await response.json();
  return result.data;
};

export const fetchAllSpirits = async () => {
  const response = await fetch(`https://eldenring.fanapis.com/api/spirits?limit=100`);
  if (!response.ok) throw new Error('Failed to fetch spirit data');
  const result = await response.json();
  return result.data;
};

// ==================== TALISMANS ====================
export const fetchTalismanByName = async (name: string) => {
  const response = await fetch(`https://eldenring.fanapis.com/api/talismans?name=${name}`);
  if (!response.ok) throw new Error('Failed to fetch talisman data');
  const result = await response.json();
  return result.data;
};

export const fetchAllTalismans = async () => {
  const response = await fetch(`https://eldenring.fanapis.com/api/talismans?limit=100`);
  if (!response.ok) throw new Error('Failed to fetch talisman data');
  const result = await response.json();
  return result.data;
};

// ==================== WEAPONS ====================
export const fetchWeaponByName = async (name: string) => {
  const response = await fetch(`https://eldenring.fanapis.com/api/weapons?name=${name}`);
  if (!response.ok) throw new Error('Failed to fetch weapon data');
  const result = await response.json();
  return result.data;
};

export const fetchAllWeapons = async () => {
  const response = await fetch(`https://eldenring.fanapis.com/api/weapons?limit=100`);
  if (!response.ok) throw new Error('Failed to fetch weapon data');
  const result = await response.json();
  return result.data;
};
