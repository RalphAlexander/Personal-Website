import Project from "./Project"

// Returns a component which renders a list of projects alongisde a header
// and subheader
export default function ProjectsList() {
    return (
        <>
            <div className='project-header'>
                <h3 className='header'>
                    Projects
                </h3>
                <p className='project-body'>
                    A showcase of my past projects over the years.
                </p>
            </div>
            <div className='projects-container'>
                <Project
                    name='TodoList Web App'
                    imgSrc={process.env.PUBLIC_URL + '/TodoList_App_Preview.png'}
                    imgAlt='Todo List Project Preview'
                    link='https://RalphAlexander.github.io/Todo-App/'
                    ghLink='https://github.com/RalphAlexander/Todo-App' />
                <Project
                    name='Sorting Visualizer'
                    imgSrc={process.env.PUBLIC_URL + '/Sorting_Algorithm_Preview.png'}
                    imgAlt='Sorting Visualizer Project Preview'
                    link='https://RalphAlexander.github.io/Sorting-Visualizer/'
                    ghLink='https://github.com/RalphAlexander/Sorting-Visualizer' />
                <Project
                    name='Seasonal Anime Calendar'
                    imgSrc={process.env.PUBLIC_URL + '/Seasonal_Anime_Calendar.png'}
                    imgAlt='Seasonal Anime Calendar Project Preview'
                    link='https://RalphAlexander.github.io/Seasonal-Anime-Calendar/'
                    ghLink='https://github.com/RalphAlexander/Seasonal-Anime-Calendar' />
                <Project
                    name='Card Shuffling Visualizer'
                    imgSrc={process.env.PUBLIC_URL + '/Shuffle_Visualizer.png'}
                    imgAlt='Card Shuffling Visualizer Project Preview'
                    link='https://RalphAlexander.github.io/shuffle-visualizer/'
                    ghLink='https://github.com/RalphAlexander/shuffle-visualizer' />
            </div>

        </>
    )
}
