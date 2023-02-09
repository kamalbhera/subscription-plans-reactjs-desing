import React from "react";

function Card(props) {
  return (
    <div className="col-lg-4">
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">
            {props.type.title}
          </h5>
          <h6 className="card-price text-center">
            ${props.type.price}
            <span className="period">/month</span>
          </h6>
          <hr />
          <ul className="fa-ul">
            <li className={props.type.userEnabler ? "" : "text-muted"}>
              <span className="fa-li">
                <i
                  className={
                    props.type.userEnabler ? "fas fa-check" : "fas fa-times"
                  }
                ></i>
              </span>
              {props.type.title === "FREE" ? (
                <div>{props.type.user}</div>
              ) : (
                <b>{props.type.user}</b>
              )}
            </li>
            <li className={props.type.storageEnabler ? "" : "text-muted"}>
              <span className="fa-li">
                <i
                  className={
                    props.type.storageEnabler ? "fas fa-check" : "fas fa-times"
                  }
                ></i>
              </span>
              {props.type.storage}
            </li>
            <li
              className={props.type.publicProjectsEnabler ? "" : "text-muted"}
            >
              <span className="fa-li">
                <i
                  className={
                    props.type.publicProjectsEnabler
                      ? "fas fa-check"
                      : "fas fa-times"
                  }
                ></i>
              </span>
              {props.type.publicProjects}
            </li>
            <li className={props.type.accessEnabler ? "" : "text-muted"}>
              <span className="fa-li">
                <i
                  className={
                    props.type.accessEnabler ? "fas fa-check" : "fas fa-times"
                  }
                ></i>
              </span>
              {props.type.access}
            </li>
            <li
              className={props.type.privateProjectsEnabler ? "" : "text-muted"}
            >
              <span className="fa-li">
                <i
                  className={
                    props.type.privateProjectsEnabler
                      ? "fas fa-check"
                      : "fas fa-times"
                  }
                ></i>
              </span>
              {props.type.privateProjects}
            </li>
            <li className={props.type.phoneSupportEnabler ? "" : "text-muted"}>
              <span className="fa-li">
                <i
                  className={
                    props.type.phoneSupportEnabler
                      ? "fas fa-check"
                      : "fas fa-times"
                  }
                ></i>
              </span>
              {props.type.phoneSupport}
            </li>
            <li className={props.type.subdomainEnabler ? "" : "text-muted"}>
              <span className="fa-li">
                <i
                  className={
                    props.type.subdomainEnabler
                      ? "fas fa-check"
                      : "fas fa-times"
                  }
                ></i>
              </span>
              <b>{props.type.subdomainPrefix}</b>
              <>{props.type.subdomain}</>
            </li>
            <li className={props.type.reportsEnabler ? "" : "text-muted"}>
              <span className="fa-li">
                <i
                  className={
                    props.type.reportsEnabler ? "fas fa-check" : "fas fa-times"
                  }
                ></i>
              </span>
              {props.type.reports}
            </li>
          </ul>
          <div className="d-grid">
            <a href="/#" className="btn btn-primary text-uppercase">
              Button
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
