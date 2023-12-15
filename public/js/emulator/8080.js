const Z8080 = {
    clock : {
        instruction_execution_time: 0,
        total_cpu_operating_time : 0,
    },
    registers : {
        b: Uint8Array(1),
        c: Uint8Array(1),
        d: Uint8Array(1),
        e: Uint8Array(1),
        h: Uint8Array(1),
        l: Uint8Array(1),
        a: Uint8Array(1),
        flags: {
            sign: false,
            zero: false,
            aux_carry: false,
            parity: false,
            carry: false
        },
        program_counter: Uint8Array(2),
        stack_pointer: Uint8Array(2),
        instruction_execution_time: 0,
        total_cpu_operating_time : 0
    },
    reset : function() {
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
            carry: false
        };
        this.registers.program_counter = new Uint8Array(2);
        this.registers.stack_pointer = new Uint8Array(2);
        this.registers.instruction_execution_time = 0;
        this.registers.total_cpu_operating_time = 0;
    }

};

const Z8080_BUS = {
    ROMH : Uint8Array(2048),
    ROMG : Uint8Array(2048),
    ROMF : Uint8Array(2048),
    ROME : Uint8Array(2048),
    RAM : Uint8Array(1024),
    Video_RAM : Uint8Array(7168),
    MAR : Uint8Array(1024),
    read_byte : function(address){
        switch(address) {
            default:
                return;
        }
    },
    read_word : function (address){
        switch(address) {
            default:
                return;
        }
    },
    write_byte : function (address, value){
        switch(address) {
            default:
                return;
        }
    },
    write_word : function (address, value){
        switch(address) {
            default:
                return;
        }
    }
};

const input_ports = {
    '0' : Uint8Array(1),
    '1' : Uint8Array(1),
    '2' : Uint8Array(1),
    '3' : Uint8Array(1),
    shift : function(hi_value, low_value){}
};

const output_ports = {
    '2' : Uint8Array(1),
    '3' : Uint8Array(1),
    '5' : Uint8Array(1),
    '6' : Uint8Array(1)
};

