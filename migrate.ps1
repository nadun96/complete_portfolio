# Migration Script for Portfolio Restructuring
# Run this script to complete the migration to the new structure

Write-Host "Starting Portfolio Restructuring Migration..." -ForegroundColor Green

# Define base path
$basePath = "d:\Current\Portfolio\complete_portfolio"

# Step 1: Move CSS file (if not already moved)
Write-Host ""
Write-Host "Step 1: Moving CSS files..." -ForegroundColor Yellow
if (Test-Path "$basePath\styles.css") {
    Copy-Item "$basePath\styles.css" -Destination "$basePath\css\styles.css" -Force
    Write-Host "✓ CSS file copied to css/styles.css" -ForegroundColor Green
} else {
    Write-Host "✓ CSS file already moved" -ForegroundColor Green
}

# Step 2: Move image files (if not already moved)
Write-Host ""
Write-Host "Step 2: Moving image files..." -ForegroundColor Yellow
if (Test-Path "$basePath\profileimage.jpg") {
    Copy-Item "$basePath\profileimage.jpg" -Destination "$basePath\assets\images\profileimage.jpg" -Force
    Write-Host "✓ Profile image copied to assets/images/" -ForegroundColor Green
} else {
    Write-Host "✓ Profile image already moved" -ForegroundColor Green
}

# Step 3: Verify new structure
Write-Host ""
Write-Host "Step 3: Verifying new file structure..." -ForegroundColor Yellow
$requiredFiles = @(
    "js\app.js",
    "js\data\projectsData.js",
    "js\data\skillsData.js",
    "js\data\educationData.js",
    "js\data\experienceData.js",
    "js\data\certificationsData.js",
    "js\modules\SearchManager.js",
    "js\modules\ProjectsRenderer.js",
    "js\modules\SkillsRenderer.js",
    "js\modules\EducationRenderer.js",
    "js\modules\ExperienceRenderer.js",
    "js\modules\CertificationsRenderer.js",
    "css\styles.css",
    "assets\images\profileimage.jpg"
)

$allPresent = $true
foreach ($file in $requiredFiles) {
    $fullPath = Join-Path $basePath $file
    if (Test-Path $fullPath) {
        Write-Host "  ✓ $file" -ForegroundColor Green
    } else {
        Write-Host "  ✗ $file (MISSING)" -ForegroundColor Red
        $allPresent = $false
    }
}

# Step 4: Create backup of old files
Write-Host ""
Write-Host "Step 4: Creating backup of old files..." -ForegroundColor Yellow
$backupPath = "$basePath\backup_old_structure"
if (!(Test-Path $backupPath)) {
    New-Item -ItemType Directory -Path $backupPath | Out-Null
}

$oldFiles = @(
    "data_manager.js",
    "dataLoader.js",
    "ui_handler.js",
    "uiInteractions.js",
    "script.js"
)

foreach ($file in $oldFiles) {
    $fullPath = Join-Path $basePath $file
    if (Test-Path $fullPath) {
        Copy-Item $fullPath -Destination (Join-Path $backupPath $file) -Force
        Write-Host "  ✓ Backed up $file" -ForegroundColor Green
    }
}

# Step 5: Summary
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Migration Summary" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan

if ($allPresent) {
    Write-Host "✓ All required files are in place!" -ForegroundColor Green
    Write-Host ""
    Write-Host "You can now:" -ForegroundColor Yellow
    Write-Host "  1. Test the website with the new structure" -ForegroundColor White
    Write-Host "  2. If everything works, delete the old files:" -ForegroundColor White
    Write-Host "     - data_manager.js" -ForegroundColor Gray
    Write-Host "     - dataLoader.js" -ForegroundColor Gray
    Write-Host "     - ui_handler.js" -ForegroundColor Gray
    Write-Host "     - uiInteractions.js" -ForegroundColor Gray
    Write-Host "     - script.js" -ForegroundColor Gray
    Write-Host "     - styles.css (root directory)" -ForegroundColor Gray
    Write-Host "     - profileimage.jpg (root directory)" -ForegroundColor Gray
    Write-Host ""
    Write-Host "  3. Backups are stored in: backup_old_structure/" -ForegroundColor White
} else {
    Write-Host "✗ Some files are missing. Please check the structure." -ForegroundColor Red
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
