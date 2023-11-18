import React, {useEffect,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import './news.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavScroll from './navbar';
function News() {
     const [news, setNews] = useState([]);
     const [searchTerm, setSearchTerm]= useState("");
     const navigate = useNavigate();
     useEffect(() => {
        axios
        .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=cc406f0dc3fa412e87eb00c5c58f14f9" )
        .then((res) => {
        console.log(res.data.articles);
        setNews(res.data.articles);
});
}, []);
const handleSearch= () => {
    const filteredNews = news.filter((article) =>
article.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
setNews(filteredNews);
};
    return (
        <div> 
            < NavScroll/>   
            <div>
            <Form.Group className="search">
        <Form.Control type="text" placeholder="Search For News..."  value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)}/> 
        <Button  onClick={handleSearch} className='btn5'>
        Search
      </Button>
      </Form.Group>
      <div>
      <div className="row textcenter" style={{backgroundColor:'white', textAlign: 'center'}}>
        <div clas></div>
{news.map((val) => (
<Card key={val.title} style={{ width: "20rem", backgroundColor: '#1e425f', boxShadow: '1px 1px 4px solid black', border:'1px solid black'}}> 
<Card.Img variant="top" src={val.urlToImage} style={{marginTop: '10px',border: '2px solid white', boxShadow: '2px 2px 5px solid black'}} />
<Card.Body className='b'>
<Card.Title>{val.title}</Card.Title>
<Card.Text>{val.description}</Card.Text>
<Button className='btn6'>Go somewhere</Button>
</Card.Body>
</Card>
))}
    </div>  
      </div>
      
            </div>
      
        </div>
    )
}
export default News;