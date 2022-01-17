export interface SystemInfo {
  /**
   * Returns the platform was is running
   */
  platform(): 'darwin' | 'linux' | 'windows';
  /**
   * Returns the architecture was running
   */
  arch(): string;
  /**
   * Return the hostname of the machine
   */
  hostname(): string;
  /**
   * Return the os version
   */
  osVersion(): string;
  /**
   * The total memory information
   */
  memoryTotal(): string;
  /**
   * The memory free information
   */
  memoryFree(): string;
  /**
   * The memory avaliable
   */
  memoryAvaliable(): string;
}

export interface DenoInfo {
  /**
   * Return the typescript version of deno
   */
  DenoTypescript: string;
  /**
   * Return the deno verion
   */
  DenoVersion: string;
  /**
   * Return the v8 version
   */
  DenoV8: string;
}
