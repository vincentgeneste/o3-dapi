import { AddEventsListenerArgs, SendMessageArgs } from './types';
export declare function addEventsListener({ blockchain, callback }: AddEventsListenerArgs): void;
export declare function sendMessage({ blockchain, version, command, data, network, timeout, }: SendMessageArgs): Promise<any>;
//# sourceMappingURL=messages.d.ts.map