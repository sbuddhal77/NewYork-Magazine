class Header extends React.Component{
  
  render()
  {
    return(
    <section id = "sec_header">
     <div className="appheader">
        <div className="logo">
        <img src='https://digit.hbs.org/wp-content/uploads/sites/2/2017/02/Zillow-logo.jpg' height = "100" width="500" alt=''>
          </img>
        </div>
        </div>  
      </section>
      )
  }
}

class Main extends React.Component{
  render(){
    
    return(
      <section id= "main-page">
      
  <ul className="nav nav-tabs">
    <li className="active"><a data-toggle="tab" href="#real_estate">REAL ESTATE</a></li>
    <li><a data-toggle="tab" href="#autos">AUTOS</a></li>
    <li><a data-toggle="tab" href="#jobs">JOBS</a></li>
    <li><a data-toggle="tab" href="#all_classifieds">ALL CLASSIFIEDS</a></li>
  </ul>
 </section>
  
  
    )
    
  }
   
}
class Autos extends React.Component{
  render(){
    return(
      <div class = "container">
      <section id = "autos_content">
         <div class = "row">
           <div class = "col-xs-6">
         <p>In as little as 3 minutes, you can get a car insurance quote from SafeAuto with coverages that are right for you - for the right price. We offer Bodily Injury and Property Damage for liability only insurance shoppers, as well as optional coverages such as Comprehensive, Collision, Medical Payments and much more.</p>
             

           </div>
           <image_src>
               <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWK6zCbKr-fhen2t5I3fE5d0YE9nzE9_hjbvoJ8g7JeTvYvV3q8g' height = "350"                   width="300" alt=''>
               </img>
          </image_src> 
           
           <div class = "col-xs-6">
             	<ul>
  
  	<li> <a href ="#">State Farm </a></li>
   	<li> <a href = "#">Progressive </a></li>
   	<li> <a href = "#">Geico </a> </li>
  	<li> <a href = "#">Farmers Insurance </a> </li>
  	
  	          </ul>
           </div>
        </div>
      </section>  
        </div>
    )
  }
}

class Jobs extends React.Component{
  
  render(){
    return(
     <div class = "container">
        <h3> Technology Jobs </h3>
      <section id = "jobs_content">
        
         <p>In as little as 3 minutes, you can get a car insurance quote from SafeAuto with coverages that are right for you - for the right price. We offer Bodily Injury and Property Damage for liability only insurance shoppers, as well as optional coverages such as Comprehensive, Collision, Medical Payments and much more.</p>
      </section>  
        
        <div class="row">
          <div class="col-xs-8">
  
          <p class = "job_title">Director, Engineering. </p>
          <span>New York, NY Technology   Full-Time</span>
          </div>

	        <div class="col-xs-4">
  
          <button type="submit" class="btn btn-primary">APPLY</button>
          </div>
  
        </div>
        
        <div class="row">
  <div class="col-xs-8">
  
  <p class = "job_title">Sr Web Developer. </p>
  <span>New York, NY Technology   Full-Time</span>
  </div>

	<div class="col-xs-4">
  
  <button type="submit" class="btn btn-primary">APPLY</button>
  </div>
    	
 </div>

        
        <div class="row">
  <div class="col-xs-8">
  
  <p class = "job_title">Sr Web Developer. </p>
  <span>New York, NY Technology   Full-Time</span>
  </div>

	<div class="col-xs-4">
  
  <button type="submit" class="btn btn-primary">APPLY</button>
  </div>
  
	   	
 </div>


        </div>
    )
  }
}

class All_Classifieds extends React.Component{
  
  render(){
    
    return(
      <section id ="all_classifieds">
      <h3>All Classifieds.</h3>
        
        <p>London is the capital city of England. It is the most populous city in the  United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>
        <p>Standing on the River Thames, London has been a major settlement for two millennia, its history going back to its founding by the Romans, who named it Londinium.</p>
        </section>
 
    )
  }
}

class RealEstate extends React.Component{
  render(){
    return(
      <div className = "container">
      <div class = "row">  
      <section id ="real_estate">
        <section1 id="real_estate1">
        <description_text>
        <p>London is the capital city of England. It is the most populous city in the  United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>
          <p>London is the capital city of England. It is the most populous city in the  United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>
          <p>London is the capital city of England. It is the most populous city in the  United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>
          <p>London is the capital city of England. It is the most populous city in the  United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>
          </description_text>
          <image_src>
               <img src='https://i.ytimg.com/vi/PtWeqZsuzpE/maxresdefault.jpg' height = "350"                   width="300" alt=''>
               </img>
          </image_src> 
         
            
        </section1>
       
        <section2 id="real_estate2">
         	<h3 id="properties">Find Properties</h3>
         	<ul>
            <li> <a href ="#"><span>Go to Real Estate Section</span> </a></li>
            <li> <a href = "#"><span>Search for properties </span> </a></li>
            <li> <a href = "#"><span> Download Real Estate App </span> </a> </li>
            <li> <a href = "#"><span> Commerical Real Estate </span> </a> </li>
            <li> <a href = "#"><span> Video Show Case: Real Estate </span></a> </li>
            <li> <a href = "#"><span>Post an ad </span></a> </li>
  	
  	      </ul>
       
        </section2>
        
      </section>
     
        </div>
          <div className = "customHr">. 
            </div>
        <div class = "row">
           <div class="col-sm-6">
          
             <div id="lower_left">
               <h3>MEET</h3>
               <h3>MADISON</h3>
               <h3>SQUARE PARK'S</h3>
               <h3>NEWEST NEIGHBOR</h3>
               
             </div>
             
           </div>
    <div id = "lower_right" class="col-sm-6">
       	<ul>
  
  	<li> <a href ="#">No Mads Newest Condos </a></li>
   	<li> <a href = "#">2 BRs starting at $2.05M </a></li>
   	<li> <a href = "#">3 BRs starting at $2.9M </a> </li>
  	
  	</ul>
    </div>
        </div>
        
        <div className = "customHr">. 
            </div>
        <div id = "classified_ad" class = "row">
          
          <a href = "#"> Place a classified Ad >> </a>
        </div>
      </div>
 
    )
  }
}

class Tab_Content extends React.Component{
  render(){
    
    return(
    <div className="tab-content">
      <div id="real_estate" class="tab-pane fade in active">
        <h3 className="heading_3">International Real Estate</h3>
      <RealEstate />
      </div>
    <div id="autos" className="tab-pane fade">
     <Autos />
    </div>
    <div id="jobs" className="tab-pane fade">
      <Jobs />
    </div>
    <div id="all_classifieds" className="tab-pane fade">
      <All_Classifieds />
    </div>
  </div>
    )
    
  }
  
  
}


ReactDOM.render(<Header />, document.getElementById("header"));

ReactDOM.render(<Main />, document.getElementById("main"));

ReactDOM.render(<Tab_Content />, document.getElementById("tabs"));
