import React, { Component } from "react";
import dashboarStyle from "../dashboard/dashBoard.module.css";
import { Bar, Pie, Polar, Line } from "react-chartjs-2"; //import Horizontal Bar module from react-chart-js-2
import FilterNoneIcon from "@material-ui/icons/FilterNone";
import WarningIcon from '@material-ui/icons/Warning';
import DateRangeIcon from '@material-ui/icons/DateRange';
import UpdateIcon from '@material-ui/icons/Update';
import ErrorIcon from '@material-ui/icons/Error';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import StoreIcon from '@material-ui/icons/Store';
import AccessibilityIcon from '@material-ui/icons/Accessibility';   
const mydata = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

const mydata1 = {
  labels: ["Red", "Green", "Yellow"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
    }
  ]
};

const mydata2 = {
  labels: ["Red", "Green", "Yellow"],
  datasets: [
    {
      data: [300, 0, 200],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
    }
  ]
};

export default class dashBoard extends Component {
  render() {
    return (
      <div className="">
          <h3 className="">Dashboard</h3>
       <div className="d-flex mt-4">
           {/* item 1 */}
            <div style={{background:"white"}} className={dashboarStyle.dashBoard_item}>
                
                <div className="row" >
                    <div className={dashboarStyle.icon1_outer}>
                    <span >
                        <FilterNoneIcon className={dashboarStyle.icon1} />
                    </span>
                    </div>
                    <div className="m">
                    <p>Used Space</p>
                    <h5>
                        49/50 <small>GB</small>
                    </h5>
                    </div>
                </div>
                <div className={dashboarStyle.dashBoard_itemLower}>
                        <div>
                            <WarningIcon style={{color:"red", fontSize:"15px"}}/>
                        </div>
                        <a>Get more space</a>
                </div>
            </div>
              {/* item 2 */}
            <div style={{background:"white"}} className={dashboarStyle.dashBoard_item}>
                
                <div className="row">
                    <div className={dashboarStyle.icon2_outer}>
                    <span >
                        <StoreIcon className={dashboarStyle.icon2} />
                    </span>
                    </div>
                    <div className="m">
                    <p>Followers</p>
                    <h5>
                    +245
                    </h5>
                    </div>
                </div>

                <div className={dashboarStyle.dashBoard_itemLower}>
                        <div>
                            <DateRangeIcon style={{color:"#999999", fontSize:"15px"}}/>
                        </div>
                        <a>Last 24 Hours</a>
                </div>
            </div>
              {/* item 3 */}
            <div style={{background:"white"}} className={dashboarStyle.dashBoard_item}>
                
                <div className="row">
                    <div className={dashboarStyle.icon3_outer}>
                    <span >
                        <ErrorIcon className={dashboarStyle.icon3} />
                    </span>
                    </div>
                    <div className="m">
                    <p>Revenue</p>
                    <h5>
                    $34,245
                    </h5>
                    </div>
                </div>

                <div className={dashboarStyle.dashBoard_itemLower}>
                        <div>
                            <LocalOfferIcon style={{color:"#999999", fontSize:"15px"}}/>
                        </div>
                        <a>Tracked from Github</a>
                </div>
            </div>
              {/* item 4 */}
            <div style={{background:"white"}} className={dashboarStyle.dashBoard_item}>
                
                <div className="row">
                    <div className={dashboarStyle.icon4_outer}>
                    <span >
                        <AccessibilityIcon className={dashboarStyle.icon4}  />
                    </span>
                    </div>
                    <div className="m">
                    <p>Fixed Issues</p>
                    <h5>
                    75
                    </h5>
                    </div>
                </div>
                <div className={dashboarStyle.dashBoard_itemLower}>
                        <div>
                            <UpdateIcon style={{color:"#999999", fontSize:"15px"}}/>
                        </div>
                        <a>Just Updated</a>
                </div>
            </div>


       </div>
        <div className="row mt-5">
          <div className="col-8">
            <h6>Horizontal Bar Example (custom size)</h6>
            <div>
              <Line
                data={mydata}
                width={10}
                height={300}
                options={{ maintainAspectRatio: false }}
              />
            </div>
          </div>
          <div className="col-md-4">
            <h6>Horizontal Bar Example (custom size)</h6>
            <div>
              <Pie className="" data={mydata1} />
            </div>
            <div>
              <Polar className="" data={mydata2} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
