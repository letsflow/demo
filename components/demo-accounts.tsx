'use client';

import { DataView } from 'primereact/dataview';
import { Card } from 'primereact/card';
import { Account } from '@/lib/interfaces';
import { setAuthCookie } from '@/lib/auth';

interface Props {
  accounts: Account[];
}

export default function DemoAccounts({ accounts }: Props) {
  const itemTemplate = (account: Account) => (
    <div onClick={() => setAuthCookie(account.token)} style={{ cursor: 'pointer' }}>
      <Card title={account.info.name} subTitle={account.roles.join(', ')} />
    </div>
  );

  return (
    <DataView value={accounts} itemTemplate={itemTemplate} layout="list" />
  );
}
