# Funktion zum Starten von Google Chrome mit einer Website
function Start-ChromeWithWebsite {
    # Specify the path to the Chrome executable
    $chromePath = "C:\Program Files\Google\Chrome\Application\chrome.exe"

    # Specify the URL of the website you want to open
    $websiteUrl = "http://localhost:3000/"

    # Start Google Chrome with the specified website
    Start-Process -FilePath $chromePath -ArgumentList $websiteUrl
}

# Rufen Sie die Funktion auf, um Chrome zu starten
Start-ChromeWithWebsite


npm run dev