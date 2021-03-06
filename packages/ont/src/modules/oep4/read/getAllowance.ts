import { sendMessage } from '../../../messaging';
import { Oep4Command } from '../constants';

interface AllowanceInput {
  network: string;
  scriptHash: string;
  owner: string;
  spender: string;
}

export function getAllowance(data: AllowanceInput): Promise<string> {
  return sendMessage({
    command: Oep4Command.getAllowance,
    data,
  });
}
