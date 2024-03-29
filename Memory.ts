import inquirer from 'inquirer';

async function main() {
    let ms: number;
    let mp: number[] = [];
    let i: number;
    let temp: number;
    let n: number = 0;
    let ch: string = 'y';

    const msResponse = await inquirer.prompt({
        type: 'input',
        name: 'ms',
        message: 'Enter the total memory available (in Bytes)-- '
    });
    ms = parseInt(msResponse.ms);

    temp = ms;
    while (ch === 'y') {
        const memoryResponse = await inquirer.prompt({
            type: 'input',
            name: 'memory',
            message: `Enter memory required for process ${n + 1} (in Bytes) -- `
        });
        mp.push(parseInt(memoryResponse.memory));

        if (mp[n] <= temp) {
            console.log(`\nMemory is allocated for Process ${n + 1}`);
            temp = temp - mp[n];
        } else {
            console.log("\nMemory is Full");
            break;
        }

        const continueResponse = await inquirer.prompt({
            type: 'input',
            name: 'continue',
            message: 'Do you want to continue(y/n) -- '
        });
        ch = continueResponse.continue.trim();
        n++;
    }

    console.log(`\n\nTotal Memory Available -- ${ms}`);
    console.log("\n\n\tPROCESS\t\t MEMORY ALLOCATED ");
    for (i = 0; i < n; i++)
        console.log(`\n \t${i + 1}\t\t${mp[i]}`);
    console.log(`\n\nTotal Memory Allocated is ${ms - temp}`);
    console.log(`Total External Fragmentation is ${temp}`);
}

main();
