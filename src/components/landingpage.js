import React ,{Component }from 'react';
import {Grid,Cell}from  'react-mdl'


class Landing extends Component{
    render(){
        return(
            <div style={{width:'100%',margin:'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                          src="./image1.png"
                           alt="avatar" 
                           className="avatar-image"
                        />
                        <div className="text-ban">
                            <h1>Full stack web devolloper</h1>
                            <hr/>
                            <p>HTML / CSS / javascript / React</p>
                            <div className="social-links">
                                {/*/ lien linkedin */}
                                <a href="http://linkedin.com" ref="noopener norefener" target="-blanck">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />

                                </a>
                                {/* lien github */}
                                <a href="http://github.com" ref="noopener norefener" target="-blanck">
                                    <i className="fa fa-github-square" aria-hidden="true" />

                                </a>
                                {/* lien youtube */}
                                <a href="http://youtube.com" ref="noopener norefener" target="-blanck">
                                    <i className="fa fa-youtube-square" aria-hidden="true" />

                                </a>
                                {/* lien facebook */}
                                <a href="http://facebook.com" ref="noopener norefener" target="-blanck">
                                    <i className="fa fa-facebook-square" aria-hidden="true" />

                                </a>

                            </div>

                        </div>

                    </Cell>

                </Grid>


            </div>
        )
    }
}

export default Landing;