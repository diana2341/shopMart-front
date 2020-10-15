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
                    <li className='li' onClick={()=>{history.push(`/women`)}}>Women</li>
                    <li className='li' onClick={()=>{history.push(`/girls`)}}>Girls</li>
                    <li className='li' onClick={()=>{history.push(`/boys`)}}>Boys</li>
                    <li className='li' onClick={()=>{history.push(`/men`)}}>Men</li>
                </ul> 

                <p className='c-card'>We Accept:</p>
                <ul className='allCards'>
                    
                <li>
                        <PaymentIcon
                        id="visa"
                        style={{ margin: 10, width: 70 }}
                        className="payment-icon"
                        />
                    </li>
                    <li>
                        <PaymentIcon
                        id="discover"
                        style={{ margin: 10, width: 70 }}
                        className="payment-icon"
                        />
                    </li>
                    <li>
                        <PaymentIcon
                        id="maestro"
                        style={{ margin: 10, width: 70 }}
                        className="payment-icon"
                        />
                    </li>
                    <li>
                        <PaymentIcon
                        id="paypal"
                        style={{ margin: 10, width: 70 }}
                        className="payment-icon"
                        />
                    </li>
                   
                    <li>
                        <PaymentIcon
                        id="western"
                        style={{ margin: 10, width: 70 }}
                        className="payment-icon"
                        />
                    </li>
                   
                    <li>
                        <PaymentIcon
                        id="wallet"
                        style={{ margin: 10, width: 70 }}
                        className="payment-icon"
                        />
                    </li>
                    <li>
                        <PaymentIcon
                        id="mastercard"
                        style={{ margin: 10, width: 70 }}
                        className="payment-icon"
                        />
                    </li>
                </ul> 
                </div>
              
                <p className='rights'>© 2020 ShopMart USA, Inc. All rights reserved.</p>
            </div>
        )
    }
}
export default Footer