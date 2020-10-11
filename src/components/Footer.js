import React from 'react'
import PaymentIcon from 'react-payment-icons';
import history from '../history'

class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
                <div className='con'>
                    <ul>
                    <p >The Company</p>
                    <li className='li' onClick={()=>{history.push(`/the-company/${'about'}`)}}>About us</li> 
                    <li className='li' onClick={()=>{history.push(`/the-company/${'returns'}`)}}>Return Poilicy</li>
                    <li className='li' onClick={()=>{history.push(`/the-company/${'faq'}`)}}>FAQ</li>
                </ul>

                <ul className='departments'>
                    <p>Shop Departments</p>
                    <a href='/women'><li>Women</li></a>
                    <a href='/girls'><li>Girls</li></a>
                    <a href='/boys'><li>Boys</li></a>
                    <a href='/men'><li>Men</li></a>
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