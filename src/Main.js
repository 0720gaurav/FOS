import React, { Component } from 'react';
import CartTotals from './component/Cart/CartTotals';
// import AcademicQualification from './AcademicQualification';
// import Allinfo from './Allinfo';


export class Main extends Component {
    state = {
        step: 1,

        // step 1
        firstName: '',
        lastName: '',
        email: '',

        // step 2
       
    }

    nextStep = () => {
        const { step } = this.state;

        this.setState({
            step: step + 1
        });
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    showStep = () => {
        const { step,  } = this.state;

        if(step === 1)
            return (<PersonalInfo 
                nextStep = {this.nextStep} 
                handleChange = {this.handleChange} 
                firstName={firstName} 
                MiddleName={MiddleName}
                LastName={LastName}
                Gender={Gender}
                position={position}
                email={email}
                Nationality={Nationality}
                DateOfBirth={DateOfBirth}
                MaritalStatus={MaritalStatus}
                name={name}
                CountryCode={CountryCode}
                AreaCode={AreaCode}
                PhoneNumber={PhoneNumber}
                MobileNumber={MobileNumber}
                Address1={Address1}
                Address2={Address2}
                City={City}
                State={State}
                Pin={Pin}
            />);
        if(step === 2)
            return (<AcademicQualification
                nextStep = {this.nextStep} 
                prevStep = {this.prevStep}
                handleChange = {this.handleChange} 

                board1={board1}
                subject1={subject1}
                Result1={Result1}
                Division1={Division1}
                year1={year1}
                School1={School1}

                board2={board2}
                subject2={subject2}
                Result2={Result2}
                Division2={Division2}
                year2={year2}
                School2={School2}

                NameofDegree={NameofDegree}
                subjectB={subjectB}
                parcentagB={parcentagB}
                yearB={yearB}
                U_I={U_I}

                
                NameofDegreeM={NameofDegreeM}
                subjectM={subjectM}
                parcentagM={parcentagM}
                yearM={yearM}
                U_IM={U_IM}

                specialityOfSubject={specialityOfSubject}
                CollegeExp={CollegeExp}
            
                Resume={Resume}
                


                

               
            />);
        if(step === 3)
            return (<Allinfo 
                firstName={firstName}
                MiddleName={MiddleName} 
                LastName={LastName}
                Gender={Gender}
                position={position}
                email={email}
                Nationality={Nationality}
                DateOfBirth={DateOfBirth}
                MaritalStatus={MaritalStatus}
                name={name}
                CountryCode={CountryCode}
                AreaCode={AreaCode}
                PhoneNumber={PhoneNumber}
                MobileNumber={MobileNumber}
                Address1={Address1}
                Address2={Address2}
                City={City}
                State={State}
                Pin={Pin}

                board1={board1}
                subject1={subject1}
                Result1={Result1}
                Division1={Division1}
                year1={year1}
                School1={School1}

                board2={board2}
                subject2={subject2}
                Result2={Result2}
                Division2={Division2}
                year2={year2}
                School2={School2}

                NameofDegree={NameofDegree}
                subjectB={subjectB}
                parcentagB={parcentagB}
                yearB={yearB}
                U_I={U_I}

                NameofDegreeM={NameofDegreeM}
                subjectM={subjectM}
                parcentagM={parcentagM}
                yearM={yearM}
                U_IM={U_IM}
                specialityOfSubject={specialityOfSubject}
                CollegeExp={CollegeExp}
                Resume={Resume}
                

               
                prevStep = {this.prevStep}
            />);
    }

    render(){
        const { step } = this.state;

        return(
            <>
                {this.showStep()}
                <h4>Step {step} of 3.</h4>
            </>
        );
    }
}

export default Main;