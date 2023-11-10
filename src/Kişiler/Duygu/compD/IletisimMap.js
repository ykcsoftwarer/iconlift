import React from 'react';

export default class ContactMap extends React.Component {
    render(){
        return (
            <>
                <div className="contact-page-google-map">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <iframe
                                    title="Address"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d587.4405506607887!2d32.56478065352693!3d37.934445605820606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d091b3e4c8847b%3A0x7cd612930969039!2zxLBDT05MxLBGVCBhc2Fuc8O2cg!5e0!3m2!1str!2str!4v1699265850047!5m2!1str!2str"
                                    className="contact-page-google-map__one" allowfullscreen>
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}



