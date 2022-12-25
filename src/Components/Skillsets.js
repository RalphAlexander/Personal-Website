import Skill from './Skill'

// Returns a component which renders a list of skills and rating alongside
// a header
export default function Skillsets() {

    return (
        <>
            <div className='skillset-container'>
                <h3 className='header'>
                    Skill Set
                </h3>
                <div className='skill-div'>

                    <Skill
                        name={'React'}
                        rating={'seventy'} />
                    <Skill
                        name={'Python'}
                        rating={'sixty'} />
                    <Skill
                        name={'HTML, CSS, JavaScript'}
                        rating={'fifty'} />
                    <Skill
                        name={'Java'}
                        rating={'fifty'} />
                    <Skill name={'C++'}
                        rating={'thirty'} />
                </div>
            </div>
        </>
    )
}
