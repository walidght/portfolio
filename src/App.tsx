import Header from './Header';
import Nav from './Nav';
import Posts from './Posts';
import Projects from './Projects';
import Techs from './Techs';
function App() {
    return (
        <>
            <Nav />
            <div className=" pt-10 md:pt-20">
                <Header />
                <Techs />
                <div className="mx-auto mt-4 w-10/12 md:flex  md:max-w-6xl md:flex-row md:gap-6 ">
                    <Posts />
                    <Projects />
                </div>
            </div>
        </>
    );
}

export default App;
