import { Octokit } from "octokit";

export async function GET(request:Request) {
    const octokit = new Octokit({
        auth: process.env.GITHUB_API_KEY
    });
    
    const response = await octokit.request('GET /repos/{owner}/{repo}/commits', {
        owner: 'Manuel-JH-Escalera',
        repo: 'github-commit-viewer',
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        },
        per_page: 100
    });

    return new Response(JSON.stringify(response.data), {
        headers: { 'Content-Type': 'application/json' },
    });
}