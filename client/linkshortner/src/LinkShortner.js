import React from 'react';

export class LinkShortner extends React.Component{

    constructor(props){
        super(props);
        this.state={
            longlink:'',
            shortlink:'',
            code:''
        }
        this.getLink = this.getLink.bind(this)
    }

    getLink(){

        let linksent ={
            link:this.state.longlink,
            base:'http://localhost'
        }

        return fetch("http://localhost:4000/api/link",{
            method:'post',
            headers:{
                'content-type':'application/json',
                'Accept': 'application/json',
            },
            body:JSON.stringify(linksent),
        }).then(response=>response.json())
            .then(obj=>this.setState(
                {shortlink:obj.shortlink, code:obj.linkcode}
                )).then(()=>console.log(this.state))
    }

    render(){
        return(
            <div className="container-fluid">
                <h1>Link Shortner!</h1>
                <br/>
                <form>
                    <div className="form-group">
                        <label>Enter the link</label>
                        <br/>
                        <input type="text" className="form-control" onChange={(e)=>this.setState({longlink:e.target.value})}/>
                    </div>
                    <button type="button" className="btn btn-primary"
                            onClick={()=>this.getLink()}>Submit</button>
                </form>
                <br/>
                {this.state.shortlink!=='' && <p>Shortened Link is: <a href={this.state.shortlink}>{this.state.shortlink}</a></p>}
            </div>
            )

    }
}
