import React, {Component} from "react";
import "./css/App.css";
import info_graphic from "./images/info_graphic_1.svg";
import logo from "./images/logo.png";

class App extends Component{
    constructor(){
        super();
        
        this.state = {
            counter: 1,

            firstname: "",
            lastname: "",
            age: "",
            email: "",
            gender: null,
            t_and_c: false,
            analysis_floating_window: false,

            cough: null,
            fever: null,
            fatigue: null,
            difficulty_in_breathing: null,
            loss_of_taste_or_smell: null,
            diarrhea: null,
            headache: null,
            sore_throat: null,
            muscle_aches: null,
            pink_eye_conjunctivitis: null,

            previous_get_data: ""
        }
    }

    removeArrayElement(array, element){
        return array.filter(
            item => {
                return item !== element
            }
        )
    }

    validate_page_one = () => {
        if(
            this.state.firstname.length > 0 &&
            this.state.lastname.length > 0 &&
            this.state.age.length > 0 &&
            this.state.email.length > 0 &&
            this.state.gender !== null &&
            this.state.t_and_c !== false){
            return true;
        }
        else{
            return false;
        }
    }

    return_patient_symptoms(){
        let state = this.state;

        let result = [];
        let symptomsArray = [];
        let cough = state.cough;
        let fever = state.fever;
        let fatigue = state.fatigue;
        let difficulty_in_breathing = state.difficulty_in_breathing;
        let loss_of_taste_or_smell = state.loss_of_taste_or_smell;
        let diarrhea = state.diarrhea;
        let headache = state.headache;
        let sore_throat = state.sore_throat;
        let muscle_aches = state.muscle_aches;
        let pink_eye_conjunctivitis = state.pink_eye_conjunctivitis;
        let key = 0;

        if(cough === "Yes"){
            result.push(
                <div key = {key} className = "flex-h j-c-c a-i-c py-3" title = "Cough">
                    <span className = "fa fa-check-circle text-success mr-3" style = {{transform: "scale(1.3)"}}></span>
                    <span className = "flex-1 flex-h j-c-c a-i-c">
                        <span className = "flex-1 single-line text-secondary text-capitalize">cough</span>
                    </span>
                </div>
            );
            symptomsArray.push("cough")
            key++;
        }
        if(fever === "Yes"){
            result.push(
                <div key = {key} className = "flex-h j-c-c a-i-c py-3" title = "Fever">
                    <span className = "fa fa-check-circle text-success mr-3" style = {{transform: "scale(1.3)"}}></span>
                    <span className = "flex-1 flex-h j-c-c a-i-c">
                        <span className = "flex-1 single-line text-secondary text-capitalize">fever</span>
                    </span>
                </div>
            );
            symptomsArray.push("fever")
            key++;
        }
        if(fatigue === "Yes"){
            result.push(
                <div key = {key} className = "flex-h j-c-c a-i-c py-3" title = "Fatigue">
                    <span className = "fa fa-check-circle text-success mr-3" style = {{transform: "scale(1.3)"}}></span>
                    <span className = "flex-1 flex-h j-c-c a-i-c">
                        <span className = "flex-1 single-line text-secondary text-capitalize">fatigue</span>
                    </span>
                </div>
            );
            symptomsArray.push("fatigue")
            key++;
        }
        if(difficulty_in_breathing === "Yes"){
            result.push(
                <div key = {key} className = "flex-h j-c-c a-i-c py-3" title = "Difficulty in breathing">
                    <span className = "fa fa-check-circle text-success mr-3" style = {{transform: "scale(1.3)"}}></span>
                    <span className = "flex-1 flex-h j-c-c a-i-c">
                        <span className = "flex-1 single-line text-secondary text-capitalize">difficulty in breathing</span>
                    </span>
                </div>
            );
            symptomsArray.push("difficulty in breathing")
            key++;
        }
        if(loss_of_taste_or_smell === "Yes"){
            result.push(
                <div key = {key} className = "flex-h j-c-c a-i-c py-3" title = "Loss of taste or smell">
                    <span className = "fa fa-check-circle text-success mr-3" style = {{transform: "scale(1.3)"}}></span>
                    <span className = "flex-1 flex-h j-c-c a-i-c">
                        <span className = "flex-1 single-line text-secondary text-capitalize">loss of taste or smell</span>
                    </span>
                </div>
            );
            symptomsArray.push("loss of taste or smell")
            key++;
        }
        if(diarrhea === "Yes"){
            result.push(
                <div key = {key} className = "flex-h j-c-c a-i-c py-3" title = "Diarrhea">
                    <span className = "fa fa-check-circle text-success mr-3" style = {{transform: "scale(1.3)"}}></span>
                    <span className = "flex-1 flex-h j-c-c a-i-c">
                        <span className = "flex-1 single-line text-secondary text-capitalize">diarrhea</span>
                    </span>
                </div>
            );
            symptomsArray.push("diarrhea")
            key++;
        }
        if(headache === "Yes"){
            result.push(
                <div key = {key} className = "flex-h j-c-c a-i-c py-3" title = "Headache">
                    <span className = "fa fa-check-circle text-success mr-3" style = {{transform: "scale(1.3)"}}></span>
                    <span className = "flex-1 flex-h j-c-c a-i-c">
                        <span className = "flex-1 single-line text-secondary text-capitalize">headache</span>
                    </span>
                </div>
            );
            symptomsArray.push("headache")
            key++;
        }
        if(sore_throat === "Yes"){
            result.push(
                <div key = {key} className = "flex-h j-c-c a-i-c py-3" title = "Sore throat">
                    <span className = "fa fa-check-circle text-success mr-3" style = {{transform: "scale(1.3)"}}></span>
                    <span className = "flex-1 flex-h j-c-c a-i-c">
                        <span className = "flex-1 single-line text-secondary text-capitalize">sore throat</span>
                    </span>
                </div>
            );
            symptomsArray.push("sore throat")
            key++;
        }
        if(muscle_aches === "Yes"){
            result.push(
                <div key = {key} className = "flex-h j-c-c a-i-c py-3" title = "Muscle aches">
                    <span className = "fa fa-check-circle text-success mr-3" style = {{transform: "scale(1.3)"}}></span>
                    <span className = "flex-1 flex-h j-c-c a-i-c">
                        <span className = "flex-1 single-line text-secondary text-capitalize">muscle aches</span>
                    </span>
                </div>
            );
            symptomsArray.push("muscle aches")
            key++;
        }
        if(pink_eye_conjunctivitis === "Yes"){
            result.push(
                <div key = {key} className = "flex-h j-c-c a-i-c py-3" title = "Pink eye conjunctivitis">
                    <span className = "fa fa-check-circle text-success mr-3" style = {{transform: "scale(1.3)"}}></span>
                    <span className = "flex-1 flex-h j-c-c a-i-c">
                        <span className = "flex-1 single-line text-secondary text-capitalize">pink eye conjunctivitis</span>
                    </span>
                </div>
            );
            symptomsArray.push("pink eye conjunctivitis")
            key++;
        }

        if(key === 0){
            result.push(
                <div key = {key} className = "flex-h j-c-c a-i-c py-3" title = "No symptoms">
                    <span className = "fa fa-check-circle text-secondary mr-3" style = {{transform: "scale(1.3)"}}></span>
                    <span className = "flex-1 flex-h j-c-c a-i-c">
                        <span className = "flex-1 single-line text-secondary text-capitalize">No symptoms recorded</span>
                    </span>
                </div>
            );
        }

        return {
            markup: result,
            length: key,
            totalLength: 10,
            symptoms: symptomsArray,
            ratio: (key / 10)
        };
    }

