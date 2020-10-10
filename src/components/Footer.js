import React from 'react'
import PaymentIcon from 'react-payment-icons';

class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
                <div className='con'>
                    <ul>
                    <p>The Company</p>
                    <li>About us</li> 
                    <li>Return Poilicy</li>
                    <li>FAQ</li>
                </ul>

                <ul>
                    <p>Shop Departments</p>
                    <li>Women</li>
                    <li>Girls</li>
                    <li>Boys</li>
                    <li>Men</li>
                </ul>  
                </div>
              <div className='pay-card'>
            <p className='c-card'>WE ACCEPT:</p>
              <div className='payments'>
                    <div className='pay'>
                    <span>
                        <PaymentIcon
                        id="visa"
                        style={{ margin: 10, width: 70 }}
                        className="payment-icon"
                        />
                    </span>
                    <span>
                        <PaymentIcon
                        id="discover"
                        style={{ margin: 10, width: 70 }}
                        className="payment-icon"
                        />
                    </span>
                    <span>
                        <PaymentIcon
                        id="maestro"
                        style={{ margin: 10, width: 70 }}
                        className="payment-icon"
                        />
                    </span>
                    <span>
                        <PaymentIcon
                        id="paypal"
                        style={{ margin: 10, width: 70 }}
                        className="payment-icon"
                        />
                    </span>
                    </div>
                    <span>
                        <PaymentIcon
                        id="western"
                        style={{ margin: 10, width: 70 }}
                        className="payment-icon"
                        />
                    </span>
                   
                    <span>
                        <PaymentIcon
                        id="wallet"
                        style={{ margin: 10, width: 70 }}
                        className="payment-icon"
                        />
                    </span>
                    <span>
                        <PaymentIcon
                        id="mastercard"
                        style={{ margin: 10, width: 70 }}
                        className="payment-icon"
                        />
                    </span>
                </div> 
              </div>
                <p className='rights'>© 2020 ShopMart USA, Inc. All rights reserved.</p>
            </div>
        )
    }
}
export default Footer