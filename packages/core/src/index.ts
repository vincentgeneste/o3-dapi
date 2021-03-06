import { Plugin } from './types';

import {
  sendMessage,
  addEventsListener,
} from './messages';

const o3dapiCore: any = {};

o3dapiCore.initPlugins = (plugins: Plugin[]) => {
  plugins.forEach(plugin => {
    o3dapiCore[plugin.blockchain] = new plugin(sendMessage, addEventsListener);
  });
};

o3dapiCore.isAvailable = Boolean((window as any)._o3dapi.isAvailable);

o3dapiCore.openO3 = () => window.open('https://deeplink.o3.network/');

export default o3dapiCore;
