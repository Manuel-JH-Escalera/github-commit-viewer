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

async function getCommits() {
    const response = await fetch('http://localhost:3000/api/commits', { cache: 'no-store' });
    const data =  await response.json()
    return data
}

export default async function CommitsTimeline() {

    const commits = await getCommits();

    return (
        <>
            <div>CommitTimeline</div>
            <OppositeContentTimeline commits={commits}/>
        </>

    )
}