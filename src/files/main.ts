import * as types from 'files/types.d.ts';
import { join } from '@/deps.ts';

export const Directories: types.Directories = {
  currentDir: () => Deno.cwd(),
  homeDir: () => Deno.env.get('HOME') ?? Deno.env.get('USERPROFILE'),
  tempDir: () => Deno.env.get('TEMP') ?? Deno.env.get('TEMPDIR'),
  cacheDir: (app: string): string => {
    switch (Deno.build.os) {
      case 'linux':
        return join(Deno.env.get('HOME')!, '.cache', app);
      case 'darwin':
        return join(Deno.env.get('HOME')!, 'Library', 'Caches', app);
      case 'windows':
        return join(Deno.env.get('USERPROFILE')!, 'AppData', 'Local', app);
    }
  },
  configDir: (app: string): string => {
    switch (Deno.build.os) {
      case 'linux':
        return join(Deno.env.get('HOME')!, '.config', app);
      case 'darwin':
        return join(
          Deno.env.get('HOME')!,
          'Library',
          'Application Support',
          app,
        );
      case 'windows':
        return join(Deno.env.get('USERPROFILE')!, 'AppData', 'Roaming', app);
    }
  },
};

export const Files: types.Files = {
  exists: (file: string): boolean => {
    try {
      Deno.lstatSync(file);
      return true;
    } catch (err) {
      if (err instanceof Deno.errors.NotFound) {
        return false;
      }
      throw err;
    }
  },
  writeJson: (path: string, data: Record<string, unknown>): boolean => {
    try {
      Deno.writeTextFileSync(path, JSON.stringify(data));
      return true;
    } catch (e) {
      if (e instanceof Deno.errors.NotFound) {
        return false;
      }
      throw e;
    }
  },
};
