function Project() {
    const projectList = [
        {
            id: 0,
            title: "Only Bands",
            tech: "Handlebars, Tailwind, MVC",
            img: "/assets/only-bands.png",
            description: "The site is a central hub for music info. You can search for an artist, save your favorite artists and albums and even track which concerts you have been to.",
            repo: "https://github.com/Thenlie/OnlyBands",
            live: "https://onlybands.herokuapp.com/",
        },
        {
            id: 1,
            title: "Streamability",
            tech: "Handlebars, Express, MVC",
            img: "/assets/streamability.png",
            description: "Streamability is a collaborative and responsive application made to display where an individual can stream their favorite TV shows and movies.",
            repo: "https://github.com/Thenlie/Streamability",
            live: "https://streamability.herokuapp.com/",
        },
        {
            id: 2,
            title: "Tech Blog",
            tech: "Handlebars, Express, MVC",
            img: "/assets/tech-blog.png",
            description: "A CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.",
            repo: "https://github.com/Thenlie/tech-blog",
            live: "https://safe-journey-60844.herokuapp.com/",
        },
        {
            id: 3,
            title: "Password Generator",
            tech: "Handlebars, Express, MVC",
            img: "/assets/password-gen.png",
            description: "A simple password generator that takes user selected characters and randomizes them to create a unique password.",
            repo: "https://github.com/Thenlie/password-generator",
            live: "https://thenlie.github.io/password-generator/",
        },
        {
            id: 4,
            title: "Note Taker",
            tech: "Handlebars, Express, MVC",
            img: "/assets/note-taker.png",
            description: "An application that can be used to write and save notes. This application was made using an express.js backend and gets note data from a JSON file. This was made during the U of U coding bootcamp.",
            repo: "https://github.com/Thenlie/note-taker",
            live: "https://serene-ridge-39054.herokuapp.com/",
        },
        {
            id: 5,
            title: "README Generator",
            tech: "Handlebars, Express, MVC",
            img: "/assets/readme-gen.png",
            description: "A simple README file generator made during the U of U coding bootcamp.",
            repo: "https://github.com/Thenlie/readme-generator",
            live: "https://github.com/Thenlie/readme-generator",
        }
    ]
    return (
        <section>
            <h1 className='text-center'>Projects</h1>
            <div className='container'>
                <div className='row'>
                    {projectList.map((project) => (
                        <div key={project.id} className='col-6 text-center p-2'>
                            <div className='card m-2 p-2 h-100'>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <p><a href={project.repo}>{project.repo}</a></p>
                                <p><a href={project.live}>{project.live}</a></p>
                                <img src={project.img} alt={`Screenshot of ${project.title}`} width='300' height='250' className='m-auto'></img>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Project;