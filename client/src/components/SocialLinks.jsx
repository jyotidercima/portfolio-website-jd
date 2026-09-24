import '../style/SocialLinks.css'


const socialLinks = [
    {
        name: "LinkedIn",
        username: "jyotidercima",
        url: "https://www.linkedin.com/in/jyotidercima/"
    },
    {
        name: "Github",
        username: "jyotidercima",
        url: "https://github.com/jyotidercima"
    },
    {
        name: "Instagram",
        username: "growwithjd_iscreating",
        url: "https://www.instagram.com/growwithjd_iscreating/"
    },
    {
        name: "X",
        username: "JDercima",
        url: "https://x.com/JDercima"
    },
]

function SocialLinks() {

    return (
        <div className="social-links">
            <h3> Lets Connect</h3>
            <p>
                You can also find me on these platforms.
            </p>
            <div className="social-list">
                {socialLinks.map((social) => {
                    return (
                        <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-item"

                        >
                            {/* <span className="social-icons">
                        </span> */}

                            <span>
                                <strong>{social.name}</strong>
                                <span>

                                </span>
                                <strong>@{social.username}</strong>
                            </span>

                            <span className="social-arrow">

                            </span>
                        </a>
                    )
                })}
            </div>
        </div>
    )
}

export default SocialLinks;