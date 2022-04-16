import {Octokit} from "octokit";

const octokit = new Octokit({auth: process.env.GITHUB_TOKEN})

const owner = 'metafates'
const repo = 'Wallpapers'
const wallpapersFolder = 'wallpapers'
const compressedWallpapersFolder = 'compressed'
const mediumWallpapersFolder = 'medium'

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

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

    // Randomly shuffle wallpapers (because why not?)
    shuffle(wallpapersTree.data.tree)

    return wallpapersTree.data.tree.map(w => ({
        max: `https://raw.githubusercontent.com/${owner}/${repo}/main/${wallpapersFolder}/${encodeURIComponent(w.path)}`,
        min: `https://raw.githubusercontent.com/${owner}/${repo}/main/${compressedWallpapersFolder}/${encodeURIComponent(w.path)}`,
        med: `https://raw.githubusercontent.com/${owner}/${repo}/main/${mediumWallpapersFolder}/${encodeURIComponent(w.path)}`,
        dimensions: w?.path?.match(/.*@(\d+?x\d+?)\./)?.at(-1) || '',
        color: w?.path?.match(/@(#[A-Za-z\d]+?)@/)?.at(-1) || '#ffffff'
    }))
}
