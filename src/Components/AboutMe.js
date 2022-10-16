// Returns the AboutMe component which renders a section in the page 
// about me
export default function AboutMe() {
  return (
    <>
        <div class='about-me-grid'>
            <div className='img-container'>
                <img 
                    src={process.env.PUBLIC_URL +'/ProfileImageSource.jpg'}
                    className='about-me-img'/>
            </div>        
            <p className='about-me-subhead'>
                Hey, I'm Ralph Alexander.
            </p>                   
            <p className='about-me-body'>
                I'm a student in Shoreline Community College pursuing a 
                major in Computer Science. I've always love gaming and that interest 
                shifted towards programing and building programs from the very basics 
                such as a simple calculator and rock, paper, scissors to more complex 
                programs and algorithms such as a sorting visualizer and a Sudoku Solver.
                In the midst of building projects, I eventually learnt web development
                from basic HTML and CSS eventually leading to frameworks such as ReactJS.
            </p>
        </div>
    </>
  )
}
