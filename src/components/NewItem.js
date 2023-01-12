import React, { Component } from "react";

export class NewItem extends Component {
  
  render() {
    let { title, description, imageUrl, newsUrl,author,date,source} = this.props;
    return (
      <>
      <div className="card">
        <div style={{display:"flex",justifyContent:"flex-end",position:"absolute",right:'0'}}>
      <span className="badge rounded-pill bg-danger">{source}</span>
      </div>
  <img src={imageUrl} className="card-img-top" alt="News img"/>
  <div className="card-body">
    <h5 className="card-title">{title}... 
</h5>
    <p className="card-text">{description}...</p>
    <a href={newsUrl} target="blank" className="btn btn-sm btn-primary">Read more</a>
    <p className="card-text"><small className="text-muted">by {author} on {new Date(date).toGMTString()}</small></p>
  </div>
</div>
      </>
    )
  }
}

export default NewItem;
