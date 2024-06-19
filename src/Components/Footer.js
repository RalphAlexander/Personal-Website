// Return the Footer component which renders the footer of the page
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className='footer'>
        <footer>
            © {year} Ralph Alexander. All rights reserved.
        </footer>
        <a href='https://github.com/RalphAlexander'>
            <img 
            className='gh-footer-icon'  
            src={process.env.PUBLIC_URL + '/GitHub-Mark-32px.png'}
            alt = 'Github Logo' />
        </a>        
    </div>
  )
}
