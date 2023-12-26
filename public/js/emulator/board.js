import { Z8080 } from './8080/8080';

const MACHINE = {
  8080: Z8080,
  ROMH: new Uint8Array(2048),
  ROMG: new Uint8Array(2048),
  ROMF: new Uint8Array(2048),
  ROME: new Uint8Array(2048),
  RAM: new Uint8Array(1024),
  Video_RAM: new Uint8Array(7168),
  MAR: new Uint8Array(1024),
  PORTS: {
    INPUT: {
      0: new Uint8Array(1),
      1: new Uint8Array(1),
      2: new Uint8Array(1),
      3: new Uint8Array(1),
      shift: function (hi_value, low_value) {},
      reset: function () {
        this[2].fill(0);
        this[3].fill(0);
        this[0].fill(0);
        this[1].fill(0);
      },
    },
    OUTPUT: {
      2: new Uint8Array(1),
      3: new Uint8Array(1),
      5: new Uint8Array(1),
      6: new Uint8Array(1),
      reset: function () {
        this[2].fill(0);
        this[3].fill(0);
        this[5].fill(0);
        this[6].fill(0);
      },
    },
  },
  execute: function () {
    const currentAddr = this[8080]['registers']['program_counter'];
    switch (currentAddr) {
    }
  },
  load: async function (romLocations = ROM_LOCATIONS) {
    const tempBanks = await flashROMBank(romLocations);
    this.ROMH.set(tempBanks[0]);
    this.ROMG.set(tempBanks[1]);
    this.ROMF.set(tempBanks[2]);
    this.ROME.set(tempBanks[3]);
  },
  read_byte: function (address) {
    switch (address) {
      default:
        return;
    }
  },
  read_word: function (address) {
    switch (address) {
      default:
        return;
    }
  },
  reset: function () {
    this.RAM.fill(0);
    this.Video_RAM.fill(0);
    this.MAR.fill(0);
    this.load();
    this.PORTS.INPUT.reset();
    this.PORTS.OUTPUT.reset();
    this[8080].reset();
  },
  write_byte: function (address, value) {
    switch (address) {
      default:
        return;
    }
  },
  write_word: function (address, value) {
    switch (address) {
      default:
        return;
    }
  },
};
