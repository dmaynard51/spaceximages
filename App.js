import React from "react"
import Header from "./Header"
import Body from "./Body"
import "babel-polyfill"
import axios from 'axios';
import Card from "./components/Card"


export default function App() {

// const data = fetch("https://www.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1&tags=polaris").then(response => obj = response.json()).then(data => console.log(data));

// async function fetchMovies() {
//     const response = await axios.get('https://www.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1&tags=spacex')
//     setRepos(response.data)
//     //  setRepos(response.json())
    
    
//     // waits until the request completes...

//   }



// fetchMovies()

// console.log(repos)





// let lst = temp.then(function(result){
//     let items = result.map(item => {
//         console.log(item.link)
//         return item.link
//     })
//     return  items
// })











//getJSON('https://www.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1&tags=spacex',





//console.log(JSON.parse(temp.replace(/^[^\(]*\(/, '').replace(/\);$/, '')))
//JSON.parse(temp.replace(/^[^\(]*\(/, '').replace(/\);$/, ''));
const [repos, setRepos] = React.useState([]);

React.useEffect(() => {
  const fetchData = async () => {
      const response = await axios.get("https:///api.flickr.com/services/rest/?method=flickr.photos.search&format=json&nojsoncallback=1&tags=spacex,spacelink&api_key=cc8f377158b0c3416d274b1a777210b1&per_page=500");
      setRepos(response.data.photos.photo);

  }

  fetchData();

}, []);
    const temp = repos
    console.log(temp)
      const items = temp.map(item => {
        const temp = `https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`
        return (

            <Card  key={item.id} url={temp} item={item} />

        )
      })

      const [astros, setAstros] = React.useState([]);

      React.useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("http://api.open-notify.org/astros.json");
            setAstros(response.data.people);
      
        }
      
        fetchData();
      
      }, []);
          const temp1 = astros
          console.log(temp1)
            const items1 = temp1.map(item => {
              return (
                  <div key={item.name}className="astros--div">
                    <h2 key={item.name}>{item.name} ({item.craft})</h2>
                  </div>
              )
            })      


    
    return (
        <main>
            <Header />
            <Body />
            <div className="astros--div--main">

              {items1}
            </div>
            <h2>SpaceX Images via Flickr API:</h2>
            <div className="app--div">
            {items}
            </div>

        </main>
    )
}
