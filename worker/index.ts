import { Pull } from 'zeromq';
import { execute } from "./route"
import { loadEnvConfig } from '@next/env'

loadEnvConfig('./');

const { ZMQ_BIND_ADDRESS } = process.env;
let shouldTerminate = false;

async function run() {
  const sock = new Pull();
  sock.connect(ZMQ_BIND_ADDRESS);

  console.log(`Consumer connected to ${ZMQ_BIND_ADDRESS}`);

  process.on('SIGTERM', async () => {
    console.log('Received SIGTERM, shutting down...');
    shouldTerminate = true;
    sock.close();
    console.log('Consumer closed');
  });

  for await (const [msg] of sock) {
    if (shouldTerminate) break;
    await execute(msg);
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
