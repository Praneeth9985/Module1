
const nameComponent = (
<div id ="out">
        <h2 id = "name_comp">PRANEETH BOJJA</h2>
</div>
);

const pictureComponent = (
    <div id = "picture_out">
        <img id = "picture_comp" src = "./image.jpg"/>
    </div>
);

const introComponent = (
    <div id= "intro_out">
        <p id = "intro_comp">
        Hi, my name is Praneeth. I am currently working as a time traveler at ChronoLogic Inc. since 2050, helping 
        the universe keep it's integrity and saving time ,itself, from falling apart, time-to-time (pun intended). My hobbies include solving crimes with Dr. Watson,
        professional Unicorn Racing, controlling extreme weather conditions and hanging out with Santa Claus and friends, at the Bermuda Triangle. I also occasionally paint,
        which sometimes, come into existence (Sorry centipedes, you were a mistake).<br></br>
        Other than these, I can walk on water with my socks on (without ever getting them wet),
        I can plug USB cables in one attempt, I can pull/push doors right everytime, I am undefeated in lightsaber duels (54-0, all against yoda).
        but more than anything,<br></br>
        I never brag. I stay HUMBLE.
        </p>
    </div>
            
);

const buttonComponent = (
    <div id= "button_out">
        <a href="https://github.com/Praneeth9985"><button id= "button_comp">VIEW MY GITHUB REPO</button></a>
    </div>

);

ReactDOM.render(nameComponent, document.getElementById('name'));
ReactDOM.render(pictureComponent, document.getElementById('picture'));
ReactDOM.render(introComponent, document.getElementById('introduction'));
ReactDOM.render(buttonComponent, document.getElementById('button'));