    render(){

        let Events = ["load"];

        Events.forEach(
            item => {
                window.addEventListener(
                    item,
                    () => {
                        if(item === "load"){

                        }
                    }
                );
            }
        );

        return (
            <div>
            	<div className="container-fluid full-height">
            		<div className="row row-height">
            			<div className="col-lg-6 content-left">
            				<div className="content-left-wrapper">
            					<a href="index.html" id="logo"><img src={logo} alt="" width="49" height="35" /></a>
            					<div id="social">
            						<ul>
            							<li><span><i className="icon-facebook"></i></span></li>
            							<li><span><i className="icon-twitter"></i></span></li>
            							<li><span><i className="icon-google"></i></span></li>
            							<li><span><i className="icon-linkedin"></i></span></li>
            						</ul>
            					</div>
            					<div>
            						<figure><img src={info_graphic} alt="" className="img-fluid" /></figure>
            						<h2>Satisfaction Survey</h2>
            						<p>Tation argumentum et usu, dicit viderer evertitur te has. Eu dictas concludaturque usu, facete detracto patrioque an per, lucilius pertinacia eu vel. Adhuc invidunt duo ex. Eu tantas dolorum ullamcorper qui.</p>
            						<a href="#start" className="btn_1 rounded mobile_btn">Start Now!</a>
            					</div>
            					<div className="copy">© 2021 ICS406
            					</div>
            				</div>
            			</div>

            			<div className="col-lg-6 content-right" id="start">
            				<div id="wizard_container">
        						<div id="wrapped">
                                    <div className = "col-12 p-0 bg-light">
            							<div data-d = {this.state.counter} style = {{
                                            height: "3px",
                                            width: (this.state.counter / 11) * 100 + "%"
                                        }} className = "bg-warning transit mb-2"></div>
                                    </div>
        							<div id="middle-wizard">
        								<div className={"step" + ((this.state.counter === 1) ? "" : " d-none")}>
        									<h3 className="main_question"><strong>1/11</strong>Please fill with your details</h3>
        									<div className="form-group">
        										<input required type="text" value = {this.state.firstname} onChange = {
                                                    (e) => {
                                                        this.setState({
                                                            firstname: e.target.value
                                                        });
                                                    }
                                                } name="firstname" className="form-control required" placeholder="First Name *" />
        									</div>
        									<div className="form-group">
        										<input required type="text" value = {this.state.lastname} onChange = {
                                                    (e) => {
                                                        this.setState({
                                                            lastname: e.target.value
                                                        });
                                                    }
                                                } name="lastname" className="form-control required" placeholder="Last Name *" />
        									</div>
        									<div className="form-group">
        										<input required type="email" value = {this.state.email} onChange = {
                                                    (e) => {
                                                        this.setState({
                                                            email: e.target.value
                                                        });
                                                    }
                                                } name="email" className="form-control required" placeholder="Your Email *" />
        									</div>
        									<div className="row">
        										<div className="col-3">
        											<div className="form-group">
        												<input type="number" value = {this.state.age} onChange = {
                                                            (e) => {
                                                                this.setState({
                                                                    age: e.target.value
                                                                });
                                                            }
                                                        } name="age" min="1" className="form-control" placeholder="Age *" />
        											</div>
        										</div>
        										<div className="col-9">
        											<div className="form-group radio_input">
        												<label className="container_radio">Male
                                                            <span style = {{
                                                                transform: "scale(1.3)"
                                                            }} className={"fa mx-2 fa-check-circle" + ((this.state.gender === null || this.state.gender === "female") ? "-o" : " text-primary")}></span>
        													<input hidden onChange = {
                                                                (e) => {
                                                                    this.setState({
                                                                        gender: "male"
                                                                    });
                                                                }
                                                            } required type="radio" name="gender" defaultValue="Male" className="required" />
        												</label>
        												<label className="container_radio">Female
                                                            <span style = {{
                                                                transform: "scale(1.3)"
                                                            }} className={"fa mx-2 fa-check-circle" + ((this.state.gender === null || this.state.gender === "male") ? "-o" : " text-primary")}></span>
        													<input hidden onChange = {
                                                                (e) => {
                                                                    this.setState({
                                                                        gender: "female"
                                                                    });
                                                                }
                                                            } required type="radio" name="gender" defaultValue="Female" className="required" />
        												</label>
        											</div>
        										</div>
        									</div>
        									<div className="form-group terms">
        										<label className="">
                                                    <span style = {{
                                                        transform: "scale(1.3)"
                                                    }} className={"fa mx-2 fa-check-square" + ((this.state.t_and_c) ? " text-primary" : "-o")}></span>
                                                    <span>
                                                        Please accept our <span data-toggle="modal" data-target="#terms-txt">Terms and conditions</span>
                                                    </span>
        											<input onChange = {
                                                        (e) => {
                                                            this.setState({
                                                                t_and_c: e.target.checked
                                                            });
                                                        }
                                                    } hidden required type="checkbox" name="terms" defaultValue="Yes" className="required" />
        										</label>
        									</div>
        								</div>
        								<div className={"step" + ((this.state.counter === 2) ? "" : " d-none")}>
        									<h3 className="main_question"><strong>2/11</strong>Do you have cough?</h3>
        									<div className="form-group">
        										<label className="">
                                                    <span style = {{
                                                        transform: "scale(1.3)"
                                                    }} className={"fa mx-2 fa-check-circle" + ((this.state.cough === "Yes") ? " text-primary" : "-o")}></span>
                                                    <span>Yes</span>
        											<input type="radio" name="question_1" hidden defaultValue="Yes" className="required" onChange = {
                                                        (e) => {
                                                            this.setState({
                                                                cough: e.target.value
                                                            });
                                                        }
                                                    } />
        										</label>
        									</div>
        									<div className="form-group">
        										<label className="">
                                                    <span style = {{
                                                        transform: "scale(1.3)"
                                                    }} className={"fa mx-2 fa-check-circle" + ((this.state.cough === "No") ? " text-primary" : "-o")}></span>
                                                    <span>No</span>
        											<input type="radio" name="question_1" hidden defaultValue="No" className="required" onChange = {
                                                        (e) => {
                                                            this.setState({
                                                                cough: e.target.value
                                                            });
                                                        }
                                                    } />
        										</label>
        									</div>
        								</div>
        								<div className={"step" + ((this.state.counter === 3) ? "" : " d-none")}>
        									<h3 className="main_question"><strong>3/11</strong>Do you feel feverish?</h3>
        									<div className="form-group">
        										<label className="">
                                                    <span style = {{
                                                        transform: "scale(1.3)"
                                                    }} className={"fa mx-2 fa-check-circle" + ((this.state.fever === "Yes") ? " text-primary" : "-o")}></span>
                                                    <span>Yes</span>
        											<input type="radio" name="question_1" hidden defaultValue="Yes" className="required" onChange = {
                                                        (e) => {
                                                            this.setState({
                                                                fever: e.target.value
                                                            });
                                                        }
                                                    } />
        										</label>
        									</div>
        									<div className="form-group">
        										<label className="">
                                                    <span style = {{
                                                        transform: "scale(1.3)"
                                                    }} className={"fa mx-2 fa-check-circle" + ((this.state.fever === "No") ? " text-primary" : "-o")}></span>
                                                    <span>No</span>
        											<input type="radio" name="question_1" hidden defaultValue="No" className="required" onChange = {
                                                        (e) => {
                                                            this.setState({
                                                                fever: e.target.value
                                                            });
                                                        }
                                                    } />
        										</label>
        									</div>
        								</div>
        								<div className={"step" + ((this.state.counter === 4) ? "" : " d-none")}>
        									<h3 className="main_question"><strong>4/11</strong>Do you experience fatigue?</h3>
        									<div className="form-group">
        										<label className="">
                                                    <span style = {{
                                                        transform: "scale(1.3)"
                                                    }} className={"fa mx-2 fa-check-circle" + ((this.state.fatigue === "Yes") ? " text-primary" : "-o")}></span>
                                                    <span>Yes</span>
        											<input type="radio" name="question_1" hidden defaultValue="Yes" className="required" onChange = {
                                                        (e) => {
                                                            this.setState({
                                                                fatigue: e.target.value
                                                            });
                                                        }
                                                    } />
        										</label>
        									</div>
        									<div className="form-group">
        										<label className="">
                                                    <span style = {{
                                                        transform: "scale(1.3)"
                                                    }} className={"fa mx-2 fa-check-circle" + ((this.state.fatigue === "No") ? " text-primary" : "-o")}></span>
                                                    <span>No</span>
        											<input type="radio" name="question_1" hidden defaultValue="No" className="required" onChange = {
                                                        (e) => {
                                                            this.setState({
                                                                fatigue: e.target.value
                                                            });
                                                        }
                                                    } />
        										</label>
        									</div>
        								</div>
        								<div className={"step" + ((this.state.counter === 5) ? "" : " d-none")}>
        									<h3 className="main_question"><strong>5/11</strong>Do you experience difficulty in breathing?</h3>
        									<div className="form-group">
        										<label className="">
                                                    <span style = {{
                                                        transform: "scale(1.3)"
                                                    }} className={"fa mx-2 fa-check-circle" + ((this.state.difficulty_in_breathing === "Yes") ? " text-primary" : "-o")}></span>
                                                    <span>Yes</span>
        											<input type="radio" name="question_1" hidden defaultValue="Yes" className="required" onChange = {
                                                        (e) => {
                                                            this.setState({
                                                                difficulty_in_breathing: e.target.value
                                                            });
                                                        }
                                                    } />
        										</label>
        									</div>
        									<div className="form-group">
        										<label className="">
                                                    <span style = {{
                                                        transform: "scale(1.3)"
                                                    }} className={"fa mx-2 fa-check-circle" + ((this.state.difficulty_in_breathing === "No") ? " text-primary" : "-o")}></span>
                                                    <span>No</span>
        											<input type="radio" name="question_1" hidden defaultValue="No" className="required" onChange = {
                                                        (e) => {
                                                            this.setState({
                                                                difficulty_in_breathing: e.target.value
                                                            });
                                                        }
                                                    } />
        										</label>
        									</div>
        								</div>
        								<div className={"step" + ((this.state.counter === 6) ? "" : " d-none")}>
        									<h3 className="main_question"><strong>6/11</strong>Do you experience loss of taste or smell?</h3>
        									<div className="form-group">
        										<label className="">
                                                    <span style = {{
                                                        transform: "scale(1.3)"
                                                    }} className={"fa mx-2 fa-check-circle" + ((this.state.loss_of_taste_or_smell === "Yes") ? " text-primary" : "-o")}></span>
                                                    <span>Yes</span>
        											<input type="radio" name="question_1" hidden defaultValue="Yes" className="required" onChange = {
                                                        (e) => {
                                                            this.setState({
                                                                loss_of_taste_or_smell: e.target.value
                                                            });
                                                        }
                                                    } />
        										</label>
        									</div>
        									<div className="form-group">
        										<label className="">
                                                    <span style = {{
                                                        transform: "scale(1.3)"
                                                    }} className={"fa mx-2 fa-check-circle" + ((this.state.loss_of_taste_or_smell === "No") ? " text-primary" : "-o")}></span>
                                                    <span>No</span>
        											<input type="radio" name="question_1" hidden defaultValue="No" className="required" onChange = {
                                                        (e) => {
                                                            this.setState({
                                                                loss_of_taste_or_smell: e.target.value
                                                            });
                                                        }
                                                    } />
        										</label>
        									</div>
        								</div>
        								<div className={"step" + ((this.state.counter === 7) ? "" : " d-none")}>
        									<h3 className="main_question"><strong>7/11</strong>Do you have diarrhea?</h3>
        									<div className="form-group">
        										<label className="">
                                                    <span style = {{
                                                        transform: "scale(1.3)"
                                                    }} className={"fa mx-2 fa-check-circle" + ((this.state.diarrhea === "Yes") ? " text-primary" : "-o")}></span>
                                                    <span>Yes</span>
        											<input type="radio" name="question_1" hidden defaultValue="Yes" className="required" onChange = {
                                                        (e) => {
                                                            this.setState({
                                                                diarrhea: e.target.value
                                                            });
                                                        }
                                                    } />
        										</label>
        									</div>
        									<div className="form-group">
        										<label className="">
                                                    <span style = {{
                                                        transform: "scale(1.3)"
                                                    }} className={"fa mx-2 fa-check-circle" + ((this.state.diarrhea === "No") ? " text-primary" : "-o")}></span>
                                                    <span>No</span>
        											<input type="radio" name="question_1" hidden defaultValue="No" className="required" onChange = {
                                                        (e) => {
                                                            this.setState({
                                                                diarrhea: e.target.value
                                                            });
                                                        }
                                                    } />
        										</label>
        									</div>
        								</div>
        								<div className={"step" + ((this.state.counter === 8) ? "" : " d-none")}>
        									<h3 className="main_question"><strong>8/11</strong>Do you have headache?</h3>
        									<div className="form-group">
        										<label className="">
                                                    <span style = {{
                                                        transform: "scale(1.3)"
                                                    }} className={"fa mx-2 fa-check-circle" + ((this.state.headache === "Yes") ? " text-primary" : "-o")}></span>
                                                    <span>Yes</span>
        											<input type="radio" name="question_1" hidden defaultValue="Yes" className="required" onChange = {
                                                        (e) => {
                                                            this.setState({
                                                                headache: e.target.value
                                                            });
                                                        }
                                                    } />
        										</label>
        									</div>
        									<div className="form-group">
        										<label className="">
                                                    <span style = {{
                                                        transform: "scale(1.3)"
                                                    }} className={"fa mx-2 fa-check-circle" + ((this.state.headache === "No") ? " text-primary" : "-o")}></span>
                                                    <span>No</span>
        											<input type="radio" name="question_1" hidden defaultValue="No" className="required" onChange = {
                                                        (e) => {
                                                            this.setState({
                                                                headache: e.target.value
                                                            });
                                                        }
                                                    } />
        										</label>
        									</div>
        								</div>
        								<div className={"step" + ((this.state.counter === 9) ? "" : " d-none")}>
        									<h3 className="main_question"><strong>9/11</strong>Do you have sore throat?</h3>
        									<div className="form-group">
        										<label className="">
                                                    <span style = {{
                                                        transform: "scale(1.3)"
                                                    }} className={"fa mx-2 fa-check-circle" + ((this.state.sore_throat === "Yes") ? " text-primary" : "-o")}></span>
                                                    <span>Yes</span>
        											<input type="radio" name="question_1" hidden defaultValue="Yes" className="required" onChange = {
                                                        (e) => {
                                                            this.setState({
                                                                sore_throat: e.target.value
                                                            });
                                                        }
                                                    } />
        										</label>
        									</div>
        									<div className="form-group">
        										<label className="">
                                                    <span style = {{
                                                        transform: "scale(1.3)"
                                                    }} className={"fa mx-2 fa-check-circle" + ((this.state.sore_throat === "No") ? " text-primary" : "-o")}></span>
                                                    <span>No</span>
        											<input type="radio" name="question_1" hidden defaultValue="No" className="required" onChange = {
                                                        (e) => {
                                                            this.setState({
                                                                sore_throat: e.target.value
                                                            });
                                                        }
                                                    } />
        										</label>
        									</div>
        								</div>
        								<div className={"step" + ((this.state.counter === 10) ? "" : " d-none")}>
        									<h3 className="main_question"><strong>10/11</strong>Do you have body or muscle aches?</h3>
        									<div className="form-group">
        										<label className="">
                                                    <span style = {{
                                                        transform: "scale(1.3)"
                                                    }} className={"fa mx-2 fa-check-circle" + ((this.state.muscle_aches === "Yes") ? " text-primary" : "-o")}></span>
                                                    <span>Yes</span>
        											<input type="radio" name="question_1" hidden defaultValue="Yes" className="required" onChange = {
                                                        (e) => {
                                                            this.setState({
                                                                muscle_aches: e.target.value
                                                            });
                                                        }
                                                    } />
        										</label>
        									</div>
        									<div className="form-group">
        										<label className="">
                                                    <span style = {{
                                                        transform: "scale(1.3)"
                                                    }} className={"fa mx-2 fa-check-circle" + ((this.state.muscle_aches === "No") ? " text-primary" : "-o")}></span>
                                                    <span>No</span>
        											<input type="radio" name="question_1" hidden defaultValue="No" className="required" onChange = {
                                                        (e) => {
                                                            this.setState({
                                                                muscle_aches: e.target.value
                                                            });
                                                        }
                                                    } />
        										</label>
        									</div>
        								</div>
        								<div className={"step" + ((this.state.counter === 11) ? "" : " d-none")}>
        									<h3 className="main_question"><strong>11/11</strong>Do you have pink eye (conjunctivitis)?</h3>
        									<div className="form-group">
        										<label className="">
                                                    <span style = {{
                                                        transform: "scale(1.3)"
                                                    }} className={"fa mx-2 fa-check-circle" + ((this.state.pink_eye_conjunctivitis === "Yes") ? " text-primary" : "-o")}></span>
                                                    <span>Yes</span>
        											<input type="radio" name="question_1" hidden defaultValue="Yes" className="required" onChange = {
                                                        (e) => {
                                                            this.setState({
                                                                pink_eye_conjunctivitis: e.target.value
                                                            });
                                                        }
                                                    } />
        										</label>
        									</div>
        									<div className="form-group">
        										<label className="">
                                                    <span style = {{
                                                        transform: "scale(1.3)"
                                                    }} className={"fa mx-2 fa-check-circle" + ((this.state.pink_eye_conjunctivitis === "No") ? " text-primary" : "-o")}></span>
                                                    <span>No</span>
        											<input type="radio" name="question_1" hidden defaultValue="No" className="required" onChange = {
                                                        (e) => {
                                                            this.setState({
                                                                pink_eye_conjunctivitis: e.target.value
                                                            });
                                                        }
                                                    } />
        										</label>
        									</div>
        								</div>
        								{/*<div className={"step" + ((this.state.counter === 3) ? "" : " d-none")}>
        									<h3 className="main_question"><strong>3/5</strong>How did you hear about our company?</h3>
        									<div className="form-group">
        										<label className="">
                                                    <span className={"fa mx-2 fa-check-square" + ((this.state.question_2.includes("Google Search Engine")) ? " text-primary" : "-o")} style = {{
                                                        transform: "scale(1.3)"
                                                    }}></span>
                                                    <span>Google Search Engine</span>
        											<input hidden type="checkbox" name="question_2[]" defaultValue="Google Search Engine" className="required" onChange={
                                                        (e) => {
                                                            if(e.target.checked){
                                                                let arr = this.state.question_2;
                                                                arr.push("Google Search Engine");

                                                                this.setState({
                                                                    question_2: arr
                                                                });
                                                            }
                                                            else{
                                                                let arr = this.state.question_2;
                                                                arr = this.removeArrayElement(arr, "Google Search Engine");

                                                                this.setState({
                                                                    question_2: arr
                                                                });
                                                            }
                                                        }
                                                    } />
        										</label>
        									</div>
        									<div className="form-group">
                                                <label className="">
                                                    <span className={"fa mx-2 fa-check-square" + ((this.state.question_2.includes("A friend of mine")) ? " text-primary" : "-o")} style = {{
                                                        transform: "scale(1.3)"
                                                    }}></span>
                                                    <span>A friend of mine</span>
                                                    <input hidden type="checkbox" name="question_2[]" defaultValue="A friend of mine" className="required" onChange={
                                                        (e) => {
                                                            if(e.target.checked){
                                                                let arr = this.state.question_2;
                                                                arr.push("A friend of mine");

                                                                this.setState({
                                                                    question_2: arr
                                                                });
                                                            }
                                                            else{
                                                                let arr = this.state.question_2;
                                                                arr = this.removeArrayElement(arr, "A friend of mine");

                                                                this.setState({
                                                                    question_2: arr
                                                                });
                                                            }
                                                        }
                                                    } />
                                                </label>
        									</div>
        									<div className="form-group">
                                                <label className="">
                                                    <span className={"fa mx-2 fa-check-square" + ((this.state.question_2.includes("Print Advertise")) ? " text-primary" : "-o")} style = {{
                                                        transform: "scale(1.3)"
                                                    }}></span>
                                                    <span>Print Advertise</span>
                                                    <input hidden type="checkbox" name="question_2[]" defaultValue="Print Advertise" className="required" onChange={
                                                        (e) => {
                                                            if(e.target.checked){
                                                                let arr = this.state.question_2;
                                                                arr.push("Print Advertise");

                                                                this.setState({
                                                                    question_2: arr
                                                                });
                                                            }
                                                            else{
                                                                let arr = this.state.question_2;
                                                                arr = this.removeArrayElement(arr, "Print Advertise");

                                                                this.setState({
                                                                    question_2: arr
                                                                });
                                                            }
                                                        }
                                                    } />
                                                </label>
        									</div>
        									<div className="form-group">
                                                <label className="">
                                                    <span className={"fa mx-2 fa-check-square" + ((this.state.question_2.includes("Newspaper")) ? " text-primary" : "-o")} style = {{
                                                        transform: "scale(1.3)"
                                                    }}></span>
                                                    <span>Newspaper</span>
                                                    <input hidden type="checkbox" name="question_2[]" defaultValue="Newspaper" className="required" onChange={
                                                        (e) => {
                                                            if(e.target.checked){
                                                                let arr = this.state.question_2;
                                                                arr.push("Newspaper");

                                                                this.setState({
                                                                    question_2: arr
                                                                });
                                                            }
                                                            else{
                                                                let arr = this.state.question_2;
                                                                arr = this.removeArrayElement(arr, "Newspaper");

                                                                this.setState({
                                                                    question_2: arr
                                                                });
                                                            }
                                                        }
                                                    } />
                                                </label>
        									</div>
        									<div className="form-group">
                                                <label className="">
                                                    <span className={"fa mx-2 fa-check-square" + ((this.state.question_2.includes("Other")) ? " text-primary" : "-o")} style = {{
                                                        transform: "scale(1.3)"
                                                    }}></span>
                                                    <span>Other</span>
                                                    <input hidden type="checkbox" name="question_2[]" defaultValue="Other" className="required" onChange={
                                                        (e) => {
                                                            if(e.target.checked){
                                                                let arr = this.state.question_2;
                                                                arr.push("Other");

                                                                this.setState({
                                                                    question_2: arr
                                                                });
                                                            }
                                                            else{
                                                                let arr = this.state.question_2;
                                                                arr = this.removeArrayElement(arr, "Other");

                                                                this.setState({
                                                                    question_2: arr
                                                                });
                                                            }
                                                        }
                                                    } />
                                                </label>
        									</div>
        								</div>
        								<div className={"step" + ((this.state.counter === 4) ? "" : " d-none")}>
        									<h3 className="main_question"><strong>4/5</strong>Do you think to suggest our company to a friend or parent?</h3>
        									<div className="form-group">
        										<label data-active = "false" className=""  onClick={
                                                    (e) => {
                                                    }
                                                }>
                                                    <span className={"fa mx-2 fa-check-circle" + ((this.state.question_3 !== "Maybe" && this.state.question_3 !== "Probably" && this.state.question_3 !== "100% Sure") ? " text-primary" : "-o")} style = {{
                                                        transform: "scale(1.3)"
                                                    }}></span>
        											<input hidden type="radio" name="question_3" defaultValue="No" className="required" onChange = {
                                                        (e) => {
                                                            this.setState({
                                                                question_3: "No"
                                                            })
                                                        }
                                                    }/>
                                                    <span>No</span>
        										</label>
        									</div>
        									<div className="form-group">
                                                <label className="">
                                                    <span className={"fa mx-2 fa-check-circle" + ((this.state.question_3 === "Maybe") ? " text-primary" : "-o")} style = {{
                                                        transform: "scale(1.3)"
                                                    }}></span>
                                                    <input hidden type="radio" name="question_3" defaultValue="Maybe" className="required" onChange={
                                                        (e) => {
                                                            this.setState({
                                                                question_3: e.target.value
                                                            });
                                                        }
                                                    } />
                                                    <span>Maybe</span>
                                                </label>
        									</div>
        									<div className="form-group">
                                                <label className="">
                                                    <span className={"fa mx-2 fa-check-circle" + ((this.state.question_3 === "Probably") ? " text-primary" : "-o")} style = {{
                                                        transform: "scale(1.3)"
                                                    }}></span>
                                                    <input hidden type="radio" name="question_3" defaultValue="Probably" className="required" onChange={
                                                        (e) => {
                                                            this.setState({
                                                                question_3: e.target.value
                                                            });
                                                        }
                                                    } />
                                                    <span>Probably</span>
                                                </label>
        									</div>
        									<div className="form-group">
                                                <label className="">
                                                    <span className={"fa mx-2 fa-check-circle" + ((this.state.question_3 === "100% Sure") ? " text-primary" : "-o")} style = {{
                                                        transform: "scale(1.3)"
                                                    }}></span>
                                                    <input hidden type="radio" name="question_3" defaultValue="100% Sure" className="required" onChange={
                                                        (e) => {
                                                            this.setState({
                                                                question_3: e.target.value
                                                            });
                                                        }
                                                    } />
                                                    <span>100% Sure</span>
                                                </label>
        									</div>
        									<div className={"form-group"}>
        										<label>If no, please describe with few words why</label>
        										<textarea name="additional_message" className="form-control resize-0 outline-0" style={{height:"100px"}} placeholder="Type here additional info..." onInput = {
                                                    (e) => {
                                                        this.setState({
                                                            question_3: e.target.value
                                                        });
                                                    }
                                                }></textarea>
        									</div>
        								</div>
        								<div className={"submit step" + ((this.state.counter === 5) ? "" : " d-none")}>
        									<h3 className="main_question"><strong>5/5</strong>Summary</h3>
        									<div className="summary">
        										<ul>
        											<li><strong>1</strong>
        												<h5>How do rate your overall satisfaction about the service provided?</h5>
        												<p id="question_1"></p>
        											</li>
        											<li><strong>2</strong>
        												<h5>How did you hear about our company?</h5>
        												<p id="question_2"></p>
        											</li>
        											<li><strong>3</strong>
        												<h5>Do you think to suggest our company to a friend or parent?</h5>
        												<p id="question_3"></p>
        												<p id="additional_message"></p>
        											</li>
        										</ul>
        									</div>
        								</div>*/}
        							</div>
        							<div id="bottom-wizard">
        								<button type="button" name="backward" className={"forward mx-2" + ((this.state.counter > 1) ? "" : " d-none " + this.state.counter)} onClick = {
                                            (e) => {
                                                let counter = this.state.counter;

                                                if(counter > 1){
                                                    this.setState({
                                                        counter: --counter
                                                    });
                                                }
                                            }
                                        }>Prev</button>
        								<button type="button" name="forward" className={"forward transit mx-2" + ((this.state.counter < 11)
                                        ? ((this.state.counter === 1 && !this.validate_page_one())
                                            ? " disabled" :
                                            ((this.state.counter === 2 && this.state.cough === null)
                                                ? " disabled" :
                                                ((this.state.counter === 3 && this.state.fever === null)
                                                    ? " disabled" :
                                                    ((this.state.counter === 4 && this.state.fatigue === null)
                                                        ? " disabled"
                                                        : ((this.state.counter === 5 && this.state.difficulty_in_breathing === null)
                                                            ? " disabled" :
                                                            ((this.state.counter === 6 && this.state.loss_of_taste_or_smell === null)
                                                                ? " disabled"
                                                                : ((this.state.counter === 7 && this.state.diarrhea === null)
                                                                    ? " disabled" :
                                                                    ((this.state.counter === 8 && this.state.headache === null)
                                                                        ? " disabled"
                                                                        : ((this.state.counter === 9 && this.state.sore_throat === null)
                                                                            ? " disabled" :
                                                                            ((this.state.counter === 10 && this.state.muscle_aches === null)
                                                                                ? " disabled"
                                                                                : ((this.state.counter === 11 && this.state.pink_eye_conjunctivitis === null)
                                                                                    ? " disabled"
                                                                                    : ""
                                                                                )
                                                                            )
                                                                        )
                                                                    )
                                                                )
                                                            )
                                                        )
                                                    )
                                                )
                                            )
                                        )
                                        : " d-none " + this.state.counter)}  onClick = {
                                            (e) => {
                                                let counter = this.state.counter;
                                                let result = false;

                                                if(counter < 11){
                                                    if(counter === 1 && this.validate_page_one()){
                                                        result = true;
                                                    }
                                                    else if(counter === 2 && this.state.cough !== null){
                                                        result = true;
                                                    }
                                                    else if(counter === 3 && this.state.fever !== null){
                                                        result = true;
                                                    }
                                                    else if(counter === 4 && this.state.fatigue !== null){
                                                        result = true;
                                                    }
                                                    else if(counter === 5 && this.state.difficulty_in_breathing !== null){
                                                        result = true;
                                                    }
                                                    else if(counter === 6 && this.state.loss_of_taste_or_smell !== null){
                                                        result = true;
                                                    }
                                                    else if(counter === 7 && this.state.diarrhea !== null){
                                                        result = true;
                                                    }
                                                    else if(counter === 8 && this.state.headache !== null){
                                                        result = true;
                                                    }
                                                    else if(counter === 9 && this.state.sore_throat !== null){
                                                        result = true;
                                                    }
                                                    else if(counter === 10 && this.state.muscle_aches !== null){
                                                        result = true;
                                                    }
                                                    else if(counter === 11 && this.state.pink_eye_conjunctivitis !== null){
                                                        result = true;
                                                    }

                                                    if(result){
                                                        this.setState({
                                                            counter: ++counter
                                                        });
                                                    }
                                                }
                                            }
                                        }>Next</button>
        								<button type="submit" name="process" className={"forward mx-2" + ((this.state.pink_eye_conjunctivitis === null) ? " disabled" : "") + ((this.state.counter === 11) ? "" : " d-none " + this.state.counter)} onClick = {
                                            (e) => {
                                                let symptom_analysis = this.return_patient_symptoms();
                                                let get_data =
                                                    "f_name=" + this.state.firstname +
                                                    "&l_name=" + this.state.lastname +
                                                    "&age=" + this.state.age +
                                                    "&email=" + this.state.email +
                                                    "&gender=" + this.state.gender +
                                                    "&symptoms=" + JSON.stringify(symptom_analysis.symptoms) +
                                                    "&infection_probability=" + symptom_analysis.ratio;

                                                if(this.state.previous_get_data !== get_data){
                                                    this.setState({
                                                        previous_get_data: get_data
                                                    });

                                                    fetch(
                                                        "http://localhost:80/hostables/tomi-project/processes/send_data_to_db.php?" + get_data, {
                                                            method: "GET"
                                                        }
                                                    );

                                                    this.setState({
                                                        analysis_floating_window: true
                                                    });
                                                }
                                            }
                                        }>Submit</button>
        							</div>
        						</div>
            				</div>
            			</div>
            		</div>
            	</div>

            	<div className = {"po-fixed top-0 left-0 vh100 overflow-y-auto vw100 py-5 px-4" + ((this.state.analysis_floating_window) ? "" : " d-none")} style = {{
                    background: "rgba(50, 50, 50, .6)"
                }}>
                    <div className = "col-12 col-sm-10 col-md-9 col-lg-7 shadow bg-white overflow-y-auto mx-auto p-4 mt-5 animated fadeIn" style = {{
                        borderRadius: "25px",
                        minHeight: "350px",
                        maxHeight: "70%",
                        maxWidth: "650px"
                    }}>
                        <div className = "text-c py-4">
                            <span className = "fa-3x fa-stack">
                                <span className = "fa-stack-2x fa fa-circle text-success"></span>
                                <span className = "fa-stack-1x fa fa-heartbeat text-white pulse"></span>
                            </span>
                            <div className = "pt-3 px-3 flex-h j-c-c a-i-c text-c">
                                <span className = "flex-1 single-line text-success bold h5">Analysis Result</span>
                            </div>
                        </div>
                        <div className = "px-3">
                            <div className = "pt-3 flex-h j-c-c a-i-c">
                                <span className = "flex-1 single-line text-success bold h5">Patient's symptoms</span>
                            </div>
                            <div>
                                { this.return_patient_symptoms().markup }
                            </div>
                        </div>
                        <div className = "px-3">
                            <div className = "pt-3 flex-h j-c-c a-i-c">
                                <span className = "flex-1 single-line text-success bold h5">Remark</span>
                            </div>
                            <div>
                                <div className = "py-3">
                                    <p className = "text-secondary">
                                        Based on the above symptoms, the patient seems to have developed {
                                            (this.return_patient_symptoms().ratio === 0)
                                            ? "no"
                                            : (this.return_patient_symptoms().ratio <= .3)
                                                ? "only a few"
                                                : (this.return_patient_symptoms().ratio > .3 && this.return_patient_symptoms().ratio < .7)
                                                    ? "some of"
                                                    : (this.return_patient_symptoms().ratio >= .7)
                                                        ? "most of"
                                                        : "all"
                                        } Covid 19 (Corona Virus) symptom{((this.return_patient_symptoms().ratio !== 0) ? "s" : "")}. There is a {parseInt((this.return_patient_symptoms().ratio) * 100)}% chance that the patient is infected with Covid 19.
                                    </p>
                                    <p className = "text-secondary">
                                        {
                                            ((this.return_patient_symptoms().ratio <= .3) ? "" : "It is advised that the patient goes for a Covid 19 test and practice self isolation to prevent spreading the virus.")
                                        }

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className = "px-3">
                            <button type = "reset" className = "bg-success px-5 flicker py-3 text-white bold border-0 rounded shadow" onClick = {
                                (e) => {
                                    this.setState({
                                        counter: 1,

                                        firstname: "",
                                        lastname: "",
                                        age: "",
                                        email: "",
                                        gender: null,
                                        t_and_c: false,
                                        analysis_floating_window: false,

                                        cough: null,
                                        fever: null,
                                        fatigue: null,
                                        difficulty_in_breathing: null,
                                        loss_of_taste_or_smell: null,
                                        diarrhea: null,
                                        headache: null,
                                        sore_throat: null,
                                        muscle_aches: null,
                                        pink_eye_conjunctivitis: null,
                                    });
                                }
                            }>Got it</button>
                        </div>
                    </div>
            	</div>

            	<div className="modal fade" id="terms-txt" tabIndex="-1" role="dialog" aria-labelledby="termsLabel" aria-hidden="true">
            		<div className="modal-dialog modal-dialog-centered">
            			<div className="modal-content">
            				<div className="modal-header">
            					<h4 className="modal-title" id="termsLabel">Terms and conditions</h4>
            					<button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            				</div>
            				<div className="modal-body">
            					<p>Lorem ipsum dolor sit amet, in porro albucius qui, in <strong>nec quod novum accumsan</strong>, mei ludus tamquam dolores id. No sit debitis meliore postulant, per ex prompta alterum sanctus, pro ne quod dicunt sensibus.</p>
            					<p>Lorem ipsum dolor sit amet, in porro albucius qui, in nec quod novum accumsan, mei ludus tamquam dolores id. No sit debitis meliore postulant, per ex prompta alterum sanctus, pro ne quod dicunt sensibus. Lorem ipsum dolor sit amet, <strong>in porro albucius qui</strong>, in nec quod novum accumsan, mei ludus tamquam dolores id. No sit debitis meliore postulant, per ex prompta alterum sanctus, pro ne quod dicunt sensibus.</p>
            					<p>Lorem ipsum dolor sit amet, in porro albucius qui, in nec quod novum accumsan, mei ludus tamquam dolores id. No sit debitis meliore postulant, per ex prompta alterum sanctus, pro ne quod dicunt sensibus.</p>
            				</div>
            				<div className="modal-footer">
            					<button type="button" className="btn_1" data-dismiss="modal">Close</button>
            				</div>
            			</div>
            		</div>
            	</div>

            	<script src="js/jquery-3.5.1.min.js"></script>
            	<script src="js/index.js"></script>
            </div>
        );
    }
}

export default App;
