
So this was good experience. here's recap :
1. i install tanstack start by installing per libraries
2. i install and integrate tailwindcss
3. i integrate hono to tanstack via apiFileRoute


when integration hono :
1. exported route file must have exactly named as "Route" otherwise it won't acknowledge it as route import

when using fetch and RPC :
1. Rookie mistake, you should do .json method to retrieve the body of the response. and always use await since .json method is async by nature.
2. 
