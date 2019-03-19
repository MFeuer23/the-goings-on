import React from 'react';

const About = props => {

  return(
    <div>
      <h2>About</h2>
      <br />
      <p>
        “The Goings On” was made possible by <a href="https://eonet.sci.gsfc.nasa.gov/docs/v2.1"> NASA’s EONET API</a>. They have very comprehensive documentation and a really cool functional web app of their own, that shows natural events based on different parameters. Check it out! It’s called <a href="https://worldview.earthdata.nasa.gov/"> Worldview</a>
      </p>
      <br />
      <p>
        This API from NASA inspired budding developer (and soon-to-be Flatiron School graduate) <a href="https://www.linkedin.com/in/mallory-feuer-39a607113/"> Mallory</a> Feuer (linkedin?) to build out a web application that shows information about the most recent natural events based on the parameters selected.
      </p>
      <br />
      <p>
        “The Goings On” utilizes a React/Redux client side, and a Rails API backend. Here’s a Github Repo and a Blog Post about it if you’re curious to learn more about how it works.
      </p>
    </div>
  )

}

export default About;
