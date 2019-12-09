import React, { Component } from 'react';
// import { withFirebase } from '../Firebase';

// import Footer from '../Footer';

import backarrow from '../../svg/backarrow.svg';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';


class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selProject: {},
            labels: '',
            links: [],
            imgs: []
        };
    }
    componentDidMount(){
        // window.scrollTo(0, 0);
        // if (this.props.location.projectProps){
        //     //! getting & transforming labels to string
        //     const labelsObject = this.props.location.projectProps.labels;
        //     const labels = Object.keys(labelsObject).map((val) => {
        //         return(labelsObject[val])});
        //     const labelstring = labels.toString();
        //     const newlabelstring = labelstring.replace(",", ", ");
        //     //! getting & transforming links to array
        //     const linksObject = this.props.location.projectProps.links;
        //     const links = Object.keys(linksObject).map((val, index) => {
        //         return{
        //             val: linksObject[val],
        //             index: index
        //             }
        //             });
        //     //! Setting selProject, links & labels
        //     this.setState({
        //         selProject: this.props.location.projectProps,
        //         labels: newlabelstring,
        //         links: links,
        //     });

        //     //! probeersel om imgs te renderen
        //     new Promise((resolve, reject) => {
        //         this.props.firebase.varref(this.props.location.projectProps.name+'/').listAll()
        //         .then((res) => {
        //             const imgarray = res.items.map((item) => {
        //                 // return(item.name)
        //                 return new Promise((resolve, reject) => {
        //                     this.props.firebase.varref(this.props.location.projectProps.name+'/').child(item.name).getDownloadURL()
        //                     .then((imgurl) => {
        //                         resolve(imgurl)
        //                     })
        //                 })
        //             }) 
        //             Promise.all(imgarray).then((allimgs) => {
        //                 this.setState({
        //                     imgs: allimgs
        //                 });
        //             })
        //         })
        //     });


        // } else {
        //     console.log("Nope.");
        // }
    }
    render(){
        // const project = this.state.selProject;
        // const labels = this.state.labels;
        // const links = this.state.links;
        // const imgs = this.state.imgs;

        const project = 
        {
            title: 'joooo title',
            descr: 'lorem ipsum discriptum dolor',
            time: '2002',
        };
        const labels = this.state.labels;
        const links = ["link1","link1","link1","link1"];

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

                {/* <div className="detailimgs">
                    {imgs.map((img,key) => {
                        return(<img src={img} key={key} alt='' />)
                    })}
                </div>
                <Footer /> */}
            </div>
        );
    }
}

// export default withFirebase(Detail);

export default Detail;