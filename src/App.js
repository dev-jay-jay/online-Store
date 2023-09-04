import NavBar from "./component/nav";
import Header from "./component/header";
import Card from "./component/card";
import SubTitle from "./component/subTitle";

function App() {
  return (
      <div>
         <Header />
        <NavBar />
        <Card showDirection={true} />
        <SubTitle header='Avaliable Stylish Wardrobe Essentials at JayStore' />
        <Card showDirection={false} />
        <SubTitle header='Explore Avaliable Top Tech Gadgets Online!' />
        <Card showDirection={false} /> 
      </div>
  );
}

export default App;
