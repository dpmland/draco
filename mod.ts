import { Directories, Files } from 'files/main.ts';
import { DenoInfo, SystemInfo } from 'platform/info.ts';

/**
 * @description The draco modules for files and directories operations
 */
export const dracoFiles = {
  ...Directories,
  ...Files,
};

/**
 * @description The draco modules for get the info
 */
export const dracoInfo = {
  ...SystemInfo,
  ...DenoInfo,
};
