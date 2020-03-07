import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy; Built with ❤️ by my wife using <a href="https://html5up.net">HTML5 UP</a> and <a href="https://www.gatsbyjs.org/">Gatsby.js</a> </p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
