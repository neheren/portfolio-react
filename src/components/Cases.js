import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import _ from 'lodash';
import CaseThump from './CaseThump';
import '../style/cases.scss';
import update from 'react-addons-update';
import { Redirect, withRouter } from "react-router-dom";
export class Cases extends Component {
    state = {
        cases:[
            {
                title: "LUX", 
                desc: "Vigtige ting er vigtige når man bruger diverse sager, ",
                tag: "Semester project",
                image: "http://slytter.tk/photos/project-images/lux.jpg",
                video: "",
                hidden: false,
            },
            {
                title: "Mix & Match", 
                desc: "Vigtige ting er vigtige når man bruger diverse sager, ",
                tag: "Semester project",
                image: "http://slytter.tk/photos/project-images/mixand.jpg",
                video: "",
                hidden: false,
            },
            {
                title: "Case 1", 
                desc: "Vigtige ting er vigtige når man bruger diverse sager, ",
                tag: "Semester project",
                image: "http://slytter.tk/photos/project-images/embodied.jpg",
                video: "",
                hidden: false,
            },
            {
                title: "Swirl shader", 
                desc: "Vigtige ting er vigtige når man bruger diverse sager, ",
                tag: "Hobby project",
                image: "http://slytter.tk/photos/project-images/swirl.jpg",
                video: "",
                hidden: false,
            },
            {
                title: "Simply Sketch", 
                desc: "Vigtige ting er vigtige når man bruger diverse sager, ",
                tag: "Semester project",
                image: "http://slytter.tk/photos/project-images/crowd.jpg",
                video: "",
                hidden: false,
            },
            {
                title: "Mix & Match", 
                desc: "Vigtige ting er vigtige når man bruger diverse sager, ",
                tag: "Semester project",
                image: "http://slytter.tk/photos/project-images/mixand.jpg",
                video: "",
                hidden: false,
            },
            {
                title: "Case 1", 
                desc: "Vigtige ting er vigtige når man bruger diverse sager, ",
                tag: "Semester project",
                image: "http://slytter.tk/photos/project-images/embodied.jpg",
                video: "",
                hidden: false,
            },
            {
                title: "Swirl shader", 
                desc: "Vigtige ting er vigtige når man bruger diverse sager, ",
                tag: "Hobby project",
                image: "http://slytter.tk/photos/project-images/swirl.jpg",
                video: "",
                hidden: false,
            },
            {
                title: "", 
                desc: "",
                tag: "See more",
                image: "",
                video: "",
                hidden: false,
            },
        ], 
        cardClicked: false,
        chosenCase: null,
        cardStyle: {},
        fadeRowOut:false,
    }

    hide = () => ({
		opacity: 0,
		pointerEvents:"none",
		display: "none",
	})

    chooseCard = (index, to) => {
        const firstAndLast = _.concat(this.state.cases.slice(0, 5), this.state.cases[this.state.cases.length-1])
        firstAndLast.forEach((_case, i) => {
            setTimeout(() => {
                if(index != i){
                    firstAndLast[i].hidden = true;
                    this.forceUpdate()
                }else{
                    this.setState({fadeRowOut:true});
                    setTimeout(() =>{
                        firstAndLast[i].hidden = true;
                        setTimeout(() =>
                            this.setState({cardClicked:true}),
                            this.setState({chosenCase:index})
                        , 1000)
                        this.forceUpdate()
                    }, 400)
                }
            }, i* 50)
        })
    }


    rowStyle = () => ({
        // opacity: 0,
        boxShadow: 'inset 0 0 12px rgba(0, 0, 0, 0.1)',
        // border:'1px  solid rgb(187, 187, 187)',

        backgroundColor:'white',
		pointerEvents:"none",
    })
    
    containerStyle = () => ({
		pointerEvents:"none",
    })

    render() {
        const lastIndex = this.state.cases.length-1
        const lastCase = this.state.cases[lastIndex]
        return (
            <div>
                <Container className="projects" style={this.state.fadeRowOut ? this.containerStyle() : null}>
                    {
                        (!this.state.cardClicked) ? (
                            <Row style={this.state.cardClicked ? this.rowStyle() : null}>
                            {this.state.cases.slice(0, 5).map((_case, i) => 
                                <Col sm="12" md="4" key={i} >
                                    <CaseThump  _case={_case} hidden={_case.hidden} chooseCard={this.chooseCard} i={i} style={{backgroundSize: '150%'}} ></CaseThump>
                                </Col>
                            )}

                            
                            <Col sm="12" md="4" key={"more"} >
                                <CaseThump _case={lastCase} hidden={lastCase.hidden} chooseCard={this.chooseCard} i={lastIndex}>
                                    <div className="dots center-flex">
                                        <div></div><div></div><div></div>
                                    </div>
                                </CaseThump>
                            </Col>
                            </Row>
                        ) : <Redirect push to={"/case/" + this.state.chosenCase} />
                    }
                </Container>
            </div>
        )
    }
}

export default Cases
