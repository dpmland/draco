import { Directories, Files } from 'files/main.ts';
import { DenoInfo, SystemInfo } from 'platform/info.ts';

const dracoFiles = {
  ...Directories,
  ...Files,
};

const dracoInfo = {
  ...SystemInfo,
  ...DenoInfo,
};

export default { dracoInfo, dracoFiles };
