
FROM oven/bun:1.1.4 as builder

WORKDIR /app
COPY . .
RUN bun install
RUN bun run build


FROM nginx:1.25-alpine
COPY --from=builder /app/dist/spice-market /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
