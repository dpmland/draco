<img src="https://avatars.githubusercontent.com/u/97813425" align="right" alt="Dpm Logo" width="100">

## Dpm - Draco :sauropod:

[![Discord](https://img.shields.io/discord/932381618851692565?label=Discord&logo=discord&logoColor=white)](https://discord.gg/Um27YPJKud)
[![Twitter](https://img.shields.io/twitter/follow/dpm_land?label=Dpm%20Land&style=social)](https://twitter.com/intent/follow?screen_name=dpm_land)
[![GitHub license](https://img.shields.io/github/license/dpmland/cli?label=License)](./LICENSE)
![Github Workflow](https://img.shields.io/github/workflow/status/dpmland/cli/CI)

Is a collection of utils for the system, directories, deno and files
informations :p

## Usage

> Draco Info -> Show the os and deno information

```ts
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
```

> Draco Files -> Show the file utils and directory utils.

```ts
import { dracoFiles } from 'https://deno.land/x/draco@0.1.2/mod.ts';

// Show the current directory
console.log(dracoFiles.currentDir());
// Show the cache dir for a application
console.log(dracoFiles.cacheDir('app_example'));
// Show the config dir for a application
console.log(dracoFiles.configDir('app_example'));
// Show the temp directory on the current os
console.log(dracoFiles.tempDir());
// Show the home directory
console.log(dracoFiles.homeDir());

// Check if file or folder exists and return true if exists and false if not
console.log(dracoFiles.exists('./examples/dracoInfo.ts'));
// Write a json file from a object
console.log(
  dracoFiles.writeJson('./examples/json_example.json', { data: 'hello' }),
);
```

---

Made with :heart: in :earth_americas:
