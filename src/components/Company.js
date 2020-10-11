import React from 'react'
import history from '../history'


class Company extends React.Component{
    componentDidMount(){
        // console.log(history.location.pathname)
    }
    render(){
        let path=history.location.pathname
        return(
            <>
            {
                path==='/the-company/about'?
            <div id='about'>
                <img className='about-banner'alt='about'src={require('../img/about.png')}/>
                <div className='about-content'>
                  <h1>About Us</h1>
                  <p className='about-us-p'>
                  SHOPMART is an international B2C fast fashion e-commerce platform. The company mainly 
                  focuses on women's wear, but it also offers men's apparel, children's clothes, accessories,
                  shoes, bags and other fashion items. SHOPMART mainly targets Europe, America, Australia, and the 
                  Middle East along with other consumer markets. The brand was founded in October 2008, and since 
                  then it has upheld the philosophy that "everyone can enjoy the beauty of fashion." Its business covers 
                  more than 220 countries and regions around the world.
                  </p>  
                  <h1>Our Mission</h1>
                  <p>
                  SHOPMART prides itself on offering on-trend styles catering to both young women and teens, that won’t break the bank.
                  SHOPMART adheres to the concept that "everyone can enjoy the beauty of fashion." SHOPMART is able to stay on top of the latest
                  fashion trends from around the globe while rapidly bringing these styles to market. So whether you're searching for boho dresses 
                  and graphic tees or patterned blouses and chic swimwear, SHOPMART is the ultimate one-stop-shop for the modern yet economical fashionista. 
                  It aims to promptly offer stylish quality products at appealing prices to every user in the world.

                  </p>
                </div>
                
            </div>:
            path==='/the-company/returns'?

            <div id='return'>
                <h1>Returns are easy!</h1>
                <p>You can return items purchased in their original, unworn, unused, unopened condition for a full refund of their merchandise value. We accept returns
                 within 30 days of the original ship date.</p>
                 <ul>
                     <strong>
                         Please note the following items are final sale and cannot be returned or exchanged:

                    </strong>
                    <li>underwear, intimate apparel, lingerie, bras, panties, shapewear</li>
                    <li>bathing suits, swimsuits, bikini tops, bikini bottoms, bikini sets</li>
                    <li>earrings</li>
                    <li>face masks</li>
                    <li>gift cards and all items marked Final Sale.</li>
                 </ul>
                 <p>Original shipping and handling fees are not refundable.</p>
                 <p>However, in the unlikely event that we have inadvertently sent you incorrect merchandise or you have received damaged merchandise, please notify us immediately 
                     by email or telephone. We will reimburse you for the cost of returning the package to us; we will not charge you for the shipping costs of replacement merchandise 
                     as long as the item is returned by mail.
                </p>
                <p>Items purchased from a ShopMart Store location cannot be returned to rainbowshops.com.</p>
                <p>Refunds for online purchases returned in store will be issued in the original form of payment, except for online purchases made using PayPal. 
                    <strong>At this time, all store returns of online purchases using PayPal are valid for merchandise credit only.</strong>
                </p>
                <p>Online purchases can be returned either to ShopMart.com or to any of our ShopMArt Store locations. To find the store location nearest you, please visit our store locator page.</p>
                <h3>Returns by Mail</h3>
                <p>
                You will find a Return form enclosed with your order. To return an item, complete the form and enclose it with the merchandise you are returning. Once we receive your return please allow 
                5 business days for your return to be processed. We will notify you via email of your refund once we have received and processed the returned item. If the return is approved, a credit will be issued in the original form of payment only. Shipping fees on your original order are not refundable. Please allow a minimum of 1 billing cycle for your refund to appear on your credit card statement.

                For your convenience, we include a return label in your package. If you choose to use our return label a fee of $6.95 will be deducted from your return credit when we process your return. However, in the 
                unlikely event that we have inadvertently sent you incorrect or damaged merchandise, please notify us immediately by email or telephone, and we will reimburse you for the cost of returning the package to us.
                </p>
                <p>Please follow these instructions for using the return label included with your shipment:</p>
                <p><strong>Step 1:</strong> Complete the Returns section of the Packing Slip.</p>
                <p><strong>Step 2:</strong> Place the merchandise and the Packing Slip in the box.</p>
                <p><strong>Step 3:</strong> Package the return and seal securely with tape.</p>
                <p><strong>Step 4:</strong> Affix the Return Label to your package (Note: Make sure to cover or remove the original shipping label)</p>
                <p><strong>Step 5:</strong> Drop your package at any U.S Post Office location, or with your local postal carrier.</p>
                <p>OR</p>
                <p>You may also choose to return your package via an alternate method of your choice. If so, please label your package clearly, and send it via a prepaid, insured, traceable method.</p>
                <p>
                Address the package to:
                <p>ShopMart.com</p>
                <p>2951 Grant Ave</p>
                <p>Philadelphia, PA 19114</p>
                 </p>
                 <p>If you need further assistance with returns or have additional questions please do not hesitate to contact us at 1-8888-5SHOPMART  Monday - Friday from 8:30 am to 8:00 pm ET
                      and Saturday - Sunday from 10:00 am to 6:00 pm ET.</p>
                <h1>Returns to a SHOPMART Store</h1>
                <p>Simply bring the merchandise you wish to return and the packing slip from your order when you visit the store. Please make sure that all original tags are attached to the merchandise. If you do not have all original tags and the packing slip for your order we will be unable to process your return.

                Purchases made using PayPal can only be refunded via merchandise credit when returned to a SHOPMART Store. We cannot process refunds to your PayPal account from our stores.

                All other refunds at stores will be made to the original form of payment.

                </p>
            </div>:
             path==='/the-company/faq'?
            <div id='faq'>
                <p>
                <h3>What method of payments do you accept?</h3>
                    We accept PayPal, Visa, MasterCard, American Express, Discover, and Shopmart Gift Cards.
                </p>
                <p>
                <h3>Do you offer gift receipts?</h3>
                We do not offer gift receipts.
                </p>
                <p>
                <h3>How is sales tax calculated?</h3>
                We charge sales and use tax according to Federal and State guidelines. Tax is calculated based on the shipping address and the appropriate rules for that tax jurisdiction.

                Note that the taxes presented at time of order submission are only an estimate. Final calculation of applicable taxes will be performed when the order ships, and your credit card is charged.

                </p>
                <p>
                <h3>How do I contact customer service?</h3>
                You may reach our Customer Care Center at 1-8888-5SHOPMART Monday - Friday 8:30 am to 8:00 pm ET and Saturday - Sunday 10:00 am - 6:00 pm ET. You may also contact Customer Service via email at 
                customerservice@shopmart.com.
                </p>
                <p>
                <h3>Do you ship to APO/FPO addresses?</h3>
                We offer standard shipping to APO/FPO addresses. Unfortunately, at this time we do not offer express shipping to APO/FPO. APO/FPO orders can only ship via Standard Shipping.
                </p>
                <p>
                <h3>Do you ship internationally?</h3>
                No, we currently do not ship internationally.
                </p>
                <p>
                <h3>What is your return policy?</h3>
                Any new, unused item purchased on Rainbowshops.com may be returned for a full refund within 30 days of delivery.
                </p>
                <p>
                    <h3>How do I cancel or change my order?</h3>
                Because your order is processed as quickly as possible, there is a 15 minute window for order cancellation. Please call Customer Service at 1-8888-5SHOPMART immediately if you have placed an order in error.
                </p>
                <p>
                <h3>How do I exchange an item?</h3>
                Unfortunately, we are unable to perform online exchanges at this time. If you need to exchange any or all of your purchased items, please first check availability on our site. If the preferred item is available, please place a 
                new order and follow the return instructions above to send back your original order.
                </p>
            </div>
            :''
            
    }
            </>
        )
    }
}
export default Company