import React from 'react';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Privacy.css';

const PrivacyPolicy = (props) => {
    return (
        <div className="main-section">
        <div className={s.privacyPolicy}>
        <div className="container">
            <h2>Privacy Policy</h2>
            <hr />
            <h3>Summary</h3>
            <p>Your information and app data is stored on your phone and might be transferred without you
              initiating it, in order to fulfill app functionality.</p>
            <h3>Android permissions</h3>
            <p>For HyperEther apps to function it requires access to certain features of your phone. Here is an
             explanation of how we use each.</p>
            <h5>Your location</h5>
            <p>App requires your location for GPS tracking.</p>
            <h5>Network communication</h5>
            <p>App uses a connection to the internet.</p>
            <h5>Storage</h5>
            <p>App saves temporary data and backup data to the SD card.</p>
            <h5>Phone Calls</h5>
            <p>App checks to see if you’re on the phone, or if the phone is ringing</p>
            <h5>Hardware</h5>
            <p>App might use the vibrate feature of a phone as a notification.</p>
            <h3>Precise Android permissions</h3>
            <p>For those interested the precise Android permissions used are:</p>
            <ul>
                <li>android.permission.ACCESS_COARSE_LOCATION</li>
                <li>android.permission.ACCESS_FINE_LOCATION</li>
                <li>android.permission.ACCESS_NETWORK_STATE</li>
                <li>android.permission.ACCESS_WIFI_STATE</li>
                <li>android.permission.INTERNET</li>
                <li>android.permission.READ_EXTERNAL_STORAGE</li>
                <li>android.permission.READ_PHONE_STATE</li>
                <li>android.permission.VIBRATE</li>
                <li>android.permission.WAKE_LOCK</li>
                <li> android.permission.WRITE_EXTERNAL_STORAGE</li>
            </ul>
            <h3>Disclosures of Personal Information</h3>
            <p>We are not in the business of selling or renting your information to telemarketers and do not
share your personally identifiable information with others, except as follows: We freely share
your information within HyperEther. We also share your information with agents and service
providers who use the data only on our behalf and for our purposes under confidentiality
agreements. We may share your information as required by law or in the interest of protecting or
exercising our or others’ legal rights, e.g., without limitation, in connection with requests from
law enforcement officials and in connection with court proceedings. We may share or transfer
your information in connection with a prospective or actual sale, merger, transfer or other
reorganization of all or parts of our business. Also, we reserve the right to fully use and disclose
any information collected via the site that is not in personally identifiable form.</p>
        </div>
        </div>
        </div>
    )

}

export default withStyles(s)(PrivacyPolicy);