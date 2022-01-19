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
// Write a json file from a object and return true if succes and false if not
console.log(
  dracoFiles.writeJson('./examples/json_example.json', { data: 'hello' }),
);
