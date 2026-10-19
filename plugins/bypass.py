import sys
from curl_cffi import requests as cffi_requests

def send_link(email):
    session = cffi_requests.Session(impersonate="chrome120")
    headers = {
        "Accept": "*/*",
        "Content-Type": "application/json",
        "Origin": "https://am.kyzzz.xyz",
        "Referer": "https://am.kyzzz.xyz/am",
        "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Mobile Safari/537.36"
    }
    try:
        res = session.post("https://am.kyzzz.xyz/api/send-link", json={"email": email}, headers=headers, timeout=15)
        if res.status_code == 200:
            print("SUCCESS")
        else:
            print(f"ERROR_{res.status_code}")
    except Exception as e:
        print(f"ERROR_EXCEPTION: {str(e)}")

def verify_link(email, link):
    session = cffi_requests.Session(impersonate="chrome120")
    headers = {
        "Accept": "*/*",
        "Content-Type": "application/json",
        "Origin": "https://am.kyzzz.xyz",
        "Referer": "https://am.kyzzz.xyz/am",
        "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Mobile Safari/537.36"
    }
    try:
        res = session.post("https://am.kyzzz.xyz/api/verify", json={"email": email, "link": link}, headers=headers, timeout=15)
        if res.status_code == 200:
            data = res.json()
            if data.get("ok"):
                print(f"SUCCESS|{data.get('uid')}|{data.get('orderId')}")
            else:
                print(f"FAILED|{data}")
        else:
            print(f"ERROR_{res.status_code}")
    except Exception as e:
        print(f"ERROR_EXCEPTION: {str(e)}")

if __name__ == "__main__":
    if len(sys.argv) < 3:
        sys.exit(1)
    
    action = sys.argv[1]
    if action == "send":
        send_link(sys.argv[2])
    elif action == "verify":
        verify_link(sys.argv[2], sys.argv[3])