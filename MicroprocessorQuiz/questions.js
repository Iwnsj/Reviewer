// ============================================
//  MICROPROCESSOR QUIZ — 50 QUESTIONS DATA
// ============================================

const QUESTIONS = [
    {
        category: 'Fundamentals',
        type: 'concept',
        difficulty: 'easy',
        question: 'A microprocessor is a CPU integrated into a small chip made primarily of what material?',
        options: ['Copper', 'Silicon', 'Aluminum', 'Gold'],
        answer: 1,
        explanation: 'A microprocessor is a CPU integrated into a small silicon chip that comprises thousands of small components.'
    },
    {
        category: 'Fundamentals',
        type: 'concept',
        difficulty: 'easy',
        question: 'Which of the following is NOT a component typically found in thousands within a microprocessor?',
        options: ['Diodes', 'Transistors', 'Resistors', 'Transformers'],
        answer: 3,
        explanation: 'A microprocessor comprises thousands of small components such as diodes, transistors, and resistors.'
    },
    {
        category: 'History',
        type: 'concept',
        difficulty: 'medium',
        question: 'In what year was the Unicom 141P business calculator, featuring a microprocessor, invented?',
        options: ['1969', '1971', '1977', '1980'],
        answer: 1,
        explanation: 'The Unicom 141P business calculator was invented in 1971 and was one of the foremost gadgets to feature a microprocessor.'
    },
    {
        category: 'History',
        type: 'concept',
        difficulty: 'medium',
        question: 'Which early home computer, invented in 1971, is broadly recognized as the primary all-in-one home computer?',
        options: ['Commodore PET', 'Apple I', 'Nintendo NES', 'Osborne 1'],
        answer: 0,
        explanation: 'The Commodore PET was invented in 1971 and is broadly recognized as the primary all-in-one home computer.'
    },
    {
        category: 'History',
        type: 'concept',
        difficulty: 'easy',
        question: 'Which video game did Namco pioneer in the United States in 1980, igniting a new trend in arcade gaming?',
        options: ['Space Invaders', 'Pong', 'Pac-Man', 'Donkey Kong'],
        answer: 2,
        explanation: 'Namco pioneered Pac-Man in the walkways of the United States in 1980, igniting Arcade Mania.'
    },
    {
        category: 'History',
        type: 'concept',
        difficulty: 'medium',
        question: 'Weighing 10.7kgs and featuring a five-inch screen, what device invented in 1981 is considered the great grandfather of most modern laptops?',
        options: ['Commodore 64', 'Apple Macintosh', 'Osborne 1 Laptop', 'IBM ThinkPad'],
        answer: 2,
        explanation: 'The Osborne 1 Laptop was invented in 1981 and is considered the great grand-father of most modern laptops.'
    },
    {
        category: 'History',
        type: 'concept',
        difficulty: 'easy',
        question: 'In what year did Apple launch its 1st iPod, giving the future of MP3 music format a new selection of set tunes?',
        options: ['1997', '1999', '2001', '2004'],
        answer: 2,
        explanation: 'Apple launched its 1st iPod in the year 2001.'
    },
    {
        category: 'Architecture',
        type: 'concept',
        difficulty: 'hard',
        question: 'What type of microprocessor categorizes a chip in which orders can be executed together along with other low-level activities?',
        options: ['RISC', 'CISM', 'ASIC', 'DSP'],
        answer: 1,
        explanation: 'CISM (Complex Instruction Set Microprocessors) execute orders together along with other low-level activities.'
    },
    {
        category: 'Architecture',
        type: 'concept',
        difficulty: 'medium',
        question: 'Which processor architecture is designed to carry out small things within a particular command, allowing it to complete more commands at a faster rate?',
        options: ['RISC', 'CISM', 'ASIC', 'Superscalar'],
        answer: 0,
        explanation: 'RISC (Reduced Instruction Set Microprocessor) chips carry out small things within a particular command, completing them at a faster rate.'
    },
    {
        category: 'Architecture',
        type: 'concept',
        difficulty: 'medium',
        question: 'What does ASIC stand for in the context of microprocessors?',
        options: ['Advanced System Integrated Controller', 'Application Specific Integrated Circuit', 'Automatic System Instruction Code', 'Asynchronous Signal Input Chip'],
        answer: 1,
        explanation: 'ASIC stands for Application Specific Integrated Circuit, used for specific purposes like automotive emissions control.'
    },
    {
        category: 'Architecture',
        type: 'concept',
        difficulty: 'medium',
        question: 'Which microprocessors are primarily used for encoding and decoding videos or converting signals between analog and digital?',
        options: ['DSPs', 'ASICs', 'RISC', 'CISM'],
        answer: 0,
        explanation: 'DSPs (Digital Signal Multiprocessors) are used for encoding and decoding videos, and converting signals to analog/digital.'
    },
    {
        category: 'Memory',
        type: 'concept',
        difficulty: 'easy',
        question: 'What type of memory is used for high-speed, temporary storage of files on the microprocessor to minimize size and cost?',
        options: ['ROM', 'Virtual Memory', 'Cache Memory', 'Flash Memory'],
        answer: 2,
        explanation: 'Cache memory is a high-speed memory used for temporary storage of files on the microprocessor.'
    },
    {
        category: 'Specifications',
        type: 'concept',
        difficulty: 'easy',
        question: 'How is the speed of a microprocessor\'s clock generally calculated?',
        options: ['In bits per second', 'In bytes', 'In hertz', 'In amperes'],
        answer: 2,
        explanation: 'The speed of the clock, which represents the amount of cycles per second, is calculated in hertz.'
    },
    {
        category: 'Specifications',
        type: 'concept',
        difficulty: 'medium',
        question: 'What metric represents a more accurate way to measure the speed of a processor by calculating millions of instructions per second?',
        options: ['MIPS', 'FLOPS', 'MHz', 'IPC'],
        answer: 0,
        explanation: 'MIPS (Millions of instructions per second) is a more accurate way to measure the speed of modern processors with multiple pipelines.'
    },
    {
        category: 'Specifications',
        type: 'concept',
        difficulty: 'medium',
        question: 'How many clock cycles does a microprocessor generally require to complete a single instruction?',
        options: ['1', '5', '10', '15'],
        answer: 2,
        explanation: 'A microprocessor generally requires 10 clocks cycle to complete a single instruction.'
    },
    {
        category: 'Specifications',
        type: 'concept',
        difficulty: 'medium',
        question: 'What is the formula for calculating power consumption in a microprocessor?',
        options: ['Volts / Amps = Watts', 'Volts X Amps = Watts', 'Watts X Volts = Amps', 'Amps / Volts = Watts'],
        answer: 1,
        explanation: 'Power consumption is calculated as Volts X Amps = Watts.'
    },
    {
        category: 'Processors',
        type: 'concept',
        difficulty: 'medium',
        question: 'The Intel 8085 microprocessor was an 8-bit general purpose microprocessor. How much memory could it easily store?',
        options: ['16k bite', '32k bite', '64k bite', '128k bite'],
        answer: 2,
        explanation: 'The 8085 microprocessor could easily store 64k bite of memory.'
    },
    {
        category: 'Processors',
        type: 'concept',
        difficulty: 'hard',
        question: 'How many input and output ports does the 8085 microprocessor have?',
        options: ['64', '128', '256', '512'],
        answer: 2,
        explanation: 'The 8085 microprocessor has 256 input and output ports.'
    },
    {
        category: 'Processors',
        type: 'concept',
        difficulty: 'easy',
        question: 'The Intel 8086 was a more advanced microprocessor than the 8085 because it featured a:',
        options: ['4-bit chip', '8-bit chip', '16-bit chip', '32-bit chip'],
        answer: 2,
        explanation: 'The 8086 was more advanced than the 8085 as it featured a 16-bit microprocessor chip.'
    },
    {
        category: 'Processors',
        type: 'concept',
        difficulty: 'medium',
        question: 'What is the total memory size capacity of the 8086 microprocessor architecture?',
        options: ['64 KB', '256 KB', '512 KB', '1 MB KB'],
        answer: 3,
        explanation: 'The total memory size of the 8086 microprocessor is 1 MB.'
    },
    {
        category: 'Interfacing & Buses',
        type: 'concept',
        difficulty: 'easy',
        question: 'The keyboard and displays are typically connected to the microprocessor via what type of interfacing?',
        options: ['Memory interfacing', 'Storage interfacing', 'Network interfacing', 'I/O interfacing'],
        answer: 3,
        explanation: 'Keyboard and displays are interfaced with the microprocessor through I/O interfacing.'
    },
    {
        category: 'Interfacing & Buses',
        type: 'concept',
        difficulty: 'medium',
        question: 'What components are typically used in I/O interfacing to connect keyboards and displays to the microprocessor?',
        options: ['Resistors and capacitors', 'Latches and buffers', 'Diodes and transistors', 'Oscillators and timers'],
        answer: 1,
        explanation: 'Latches and buffers are used in I/O interfacing for connecting keyboards and displays.'
    },
    {
        category: 'Architecture',
        type: 'concept',
        difficulty: 'hard',
        question: 'Which microprocessor type copies the hardware on the processor to perform numerous tasks at a time, using several operational units?',
        options: ['Superscalar Processors', 'RISC', 'DSP', 'ASIC'],
        answer: 0,
        explanation: 'Superscalar Processors copy the hardware on the microprocessor to perform numerous tasks at a time using several operational units.'
    },
    {
        category: 'Processors',
        type: 'concept',
        difficulty: 'hard',
        question: 'Microprocessors like the 8085 required specific voltages to function. Which of the following was NOT one of the voltages required by the 8085 model?',
        options: ['+5 volts', '-5 volts', '+12 volts', '-12 volts'],
        answer: 3,
        explanation: 'The 8085 required +5 voltages, -5 voltages, and +12 voltages. It did not require -12 volts.'
    },
    {
        category: 'History',
        type: 'concept',
        difficulty: 'easy',
        question: 'Which device, launched in 2008, was described as a small and light-weighted gadget for carrying out uncomplicated jobs and enjoying media on the move?',
        options: ['Ultrabook', 'Netbook', 'Tablet', 'Smartphone'],
        answer: 1,
        explanation: 'Netbooks were launched in 2008 as small and light-weighted gadgets for uncomplicated jobs and media.'
    },
    {
        category: 'Fundamentals',
        type: 'concept',
        difficulty: 'easy',
        question: 'A digital computer with one microprocessor which acts as a CPU is called a:',
        options: ['Minicomputer', 'Mainframe', 'Microcomputer', 'Supercomputer'],
        answer: 2,
        explanation: 'A digital computer with one microprocessor acting as a CPU is called a microcomputer.'
    },
    {
        category: 'Fundamentals',
        type: 'concept',
        difficulty: 'easy',
        question: 'The Central Processing Unit (CPU) of a microcomputer is built on a single:',
        options: ['Printed Circuit Board (PCB)', 'Integrated Circuit (IC)', 'Magnetic Disk', 'Vacuum Tube'],
        answer: 1,
        explanation: 'The CPU built on a single Integrated Circuit (IC) is called a microprocessor.'
    },
    {
        category: 'Fundamentals',
        type: 'concept',
        difficulty: 'medium',
        question: 'Which of the following is NOT one of the three main parts of a microprocessor?',
        options: ['ALU', 'Control Unit', 'Register Array', 'Hard Drive'],
        answer: 3,
        explanation: 'A microprocessor consists of an ALU, control unit, and register array.'
    },
    {
        category: 'Fundamentals',
        type: 'concept',
        difficulty: 'easy',
        question: 'What is the function of the ALU within a microprocessor?',
        options: ['To control the flow of data', 'To store temporary instructions', 'To perform arithmetic and logical operations', 'To interface with the keyboard'],
        answer: 2,
        explanation: 'The ALU (Arithmetic Logic Unit) performs arithmetic and logical operations on the data.'
    },
    {
        category: 'Fundamentals',
        type: 'concept',
        difficulty: 'easy',
        question: 'Which part of the microprocessor controls the instructions and flow of data within the computer?',
        options: ['Control Unit', 'ALU', 'Register Array', 'Data Bus'],
        answer: 0,
        explanation: 'The Control unit controls the instructions and flow of data within the computer.'
    },
    {
        category: 'History',
        type: 'concept',
        difficulty: 'medium',
        question: 'The first generation of microprocessors, introduced in 1971-1972, were characterized by what architecture?',
        options: ['4-bit', '8-bit', '16-bit', '32-bit'],
        answer: 0,
        explanation: 'The first generation microprocessors, like the Intel 4004, were 4-bit processors.'
    },
    {
        category: 'History',
        type: 'concept',
        difficulty: 'easy',
        question: 'What was the name of the first 4-bit microprocessor introduced by Intel in 1971?',
        options: ['Intel 4004', 'Intel 8008', 'Intel 8085', 'Intel 8086'],
        answer: 0,
        explanation: 'The Intel 4004 was introduced in 1971 and was a 4-bit processor.'
    },
    {
        category: 'History',
        type: 'concept',
        difficulty: 'medium',
        question: 'The second generation microprocessors, like the Intel 8008 and 8088, were:',
        options: ['4-bit microprocessors', '8-bit microprocessors', '16-bit microprocessors', '32-bit microprocessors'],
        answer: 1,
        explanation: 'The second generation microprocessors introduced in 1973 were 8-bit processors.'
    },
    {
        category: 'History',
        type: 'concept',
        difficulty: 'medium',
        question: 'The third generation microprocessors, introduced in 1978, featured a performance like minicomputers. They were:',
        options: ['8-bit', '16-bit', '32-bit', '64-bit'],
        answer: 1,
        explanation: 'The third generation microprocessors, represented by Intel 8086, were 16-bit processors.'
    },
    {
        category: 'History',
        type: 'concept',
        difficulty: 'medium',
        question: 'Which Intel processor is the most popular example of a fourth generation (32-bit) microprocessor?',
        options: ['Intel 8086', 'Intel 80286', 'Intel 80386', 'Pentium'],
        answer: 2,
        explanation: 'Several companies introduced 32-bit processors, but the most popular one is the Intel 80386.'
    },
    {
        category: 'History',
        type: 'concept',
        difficulty: 'medium',
        question: 'The fifth generation of microprocessors (64-bit) began in what year, introducing processors like the Pentium CPU?',
        options: ['1989', '1993', '1995', '2001'],
        answer: 2,
        explanation: 'From 1995 to now we are in the fifth generation, starting with the Pentium processor.'
    },
    {
        category: 'Specifications',
        type: 'concept',
        difficulty: 'hard',
        question: 'What was the clock speed of the Intel 4004, the very first microprocessor?',
        options: ['750 KHz', '3-6 MHz', '5-8 MHz', '60-200 MHz'],
        answer: 0,
        explanation: 'The Intel 4004 had a clock speed of 750 KHz.'
    },
    {
        category: 'Specifications',
        type: 'concept',
        difficulty: 'medium',
        question: 'In microprocessor terminology, what does the acronym "PGA" stand for?',
        options: ['Programmable Graphic Array', 'Pin Grid Array', 'Parallel General Architecture', 'Processor Generation Analyzer'],
        answer: 1,
        explanation: 'PGA stands for Pin Grid Array.'
    },
    {
        category: 'Specifications',
        type: 'concept',
        difficulty: 'hard',
        question: 'What does the acronym "SIMD" stand for?',
        options: ['Single Instruction Multiple Data', 'Standard Internal Memory Device', 'Synchronous Integrated Microprocessor Design', 'System Instruction Memory Drive'],
        answer: 0,
        explanation: 'SIMD stands for Single Instruction Multiple Data.'
    },
    {
        category: 'Fundamentals',
        type: 'concept',
        difficulty: 'medium',
        question: 'The group of commands that the microprocessor can understand, acting as an interface between hardware and software, is called the:',
        options: ['Bus System', 'Instruction Set', 'Command Prompt', 'Data Type'],
        answer: 1,
        explanation: 'The group of commands the microprocessor can understand is called the Instruction Set.'
    },
    {
        category: 'Interfacing & Buses',
        type: 'concept',
        difficulty: 'easy',
        question: 'What is the set of conductors intended to transmit data, address, or control information to different elements in a microprocessor?',
        options: ['Bus', 'Register', 'Port', 'Cable'],
        answer: 0,
        explanation: 'A bus is a set of conductors intended to transmit data, address, or control information.'
    },
    {
        category: 'Interfacing & Buses',
        type: 'concept',
        difficulty: 'medium',
        question: 'Which of the following is NOT one of the three types of buses found in a microprocessor?',
        options: ['Data bus', 'Address bus', 'Control bus', 'Logic bus'],
        answer: 3,
        explanation: 'A microprocessor typically has three types of buses: data bus, address bus, and control bus.'
    },
    {
        category: 'Specifications',
        type: 'concept',
        difficulty: 'medium',
        question: 'What does IPC stand for in processor terminology?',
        options: ['Internal Processing Core', 'Instructions Per Cycle', 'Integrated Protocol Controller', 'Input Processing Circuit'],
        answer: 1,
        explanation: 'IPC stands for Instructions Per Cycle, measuring how many instructions a CPU can execute in a single clock.'
    },
    {
        category: 'Specifications',
        type: 'concept',
        difficulty: 'medium',
        question: 'The number of bits processed in a single instruction is called:',
        options: ['Word Length', 'Bus Width', 'Bandwidth', 'Clock Speed'],
        answer: 2,
        explanation: 'The number of bits processed in a single instruction is called Bandwidth.'
    },
    {
        category: 'Specifications',
        type: 'concept',
        difficulty: 'easy',
        question: 'The number of bits the processor can process at a time is called the:',
        options: ['Word Length', 'Instruction Set', 'Bandwidth', 'Clock Rate'],
        answer: 0,
        explanation: 'Word Length is the number of bits the processor can process at a time.'
    },
    {
        category: 'Architecture',
        type: 'concept',
        difficulty: 'easy',
        question: 'What is the correct sequence of steps a microprocessor follows to execute an instruction?',
        options: ['Decode, Fetch, Execute', 'Execute, Fetch, Decode', 'Fetch, Execute, Decode', 'Fetch, Decode, Execute'],
        answer: 3,
        explanation: 'The microprocessor follows the sequence: Fetch, Decode, and then Execute.'
    },
    {
        category: 'Architecture',
        type: 'concept',
        difficulty: 'medium',
        question: 'During instruction execution, where does the microprocessor temporarily store data while the ALU performs computing functions?',
        options: ['Hard Drive', 'Register', 'ROM', 'Output Port'],
        answer: 1,
        explanation: 'Between processes, the register stores the temporary data and the ALU performs the computing functions.'
    },
    {
        category: 'Features',
        type: 'concept',
        difficulty: 'easy',
        question: 'Which feature of a microprocessor is attributed to integrated circuit technology, effectively reducing the overall price of computer systems?',
        options: ['High Speed', 'Small Size', 'Low Cost', 'Versatility'],
        answer: 2,
        explanation: 'Due to integrated circuit technology microprocessors are available at very low cost.'
    },
    {
        category: 'Features',
        type: 'concept',
        difficulty: 'easy',
        question: 'Microprocessors have a very low failure rate because they use semiconductor technology. This gives them which feature?',
        options: ['Portable', 'Reliable', 'Versatile', 'Low Power Consumption'],
        answer: 1,
        explanation: 'Since microprocessors use semiconductor technology, the failure rate is very less, making them reliable.'
    },
    {
        category: 'Features',
        type: 'concept',
        difficulty: 'easy',
        question: 'The ability of the same microprocessor chip to be used for several different applications is referred to as its:',
        options: ['Portability', 'Versatility', 'Reliability', 'Scalability'],
        answer: 1,
        explanation: 'The same chip can be used for several applications, therefore, microprocessors are versatile.'
    }
];
