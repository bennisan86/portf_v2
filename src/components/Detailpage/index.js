import React, { Component } from 'react';
import { withFirebase } from '../../components/Firebase';
import Footer from '../../components/Footer';


import backarrow from '../../svg/backarrow.svg';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';


class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selProject: this.props.project,
            labels: '',
            links: [],
            imgs: [],
            loadingimgs: true,
            showfooter: false
        };
    }
    componentDidMount(){
        //Timeout for scrolling to top after animatiob
        setTimeout(
            function() {
                window.scrollTo(0, 0);
            },
            300
        );
            //! getting & transforming labels to string
            const labelsObject = this.state.selProject.labels;
            const labels = Object.keys(labelsObject).map((val) => {
                return(labelsObject[val])});
            const labelstring = labels.toString();
            const newlabelstring = labelstring.replace(",", ", ");
            //! getting & transforming links to array
            const linksObject = this.state.selProject.links;
            const links = Object.keys(linksObject).map((val, index) => {
                return{
                    val: linksObject[val],
                    index: index
                    }
                    });
            //! Setting selProject, links & labels
            this.setState({
                selProject: this.state.selProject,
                labels: newlabelstring,
                links: links,
            });

            //! Render imgs 
            this.renderImg(this.state.selProject);
    }

    renderImg(selProject){
        new Promise((resolve, reject) => {
            this.props.firebase.varref(selProject.name+'/').listAll()
            .then((res) => {
                const imgarray = res.items.map((item) => {
                    // return(item.name)
                    return new Promise((resolve, reject) => {
                        this.props.firebase.varref(selProject.name+'/').child(item.name).getDownloadURL()
                        .then((imgurl) => {
                            resolve(imgurl)
                        })
                    })
                }) 
                Promise.all(imgarray).then((allimgs) => {
                    this.setState({
                        imgs: allimgs,
                    });
                    setTimeout(
                        function() {
                            this.setState({loadingimgs: false});
                        }
                        .bind(this),
                        300
                    );
                    setTimeout(
                        function() {
                            console.log("showFooter");
                            this.setState({showfooter: true});
                        }
                        .bind(this),
                        600
                    );
                })
            })
        });
    }


    static getDerivedStateFromProps(props, state) {
        if (props.project !== state.selProject) {
              return {
            selProject: props.project,
          };
        }
        // Return null to indicate no change to state.
        return null;
      }


    render(){
        const project = this.state.selProject;
        const labels = this.state.labels;
        const links = this.state.links;
        const imgs = this.state.imgs;
        const loadingimgs = this.state.loadingimgs;
        const showfooter = this.state.showfooter;

        return (
            <div className="detail_container">
            <div className="detailtop_container">
                <div className="backarrow">
                    <Link to={ROUTES.HOME}>
                    <div className="backarrow">
                        <img src={backarrow} alt='Arrow to left, as back button' />
                    </div>
                    </Link>
                </div>
                <div className="detailtop_txt">
                    <p className="detailtop_title">{project.title}</p>
                    <p className="detailtop_body">{project.descr}</p>
                    <small className="detailtop_time">{project.time}</small>
                    <small className="detailtop_labels">{labels}</small>
                    {links.map(link => {
                        return(<a className="detailtop_link" href={link.val} key={link.index} target="blank">{link.val}</a>)
                    })}
                </div>
                </div>
                {loadingimgs ? <div className="project_container_loading"><p>Loading images...</p></div> :
                <>
                    <div className="detailimgs">
                        {imgs.map((img,key) => {
                            return(<img src={img} key={key} alt='' />)
                        })}
                    </div>
                    {showfooter ? <Footer /> : null}
                </>}
            </div>
        );
    }
}

export default withFirebase(Detail);