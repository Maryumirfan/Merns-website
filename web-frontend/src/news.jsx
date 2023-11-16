import React, {useEffect,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import './news.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
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
      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Search For News..."  value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)}/>
        <Button variant="primary" onClick={handleSearch}>
        Search
      </Button>
      </Form.Group>
      <div className="row text-center">
{news.map((val) => (
<Card key={val.title} style={{ width: "18rem" }}> 
<Card.Img variant="top" src={val.urlToImage} />
<Card.Body>
<Card.Title>{val.title}</Card.Title>
<Card.Text>{val.description}</Card.Text>
<Button variant="primary" >Go somewhere</Button>
</Card.Body>
</Card>
))}
    </div>  
        </div>
    )
}
export default News;