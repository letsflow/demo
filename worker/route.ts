import { Message } from '@letsflow/core/process';

export async function execute(msg: Message) {
  console.log('Received', msg.toString());

  // Simulate processing time
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log('Processed', msg.toString());
}
