import * as types from 'platform/types.d.ts';

export const SystemInfo: types.SystemInfo = {
  platform: () => Deno.build.os,
  arch: () => Deno.build.arch,
  hostname: () => Deno.hostname(),
  osVersion: () => Deno.osRelease(),
  memoryFree: () => Deno.systemMemoryInfo().free.toString(),
  memoryTotal: () => Deno.systemMemoryInfo().total.toString(),
  memoryAvaliable: () => Deno.systemMemoryInfo().available.toString(),
};

export const DenoInfo: types.DenoInfo = {
  DenoVersion: Deno.version.deno,
  DenoTypescript: Deno.version.typescript,
  DenoV8: Deno.version.v8,
};
