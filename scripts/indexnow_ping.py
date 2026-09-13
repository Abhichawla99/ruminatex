#!/usr/bin/env python3
"""IndexNow ping for www.ruminatex.com — pushes URLs to Bing/Yandex instantly.
ChatGPT search reads Bing's index, so this is the fastest path into ChatGPT answers.
Usage: python3 indexnow_ping.py <url> [<url> ...]   (or --all for the sitemap)
"""
import sys, json, urllib.request

KEY = "e6JwP9mQ4xK2rTv8"
KEY_LOCATION = "https://www.ruminatex.com/e6JwP9mQ4xK2rTv8.txt"
ENDPOINT = "https://api.indexnow.org/indexnow"

def ping(urls):
    payload = {
        "host": "www.ruminatex.com",
        "key": KEY,
        "keyLocation": KEY_LOCATION,
        "urlList": urls,
    }
    data = json.dumps(payload).encode()
    req = urllib.request.Request(ENDPOINT, data=data, headers={"Content-Type": "application/json; charset=utf-8"})
    try:
        with urllib.request.urlopen(req, timeout=20) as r:
            print(f"HTTP {r.status} for {len(urls)} URL(s)")
            return r.status
    except Exception as e:
        print(f"ERROR: {e}")
        return None

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print(__doc__)
        sys.exit(1)
    if sys.argv[1] == "--all":
        import re, urllib.request as u
        xml = u.urlopen("https://www.ruminatex.com/sitemap.xml", timeout=30).read().decode()
        urls = re.findall(r"<loc>(.*?)</loc>", xml)
        print(f"Sitemap has {len(urls)} URLs; pinging in batches of 100")
        for i in range(0, len(urls), 100):
            ping(urls[i:i+100])
    else:
        ping(sys.argv[1:])