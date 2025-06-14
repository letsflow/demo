import DemoAccounts from '@/components/demo-accounts';
import { getDemoAccounts } from '@/actions/letsflow';

export default async function Home() {
  const accounts = await getDemoAccounts();
  return (
    <main>
      <DemoAccounts accounts={accounts} />
    </main>
  );
}
