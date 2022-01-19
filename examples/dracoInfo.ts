import { dracoInfo } from 'https://deno.land/x/draco@0.1.2/mod.ts';

// Prints the os in was running
console.log(dracoInfo.platform());
// Show the architecture was running
console.log(dracoInfo.arch());
// Show the hostname
console.log(dracoInfo.hostname());
// Show the total memory on the machine
console.log(dracoInfo.memoryTotal());
// Show the memory free on the machine
console.log(dracoInfo.memoryFree());
// Show the memory avaliable
console.log(dracoInfo.memoryAvaliable());

// Shows the deno version running now
console.log(dracoInfo.DenoVersion);
// Shows the deno typescript version
console.log(dracoInfo.DenoTypescript);
// Shows the deno v8 version
console.log(dracoInfo.DenoV8);
