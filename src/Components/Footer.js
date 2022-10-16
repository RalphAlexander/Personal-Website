// Return the Footer component which renders the footer of the page
export default function Footer() {
  return (
    <div className='footer'>
        <footer>
            © 2022 Ralph Alexander. All rights reserved.
        </footer>
        <a href='https://github.com/FishTomato'>
            <img 
            className='gh-footer-icon'  
            src={process.env.PUBLIC_URL + '/GitHub-Mark-32px.png'} />
        </a>        
    </div>
  )
}
