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
                    link='https://fishtomato.github.io/Todo-App/'
                    ghLink='https://github.com/FishTomato/Todo-App' />
                <Project
                    name='Sorting Visualizer'
                    imgSrc={process.env.PUBLIC_URL + '/Sorting_Algorithm_Preview.png'}
                    link='https://fishtomato.github.io/Sorting-Visualizer/'
                    ghLink='https://github.com/FishTomato/Sorting-Visualizer' />
                <Project
                    name='Seasonal Anime Calendar'
                    imgSrc={process.env.PUBLIC_URL + '/Seasonal_Anime_Calendar.png'}
                    link='https://fishtomato.github.io/Seasonal-Anime-Calendar/'
                    ghLink='https://github.com/FishTomato/Seasonal-Anime-Calendar' />
                <Project
                    name='Card Shuffling Visualizer'
                    imgSrc={process.env.PUBLIC_URL + '/Shuffle_Visualizer.png'}
                    link='https://fishtomato.github.io/shuffle-visualizer/'
                    ghLink='https://github.com/FishTomato/shuffle-visualizer' />
            </div>

        </>
    )
}
