import { fetchROM, flashROMBank, ROM_LOCATIONS } from '../helper/load.js';

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
    this.registers.b.fill(0);
    this.registers.c.fill(0);
    this.registers.d.fill(0);
    this.registers.e.fill(0);
    this.registers.h.fill(0);
    this.registers.l.fill(0);
    this.registers.a.fill(0);
    this.registers.flags = {
      sign: false,
      zero: false,
      aux_carry: false,
      parity: false,
      carry: false,
    };
    this.registers.program_counter.fill(0);
    this.registers.stack_pointer.fill(0);
    this.registers.instruction_execution_time = 0;
    this.registers.total_cpu_operating_time = 0;
  },
};
