export interface Directories {
  /**
   * Return the current directory
   */
  currentDir(): string;
  /**
   * Return the cache dir
   */
  cacheDir(app:string): string | undefined;
  /**
   * Return the config dir.
   */
  configDir(app: string): string  | undefined;
  /**
   * Return the temp dir.
   */
  tempDir(): string | undefined;
  /**
   * Return the home directory
   */
  homeDir(): string | undefined;
}

export interface Files {
  /**
   * Check if file or folder exists
   */
  exists(file: string): boolean;
  /**
   * Write a json file with a data and returns if success
   */
  writeJson(path: string, data: Record<string, unknown>): boolean;
}
