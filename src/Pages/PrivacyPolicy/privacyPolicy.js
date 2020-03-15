import React from 'react';
import { Route, Link, BrowserRouter } from 'react-router-dom';
import '../PrivacyPolicy/privacyPolicy.css';
import blueSquares from '../../Pages/Images/blue_squre.png';
import { Col, Row, Button } from "react-bootstrap";

import styled from 'styled-components';

const AssistantFont = styled.div`
font-family: 'Assistant', sans-serif;
`

const RalewayFont = styled.div`
font-family: 'Raleway', sans-serif;
`

const PrivacyPolicy = (props) => {
    console.log("PrivacyPolicy COMPONENT")
    console.log("props:", props)
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    return (
        <div>
            <div className="privacyImg">
                <img src={blueSquares} style={{ zIndex: "-1", position: "absolute", top: "2000px", right: "50px" }} />
            </div>

            <AssistantFont>
                <Row className="my-3 pl-4" >
                    <Link to="/i-dip"> <p>Home</p> </Link>
                </Row>
                <Row className="my-3" style={{ justifyContent: "center" }}>
                    <h4><strong>DIP Applications, Ltd. </strong></h4>
                </Row>
                <Row className="my-3" style={{ justifyContent: "center", opacity: "0.8" }}>
                    <h5>Privacy Policy</h5>
                </Row>
                <Row className="my-3" style={{ justifyContent: "center", opacity: "0.8" }}>
                    <h5>Updated: December 2019</h5>
                </Row>
            </AssistantFont>

            <RalewayFont >
                <div className="container" style={{ fontSize: "17px" }}>
                    <Row>
                        <p>
                            Welcome to the Privacy Policy of <strong> DIP </strong> Applications, Ltd.
                    (that’s “us”, and we refer to ourselves as “DIP” for short).
                    “DIP” stands for “Digital Identity Protection”, so protecting your most private data – your identity – is literally our middle name! As you would expect from an identity protection app, DIP’s app (“our app”) is designed to exceed your expectations in the protection of your private data, and we aim to go beyond industry standards in privacy protection, including regulatory regimes such as GDPR.
                     You can see for yourself how we go above and beyond the call of duty to protect your private data by reading the terms of this Privacy Policy (we’ll call it “our Policy” for short).
                </p>
                    </Row>
                    <Row>
                        <p>
                            This Policy should give you some insight into how our app accesses, uses, and stores your data.
                            You might have noticed there’s a word missing there.
                            Isn’t a privacy policy supposed to disclose how we “share” your data? Well here’s the thing – we dare to be different.
                            Our app does not share your Personal Data with any other party or remote server.
                            In fact, we ourselves won’t have any access to your Personal Data, other than the limited exceptions that you’ll find below. Our app doesn’t need remote support: it just sits on your device and produces insights that you can use to better understand who else has access to your Personal Data, and what you can do about it.
                            And remember, you are always in the driver’s seat, because whenever you “log off” of the app, all of your Personal Data is instantly deleted from our app, forever.
                            How’s that for peace of mind?
                </p>
                    </Row>
                    <Row>
                        <p>
                            What actually happens when you register for the services our app provides (“our Services”)?
                </p>
                    </Row>
                    <Row>
                        <p>
                            Our app searches online public data looking for your full name and email address. Our app also analyzes data and metadata connected with your email account, without transferring any of that data from your device. By analyzing this information, our app creates “insights” which it reports to you only, and which remain on your device only. These insights include information you may find useful, such as accounts that have been signed into using your email address, digital payments that include your email address, suspicious logins connected to your email address, and more.
                </p>
                    </Row>
                    <Row>
                        <p>
                            Upon registration for our Services, you will be asked to provide us with permission to connect to your incoming email by using certain features (such as the “Accounts”, “Credit” or “Login” feature), and/or to the metadata of your cloud drive (for example Google Drive) by using other features (such as “My files” feature) This enables our app to scan data and metadata connected with your incoming email and cloud drive account – all on your device, and without data transfer. The content of your incoming emails will be analyzed, but we will never read, collect or process the content of your emails or your files. It goes without saying that we will never sell, trade, or you’re your data to third parties. Information regarding the company names of the digital services that hold your data will be available to you under the tab “Accounts”. You can always request from us the ability to review, amend, erase or restrict the processing of your Personal Data by sending an email to alice@i-dip.com. Alternatively, just log out, and all Personal Data collected by us will be permanently deleted from our app. It won’t be anywhere else, because it didn’t transfer off of your device.
                </p>
                    </Row>
                    <Row>
                        <p>
                            Okay, now some legal stuff about our app and our Services. Please read this Policy carefully and make sure you understand and agree with everything that’s written here. If you have any questions or concerns regarding or in connection with our Policy, or your Personal Data, please contact us at: alice@i-dip.com.                </p>
                    </Row>
                    <Row>
                        <p>
                            Our Services are not intended for users under the age of 16. Children under age 16 are not permitted to use our Services or provide any Personal Data without the consent of a parent or guardian.
                    </p>
                    </Row>
                    <Row>
                        <p>
                            In this Policy, when we say “Personal Data”, we mean information which identifies or may identify an individual, including first and last name, email address, profile picture and unique online identifiers. When we say “Non-Personal Data”, we mean non-identifiable, aggregated data, which is not used to identify any individual user.
                    </p>
                    </Row>
                    <Row>
                        <p>
                            We collect Non-Personal Data regarding use of our website and the Services, such as the scope, frequency, latency, pages accessed and viewed, interactions with content and materials displayed through our Services, and other technical information regarding the device used to access the Services. Non-Personal Data is used mainly for click stream analysis in order to maintain and develop our website and Services, in order to measure and understand the level of engagement with the Services, for general business analytics for ensuring the technical functioning of our network, to help prevent fraudulent use of the Services, and for developing new services and features.
                </p>
                    </Row>
                    <Row>
                        <p>
                            Our app collects the following Personal Data, and processes it in accordance with specific purposes and legal bases, as follows:
                </p>
                    </Row>
                    <Row>
                        <p>
                            A. Personal Data provided during registration and creation of user’s account: full name, email address, email token, profile picture. Purposes of processing: to provide the Services to the user; to resolve any disputes, communicate with user regarding customer service and support issues, and respond to questions or comments. Legal basis: performance of a contract to which the data subject is party, or in order to take steps at the request of the data subject prior to entering into a contract. For these purposes, Personal Data of this category “A” will be transferred, in a secure manner, to our server only, but will not be shared or transferred in any other manner.
                </p>
                    </Row>
                    <Row>
                        <p>
                            B. Personal Data in the scope of Google Gmail: gmail.readonly. Purpose of processing: to provide the Services to the user. In order to create insights based incoming emails, such as lists of companies and digital services that may hold your personal data, digital payments, alerts about suspicious logins sent to your email, etc. Legal basis: performance of a contract to which the data subject is party.
                </p>
                    </Row>
                    <Row>
                        <p>
                            C. Personal Data in the scope of Google Drive: drive.metadata.readonly. Purpose of processing: to provide the Services to the user. In order to detect any shared or public file you have on your drive, our app will automatically scan the metadata of the your shared file as provided during registration to search for traces about services you registered for or engaged with. The metadata our app collects includes the file name, permissions list and date. Our app will not collect or process file content. Purpose of processing: to provide the Services to the user. Legal basis: performance of a contract to which the data subject is party.
                </p>
                    </Row>
                    <Row>
                        <p>
                            D. Online identifiers such as cookies. Purpose of processing: authentication only. Our app generates a token which is used to authenticate that each user is allowed to access his or her own account. . Legal basis: performance of a contract to which the data subject is party or in order to take steps at the request of the data subject prior to entering into a contract.
                </p>
                    </Row>
                    <Row>
                        <p>
                            “Special Categories of Personal Data” means any Personal Data constituting or revealing racial or ethnic origin, political opinions, religious or philosophical beliefs, or trade union membership, genetic data, biometric data, data concerning a person's health or data concerning a person’s sex life or sexual orientation. Our app does not purposefully collect Special Categories of Personal Data, and it will not share this data with us or any other person. Your incoming email may contain such data. If you choose to register to our Services and authorize us to scan your email inbox, you should note that our app may have access to such data. However, as previously mentioned, we do not process or collect any of the content and documents of your emails, and this information is never transferred out of your device. Our app will only process this information on your device, for the exclusive purpose of developing the insights which you alone access, which are stored on your device, and which are deleted whenever you log out.
                </p>
                    </Row>
                    <Row>
                        <p>
                            Personal Data will only be shared under the following limited circumstances:
                </p>
                        <ul>
                            <li> As described in category “A” above. </li>
                            <li> With parties if and as necessary to comply with any applicable law or regulatory requirement, for the administration of justice, to protect your vital interests or the vital interests of others, to protect the security or integrity of our databases or the Services, to take precautions against legal liability, to enforce our agreements and policies, or in the event of a corporate sale, merger, reorganization, dissolution or similar event.</li>
                        </ul>
                        <p>Non-Personal Data may be shared without limitation to third parties.</p>
                    </Row>
                    <Row>
                        <p>
                            Data Security: We have implemented high security measures to protect your Personal Data from unauthorized access, use, disclosure, accidental loss and destruction. However, 100% security can never be provided or promised, and we are not responsible for unauthorized acts beyond our reasonable control. In the event of a data incident related to your Personal Data, we will make diligent efforts to provide notification as may be required under applicable law.
                </p>
                    </Row>
                    <Row>
                        <p>
                            Changes and updates: We may update this Policy from time to time. Modifications or amendments to this Policy will be posted on our website, and shall be effective as of the date on which they are posted. We encourage you to periodically review this Policy to stay informed about our practices related to the collection and processing of Personal Data.
                </p>
                    </Row>
                    <Row>
                        <p>
                            If you have any questions or concerns regarding privacy issues, or if you wish to be provided with any other information related to our privacy practices, please contact us at:
                </p>
                    </Row>

                    <div className="my-2">
                        <Row> <div> DIP Applications, Ltd. </div> </Row>
                        <Row> <div> 10 Ben Avigdor, </div> </Row>
                        <Row> <div> Tel Aviv-Yafo, Israel </div> </Row>
                        <Row> <div> alice@i-dip.com </div> </Row>
                        <Row> <div> https://www.i-dip.com </div> </Row>
                    </div>
                </div>

            </RalewayFont>



        </div >
    );
}

export default PrivacyPolicy;