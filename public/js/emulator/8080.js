import { fetchROM, flashROMBank, ROM_LOCATIONS } from './helper/load.js';

export const Z8080 = {
  clock: {
    instruction_execution_time: 0,
    total_cpu_operating_time: 0,
  },
  registers: {
    b: new Uint8Array(1),
    c: new Uint8Array(1),
    d: new Uint8Array(1),
    e: new Uint8Array(1),
    h: new Uint8Array(1),
    l: new Uint8Array(1),
    a: new Uint8Array(1),
    flags: {
      sign: false,
      zero: false,
      aux_carry: false,
      parity: false,
      carry: false,
    },
    program_counter: new Uint8Array(2),
    stack_pointer: new Uint8Array(2),
    instruction_execution_time: 0,
    total_cpu_operating_time: 0,
  },
  reset: function () {
    this.clock.instruction_execution_time = 0;
    this.clock.total_cpu_operating_time = 0;
    this.registers.b = new Uint8Array(1);
    this.registers.c = new Uint8Array(1);
    this.registers.d = new Uint8Array(1);
    this.registers.e = new Uint8Array(1);
    this.registers.h = new Uint8Array(1);
    this.registers.l = new Uint8Array(1);
    this.registers.a = new Uint8Array(1);
    this.registers.flags = {
      sign: false,
      zero: false,
      aux_carry: false,
      parity: false,
      carry: false,
    };
    this.registers.program_counter = new Uint8Array(2);
    this.registers.stack_pointer = new Uint8Array(2);
    this.registers.instruction_execution_time = 0;
    this.registers.total_cpu_operating_time = 0;
  },
};

export const Z8080_BUS = {
  ROMH: new Uint8Array(2048),
  ROMG: new Uint8Array(2048),
  ROMF: new Uint8Array(2048),
  ROME: new Uint8Array(2048),
  RAM: new Uint8Array(1024),
  Video_RAM: new Uint8Array(7168),
  MAR: new Uint8Array(1024),
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

export const input_ports = {
  0: new Uint8Array(1),
  1: new Uint8Array(1),
  2: new Uint8Array(1),
  3: new Uint8Array(1),
  shift: function (hi_value, low_value) {},
};

export const output_ports = {
  2: new Uint8Array(1),
  3: new Uint8Array(1),
  5: new Uint8Array(1),
  6: new Uint8Array(1),
};
