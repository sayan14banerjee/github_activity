#!/usr/bin/env python3

import sys
import json
import urllib.request
import urllib.error

# Get the username
if len(sys.argv) < 2:
    print("Usage: github-activity <username>")
    sys.exit(1)

username = sys.argv[1]
url = f"https://api.github.com/users/{username}/events"

# GitHub requires a User-Agent header
req = urllib.request.Request(
    url,
    headers={"User-Agent": "github-activity-cli"}
)

try:
    response = urllib.request.urlopen(req)
    data = response.read().decode("utf-8")
    events = json.loads(data)

except urllib.error.HTTPError as e:
    if e.code == 404:
        print("❌ User not found!")
    else:
        print(f"❌ API Error: {e.code}")
    sys.exit(1)

except Exception as e:
    print(f"❌ Error: {str(e)}")
    sys.exit(1)

# If no events found
if not events:
    print("No recent activity found.")
    sys.exit(0)

print(f"Recent activity by {username}:\n")

# Parse events
for event in events:
    event_type = event.get("type")
    repo_name = event["repo"]["name"]
    payload = event.get("payload", {})

    if event_type == "PushEvent":
        commits = len(payload.get("commits", []))
        print(f"- Pushed {commits} commits to {repo_name}")

    elif event_type == "IssuesEvent":
        action = payload.get("action", "performed")
        print(f"- {action.capitalize()} an issue in {repo_name}")

    elif event_type == "WatchEvent":
        print(f"- Starred {repo_name}")

    elif event_type == "PullRequestEvent":
        action = payload.get("action", "performed")
        print(f"- {action.capitalize()} a pull request in {repo_name}")

    elif event_type == "ForkEvent":
        print(f"- Forked {repo_name}")

    elif event_type == "CreateEvent":
        ref_type = payload.get("ref_type", "repository")
        print(f"- Created a new {ref_type} in {repo_name}")

    else:
        print(f"- {event_type} in {repo_name}")
