param(
    [Parameter(Mandatory=$true)][string]$pg
)
node_modules/.bin/schemats generate --noHeader -c "$pg`?ssl=true" -o src/interfaces/osm.ts