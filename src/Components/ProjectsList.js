import Project from "./Project"

// Returns a component which renders a list of projects alongisde a header
// and subheader
export default function ProjectsList() {

  return (
    <>
        <div class='project-grid'>
            <div className='project-header'>
                <h3 className='header'>
                    Projects
                </h3>
                <p className='project-body'>
                    A showcase of my past projects over the years.
                </p>
            </div>
            <Project 
            name={'TodoList Web App'}
            imgSrc={process.env.PUBLIC_URL +'/TodoList_App_Preview.png'}
            link={'https://fishtomato.github.io/Todo-App/'}
            ghLink = {'https://github.com/FishTomato/Todo-App'}/>
            <Project 
            name={'Sorting Visualizer'}
            imgSrc={process.env.PUBLIC_URL +'/Sorting_Algorithm_Preview.png'}
            link={'https://fishtomato.github.io/Sorting-Visualizer/'}
            ghLink={'https://github.com/FishTomato/Sorting-Visualizer'}/>
        </div>
    </>
  )
}
