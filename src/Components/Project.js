// @param name - name of the project
// @param imgSrc - the filepath of an image to be rendered in the
// project component
// @param link - the link to the website of the project if applicable
// @param ghLink - the link to the GitHub repo of the project
//
// Returns a project component which renders a card with links to the
// project repo and link to the website if possible
export default function Project({
    name,
    imgSrc,
    link,
    ghLink
}) {
    return (
        <div className='project-card-container'>
            <div className='project-card'>
                <div className='card-header'>
                    <a href={link}>
                        {name}
                    </a>
                    <a href={ghLink}>
                        <img
                            className='gh-icon'
                            src={process.env.PUBLIC_URL + '/GitHub-Mark-32px.png'} />
                    </a>
                </div>
                <div className='project-img'>
                    <img src={imgSrc} className='project-img' />
                </div>
            </div>
        </div>
    )
}