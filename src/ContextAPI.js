import React, { Component } from 'react';

const HackerNewsContext = React.createContext();

class HackerNewsProvider extends Component {
    state = {
        TopSotries: [],
        AskSotries: [],
        JobStories: [],
        ModelToggler: false,
        lazyCounter: 10
    };

    componentDidMount() {
        this.topStories();
        this.askStories();
        this.jobStories();
    }

    topStories = async () => {
        try { 
            await fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
            .then(response => response.json())
            .then(topstories => {
                topstories.slice(0, 40).map(async (story, index) => {
                    await fetch(`https://hacker-news.firebaseio.com/v0/item/${story}.json`)
                    .then(response => response.json())
                    .then(storyDetail => {
                        let tempData = [...this.state.TopSotries];
                        tempData.push(storyDetail);
                        this.setState({ 
                            TopSotries: tempData
                        });
                    })
                });
            })
        }catch(err) {
            console.log(err);
        }
    }

    askStories = async () => {
        try { 
            await fetch('https://hacker-news.firebaseio.com/v0/askstories.json')
            .then(response => response.json())
            .then(topstories => {
                topstories.slice(0, 40).map(async (story, index) => {
                    await fetch(`https://hacker-news.firebaseio.com/v0/item/${story}.json`)
                    .then(response => response.json())
                    .then(storyDetail => {
                        let tempData = [...this.state.AskSotries];
                        tempData.push(storyDetail);
                        this.setState({ 
                            AskSotries: tempData
                        });
                    })
                });
            })
        }catch(err) {
            console.log(err);
        }
    }

    jobStories = async () => {
        try { 
            await fetch('https://hacker-news.firebaseio.com/v0/jobstories.json')
            .then(response => response.json())
            .then(topstories => {
                topstories.slice(0, 40).map(async (story, index) => {
                    await fetch(`https://hacker-news.firebaseio.com/v0/item/${story}.json`)
                    .then(response => response.json())
                    .then(storyDetail => {
                        let tempData = [...this.state.JobStories];
                        tempData.push(storyDetail);
                        this.setState({ 
                            JobStories: tempData
                        });
                    })
                });
            })
        }catch(err) {
            console.log(err);
        }
    }

    clickHandler = () => { 
        this.setState({ ModelToggler: !this.state.ModelToggler });
    }

    render() {
        return (
            <HackerNewsContext.Provider 
                value={{ ...this.state,
                clickHandler: this.clickHandler
            }}>
                {this.props.children}
            </HackerNewsContext.Provider>
        )
    }
}

export { HackerNewsProvider, HackerNewsContext };
