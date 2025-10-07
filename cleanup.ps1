# Cleanup Script - Remove Old Unnecessary Files
# This script backs up and removes old files after restructuring

Write-Host "Portfolio Cleanup Script" -ForegroundColor Cyan
Write-Host "========================" -ForegroundColor Cyan
Write-Host ""

$basePath = "D:\Current\Portfolio\complete_portfolio"
$backupPath = "$basePath\backup_old_structure"

# Create backup directory if it doesn't exist
if (!(Test-Path $backupPath)) {
    New-Item -ItemType Directory -Path $backupPath | Out-Null
    Write-Host "Created backup directory: backup_old_structure/" -ForegroundColor Green
}

# Files to remove (old structure)
$filesToRemove = @(
    "data_manager.js",
    "dataLoader.js",
    "ui_handler.js",
    "uiInteractions.js",
    "script.js",
    "styles.css",           # Root styles.css (we have it in css/ now)
    "profileimage.jpg"      # Root image (we have it in assets/images/ now)
)

Write-Host "Step 1: Backing up old files..." -ForegroundColor Yellow
Write-Host ""

$backedUpCount = 0
foreach ($file in $filesToRemove) {
    $fullPath = Join-Path $basePath $file
    if (Test-Path $fullPath) {
        $backupFilePath = Join-Path $backupPath $file
        Copy-Item $fullPath -Destination $backupFilePath -Force
        Write-Host "  Backed up: $file" -ForegroundColor Green
        $backedUpCount++
    } else {
        Write-Host "  Skipped (not found): $file" -ForegroundColor Gray
    }
}

Write-Host ""
Write-Host "Step 2: Removing old files from root..." -ForegroundColor Yellow
Write-Host ""

$removedCount = 0
foreach ($file in $filesToRemove) {
    $fullPath = Join-Path $basePath $file
    if (Test-Path $fullPath) {
        Remove-Item $fullPath -Force
        Write-Host "  Removed: $file" -ForegroundColor Red
        $removedCount++
    }
}

# Also remove old demo HTML files if they exist
$demoFiles = @(
    "project-demo-dynamic-images.html",
    "project-demo-themed.html"
)

Write-Host ""
Write-Host "Step 3: Removing demo files (if any)..." -ForegroundColor Yellow
Write-Host ""

foreach ($file in $demoFiles) {
    $fullPath = Join-Path $basePath $file
    if (Test-Path $fullPath) {
        Copy-Item $fullPath -Destination (Join-Path $backupPath $file) -Force
        Remove-Item $fullPath -Force
        Write-Host "  Removed: $file" -ForegroundColor Red
        $removedCount++
    } else {
        Write-Host "  Not found: $file" -ForegroundColor Gray
    }
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Cleanup Summary" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Backed up files: $backedUpCount" -ForegroundColor Green
Write-Host "Removed files: $removedCount" -ForegroundColor Red
Write-Host ""
Write-Host "Backup location: backup_old_structure/" -ForegroundColor Yellow
Write-Host ""
Write-Host "Current structure:" -ForegroundColor Cyan
Write-Host "  index.html" -ForegroundColor White
Write-Host "  README.md" -ForegroundColor White
Write-Host "  assets/images/" -ForegroundColor White
Write-Host "  css/styles.css" -ForegroundColor White
Write-Host "  js/app.js" -ForegroundColor White
Write-Host "  js/data/" -ForegroundColor White
Write-Host "  js/modules/" -ForegroundColor White
Write-Host ""
Write-Host "Cleanup complete! Your portfolio now has a clean structure." -ForegroundColor Green
Write-Host ""
