import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  LayDanhSachKhoaHoc,
  changePageAction,
  LayDanhMucKhoaHoc,
  LayDanhSachKhoaHocBT
} from "../../redux/actions/QuanLyKhoaHocAction";
import Slider from "react-slick";
import PaginationComponent from "../../Layout/Pagination/Pagination";
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography, makeStyles, FormControl, FormLabel, FormControlLabel, Radio, RadioGroup, FormHelperText } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));


const DanhSachKhoaHoc = (...props) => {

  // material uI
  const classes = useStyles();
  const [value, setValue] = React.useState('female');

  const handleChange = event => {
    setValue(event.target.value);
  };


  // --------------------------
  const dispatch = useDispatch();

  const onChangePage = page => dispatch(changePageAction(page));
  const {
    danhSachKhoaHocPhanTrang,
    danhSachKhoaHoc,
    currentPage,
    totalCount,
    danhMucKhoaHoc
  } = useSelector(state => state.quanLyKhoaHoc);
  
  useEffect(() => {
    dispatch(LayDanhSachKhoaHoc(currentPage, 5));
    dispatch(LayDanhMucKhoaHoc());
    dispatch(LayDanhSachKhoaHocBT());
  }, [currentPage]);


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: true,
    centerPadding: 30,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

 

  return (
    <div className='container' >
      <div className="text-left my-5">
        <h2>All Courses</h2>
        <h3>Courses to get you started</h3>
      </div>

      <div>
        <div>
          <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              {danhMucKhoaHoc.map(item => (
                <a
                  className="nav-item nav-link"
                  id="nav-profile-tab"
                  data-toggle="tab"
                  href="#nav-profile"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                 
                >
                  {item.tenDanhMuc}
                </a>
              ))}
            </div>
          </nav>
          <div className="tab-content" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <div>
                <Slider {...settings}>
                  {danhSachKhoaHoc.map(item => (
                    <div
                      type="button"
                      onClick={() =>
                        props[0].history.push(`/chi-tiet/${item.maKhoaHoc}`)
                      }
                    >
                      <div className="card text-left">
                        <img
                          className="card-img-top"
                          src={item.hinhAnh}
                          alt
                          width="100%"
                          height="150px"
                        />
                        <div className="card-body">
                          <h5 className="card-title text-truncate">
                            {item.tenKhoaHoc}
                          </h5>
                          <p className="card-text text-truncate">{item.moTa}</p>
                          <p>
                            {" "}
                            <span>4.5</span>
                            <i class="fa fa-star ml-2" style={{color:"#FFB400"}} aria-hidden="true"></i>
                            <i class="fa fa-star" style={{color:"#FFB400"}} aria-hidden="true"></i>
                            <i class="fa fa-star" style={{color:"#FFB400"}} aria-hidden="true"></i>
                            <i class="fa fa-star" style={{color:"#FFB400"}} aria-hidden="true"></i>
                            <i class="fa fa-star-half" style={{color:"#FFB400"}} aria-hidden="true"></i>
                          </p>
                          <p>$189.99</p>
                          <p>Best seller</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              <div>
                <Slider {...settings}>
                  {danhSachKhoaHoc.map(item => (
                    <div
                      type="button"
                      onClick={() =>
                        props[0].history.push(`/chi-tiet/${item.maKhoaHoc}`)
                      }
                    >
                      <div className="card text-left">
                        <img
                          className="card-img-top"
                          src={item.hinhAnh}
                          alt
                          width="100%"
                          height="150px"
                        />
                        <div className="card-body">
                          <h5 className="card-title text-truncate">
                            {item.tenKhoaHoc}
                          </h5>
                          <p className="card-text text-truncate">{item.moTa}</p>
                          <p>
                            {" "}
                            <span>4.5</span>
                            <i class="fa fa-star ml-2" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star-half" aria-hidden="true"></i>
                          </p>
                          <p>$189.99</p>
                          <p>Best seller</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* danh sách tất cả khóa học */}
      <div className='my-4'>
              <h3>All Course for you!</h3>
      </div>
      <div>
        <div className="row mt-5">
          
          {/* filter bên trái */}
          <div className="col-md-3">
        
          <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}><h5>Ratings</h5></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
         {/* danh giá -----------------------------------------------*/}
         <FormControl component="fieldset" className={classes.formControl}>
        
        <RadioGroup aria-label="rating" name="rating" value={value} onChange={handleChange}>
          <FormControlLabel value="4.5 " control={<Radio />} label="4.5 stars & up" /> 
          <FormControlLabel value="4" control={<Radio />} label="4.5 stars & up" />
          <FormControlLabel value="43" control={<Radio />} label="4.5 stars & up" />
         
        </RadioGroup>
      </FormControl>
        
      

         {/* đấnh giá -----------------------------------------------------------------*/}
        </ExpansionPanelDetails>
      </ExpansionPanel>

      
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}><h5>Video Duration</h5></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
      

      <FormControl component="fieldset" className={classes.formControl}>
        
        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
          <FormControlLabel value="1 " control={<Radio />} label="0 - 2 hours" /> 
          <FormControlLabel value="2" control={<Radio />} label="3 - 6 hours" />
          <FormControlLabel value="3" control={<Radio />} label="0 - 2 hours" />
          <FormControlLabel value="4" control={<Radio />} label="7 - 16 hours" />
          <FormControlLabel value="5" control={<Radio />} label="17+ hours" />
         
        </RadioGroup>
      </FormControl>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}><h5>Subcategory</h5></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <FormControl component="fieldset" className={classes.formControl}>
        
        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
          <FormControlLabel value="1 " control={<Radio />} label="Python (655)" /> 
          <FormControlLabel value="2" control={<Radio />} label="Javascript (200)" />
          <FormControlLabel value="3" control={<Radio />} label="Unity (481)" />
          <FormControlLabel value="4" control={<Radio />} label="Java (1000)" />
          
         
        </RadioGroup>
      </FormControl>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}><h5>Level</h5></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}><h5>Language</h5></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}><h5>Price</h5></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}><h5>Feature</h5></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>


      <ExpansionPanel >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}><h5>Close captions</h5></Typography>
        </ExpansionPanelSummary>
      </ExpansionPanel>


          </div>
          {/* list bên phải */}
          <div className="col-md-9">
            {danhSachKhoaHocPhanTrang.map(item => (
              <div
                className="row"
                type="button"
                onClick={() =>
                  props[0].history.push(`/chi-tiet/${item.maKhoaHoc}`)
                }
              >
                <div className="col-md-4 mb-3">
                  <img src={item.hinhAnh} width="100%" />
                </div>
                <div className="col-md-8 text-left">
                  <p>
                    <strong>{item.tenKhoaHoc}</strong>
                  </p>
                  <p>{item.moTa}</p>
                  <p>by cybersoft team</p>
                  <p>
                    {" "}
                    4.7
                    <i class="fa fa-star ml-2" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star-half mr-3" aria-hidden="true"></i>
                    <span>19 total hours</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* pagination */}
        <div className='d-flex justify-content-center mt-5'>
          <div className="row">
            <PaginationComponent
              currentPage={currentPage}
              pageSize={8}
              totalCount={totalCount}
              onChangePage={onChangePage}
            />
          </div>
        </div>



      </div>
    </div>
  );
};

export default DanhSachKhoaHoc;
