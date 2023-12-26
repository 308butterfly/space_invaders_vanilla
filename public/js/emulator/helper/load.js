export const ROM_LOCATIONS = ['./public/assets/roms/invaders.h', './public/assets/roms/invaders.g', './public/assets/roms/invaders.f', './public/assets/roms/invaders.e'];

export async function fetchROM(location) {
  try {
    const response = await fetch(location);
    if (!response.ok) {
      throw new Error(`Failed to fetch ROM from ${location}`);
    }
    return new Uint8Array(await response.arrayBuffer());
  } catch (error) {
    console.error(`Fetching error for ROM at ${location}:`, error);
    throw error; // Re-throw to handle in the calling function
  }
}

export async function flashROMBank(romLocations) {
  try {
    const romPartions = await Promise.all(romLocations.map(fetchROM));

    return romPartions;
  } catch (error) {
    console.error('Error in flashing ROM bank:', error);
    return null; // Or handle error differently
  }
}
