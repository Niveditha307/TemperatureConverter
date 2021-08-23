import {Component} from "react"

class Temperature extends Component {

    state = {
        searchInput : "",
        celcius : false,
        type : " ",
        foreheihheit : false ,
        TemperatureValue : ""
    }

    

    onTextValue = event => {
        this.setState({searchInput : event.target.value})
    }

    onConvert = () => {
      const{searchInput , celcius} = this.state
      if(celcius){
          const far = (searchInput * 9/5) + 32
          this.setState({TemperatureValue : far,searchInput : "",type : "C"})
      }
      else{
            const cel = (((searchInput-32)*5) / 9)
            this.setState({TemperatureValue : cel ,searchInput : "",type : "F"})
      }
      this.setState({searchInput : ""})
    }

    
    onRadioChange = event => {
        if(event.target.value === "celcius"){
            this.setState({celcius : true})
            // console.log("cel....")
           
        }
        else{
       this.setState({forenheit : true})
            // console.log("for....")
        }
    }

    render(){

        const { TemperatureValue ,type} = this.state
       

        return(
            <div>
                <h1>Temperature Converter</h1>
                
                <input type = "text" onChange = {this.onTextValue}/>
                <div>
                <label>
                <input type = "radio" value = "celcius" name = "temp"
                onChange = {this.onRadioChange}/>celcius</label>

                <label>
                <input type = "radio" value = "forheneit" name = "temp"
                onChange = {this.onRadioChange}/>forheneit</label>

                </div>
                <button type = "button" onClick = {this.onConvert}>Convert</button>
                <p>{TemperatureValue}{type}</p>
               
            </div>
        )
    }
}
export default Temperature