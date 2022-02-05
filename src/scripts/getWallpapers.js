import {Octokit} from "octokit";

const octokit = new Octokit({auth: process.env.GITHUB_TOKEN})

const owner = 'metafates'
const repo = 'Wallpapers'
const wallpapersFolder = 'wallpapers'

export async function getWallpapers() {
    const commits = await octokit.request('GET /repos/:owner/:repo/commits', {
        owner,
        repo
    })

    const sha = commits.data[0].sha

    const commit = await octokit.request('GET /repos/:owner/:repo/git/commits/:sha', {
        owner,
        repo,
        sha
    })

    const treeSha = commit.data.tree.sha

    const tree = await octokit.request('GET /repos/:owner/:repo/git/trees/:sha', {
        owner,
        repo,
        sha: treeSha
    })

    const wallpapersFolderSha = tree.data.tree.find(o => o.path === wallpapersFolder).sha

    const wallpapersTree = await octokit.request('GET /repos/:owner/:repo/git/trees/:sha', {
        owner,
        repo,
        sha: wallpapersFolderSha
    })

    return wallpapersTree.data.tree.map(w => (
        `https://raw.githubusercontent.com/${owner}/${repo}/main/${wallpapersFolder}/${w.path}`
    ))
}