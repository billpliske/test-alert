import React, { Component } from 'react';
// Need to to hyperlink the react-router way
import './Contact.css';

class Contact extends Component {
    
    render() {

        return ( 
            <div class="form">
                <form id="contactform" method="POST">
                    <input type="text" name="name" placeholder="Your name" />
                    <input type="text" name="_replyto" placeholder="Your email address" />
                    <input type="text" name="_gotcha" style="display:none" />
                    <textarea rows="4" type="text" name="question" placeholder="What does your business need?"></textarea>
                    <input type="hidden" name="_next" value="http://www.billpliske.com/thankyou.html" />
                    <input type="submit" value="Submit" class="mailbtn" />
                </form>
            </div>
        );
    }
}

export default Contact;



