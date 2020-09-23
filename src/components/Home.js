import React from 'react'
import {fetchProducts} from '../actions/index'
import {fetchProduct} from '../actions/index'

import {connect} from 'react-redux'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { CardMedia } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';



class Home extends React.Component{
componentDidMount(){
   this.props.fetchProducts()
}
renderProducts=()=>{
    const styles = {
        card: {
          maxWidth: 345,
        },
        media: {
          height: 0,
          paddingTop: '56.25%', // 16:9
        },
      };
      var cardStyle = {
        display: 'block',
        width: '30vw',
        transitionDuration: '0.3s',
        height: '35vw'
    }
    

    return this.props.products.map(product=>{

    return(
    <React.Fragment key={product.id}>
  <Card style={cardStyle} >
        <CardHeader
        title={product.name}
      />
 <CardMedia   
   style={styles.media} 
   image={product.images}   
 /> 
  <CardContent>
        <Typography  variant="h4" color="primary" component="p">
          ${product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" color="primary"size="small" >
          add to cart
        </Button>
        <Button 
        onClick={()=>fetchProduct(product.id)}
        size="small" 
        variant="outlined"
        color="primary">
          see details
        </Button>
      </CardActions>
        </Card>
    </React.Fragment>)
    })
}
    render(){
        return(
        <div>{this.renderProducts()}</div>
        )
    }
}
const mapStateToProps=(state)=>{
   return{ products:Object.values(state.products)}

}

export default connect(mapStateToProps,{fetchProducts,fetchProduct})(Home) 