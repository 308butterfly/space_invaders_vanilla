const romLocations = [
    './public/assets/roms/space_invader_roms/invaders.h',
    './public/assets/roms/space_invader_roms/invaders.g',
    './public/assets/roms/space_invader_roms/invaders.f',
    './public/assets/roms/space_invader_roms/invaders.e'
  ];
  
  async function fetchROM(location) {
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
  
  async function flashROMBank(romLocations, romBank) {
    try {
      const romPartions = await Promise.all(romLocations.map(fetchROM));
  
      romBank.ROMH.set(romPartions[0]);
      romBank.ROMG.set(romPartions[1]);
      romBank.ROMF.set(romPartions[2]);
      romBank.ROME.set(romPartions[3]);
        
    } catch (error) {
      console.error('Error in flashing ROM bank:', error);
      return null; // Or handle error differently
    }
  }
  
