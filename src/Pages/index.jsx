import Card from "../Components/Cards/index"
import { Container, Grid } from 'semantic-ui-react'

const marginTop = { marginTop:"5%" }

const dishes = [
    {
        name: "yoyo",
        price: "500",
        desc: 'you will love it',
        discount: "10% off"
    },
    {
        name: "yoyo",
        price: "500",
        desc: 'you will love it',
        discount: "10% off"
    },
    {
        name: "yoyo",
        price: "500",
        desc: 'you will love it',
        discount: "10% off"
    },
    {
        name: "yoyo",
        price: "500",
        desc: 'you will love it',
        discount: "10% off"
    },
    {
        name: "yoyo",
        price: "500",
        desc: 'you will love it',
        discount: "10% off"
    },
    {
        name: "yoyo",
        price: "500",
        desc: 'you will love it',
        discount: "10% off"
    }
]
const Home = () =>{
    return(
        <div>
            <Container style={marginTop}>
            <Grid stackable columns={4}>
              {dishes
                  .map((data) => {
                    return (
                      <Grid.Column>
                        <Container fluid textAlign="center">
                            <Card info={data} />
                        </Container>
                      </Grid.Column>
                    );
                  })}
            </Grid>
            </Container>
        </div>
    );
}

export default Home;
