const Z8080 = {
    clock : {
        instruction_execution_time: 0,
        total_cpu_operating_time : 0,
    },
    registers : {
        b: 0,
        c: 0,
        d: 0,
        e: 0,
        h: 0,
        l: 0,
        a: 0,
        flags: 0,
        program_counter: 0,
        stack_pointer: 0,
        instruction_execution_time: 0,
        total_cpu_operating_time : 0
    },
    reset : function() {
        this.clock.instruction_execution_time = 0;
        this.clock.total_cpu_operating_time = 0;
        this.registers.b = 0;
        this.registers.c = 0;
        this.registers.d = 0;
        this.registers.e = 0;
        this.registers.h = 0;
        this.registers.l = 0;
        this.registers.a = 0;
        this.registers.flags = 0;
        this.registers.program_counter = 0;
        this.registers.stack_pointer = 0;
        this.registers.instruction_execution_time = 0;
        this.registers.total_cpu_operating_time = 0;
    }

};

const Z8080_BUS = {
    read_byte : function(address){},
    read_word : function (address){},
    write_byte : function (address, value){},
    write_word : function (address, value){}
}

