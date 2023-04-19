import Banner from "./banner";

const App = () => {
    const jsx = <div>Hi!</div>;

    return (
        <div>
            {jsx}
            <Banner><div>Providing houses all over the world.</div></Banner>
        </div>
    );
};

export default App;