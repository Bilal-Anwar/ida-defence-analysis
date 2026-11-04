$ErrorActionPreference = 'Stop'
Set-Location $PSScriptRoot
$nodeCommand = Get-Command node -ErrorAction SilentlyContinue
if (-not $nodeCommand) {
    throw 'Node.js is required. Install Node.js, then run this script again.'
}
if (-not (Test-Path 'node_modules/vite/bin/vite.js')) {
    throw 'Dependencies are missing. Run npm install first.'
}
& $nodeCommand.Source 'node_modules/vite/bin/vite.js' --host 127.0.0.1 --port 3000 --strictPort
