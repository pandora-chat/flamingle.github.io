import React from "react";

const AttrNavSocial = () => (
  <div className="attr-nav">
    <ul className="social-media-dark social-top">
      { <li>
        <a href={process.env.PUBLIC_URL} className="ion-social-discord"><span></span></a>
      </li> }
      <li>
        <a href={"https://twitter.com/FlamingleChat"} className="ion-social-twitter"><span></span></a>
      </li>
      <li>
        <a href={"https://www.linkedin.com/company/flamingle-chat/"} className="ion-social-linkedin"><span></span></a>
      </li>
    </ul>
  </div>
);

export default AttrNavSocial;
