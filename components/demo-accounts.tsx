'use client';

import { Account } from '@/lib/interfaces';
import { setAuthToken } from '@/actions/auth';

interface DemoAccountsProps {
  accounts: Account[];
}

export default function DemoAccounts({ accounts }: DemoAccountsProps) {
  return (
    <ul>
      {accounts.map((account) => (
        <li key={account.id}>
          <button type="button" onClick={() => setAuthToken(account.token)}>
            {account.info.name}
          </button>
        </li>
      ))}
    </ul>
  );
}

