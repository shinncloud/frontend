## Development

Install packages:

```
dri -w /app -v $(pwd):/app node:10.16.3 npm i
```

Running locally against application Docker Compose:

```
dri -w /app -v $(pwd):/app -p 4200:4200 --network application_default node:10.16.3 npm run -- ng serve --host=0.0.0.0 --disable-host-check
```
