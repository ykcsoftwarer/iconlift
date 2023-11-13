import React from 'react';

export default class ContactForm extends React.Component {
    render(){
        return (
            <>
                <div className="contact-page">
                    <div className="container">
                        <div className="row">
                        <div className="sec-title text-center">
                                        <h1>İCONLİFT ASANSÖR OTOMOTİV İTH. İHR. LTD. ŞTİ.</h1>
                                    </div>
                            <div className="col-xl-4 col-lg-4 col-md-5"><br/>
                                <div className="contact-page__content">
                                 

                                    <div className="contact-page__content-single">
                                        <div className="contact-page__content-single-inner">
                                            <div className="icon-box">
                                                <span className="icon-pin"></span>
                                            </div>

                                            <div className="content-box">
                                                <h3>Address</h3>
                                                <p>Fevziçakmak mh. 10762 sk. B-Blok No : 8 B Karatay / Konya</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="contact-page__content-single">
                                        <div className="contact-page__content-single-inner">
                                            <div className="icon-box">
                                                <span className="icon-phone-call-1"></span>
                                            </div>

                                            <div className="content-box">
                                                <h3>Phone</h3>
                                                <p className="number1"><a href="tel:123456789">0332 502 82 82</a></p>
                                                <p className="number2"><a href="tel:123456789">0506 502 82 82</a></p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="contact-page__content-single">
                                        <div className="contact-page__content-single-inner">
                                            <div className="icon-box">
                                                <span className="icon-email"></span>
                                            </div>

                                            <div className="content-box">
                                                <h3>Email </h3>
                                                <p className="email1"><a href="mailto:info@madina.com">info@iconlift.com.tr</a></p>
                                                <p className="email2"><a href="mailto:info@madina.com">muhasebe@iconlift.com.tr</a></p>
                                                <p className="email2"><a href="mailto:info@madina.com">foreingtradesalesmanager@iconlift.com.tr</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-8 col-lg-8 col-md-7">
                                <div className="contact-page__form">
                                    <form action="#" className="comment-one__form contact-form-validated" novalidate="novalidate">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6">
                                                <div className="comment-form__input-box">
                                                    <input type="text" placeholder="Full name" name="name" />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6">
                                                <div className="comment-form__input-box">
                                                    <input type="email" placeholder="Email address" name="email" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6">
                                                <div className="comment-form__input-box">
                                                    <input type="text" placeholder="Phone" name="phone" />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6">
                                                <div className="comment-form__input-box">
                                                    <input type="text" placeholder="Subject" name="subject" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-12 col-lg-12">
                                                <div className="comment-form__input-box text-message-box">
                                                    <textarea name="message" placeholder="Your Message"></textarea>
                                                </div>

                                                <button className="thm-btn comment-form__btn" data-text="Send Message +"
                                                    type="submit" data-loading-text="Please wait...">Send Message +</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}