export async function execute(msg: Record<string, any>) {
  console.log('Received', msg);

  // Simulate processing time
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log('Processed', msg);
}
