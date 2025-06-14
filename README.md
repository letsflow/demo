# LetsFlow Demo

This is a simple demo showing a Next.js UI powered by the LetsFlow engine.

## Running the demo

First start the LetsFlow engine using Docker:

```bash
docker network create letsflow-net

docker run -d --name mongo --network letsflow-net mongo

docker run --rm \
  --network letsflow-net \
  -p 3000:3000 \
  -v $(pwd)/scenarios:/app/scenarios \
  -v $(pwd)/schemas:/app/schemas \
  -e DB=mongodb://mongo:27017/letsflow \
  letsflow/engine
```

Then install dependencies and run the app with Yarn:

```bash
yarn
yarn dev
```

Open <http://localhost:3000> in your browser to view the demo.
