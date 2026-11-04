$ErrorActionPreference = 'Stop'
Set-Location (Split-Path $PSScriptRoot)
$summaries = @{
  8861 = 'IDA reports on a two-seat Su-57 configuration seen in ground trials, exploring how a second crew member could support drone coordination and future air combat missions.'
  8837 = 'The US Air Force aims to connect its KC-135 tanker fleet within six years. IDA examines the communications upgrade planned for the long-serving aerial refuelling aircraft.'
  8797 = 'Baykar expects serial deliveries of its Kızılelma unmanned combat aircraft to begin before the end of 2026, according to an announcement covered by IDA at SAHA Expo.'
  8542 = 'HAVELSAN''s mission planning software is set to accompany the HÜRJET programme''s export to Spain. The report looks at the software''s role in planning and supporting air operations.'
  8273 = 'South Korea and Indonesia have reached a tentative understanding on a possible KF-21 prototype transfer. IDA reviews the proposed step in their joint fighter development partnership.'
  8833 = 'This opinion article examines Pakistan''s role in US–Iran negotiations and argues that the costs of continued conflict can create an opening for diplomacy even when trust remains limited.'
  8577 = 'An analysis of a potential US blockade considers enforcement options, regional escalation and the wider consequences of confrontation involving Iran, the United States and Israel.'
  8516 = 'The author considers how Pakistan''s diplomatic engagement could support a wider maritime security role, connecting crisis mediation with longer-term cooperation at sea.'
  8478 = 'This article proposes dialogue over Sir Creek using international maritime law and good-neighbourly cooperation, with an emphasis on confidence building between India and Pakistan.'
  8447 = 'An opinion piece explores opportunities for Pakistan–Malaysia maritime cooperation, linking trade routes, transit and security with lessons from Southeast Asian regional partnerships.'
  8727 = 'HAVELSAN and Türkiye''s defence authorities agreed an amendment covering BARKAN Version 3 at SAHA Expo 2026. IDA outlines the next configuration of the unmanned ground vehicle family.'
  8001 = 'A US Army contract worth $73.5 million covers Merkava tank power-pack kits supplied by Rolls-Royce Solutions America for Israel through a Foreign Military Sales arrangement.'
  7851 = 'DARPA''s RACER programme has completed its final operational tests. The report covers autonomous off-road vehicle demonstrations and the planned transition of the technology to military and commercial users.'
  7820 = 'Rheinmetall confirmed plans to start delivering Lynx KF41 infantry fighting vehicles to Ukraine in early 2026 under an agreement signed in December 2025.'
  7697 = 'Challenger 3 production will depend on successful performance trials, according to the report. IDA examines the UK''s decision to link manufacturing progress to test results.'
  9086 = 'STM''s work on Portugal''s logistics support ships reaches a new phase with construction of the second vessel. The report highlights the naval engineering partnership between Türkiye and Portugal.'
  9026 = 'IDA reports the arrival of the first Hangor-class submarine at Karachi Port, placing the delivery in the context of Pakistan Navy modernisation and defence cooperation with China.'
  8985 = 'STM launched RAJA LAUT, the second of three corvettes being built for the Royal Malaysian Navy. The launch follows the first vessel''s ceremony earlier in the programme.'
  8812 = 'DATUM AŞ presented an indigenous mini-submarine at SAHA Expo 2026. The report describes the university-linked underwater technology project and its initial dive testing.'
  8761 = 'HAVELSAN introduced ADVENT-AI at SAHA Expo 2026 with the Turkish Naval Forces'' ARMERKOM. The initiative builds on ADVENT combat management to support situational awareness and operational decisions.'
  7637 = 'ASELSAN announced a roughly $410 million Polish export agreement involving electronic warfare equipment for Leopard 2PLM1 tanks, alongside reconnaissance and simulation capabilities.'
  6317 = 'France''s Archange signals-intelligence aircraft completed its first flight in July 2025. IDA reviews the Falcon 8X-based platform and its significance for airborne intelligence collection.'
  5772 = 'IDA previews ASELSAN''s KORAL 200 and EJDERHA systems at IDEF 2025, examining electronic warfare and the growing importance of the electromagnetic spectrum in military operations.'
  5370 = 'Retired senior US Air Force leaders argue for continued investment in E-7 and F-35 capabilities. The article discusses their concerns about balancing established platforms with emerging technology.'
  5067 = 'ASELSAN reported a successful test of its YILDIRIM 100 directed infrared countermeasure system. The article considers laser-based protection against infrared-guided missile threats.'
}
$mediaPosts = Get-Content '.tools/ida-media-posts.json' -Raw | ConvertFrom-Json
$articles = foreach ($category in @('AIR','LAND','NAVAL','TECHNOLOGY','GEOPOLITICS')) {
  $posts = Get-Content ".tools/ida-posts-$category.json" -Raw | ConvertFrom-Json
  foreach ($post in $posts) {
    $metadata = $mediaPosts | Where-Object id -EQ $post.id | Select-Object -First 1
    $imageUrl = $metadata._embedded.'wp:featuredmedia'.source_url
    $extension = [IO.Path]::GetExtension(([Uri]$imageUrl).AbsolutePath)
    $imagePath = "public/assets/news/ida-$($post.id)$extension"
    Invoke-WebRequest -Uri $imageUrl -OutFile $imagePath
    $summary = $summaries[[int]$post.id]
    if (-not $summary) { throw "Missing summary for $($post.id)" }
    [ordered]@{
      id = "ida-$($post.id)"
      title = [System.Net.WebUtility]::HtmlDecode($post.title.rendered)
      slug = [Uri]::UnescapeDataString($post.slug)
      category = $category
      date = ([datetime]$post.date).ToString('MMMM dd, yyyy', [Globalization.CultureInfo]::InvariantCulture).ToUpperInvariant()
      publishedAt = $post.date
      readTime = 'ARTICLE BRIEF'
      author = 'International Defence Analysis'
      location = 'defenceida.com'
      imageUrl = "/assets/news/ida-$($post.id)$extension"
      sourceUrl = $post.link
      excerpt = $summary
      content = [ordered]@{ summary = $summary; paragraphs = @() }
    }
  }
}
$json = ConvertTo-Json -InputObject @($articles) -Depth 8
Set-Content 'src/data/importedNews.ts' -Value ("import type { NewsArticle } from './news';`n`n// Public article metadata from defenceida.com; summaries paraphrased from the source.`nexport const IMPORTED_NEWS: NewsArticle[] = " + $json + ";`n") -Encoding utf8
Write-Output "Imported $($articles.Count) articles and downloaded their featured images."

