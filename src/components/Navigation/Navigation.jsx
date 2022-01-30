function Navigation(props) {
    const {currentCategory, setCurrentCategory} = props;
    return (
        <ul className='d-flex list-group-horizontal h-50 mt-lg-4 mt-1 mx-auto mx-lg-0 p-0 flex-wrap justify-content-center'>
            <li className={`m-1 list-group-item ${currentCategory === 'about' && 'text-primary'}`} onClick={() => setCurrentCategory('about')}>About Me</li>
            <li className={`m-1 list-group-item ${currentCategory === 'portfolio' && 'text-primary'}`} onClick={() => setCurrentCategory('portfolio')}>Portfolio</li>
            <li className={`m-1 list-group-item ${currentCategory === 'contact' && 'text-primary'}`} onClick={() => setCurrentCategory('contact')}>Contact</li>
            <li className={`m-1 list-group-item ${currentCategory === 'resume' && 'text-primary'}`} onClick={() => setCurrentCategory('resume')}>Resume</li>
        </ul>
    );
}

export default Navigation;