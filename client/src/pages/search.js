import React , {Component} from "react"
import api from "../Utils/api"
import { BookList, BookListItem } from "../components/Booklist";
import { Container, Row, Col } from "../components/Grid";
import Button from "../components/Button";
import Input from "../components/Input";

class Search extends Component{
     state = {
         apiResults: [],
         search: "",
         apiKey: `${process.env.REACT_APP_BOOKS_KEY}`
     };

     handleInputChange = event => {
        // Destructure the name and value properties off of event.target
        // Update the appropriate state
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
    
      handleFormSubmit = event => {
        // When the form is submitted, prevent its default behavior, get books update the books state
        event.preventDefault();
        api.getGooglebooks(this.state.search, this.state.apiKey)
          .then(res => { 
            // console.log(JSON.stringify(res.data));
             
            const searchBooks = []
            for (var i=0; i < res.data.items.length; i++) {
                searchBooks.push(
                  { title: res.data.items[i].volumeInfo.title,
                    description: res.data.items[i].volumeInfo.description,
                    image: res.data.items[i].volumeInfo.imageLinks.thumbnail,
                    link: res.data.items[i].volumeInfo.infoLink,
                    authors: res.data.items[i].volumeInfo.authors
                  })
              }
              // console.log(JSON.stringify(searchBooks));
            this.setState({ apiResults: searchBooks })})
          .catch(err => console.log(err));
      };
    


    render() {
        return(
            <Container>
            <Row>
              <Col size="md-12">
                <form>
                  <Container>
                    <Row>
                      <Col size="xs-9 sm-10">
                        <Input
                          name="search"
                          value={this.state.search}
                          onChange={this.handleInputChange}
                          placeholder="Search For a Book"
                        />
                      </Col>
                      <Col size="xs-3 sm-2">
                        <Button
                          onClick={this.handleFormSubmit}
                          type="success"
                          className="input-lg"
                        >
                          Search
                        </Button>
                      </Col>
                    </Row>
                  </Container>
                </form>
              </Col>
            </Row>
            <Row>
              <Col size="xs-12">
                {!this.state.apiResults.length ? (
                  <h1 className="text-center">No Books to Display</h1>
                ) : (
                  <BookList>
                    {this.state.apiResults.map((book, index) => {
                      return (
                        <BookListItem
                          key={index}
                          title={book.title}
                          authors={book.authors}
                          href={book.link}
                          description={book.description}
                          thumbnail={book.image}
                        />
                      );
                    })}
                  </BookList>
                )}
              </Col>
            </Row>
          </Container>
        )
    }
}

export default Search