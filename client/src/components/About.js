
import { Card } from 'react-bootstrap';
import caitlinProf from '../images/caitlin-prof.jpg';
import arielProf from '../images/ariel1.jpg';
import valProf from '../images/val-prof.jpg';



const About = () => {

    const creators = [
        {
            name: "Caitlin O'Reilly",
            firstName: "Caitlin",
            title: 'Web Developer',
            avatar:  caitlinProf ,
            bio: 'Caitlin is a third grade teacher and a full stack developer with a passion for creating educational technology resources for her students and other children. She loves traveling, watercolor painting, and trying new craft breweries. ',
            facts: ' has 3 cats',
            favProduct: 'Youth to the People Kale + Green Tea Facial Cleanser',
            portfolioLink: 'https://caitoreilly.github.io/react-portfolio/',
            gitHub: 'https://github.com/caitoreilly'

        },
        {
            name: "Ariel Miller",
            firstName: "Ariel",
            title: 'Web Developer',
            avatar: arielProf,
            bio: 'A full stack web developer with a strong proficiency in HTML, CSS, JS, MERN stack, Sequelize, MySQL, NoSQL, Mongoose, Bootstrap, and MaterializeCSS.',
            facts: ' has 2 dogs',
            favProduct: 'Phloretin CF with Ferulic acid ',
            portfolioLink: 'https://amiller0806.github.io/HTML-Advanced-CSS-Portfolio/',
            gitHub: 'https://github.com/amiller0806'

        },
        {
            name: "Valeriya Kim",
            firstName: "Valeriya",
            title: 'Web Developer',
            avatar: valProf,
            bio: "Val loves videogames, collects mechanical keyboards and dreams to move to Orlando Harry Potter World. Full Stack MERN & Java geek with a passion for server-side/back-end web development." ,
            facts: 'Val loves food',
            favProduct: "BOBBI BROWN - Vitamin Enriched Face Base",
            portfolioLink: 'https://www.linkedin.com/in/valeriya-kim/',
            gitHub: 'https://github.com/valkim55',

        },
    ]



    return (

        <div>
            <h1 class="about-us">About Us</h1>
            {creators.map((creators) => (
                <Card>
                    <Card.Body>
                        <Card.Title className="name-creator">{creators.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{creators.title}</Card.Subtitle>
                        <Card.Text>
                            <img class="prof-img" src={creators.avatar} alt= "profile pic" />
                            <p class="about-creator">About {creators.firstName}:</p>
                            <p>{creators.bio}</p>
                            <p class="fun-fact">Fun Fact: {creators.facts} </p>
                            <p class="faveProduct">Favorite Product: {creators.favProduct} </p>
                        </Card.Text>
                        <Card.Link target="_blank" href={creators.portfolioLink}>Portfolio Link</Card.Link>
                        <Card.Link target="_blank" href={creators.gitHub}>Github</Card.Link>
                    </Card.Body>
                </Card>
            ))}
        </div>
    )
}

export default About