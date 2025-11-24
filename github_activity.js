#!/usr/bin/env node

const https = require("https");

// Get username
const username = process.argv[2];

if (!username) {
    console.log("Usage: github-activity <username>");
    process.exit(1);
}

const url = `https://api.github.com/users/${username}/events`;

const options = {
    headers: {
        "User-Agent": "github-activity-cli",
        "Accept": "application/vnd.github.v3+json"
    }
};

https.get(url, options, (res) => {
    let data = "";

    if (res.statusCode === 404) {
        console.log("❌ User not found!");
        return;
    }

    if (res.statusCode !== 200) {
        console.log(`❌ API Error — Status: ${res.statusCode}`);
        return;
    }

    res.on("data", chunk => {
        data += chunk;
    });

    res.on("end", () => {
        let events;

        // Safe JSON parsing
        try {
            events = JSON.parse(data);
        } catch (e) {
            console.log("❌ Error: GitHub returned invalid JSON.");
            console.log("Raw response:", data);
            return;
        }

        if (!Array.isArray(events)) {
            console.log("❌ Unexpected response from GitHub.");
            console.log(events);
            return;
        }

        console.log(`Recent activity by ${username}:\n`);

        events.forEach(event => {
            const type = event.type;
            const repo = event.repo?.name || "unknown repo";
            const payload = event.payload || {};

            switch (type) {
                case "PushEvent":
                    console.log(`- Pushed ${payload.commits?.length || 0} commits to ${repo}`);
                    break;

                case "IssuesEvent":
                    console.log(`- ${payload.action || "performed"} an issue in ${repo}`);
                    break;

                case "WatchEvent":
                    console.log(`- Starred ${repo}`);
                    break;

                case "ForkEvent":
                    console.log(`- Forked ${repo}`);
                    break;

                case "PullRequestEvent":
                    console.log(`- ${payload.action} a pull request in ${repo}`);
                    break;

                case "CreateEvent":
                    console.log(`- Created a new ${payload.ref_type || "repository"} in ${repo}`);
                    break;

                default:
                    console.log(`- ${type} in ${repo}`);
            }
        });

    });

}).on("error", (err) => {
    console.log("❌ Request Error:", err.message);
});
