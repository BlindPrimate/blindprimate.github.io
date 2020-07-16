import React, { Component } from 'react';

export class ProjectList extends Component {

    render() {
        return (
            <ul className="project-list">
                <li>
                    <p className="mb-0 subheading">
                        <a href="http://wgu-viewer.herokuapp.com">
                        WGU Viewer
                        </a>
                    </p>
                    <p>
                        A small site powered by the django framework which provides a better
                        course catalog for Western Governors University's various programs (work in progress)
                    </p>
                    <p className="mb-0 subheading">
                        <a href="https://github.com/BlindPrimate/Scrape-it.py">
                        Reddit Image Scraper
                        </a>
                    </p>
                    <p>A python framework that provides various methods for quick scraping of all images and videos in targeted subreddits for download</p>
                </li>
            </ul>
        )
    }

}

export default ProjectList