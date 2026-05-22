$content = Get-Content 'C:\Users\hp\.gemini\antigravity\brain\3977bae4-7f6b-412d-bfb7-1c41fa3d861e\.system_generated\steps\37\content.md' -Raw

# Get the full footer CTA component (Uj)
$idx = $content.IndexOf('function Uj')
if($idx -ge 0) {
    Write-Output "=== Footer CTA Component Uj ==="
    $len = [Math]::Min(4000, $content.Length - $idx)
    Write-Output $content.Substring($idx, $len)
} else {
    Write-Output "Uj not found"
}
