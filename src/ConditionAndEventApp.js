import './App.css';
import Footer from './components/Footer'
import Header from './components/Header';

function App() {
    // One Way    
    if (1 == 1) {
        return (
            <>
                <Header />
                <h1>This is Right Text</h1>
            </>
        );
    } else {
            return (
                <>
                    <Footer />
                    <h1>This is Wrong Text</h1>
                </>
            )
    }

    //Two Way
    return (
        <>
            { 1 == 10 ? <> <Header /><h1>This is Right Text</h1></> : <> <Footer /><h1>This is Wrong Text</h1></> }
        </>
    )
    
    //Three Way
    return (
        <>
            { 
                1 == 10 ? 
                <div> 
                    <Header />
                    <h1>This is Right Text</h1>
                </div> 
                : 
                <div> 
                    <Footer />
                    <h1>This is Wrong Text</h1>
                </div> 
            }
        </>
    )
}

export default App;
