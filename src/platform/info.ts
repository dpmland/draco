import * as types from 'platform/types.d.ts';

export const SystemInfo: types.SystemInfo = {
  /**
   * The platform was running
   */
  platform: () => Deno.build.os,
  /**
   * The architecture was running
   */
  arch: () => Deno.build.arch,
  /**
   * The hostname
   */
  hostname: () => Deno.hostname(),
  /**
   * The os version
   */
  osVersion: () => Deno.osRelease(),
  /**
   * The memory free actually
   */
  memoryFree: () => Deno.systemMemoryInfo().free.toString(),
  /**
   * The total memory
   */
  memoryTotal: () => Deno.systemMemoryInfo().total.toString(),
  /**
   * The memory available now
   */
  memoryAvaliable: () => Deno.systemMemoryInfo().available.toString(),
};

export const DenoInfo: types.DenoInfo = {
  /**
   * The deno version running now
   */
  DenoVersion: Deno.version.deno,
  /**
   * The typescript version running now
   */
  DenoTypescript: Deno.version.typescript,
  /**
   * The V8 version running now
   */
  DenoV8: Deno.version.v8,
};
