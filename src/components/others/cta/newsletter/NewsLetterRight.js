import React, { Component } from 'react'
import Mailchimp from 'react-mailchimp-form'

export default class NewsLetterRight extends Component {
    render() {
        return (
            <>
                <div className="col-lg-5">
                    <div className="subscriber-form">
                        <div className="contact-form-action">
                            <Mailchimp
                                action='https://<YOUR-USER>.us16.list-manage.com/subscribe/post?u=XXXXXXXXXXXXX&amp;id=XXXXXX'
                                fields={[
                                    {
                                        name: 'EMAIL',
                                        placeholder: 'Enter email address',
                                        type: 'email',
                                        required: true
                                    }
                                ]}
                                messages={
                                    {
                                        sending: "Sending...",
                                        success: "Thank you for subscribing!",
                                        error: "An unexpected internal error has occurred.",
                                        empty: "You must write an e-mail.",
                                        duplicate: "Too many subscribe attempts for this email address",
                                        button: "Subscribe Now"
                                    }
                                }
                            />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
