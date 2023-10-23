import OppositeContentTimeline from "./Timeline";

interface GitHubCommitDetails {
    url: string;
    author: {
        name: string;
        email: string;
        date: string;
    };
    committer: {
        name: string;
        email: string;
        date: string;
    };
    message: string;
    tree: {
        url: string;
        sha: string;
    };
    comment_count: number;
    verification: {
        verified: boolean;
        reason: string;
        signature: string | null;
        payload: string | null;
    };
}

export interface GitHubCommit {
    commit: GitHubCommitDetails;
}

async function CommitsTimeline() {

    async function getCommits() {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
        const response = await fetch(apiUrl, { cache: 'no-store' });
        if (!response.ok) return false
        const data = await response.json()
        return data
    }

    const commits = await getCommits();

    if(!commits || !commits.length) {
        return (
            <h1 className="text-4xl text-center text-green-700 dark:text-blue-200">
            No fue posible obtener los commits del proyecto
            </h1>
        )}

    return (
        <div className="text-center">
            <span className="text-xl text-green-700 dark:text-blue-200">Start of the project</span>
            <OppositeContentTimeline commits={commits} />
            <span className="text-xl text-green-700 dark:text-blue-200">End of the project</span>
        </div>
    )
}

export default CommitsTimeline;