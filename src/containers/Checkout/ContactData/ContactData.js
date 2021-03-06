import React, {Component} from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.module.css'
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/spinner'
class ContactData extends Component{
    state={
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault()
        this.setState({loading: true})
            const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Gagan',
                address: {
                    street: 'Gali',
                    zipCode: '000',
                    country: 'Desh'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', order) 
            .then(response => {
                // console.log(response))
                this.setState({loading: false})
                this.props.history.push('/')
            })
            .catch(error => (
                // console.log(error)
                this.setState({loading: false})
            ))

    }
    render() {
        let form = (
            <form>
            <input className={classes.Input}  type="email" name='email' placeholder='Your Mail' />
            <input  className={classes.Input} type="text" name='street' placeholder='Your Street' />
            <input  className={classes.Input} type="text" name='postal' placeholder='Postal Code' />
            <input  className={classes.Input} type="text" name='name' placeholder='Your Name' />
            <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
        </form>
        )
        if (this.state.loading){
            form = <Spinner />
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Details</h4>
             {form}
            </div>
        )
    }
}

export default ContactData