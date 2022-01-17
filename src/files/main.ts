import * as types from './types.d.ts';
import { join } from '../deps.ts';

export const Directories: types.Directories = {
  /**
   * @description Returns the current dir
   */
  currentDir: () => Deno.cwd(),
  /**
   * @description Return the home directory
   */
  homeDir: () => Deno.env.get('HOME') ?? Deno.env.get('USERPROFILE'),
  /**
   * @description Return the temp directory
   */
  tempDir: () => Deno.env.get('TEMP') ?? Deno.env.get('TEMPDIR'),
  /**
   * @description The cache dir
   * @param {string} app - App name for return the dir
   * @returns {string} The cache dir value
   */
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
  /**
   * @description The config dir
   * @param {string} app - App name for return the dir
   * @returns {string} Config dir value
   */
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
  /**
   * @description Check if file or folder exists
   * @param {string} file - The file or folder path to check if exists
   * @returns {boolean} True if exists false if not
   */
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
  /**
   * @description Write a json file
   * @param {string} path - Path and name to write the json file
   * @param {Record<string,unknown>} data - Data to write in the json file
   * @returns {boolean} True if is success and false
   */
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
